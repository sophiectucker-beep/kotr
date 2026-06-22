"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type {
  ChangeEvent,
  Dispatch,
  PointerEvent as ReactPointerEvent,
  ReactNode,
  SetStateAction,
} from "react";
import {
  Baby,
  Building2,
  CreditCard,
  Download,
  PenLine,
  HeartHandshake,
  LoaderCircle,
  Lock,
  Upload,
  UserRound,
  X,
} from "lucide-react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

import rockyMascot from "@/Rocky.png";
import { IdentityCardFormFiller } from "@/components/identity-card-form-filler";
import { useSiteLanguage } from "@/components/language-provider";
import { PassportFormFiller } from "@/components/passport-form-filler";
import { Button } from "@/components/ui/button";

const SESSION_KEY = "kotr-maternity-grant-draft";

const supportedForms = [
  {
    value: "maternity-grant",
    label: "Maternity Grant Claim",
    labelEs: "Solicitud de ayuda por maternidad",
  },
  {
    value: "gibraltar-passport",
    label: "Gibraltar Passport Application",
    labelEs: "Solicitud de pasaporte de Gibraltar",
  },
  {
    value: "identity-card-application",
    label: "Identity Card Application",
    labelEs: "Solicitud de tarjeta de identidad",
  },
] as const;

type ClaimRecordMode = "self" | "partner" | "";
type YesNoUnknown = "yes" | "no" | "unknown";
type YesNoUnset = "yes" | "no" | "";
type SupportingChecklistItem =
  | { kind: "text"; text: string }
  | { kind: "return" };

interface MaternityGrantDraft {
  babyBornYet: YesNoUnset;
  claimantFullName: string;
  maidenName: string;
  claimantDob: string;
  address: string;
  email: string;
  phone: string;
  nationality: string;
  taxReference: string;
  idCardNumber: string;
  claimRecordMode: ClaimRecordMode;
  claimantEmployer: string;
  partnerFullName: string;
  partnerDob: string;
  partnerTaxReference: string;
  partnerIdCard: string;
  marriageDate: string;
  partnerEmployer: string;
  marriedToPartner: YesNoUnset;
  workedOutsideGibraltar: "yes" | "no";
  country1Name: string;
  country1From: string;
  country1To: string;
  country1PaidIntoScheme: YesNoUnknown;
  country1InsuranceNumber: string;
  country2Name: string;
  country2From: string;
  country2To: string;
  country2PaidIntoScheme: YesNoUnknown;
  country2InsuranceNumber: string;
  bankName: string;
  accountHolder: string;
  sortCode: string;
  accountNumber: string;
  buildingSocietyRef: string;
  otherInformation: string;
  signatureDataUrl: string;
}

const defaultDraft: MaternityGrantDraft = {
  babyBornYet: "",
  claimantFullName: "",
  maidenName: "",
  claimantDob: "",
  address: "",
  email: "",
  phone: "",
  nationality: "",
  taxReference: "",
  idCardNumber: "",
  claimRecordMode: "",
  claimantEmployer: "",
  partnerFullName: "",
  partnerDob: "",
  partnerTaxReference: "",
  partnerIdCard: "",
  marriageDate: "",
  partnerEmployer: "",
  marriedToPartner: "",
  workedOutsideGibraltar: "no",
  country1Name: "",
  country1From: "",
  country1To: "",
  country1PaidIntoScheme: "unknown",
  country1InsuranceNumber: "",
  country2Name: "",
  country2From: "",
  country2To: "",
  country2PaidIntoScheme: "unknown",
  country2InsuranceNumber: "",
  bankName: "",
  accountHolder: "",
  sortCode: "",
  accountNumber: "",
  buildingSocietyRef: "",
  otherInformation: "",
  signatureDataUrl: "",
};

export function FormsFillerContent() {
  const searchParams = useSearchParams();
  const queryForm = searchParams.get("form");

  if (queryForm === "gibraltar-passport") {
    return <PassportFormFiller />;
  }

  if (queryForm === "identity-card-application") {
    return <IdentityCardFormFiller />;
  }

  return <MaternityGrantFormFiller />;
}

function MaternityGrantFormFiller() {
  const { language } = useSiteLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryForm = searchParams.get("form");
  const [selectedForm, setSelectedForm] = useState(
    queryForm === "gibraltar-passport" ? "gibraltar-passport" : "maternity-grant"
  );
  const [draft, setDraft] = useState<MaternityGrantDraft>(defaultDraft);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showValidationErrors, setShowValidationErrors] = useState(false);
  const [showChecklistModal, setShowChecklistModal] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);
  const [showSentNote, setShowSentNote] = useState(false);
  const [showTimingModal, setShowTimingModal] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const [showPartnerEligibilityModal, setShowPartnerEligibilityModal] = useState(false);
  const [showTaxReferenceModal, setShowTaxReferenceModal] = useState(false);
  const fieldRefs = useRef<Record<string, HTMLElement | null>>({});
  const validationErrors = getValidationErrors(draft, language);
  const supportingChecklist = getSupportingChecklist(draft, language);

  useEffect(() => {
    const saved = window.sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      try {
        setDraft({ ...defaultDraft, ...JSON.parse(saved) });
      } catch {
        setDraft(defaultDraft);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(draft));
  }, [draft, isLoaded]);

  useEffect(() => {
    if (showValidationErrors && Object.keys(validationErrors).length === 0) {
      setShowValidationErrors(false);
    }
  }, [showValidationErrors, validationErrors]);

  function registerFieldRef(name: string) {
    return (node: HTMLElement | null) => {
      fieldRefs.current[name] = node;
    };
  }

  function focusField(name: string) {
    const field = fieldRefs.current[name];
    if (!field) {
      return;
    }

    field.scrollIntoView({ behavior: "smooth", block: "center" });
    const focusTarget = field.querySelector("input, textarea, button") as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLButtonElement
      | null;
    focusTarget?.focus();
  }

  const copy =
    language === "es"
      ? {
          eyebrow: "Rocky",
          title: "Vamos a rellenar la ayuda por maternidad",
          intro:
            "Te lo iremos pidiendo en trozos pequeños y con palabras normales. Sin encabezados raros. Sin jerga de oficina.",
          privacyTitle: "Tu información se queda contigo",
          privacyBody:
            "Tus respuestas se guardan solo en este navegador mientras estás aquí. No se suben a ninguna parte a menos que tú descargues el PDF terminado.",
          selectorLabel: "¿Qué formulario necesitas hoy?",
          section1: "Sobre ti",
          section1Help:
            "Lo básico que va en la parte principal del formulario.",
          timingNote:
            "Puedes solicitarlo desde 9 semanas antes de la semana prevista de parto, o dentro de los 6 meses posteriores al nacimiento.",
          babyBornLabel: "¿Tu bebé ya ha nacido?",
          bornYesPrompt: "Presenta este formulario dentro de los 6 meses posteriores al nacimiento.",
          bornNoPrompt: "Puedes solicitarlo cuando falten 9 semanas para tu fecha prevista de parto, no antes.",
          section2: "Si usas la cotización de tu pareja",
          section2Help:
            "Solo rellena esto si vas a reclamar usando el historial de cotizaciones del padre o de tu pareja.",
          marriedLabel: "¿Estáis casados o en unión civil?",
          section3: "Trabajo fuera de Gibraltar",
          section3Help:
            "Esto es para la parte donde preguntan por trabajo en España, Reino Unido u otros países de la UE.",
          section3Extra:
            "Si trabajasteis en más de 2 países de la UE, dilo en la última casilla.",
          section4: "Dónde debe ir el dinero",
          section4Help:
            "Los datos bancarios para que no tengas que volver a escribirlos luego.",
          section5: "Algo más que convenga añadir",
          section5Help:
            "Si hay un detalle raro o algo que explicar, puedes dejarlo aquí.",
          section6: "Tu firma",
          section6Help:
            "Puedes subir una imagen de tu firma o firmar aquí mismo con el dedo o el ratón. (O déjalo en blanco si prefieres imprimirlo y firmarlo a mano.)",
          section6Extra: "",
          downloadButton: "Descargar formulario relleno",
          clearButton: "Borrar este formulario",
          clearConfirmTitle: "¿Seguro que quieres borrar todo lo que has rellenado y empezar de nuevo?",
          clearConfirmYes: "Sí",
          clearConfirmNo: "No",
          uploadSignature: "Subir firma",
          drawSignature: "Firmar aquí",
          clearSignature: "Borrar firma",
          stopTitle: "Para un momento. También vas a necesitar:",
          stopHelper: "Apunta esto y luego pulsa otra vez en descargar el formulario.",
          sentNote:
            "Ya está. Imprime y entrega este formulario con tus documentos en el Department of Social Security (DSS), 79-80 New Harbours Walk, New Harbours, Gibraltar. El mostrador suele abrir de 9am a 1pm. Si prefieres, también puedes enviarlo por email a maternitybenefit@gibraltar.gov.gi.",
          placeholderDate: "DD/MM/AAAA",
        }
      : {
          eyebrow: "Rocky",
          title: "Let’s fill out the maternity grant form",
          intro:
            "We’ll do it in small chunks and in normal language. No confusing bureaucratic headings. No office-speak.",
          privacyTitle: "Your info stays with you",
          privacyBody:
            "Your answers stay in your browser while you’re here - totally safe! Downloading the PDF saves to your own device only.",
          selectorLabel: "Which form do you need today?",
          section1: "About you",
          section1Help:
            "The basic details that go in the main part of the form.",
          timingNote:
            "You can apply from 9 weeks before your due week, or within 6 months after the birth.",
          babyBornLabel: "Has your baby already been born?",
          bornYesPrompt: "Submit this form within 6 months after the birth!",
          bornNoPrompt: "You can apply once your due date is 9 weeks away, no sooner.",
          section2: "If you’re claiming on your partner’s social insurance record",
          section2Help:
            "Only fill this bit if you’re using the father’s or your partner’s social insurance contributions for the claim.",
          marriedLabel: "Are you married or in a civil partnership?",
          section3: "Work outside Gibraltar",
          section3Help:
            "This is for the bit about work in Spain, the UK, or other EU countries.",
          section3Extra:
            "If you or your partner worked in more than 2 EU countries, mention that in the final box.",
          section4: "Where the money should go",
          section4Help:
            "Bank details so you don’t have to type them all over again later.",
          section5: "Anything else worth saying",
          section5Help:
            "If there’s a slightly odd detail or something they should know, you can leave it here.",
          section6: "Your signature",
          section6Help:
            "You can upload a signature image or sign right here with your mouse or finger. (Or, leave this blank if you’d prefer to print and sign by hand!)",
          section6Extra: "",
          downloadButton: "Download filled form",
          clearButton: "Clear this form",
          clearConfirmTitle: "Are you sure you want to delete everything you’ve filled in and start again?",
          clearConfirmYes: "Yes",
          clearConfirmNo: "No",
          uploadSignature: "Upload signature",
          drawSignature: "Sign here",
          clearSignature: "Clear signature",
          stopTitle: "Stop! You will also need:",
          stopHelper: "Make a note of this, then click download filled form again.",
          sentNote:
            "You’re all done! Print and return this form and your supporting documents to the **Department of Social Security (DSS), 79-80 New Harbours Walk, New Harbours, Gibraltar**. Counter hours are 9am to 1pm, typical.\nOr, save yourself the faff and email them to maternitybenefit@gibraltar.gov.gi.",
          placeholderDate: "DD/MM/YYYY",
        };

  async function handleDownload() {
    if (Object.keys(validationErrors).length > 0) {
      setShowValidationErrors(true);
      const firstInvalidField = Object.keys(validationErrors)[0];
      if (firstInvalidField) {
        focusField(firstInvalidField);
      }
      return;
    }

    if (!downloadReady) {
      setShowChecklistModal(true);
      setDownloadReady(true);
      return;
    }

    try {
      setIsDownloading(true);

      const [basePdfBytes, templatePdfBytes] = await Promise.all([
        fetch("/forms/maternity-grant-claim-form.pdf").then((res) => res.arrayBuffer()),
        fetch("/forms/maternity-grant-claim-form-fillable.pdf").then((res) => res.arrayBuffer()),
      ]);
      const pdfDoc = await PDFDocument.load(basePdfBytes);
      const templatePdf = await PDFDocument.load(templatePdfBytes);
      const templateForm = templatePdf.getForm();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const pages = pdfDoc.getPages();
      const fieldMap = getFieldMap(templatePdf, templateForm);
      const white = rgb(1, 1, 1);

      drawFieldText(pages, fieldMap, "Text_1", draft.claimantFullName, font);
      drawFieldText(pages, fieldMap, "Text_2", draft.maidenName, font);
      drawDateTriplet(pages, fieldMap, ["Text_3", "Text_4", "Text_5"], draft.claimantDob, font);

      drawFieldText(pages, fieldMap, "Multi_1", draft.address, font, {
        multiline: true,
        size: 11,
        rowCount: 4,
      });
      drawFieldText(pages, fieldMap, "Text_6", draft.email, font);
      drawFieldText(pages, fieldMap, "Text_7", draft.phone, font);
      drawFieldText(pages, fieldMap, "Text_8", draft.nationality, font);
      drawFieldText(pages, fieldMap, "Text_9", draft.taxReference, font);
      drawFieldText(pages, fieldMap, "Text_10", draft.idCardNumber, font);
      drawCheckboxMark(pages, fieldMap, "Check_1", draft.claimRecordMode === "self", font);
      drawCheckboxMark(pages, fieldMap, "Check_2", draft.claimRecordMode === "partner", font);
      drawFieldText(
        pages,
        fieldMap,
        "Multi_2",
        draft.claimRecordMode === "self" ? draft.claimantEmployer : "",
        font,
        { multiline: true, size: 11, rowCount: 4 }
      );

      drawFieldText(pages, fieldMap, "Multi_3", draft.partnerFullName, font);
      drawDateTriplet(pages, fieldMap, ["Multi_4", "Multi_5", "Multi_6"], draft.partnerDob, font);
      drawFieldText(pages, fieldMap, "Text_11", draft.partnerTaxReference, font);
      drawFieldText(pages, fieldMap, "Text_12", draft.partnerIdCard, font);
      drawDateTriplet(pages, fieldMap, ["Multi_7", "Multi_8", "Multi_9"], draft.marriageDate, font);
      drawFieldText(pages, fieldMap, "Multi_10", draft.partnerEmployer, font, {
        multiline: true,
        size: 11,
        rowCount: 4,
      });

      drawCheckboxMark(pages, fieldMap, "Check_3", draft.workedOutsideGibraltar === "no", font);
      drawCheckboxMark(pages, fieldMap, "Check_4", draft.workedOutsideGibraltar === "yes", font);
      drawFieldText(pages, fieldMap, "Text_13", draft.country1Name, font);
      drawDateTriplet(pages, fieldMap, ["Text_14", "Text_15", "Text_16"], draft.country1From, font);
      drawDateTriplet(pages, fieldMap, ["Text_17", "Text_18", "Text_19"], draft.country1To, font);

      drawCheckboxMark(pages, fieldMap, "Check_5", draft.country1PaidIntoScheme === "unknown", font);
      drawCheckboxMark(pages, fieldMap, "Check_6", draft.country1PaidIntoScheme === "no", font);
      drawCheckboxMark(pages, fieldMap, "Check_7", draft.country1PaidIntoScheme === "yes", font);
      drawFieldText(pages, fieldMap, "Text_20", draft.country1InsuranceNumber, font);
      drawFieldText(pages, fieldMap, "Text_21", draft.country2Name, font);
      drawDateTriplet(pages, fieldMap, ["Text_22", "Text_23", "Text_24"], draft.country2From, font);
      drawDateTriplet(pages, fieldMap, ["Text_25", "Text_26", "Text_27"], draft.country2To, font);
      drawCheckboxMark(pages, fieldMap, "Check_8", draft.country2PaidIntoScheme === "unknown", font);
      drawCheckboxMark(pages, fieldMap, "Check_9", draft.country2PaidIntoScheme === "no", font);
      drawCheckboxMark(pages, fieldMap, "Check_10", draft.country2PaidIntoScheme === "yes", font);
      drawFieldText(pages, fieldMap, "Text_28", draft.country2InsuranceNumber, font);

      drawFieldText(pages, fieldMap, "Multi_11", draft.bankName, font, { multiline: true });
      drawFieldText(pages, fieldMap, "Text_29", draft.accountHolder, font);
      drawDigitFields(
        pages,
        fieldMap,
        ["Text_30", "Text_31", "Text_32", "Text_33", "Text_34", "Text_35"],
        formatSortCode(draft.sortCode).replace(/\D/g, ""),
        font
      );
      drawDigitFields(
        pages,
        fieldMap,
        ["Text_36", "Text_37", "Text_38", "Text_39", "Text_40", "Text_41", "Text_42", "Text_43"],
        draft.accountNumber.replace(/\D/g, ""),
        font
      );
      drawFieldText(pages, fieldMap, "Multi_12", draft.buildingSocietyRef, font, { multiline: true });
      drawFieldText(pages, fieldMap, "Multi_13", draft.otherInformation, font, { multiline: true, size: 9 });
      drawDateTriplet(
        pages,
        fieldMap,
        ["Text_95", "Text_96", "Text_97"],
        new Date().toLocaleDateString("en-GB"),
        font
      );
      drawDeclarationStrikeout(pages[8], draft.babyBornYet);

      if (draft.signatureDataUrl) {
        const signatureImage = draft.signatureDataUrl.startsWith("data:image/jpeg")
          ? await pdfDoc.embedJpg(draft.signatureDataUrl)
          : await pdfDoc.embedPng(draft.signatureDataUrl);

        const signatureArea = {
          x: 152,
          y: 608,
          width: 394,
          height: 54,
        };
        const maxWidth = 210;
        const maxHeight = 36;
        const widthScale = maxWidth / signatureImage.width;
        const heightScale = maxHeight / signatureImage.height;
        const scale = Math.min(widthScale, heightScale);
        const drawWidth = signatureImage.width * scale;
        const drawHeight = signatureImage.height * scale;

        pages[8].drawRectangle({
          x: signatureArea.x,
          y: signatureArea.y,
          width: signatureArea.width,
          height: signatureArea.height,
          color: white,
          borderWidth: 0,
        });

        pages[8].drawImage(signatureImage, {
          x: signatureArea.x + 22,
          y: signatureArea.y + (signatureArea.height - drawHeight) / 2,
          width: drawWidth,
          height: drawHeight,
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blobBytes = new Uint8Array(pdfBytes);
      const blob = new Blob([blobBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "kotr-maternity-grant-draft.pdf";
      link.click();
      URL.revokeObjectURL(url);
      setShowSentNote(true);
      setDownloadReady(false);
    } finally {
      setIsDownloading(false);
    }
  }

  function clearDraft() {
    setDraft(defaultDraft);
    window.sessionStorage.removeItem(SESSION_KEY);
    setShowSentNote(false);
    setDownloadReady(false);
    setShowChecklistModal(false);
  }

  return (
    <>
      <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 pt-4 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10 md:pt-7">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_280px]">
          <div className="max-w-[40rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
              {copy.eyebrow}
            </p>
            <h1 className="mt-4 max-w-[34rem] text-3xl font-bold leading-tight md:text-4xl">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-[34rem] font-sans text-lg leading-8 text-navy/72">
              {copy.intro}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[240px] pt-1 md:pt-3">
            <div className="group relative aspect-square transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={rockyMascot}
                alt="Rocky"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-[1.05]"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-navy/10 bg-[#fffdfa] px-5 py-4">
          <div className="flex items-start gap-3">
            <Lock className="mt-1 size-5 shrink-0 text-salmon" />
            <div className="min-w-0">
              <p className="text-lg font-bold text-navy">{copy.privacyTitle}</p>
              <p className="mt-1 font-sans text-sm leading-6 text-navy/68 md:whitespace-nowrap">
                {copy.privacyBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10">
        <label className="block">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
            {copy.selectorLabel}
          </span>
          <select
            value={selectedForm}
            onChange={(event) => {
              const nextValue = event.target.value;
              setSelectedForm(nextValue);
              router.replace(`/forms/filler?form=${nextValue}`);
            }}
            className="mt-3 w-full rounded-[1rem] border border-navy/10 bg-white px-4 py-3 font-sans text-base text-navy outline-none transition-colors focus:border-salmon"
          >
            {supportedForms.map((form) => (
              <option key={form.value} value={form.value}>
                {language === "es" ? form.labelEs : form.label}
              </option>
            ))}
          </select>
        </label>

        <div className="mt-8 space-y-6">
          <QuestionSection
            icon={UserRound}
            title={copy.section1}
            help={copy.section1Help}
            topContent={
              <CompactChoiceField
                label={copy.babyBornLabel}
                value={draft.babyBornYet}
                onChange={(value) => {
                  updateDraft(setDraft, "babyBornYet", value);
                  setShowTimingModal(true);
                }}
                options={[
                  { value: "no", label: language === "es" ? "No" : "No" },
                  { value: "yes", label: language === "es" ? "Sí" : "Yes" },
                ]}
                error={validationErrors.babyBornYet}
                fieldKey="babyBornYet"
                registerRef={registerFieldRef}
                showValidationErrors={showValidationErrors}
              />
            }
          >
            <Field
              label={language === "es" ? "Nombre completo" : "Full name"}
              value={draft.claimantFullName}
              onChange={(value) => updateDraft(setDraft, "claimantFullName", value)}
              error={validationErrors.claimantFullName}
              fieldKey="claimantFullName"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label={language === "es" ? "Apellido anterior" : "Maiden name"}
              helpInline={
                language === "es"
                  ? "(solo si tu apellido cambió al casarte)"
                  : "(only if your surname changed after marriage)"
              }
              value={draft.maidenName}
              onChange={(value) => updateDraft(setDraft, "maidenName", value)}
            />
            <DateField
              label={language === "es" ? "Fecha de nacimiento" : "Date of birth"}
              value={draft.claimantDob}
              onChange={(value) => updateDraft(setDraft, "claimantDob", value)}
              error={validationErrors.claimantDob}
              fieldKey="claimantDob"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label={language === "es" ? "Dirección" : "Address"}
              value={draft.address}
              onChange={(value) => updateDraft(setDraft, "address", value)}
              multiline
              multilineClassName="min-h-[7.25rem]"
              error={validationErrors.address}
              fieldKey="address"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label="Email"
              value={draft.email}
              onChange={(value) => updateDraft(setDraft, "email", value)}
              type="email"
              inputMode="email"
              placeholder="name@example.com"
              error={validationErrors.email}
              fieldKey="email"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label={language === "es" ? "Teléfono" : "Phone number"}
              value={draft.phone}
              onChange={(value) => updateDraft(setDraft, "phone", sanitizePhone(value))}
              inputMode="tel"
              error={validationErrors.phone}
              fieldKey="phone"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label={language === "es" ? "Nacionalidad" : "Nationality"}
              value={draft.nationality}
              onChange={(value) => updateDraft(setDraft, "nationality", value)}
              error={validationErrors.nationality}
              fieldKey="nationality"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label={language === "es" ? "Referencia fiscal" : "Tax reference number"}
              helpInline={
                language === "es"
                  ? "Suele tener 5 o 6 cifras"
                  : "Usually 5 or 6 digits"
              }
              value={draft.taxReference}
              onChange={(value) => updateDraft(setDraft, "taxReference", value)}
              onBlur={() => {
                if (shouldWarnTaxReference(draft.taxReference)) {
                  setShowTaxReferenceModal(true);
                }
              }}
              placeholder="123456"
              inputMode="numeric"
              error={validationErrors.taxReference}
              fieldKey="taxReference"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label={language === "es" ? "Número de tarjeta de identidad" : "ID card number"}
              value={draft.idCardNumber}
              onChange={(value) => updateDraft(setDraft, "idCardNumber", value)}
              placeholder={
                language === "es"
                  ? "Está en la parte trasera de tu tarjeta"
                  : "It’s on the back of your ID card!"
              }
              error={validationErrors.idCardNumber}
              fieldKey="idCardNumber"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <ChoiceField
              label={
                language === "es"
                  ? "¿Reclamas con tu propia cotización o la de tu pareja?"
                  : "Are you claiming on your own record or your partner’s?"
              }
              value={draft.claimRecordMode}
              onChange={(value) => updateDraft(setDraft, "claimRecordMode", value)}
              options={[
                { value: "self", label: language === "es" ? "La mía" : "My own" },
                { value: "partner", label: language === "es" ? "La de mi pareja" : "My partner’s" },
              ]}
              error={validationErrors.claimRecordMode}
              fieldKey="claimRecordMode"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            {draft.claimRecordMode === "self" ? (
              <Field
                label={language === "es" ? "Nombre y dirección de tu empresa" : "Your employer’s name and address"}
                value={draft.claimantEmployer}
                onChange={(value) => updateDraft(setDraft, "claimantEmployer", value)}
                multiline
                multilineClassName="min-h-[7.25rem]"
                maxLines={4}
                error={validationErrors.claimantEmployer}
                fieldKey="claimantEmployer"
                registerRef={registerFieldRef}
                showValidationErrors={showValidationErrors}
              />
            ) : null}
          </QuestionSection>

          {draft.claimRecordMode === "partner" ? (
            <QuestionSection
              icon={HeartHandshake}
              title={copy.section2}
              help={copy.section2Help}
            >
              <ChoiceField
                label={copy.marriedLabel}
                value={draft.marriedToPartner}
                onChange={(value) => {
                  updateDraft(setDraft, "marriedToPartner", value);
                  if (value === "no" && draft.babyBornYet === "no") {
                    setShowPartnerEligibilityModal(true);
                  }
                }}
                options={[
                  { value: "yes", label: language === "es" ? "Sí" : "Yes" },
                  { value: "no", label: language === "es" ? "No" : "No" },
                ]}
                error={validationErrors.marriedToPartner}
                fieldKey="marriedToPartner"
                registerRef={registerFieldRef}
                showValidationErrors={showValidationErrors}
              />
              <Field
                label={language === "es" ? "Nombre completo de tu pareja" : "Partner’s full name"}
                value={draft.partnerFullName}
                onChange={(value) => updateDraft(setDraft, "partnerFullName", value)}
                error={validationErrors.partnerFullName}
                fieldKey="partnerFullName"
                registerRef={registerFieldRef}
                showValidationErrors={showValidationErrors}
              />
              <DateField
                label={language === "es" ? "Fecha de nacimiento de tu pareja" : "Partner’s date of birth"}
                value={draft.partnerDob}
                onChange={(value) => updateDraft(setDraft, "partnerDob", value)}
                error={validationErrors.partnerDob}
                fieldKey="partnerDob"
                registerRef={registerFieldRef}
                showValidationErrors={showValidationErrors}
              />
              <Field
                label={language === "es" ? "Referencia fiscal de tu pareja" : "Partner’s tax reference number"}
                helpInline={
                  language === "es"
                    ? "Suele tener 5 o 6 cifras"
                    : "Usually 5 or 6 digits"
                }
                value={draft.partnerTaxReference}
                onChange={(value) => updateDraft(setDraft, "partnerTaxReference", value)}
                placeholder="123456"
                inputMode="numeric"
                error={validationErrors.partnerTaxReference}
                fieldKey="partnerTaxReference"
                registerRef={registerFieldRef}
                showValidationErrors={showValidationErrors}
              />
              <Field
                label={language === "es" ? "Número de ID de tu pareja" : "Partner’s ID card number"}
                value={draft.partnerIdCard}
                onChange={(value) => updateDraft(setDraft, "partnerIdCard", value)}
                placeholder={
                  language === "es"
                    ? "Está en la parte trasera de su tarjeta"
                    : "It’s on the back of their ID card!"
                }
                error={validationErrors.partnerIdCard}
                fieldKey="partnerIdCard"
                registerRef={registerFieldRef}
                showValidationErrors={showValidationErrors}
              />
              {draft.marriedToPartner === "yes" ? (
                <DateField
                  label={language === "es" ? "Fecha de matrimonio o unión civil" : "Date of marriage or civil partnership"}
                  value={draft.marriageDate}
                  onChange={(value) => updateDraft(setDraft, "marriageDate", value)}
                  error={validationErrors.marriageDate}
                  fieldKey="marriageDate"
                  registerRef={registerFieldRef}
                  showValidationErrors={showValidationErrors}
                />
              ) : null}
              <Field
                label={language === "es" ? "Empresa de tu pareja" : "Partner’s employer name and address"}
                value={draft.partnerEmployer}
                onChange={(value) => updateDraft(setDraft, "partnerEmployer", value)}
                multiline
                multilineClassName="min-h-[7.25rem]"
                maxLines={4}
                error={validationErrors.partnerEmployer}
                fieldKey="partnerEmployer"
                registerRef={registerFieldRef}
                showValidationErrors={showValidationErrors}
              />
            </QuestionSection>
          ) : null}

          <QuestionSection icon={Building2} title={copy.section3} help={copy.section3Help}>
            <ChoiceField
              label={language === "es" ? "¿Tú o tu pareja habéis trabajado fuera de Gibraltar?" : "Have you or your partner worked outside Gibraltar?"}
              value={draft.workedOutsideGibraltar}
              onChange={(value) => updateDraft(setDraft, "workedOutsideGibraltar", value)}
              options={[
                { value: "no", label: language === "es" ? "No" : "No" },
                { value: "yes", label: language === "es" ? "Sí" : "Yes" },
              ]}
            />
            {draft.workedOutsideGibraltar === "yes" ? (
              <>
                <CountryWorkFields
                  title={language === "es" ? "País 1" : "Country 1"}
                  countryValue={draft.country1Name}
                  onCountryChange={(value) => updateDraft(setDraft, "country1Name", value)}
                  countryError={validationErrors.country1Name}
                  countryFieldKey="country1Name"
                  fromValue={draft.country1From}
                  onFromChange={(value) => updateDraft(setDraft, "country1From", value)}
                  fromError={validationErrors.country1From}
                  fromFieldKey="country1From"
                  toValue={draft.country1To}
                  onToChange={(value) => updateDraft(setDraft, "country1To", value)}
                  toError={validationErrors.country1To}
                  toFieldKey="country1To"
                  paidLabel={
                    draft.claimRecordMode === "self"
                      ? language === "es"
                        ? "¿Pagaste cotizaciones a la seguridad social de ese país?"
                        : "Did you pay into that country's social security scheme?"
                      : language === "es"
                        ? "¿Pagó tu pareja cotizaciones a la seguridad social de ese país?"
                        : "Did your partner pay into that country's social security scheme?"
                  }
                  paidValue={draft.country1PaidIntoScheme}
                  onPaidChange={(value) => updateDraft(setDraft, "country1PaidIntoScheme", value)}
                  insuranceLabel={
                    language === "es"
                      ? "Número de seguridad social de ese país"
                      : "That country's social security number"
                  }
                  insuranceValue={draft.country1InsuranceNumber}
                  onInsuranceChange={(value) => updateDraft(setDraft, "country1InsuranceNumber", value)}
                  insuranceError={validationErrors.country1InsuranceNumber}
                  insuranceFieldKey="country1InsuranceNumber"
                  language={language}
                  registerRef={registerFieldRef}
                  showValidationErrors={showValidationErrors}
                />

                <CountryWorkFields
                  title={language === "es" ? "País 2" : "Country 2"}
                  countryValue={draft.country2Name}
                  onCountryChange={(value) => updateDraft(setDraft, "country2Name", value)}
                  countryError={validationErrors.country2Name}
                  countryFieldKey="country2Name"
                  fromValue={draft.country2From}
                  onFromChange={(value) => updateDraft(setDraft, "country2From", value)}
                  fromError={validationErrors.country2From}
                  fromFieldKey="country2From"
                  toValue={draft.country2To}
                  onToChange={(value) => updateDraft(setDraft, "country2To", value)}
                  toError={validationErrors.country2To}
                  toFieldKey="country2To"
                  paidLabel={
                    draft.claimRecordMode === "self"
                      ? language === "es"
                        ? "¿Pagaste cotizaciones a la seguridad social de ese país?"
                        : "Did you pay into that country's social security scheme?"
                      : language === "es"
                        ? "¿Pagó tu pareja cotizaciones a la seguridad social de ese país?"
                        : "Did your partner pay into that country's social security scheme?"
                  }
                  paidValue={draft.country2PaidIntoScheme}
                  onPaidChange={(value) => updateDraft(setDraft, "country2PaidIntoScheme", value)}
                  insuranceLabel={
                    language === "es"
                      ? "Número de seguridad social del segundo país"
                      : "Second country's social security number"
                  }
                  insuranceValue={draft.country2InsuranceNumber}
                  onInsuranceChange={(value) => updateDraft(setDraft, "country2InsuranceNumber", value)}
                  insuranceError={validationErrors.country2InsuranceNumber}
                  insuranceFieldKey="country2InsuranceNumber"
                  language={language}
                  registerRef={registerFieldRef}
                  showValidationErrors={showValidationErrors}
                />

                <p className="md:col-span-2 font-sans text-sm leading-7 text-navy/60">
                  {copy.section3Extra}
                </p>
              </>
            ) : null}
          </QuestionSection>

          <QuestionSection icon={CreditCard} title={copy.section4} help={copy.section4Help}>
            <Field
              label={language === "es" ? "Nombre del banco" : "Bank name"}
              value={draft.bankName}
              onChange={(value) => updateDraft(setDraft, "bankName", value)}
              error={validationErrors.bankName}
              fieldKey="bankName"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label={language === "es" ? "Nombre del titular" : "Account holder name"}
              value={draft.accountHolder}
              onChange={(value) => updateDraft(setDraft, "accountHolder", value)}
              error={validationErrors.accountHolder}
              fieldKey="accountHolder"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label={language === "es" ? "Sort code" : "Sort code"}
              value={draft.sortCode}
              onChange={(value) => updateDraft(setDraft, "sortCode", formatSortCode(value))}
              placeholder="12-34-56"
              error={validationErrors.sortCode}
              fieldKey="sortCode"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label={language === "es" ? "Número de cuenta" : "Account number"}
              value={draft.accountNumber}
              onChange={(value) => updateDraft(setDraft, "accountNumber", value)}
              error={validationErrors.accountNumber}
              fieldKey="accountNumber"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label={language === "es" ? "Referencia de building society" : "Building society reference"}
              help={language === "es" ? "Solo si aplica" : "Only if it applies"}
              value={draft.buildingSocietyRef}
              onChange={(value) => updateDraft(setDraft, "buildingSocietyRef", value)}
            />
          </QuestionSection>

          <QuestionSection icon={Baby} title={copy.section5} help={copy.section5Help}>
            <div className="md:col-span-2">
              <Field
                label={language === "es" ? "Otra información" : "Other information"}
                value={draft.otherInformation}
                onChange={(value) => updateDraft(setDraft, "otherInformation", value)}
                multiline
                multilineRows={10}
                maxLines={16}
                multilineClassName="min-h-[16rem]"
              />
            </div>
          </QuestionSection>

          <QuestionSection icon={PenLine} title={copy.section6} help={copy.section6Help}>
            <div className="md:col-span-2">
              {copy.section6Extra ? (
                <p className="font-sans text-sm leading-7 text-navy/60">{copy.section6Extra}</p>
              ) : null}
              <div className="flex flex-wrap gap-3">
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 font-sans text-sm font-medium text-navy transition-colors hover:bg-beige">
                  <Upload className="size-4" />
                  <span>{copy.uploadSignature}</span>
                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                    className="hidden"
                    onChange={(event) => handleSignatureUpload(event, setDraft)}
                  />
                </label>
                <Button
                  type="button"
                  variant="outline"
                  className="gap-1.5 font-sans text-sm font-medium"
                  onClick={() => updateDraft(setDraft, "signatureDataUrl", "")}
                >
                  <X className="size-4" />
                  {copy.clearSignature}
                </Button>
              </div>

              <div className="mt-4 rounded-[1.25rem] border border-navy/10 bg-white p-4">
                <p className="font-sans text-sm text-navy/60">{copy.drawSignature}</p>
                <div className="mt-3">
                  <SignaturePad
                    value={draft.signatureDataUrl}
                    onChange={(value) => updateDraft(setDraft, "signatureDataUrl", value)}
                  />
                </div>
              </div>
            </div>
          </QuestionSection>
        </div>

        {showChecklistModal ? (
          <div className="mt-8 rounded-[1.5rem] border border-salmon/20 bg-salmon/10 p-4 md:p-5">
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-[3]">
                <h3 className="text-lg font-bold text-navy">{copy.stopTitle}</h3>
                <ul className="mt-4 space-y-3 font-sans text-sm leading-7 text-navy/78">
                  {supportingChecklist.map((item) => (
                    <li key={item.kind === "text" ? item.text : item.kind} className="flex items-start gap-3">
                      <span className="mt-2 size-2 rounded-full bg-salmon" />
                      <span>
                        {item.kind === "return" ? (
                          <>
                            Return it to the Department of Social Security, 79-80 New Harbours Walk, New Harbours, Gibraltar OR email it to{" "}
                            <a
                              href="mailto:maternitybenefit@gibraltar.gov.gi?subject=Maternity%20Grant%20Application"
                              className="underline decoration-salmon/60 underline-offset-4 hover:text-salmon"
                            >
                              maternitybenefit@gibraltar.gov.gi
                            </a>
                            .
                          </>
                        ) : (
                          item.text
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-sans text-sm leading-7 text-navy/60">{copy.stopHelper}</p>
              </div>
              <div className="flex flex-1 justify-end">
                <Image
                  src={rockyMascot}
                  alt="Rocky"
                  className="h-32 w-auto shrink-0 -scale-x-100 md:h-40"
                />
              </div>
            </div>
          </div>
        ) : null}

        {showSentNote ? (
          <div className="mt-6 rounded-[1.5rem] border border-salmon/20 bg-salmon/10 p-4">
            <div className="font-sans text-sm leading-7 text-navy/72">
              {copy.sentNote.split("\n").map((line, index) => (
                <p key={`${line}-${index}`}>{renderInlineFormatting(line)}</p>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            onClick={handleDownload}
            className="min-w-[14rem] gap-2 font-sans text-sm font-medium"
            disabled={isDownloading}
          >
            {isDownloading ? (
              <LoaderCircle className="size-4 animate-spin" />
            ) : (
              <Download className="size-4" />
            )}
            <span>{isDownloading ? (language === "es" ? "Preparando PDF..." : "Preparing PDF...") : copy.downloadButton}</span>
          </Button>

          <Button
            type="button"
            variant="outline"
            className="gap-1.5 font-sans text-sm font-medium"
            onClick={() => setShowClearModal(true)}
          >
            <X className="size-4" />
            {copy.clearButton}
          </Button>
        </div>
      </section>

      {showTimingModal && draft.babyBornYet ? (
        <RockyModal
          onClose={() => setShowTimingModal(false)}
          actions={
            <Button type="button" onClick={() => setShowTimingModal(false)}>
              {language === "es" ? "Vale" : "Got it"}
            </Button>
          }
        >
          <p className="text-center font-display text-2xl font-bold leading-tight text-navy">Rocky says:</p>
          <p className="text-center font-sans text-base leading-8 text-navy/78">
            {draft.babyBornYet === "yes" ? copy.bornYesPrompt : copy.bornNoPrompt}
          </p>
        </RockyModal>
      ) : null}

      {showClearModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/35 px-4">
          <div className="w-full max-w-[32rem] rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_24px_80px_rgba(45,56,77,0.18)] md:p-8">
            <p className="text-center font-sans text-base font-medium leading-8 text-navy">
              {copy.clearConfirmTitle}
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button
                type="button"
                onClick={() => {
                  clearDraft();
                  setShowClearModal(false);
                }}
              >
                {copy.clearConfirmYes}
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowClearModal(false)}>
                {copy.clearConfirmNo}
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {showPartnerEligibilityModal ? (
        <RockyModal
          onClose={() => setShowPartnerEligibilityModal(false)}
          actions={
            <Button type="button" onClick={() => setShowPartnerEligibilityModal(false)}>
              {language === "es" ? "Vale" : "Got it"}
            </Button>
          }
        >
          <div className="space-y-4 text-center font-sans text-base leading-8 text-navy/78">
            <p className="font-display text-2xl font-bold leading-tight text-navy">Stop!</p>
            <p>
              If you are claiming on your partner&apos;s social insurance record but you are{" "}
              <strong className="font-semibold text-navy">not</strong> married or in a civil partnership, you can only submit this form{" "}
              <strong className="font-semibold text-navy">after</strong> the birth of your child (no later than 6 months after the birth).
            </p>
            <p>
              This is because DSS want either a marriage/civil partnership certificate OR baby&apos;s birth certificate.
            </p>
          </div>
        </RockyModal>
      ) : null}

      {showTaxReferenceModal ? (
        <RockyModal
          onClose={() => setShowTaxReferenceModal(false)}
          actions={
            <Button type="button" onClick={() => setShowTaxReferenceModal(false)}>
              {language === "es" ? "Vale" : "Got it"}
            </Button>
          }
        >
          <div className="space-y-4 text-center font-sans text-base leading-8 text-navy/78">
            <p className="font-display text-2xl font-bold leading-tight text-navy">Stop!</p>
            <p>
              Are you sure? Gibraltar tax reference numbers are usually 5 or 6 digits. Check your PAYE allowance certificate, a tax
              letter, or your tax code notice.
            </p>
          </div>
        </RockyModal>
      ) : null}
    </>
  );
}

function RockyModal({
  children,
  actions,
  onClose,
}: {
  children: ReactNode;
  actions: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/35 px-4" onClick={onClose}>
      <div
        className="w-full max-w-[31rem] rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_24px_80px_rgba(45,56,77,0.18)] md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col items-center gap-1.5">
          <Image src={rockyMascot} alt="Rocky" className="h-20 w-auto" />
          <div className="w-full space-y-2.5">{children}</div>
          <div className="mt-4 flex justify-center">{actions}</div>
        </div>
      </div>
    </div>
  );
}

function QuestionSection({
  icon: Icon,
  title,
  help,
  topContent,
  aside,
  children,
}: {
  icon: typeof UserRound;
  title: string;
  help: string;
  topContent?: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[1.5rem] border border-navy/8 bg-[#fffdfa] p-5 shadow-[0_10px_28px_rgba(45,56,77,0.06)]">
      {topContent ? <div className="mb-5 flex justify-center">{topContent}</div> : null}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-3">
          <span className="inline-flex size-10 items-center justify-center rounded-full bg-beige text-salmon">
            <Icon className="size-5" />
          </span>
          <div>
            <h2 className="text-2xl font-bold leading-tight text-navy">{title}</h2>
            <p className="mt-2 font-sans text-sm leading-7 text-navy/66">{help}</p>
          </div>
        </div>
        {aside ? <div className="md:max-w-[18rem]">{aside}</div> : null}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  );
}

function CompactChoiceField<T extends string>({
  label,
  value,
  onChange,
  options,
  error,
  fieldKey,
  registerRef,
  showValidationErrors,
}: {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
  error?: string;
  fieldKey?: string;
  registerRef?: (name: string) => (node: HTMLElement | null) => void;
  showValidationErrors?: boolean;
}) {
  const showErrorGlow = Boolean(showValidationErrors && error);

  return (
    <div
      ref={fieldKey && registerRef ? registerRef(fieldKey) : undefined}
      className="text-center"
    >
      <p className="text-sm font-semibold text-navy">{label}</p>
      <div
        className={`mt-2 flex justify-center gap-2 rounded-[1rem] transition-all ${
          showErrorGlow ? "ring-2 ring-salmon/80 shadow-[0_0_0_6px_rgba(241,155,154,0.18)]" : ""
        }`}
      >
        {options.map((option) => {
          const isActive = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-all hover:-translate-y-0.5 ${
                isActive
                  ? "border border-navy bg-navy text-beige shadow-[0_8px_18px_rgba(45,56,77,0.08)]"
                  : "border border-navy/10 bg-white text-navy hover:bg-beige"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Field({
  label,
  help,
  helpInline,
  value,
  onChange,
  multiline = false,
  multilineClassName,
  multilineRows = 4,
  maxLines,
  type = "text",
  inputMode,
  placeholder,
  onBlur,
  fieldKey,
  registerRef,
  error,
  showValidationErrors,
}: {
  label: string;
  help?: string;
  helpInline?: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  multilineClassName?: string;
  multilineRows?: number;
  maxLines?: number;
  type?: "text" | "email";
  inputMode?: React.InputHTMLAttributes<HTMLInputElement>["inputMode"];
  placeholder?: string;
  onBlur?: () => void;
  fieldKey?: string;
  registerRef?: (name: string) => (node: HTMLElement | null) => void;
  error?: string;
  showValidationErrors?: boolean;
}) {
  const showErrorGlow = Boolean(showValidationErrors && error);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (!multiline || !textareaRef.current) {
      return;
    }

    const textarea = textareaRef.current;
    textarea.style.height = "0px";

    const computedStyle = window.getComputedStyle(textarea);
    const lineHeight = Number.parseFloat(computedStyle.lineHeight) || 28;
    const paddingTop = Number.parseFloat(computedStyle.paddingTop) || 0;
    const paddingBottom = Number.parseFloat(computedStyle.paddingBottom) || 0;
    const borderTop = Number.parseFloat(computedStyle.borderTopWidth) || 0;
    const borderBottom = Number.parseFloat(computedStyle.borderBottomWidth) || 0;
    const minHeight =
      lineHeight * multilineRows + paddingTop + paddingBottom + borderTop + borderBottom;
    const maxHeight = maxLines
      ? lineHeight * maxLines + paddingTop + paddingBottom + borderTop + borderBottom
      : Number.POSITIVE_INFINITY;
    const nextHeight = Math.max(minHeight, Math.min(textarea.scrollHeight, maxHeight));

    textarea.style.height = `${nextHeight}px`;
    textarea.style.overflowY = textarea.scrollHeight > maxHeight ? "auto" : "hidden";
  }, [maxLines, multiline, multilineRows, value]);

  return (
    <label
      ref={fieldKey && registerRef ? registerRef(fieldKey) : undefined}
      className="block"
    >
      <span className="flex min-h-6 items-baseline gap-2 text-sm font-semibold text-navy">
        <span>{label}</span>
        {helpInline ? (
          <span className="font-sans text-xs font-normal leading-5 text-navy/52">
            {helpInline.startsWith("(") ? helpInline : `(${helpInline})`}
          </span>
        ) : null}
        {help && !multiline ? (
          <span className="font-sans text-xs font-normal leading-5 text-navy/52">
            {help.startsWith("(") ? help : `(${help})`}
          </span>
        ) : null}
      </span>
      {help && multiline ? (
        <span className="mt-1 block font-sans text-xs leading-6 text-navy/52">
          {help}
        </span>
      ) : null}
      {multiline ? (
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(event) =>
            onChange(
              event.target.value
                .replace(/\r/g, "")
                .split("\n")
                .slice(0, maxLines ?? 4)
                .join("\n")
            )
          }
          rows={multilineRows}
          className={`mt-2 w-full resize-none rounded-[1rem] border border-navy/10 bg-white px-4 py-3 font-sans text-base text-navy outline-none transition-colors focus:border-salmon ${
            showErrorGlow ? "ring-2 ring-salmon/80 shadow-[0_0_0_6px_rgba(241,155,154,0.18)]" : ""
          } ${multilineClassName ?? ""}`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          inputMode={inputMode}
          placeholder={placeholder}
          className={`mt-2 w-full rounded-[1rem] border border-navy/10 bg-white px-4 py-3 font-sans text-base text-navy outline-none transition-colors focus:border-salmon ${
            showErrorGlow ? "ring-2 ring-salmon/80 shadow-[0_0_0_6px_rgba(241,155,154,0.18)]" : ""
          }`}
        />
      )}
    </label>
  );
}

function DateField({
  label,
  value,
  onChange,
  error,
  fieldKey,
  registerRef,
  showValidationErrors,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  fieldKey?: string;
  registerRef?: (name: string) => (node: HTMLElement | null) => void;
  showValidationErrors?: boolean;
}) {
  const parts = splitDateParts(value);
  const showErrorGlow = Boolean(showValidationErrors && error);

  function updatePart(index: 0 | 1 | 2, nextValue: string) {
    const digitsOnly = nextValue.replace(/\D/g, "");
    const nextParts = [...parts] as [string, string, string];
    nextParts[index] = digitsOnly.slice(0, index === 2 ? 4 : 2);
    onChange(joinDateParts(nextParts));
  }

  return (
    <label
      ref={fieldKey && registerRef ? registerRef(fieldKey) : undefined}
      className="block"
    >
      <span className="text-sm font-semibold text-navy">{label}</span>
      <div
        className={`mt-2 flex items-center gap-2 rounded-[1rem] transition-all ${
          showErrorGlow ? "ring-2 ring-salmon/80 shadow-[0_0_0_6px_rgba(241,155,154,0.18)]" : ""
        }`}
      >
        <DateInputBox
          value={parts[0]}
          onChange={(nextValue) => updatePart(0, nextValue)}
          placeholder="DD"
          maxLength={2}
        />
        <span className="font-sans text-lg text-navy/46">/</span>
        <DateInputBox
          value={parts[1]}
          onChange={(nextValue) => updatePart(1, nextValue)}
          placeholder="MM"
          maxLength={2}
        />
        <span className="font-sans text-lg text-navy/46">/</span>
        <DateInputBox
          value={parts[2]}
          onChange={(nextValue) => updatePart(2, nextValue)}
          placeholder="YYYY"
          maxLength={4}
          year
        />
      </div>
    </label>
  );
}

function DateInputBox({
  value,
  onChange,
  placeholder,
  maxLength,
  year = false,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  maxLength: number;
  year?: boolean;
}) {
  return (
    <input
      type="text"
      inputMode="numeric"
      pattern={year ? "[0-9]{4}" : "[0-9]{2}"}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      maxLength={maxLength}
      placeholder={placeholder}
      className={`rounded-[1rem] border border-navy/10 bg-white px-3 py-3 text-center font-sans text-base text-navy outline-none transition-colors focus:border-salmon ${
        year ? "w-[6.5rem]" : "w-[4.5rem]"
      }`}
    />
  );
}

function CountryWorkFields({
  title,
  countryValue,
  onCountryChange,
  countryError,
  countryFieldKey,
  fromValue,
  onFromChange,
  fromError,
  fromFieldKey,
  toValue,
  onToChange,
  toError,
  toFieldKey,
  paidLabel,
  paidValue,
  onPaidChange,
  insuranceLabel,
  insuranceValue,
  onInsuranceChange,
  insuranceError,
  insuranceFieldKey,
  language,
  registerRef,
  showValidationErrors,
}: {
  title: string;
  countryValue: string;
  onCountryChange: (value: string) => void;
  countryError?: string;
  countryFieldKey?: string;
  fromValue: string;
  onFromChange: (value: string) => void;
  fromError?: string;
  fromFieldKey?: string;
  toValue: string;
  onToChange: (value: string) => void;
  toError?: string;
  toFieldKey?: string;
  paidLabel: string;
  paidValue: YesNoUnknown;
  onPaidChange: (value: YesNoUnknown) => void;
  insuranceLabel: string;
  insuranceValue: string;
  onInsuranceChange: (value: string) => void;
  insuranceError?: string;
  insuranceFieldKey?: string;
  language: "en" | "es";
  registerRef?: (name: string) => (node: HTMLElement | null) => void;
  showValidationErrors?: boolean;
}) {
  return (
    <div className="md:col-span-2 rounded-[1.25rem] border border-navy/8 bg-white p-4">
      <p className="text-lg font-bold text-navy">{title}</p>
      <div className="mt-4 space-y-4">
        <Field
          label={title}
          value={countryValue}
          onChange={onCountryChange}
          error={countryError}
          fieldKey={countryFieldKey}
          registerRef={registerRef}
          showValidationErrors={showValidationErrors}
        />
        <div className="grid gap-4 md:grid-cols-[auto_auto_1fr] md:items-end">
          <DateField
            label={language === "es" ? "Desde" : "From"}
            value={fromValue}
            onChange={onFromChange}
            error={fromError}
            fieldKey={fromFieldKey}
            registerRef={registerRef}
            showValidationErrors={showValidationErrors}
          />
          <DateField
            label={language === "es" ? "Hasta" : "To"}
            value={toValue}
            onChange={onToChange}
            error={toError}
            fieldKey={toFieldKey}
            registerRef={registerRef}
            showValidationErrors={showValidationErrors}
          />
        </div>
        <ChoiceField
          label={paidLabel}
          value={paidValue}
          onChange={onPaidChange}
          options={[
            { value: "yes", label: language === "es" ? "Sí" : "Yes" },
            { value: "no", label: language === "es" ? "No" : "No" },
            { value: "unknown", label: language === "es" ? "No lo sé" : "Don't know" },
          ]}
        />
        <Field
          label={insuranceLabel}
          value={insuranceValue}
          onChange={onInsuranceChange}
          error={insuranceError}
          fieldKey={insuranceFieldKey}
          registerRef={registerRef}
          showValidationErrors={showValidationErrors}
        />
      </div>
    </div>
  );
}

function ChoiceField<T extends string>({
  label,
  value,
  onChange,
  options,
  error,
  fieldKey,
  registerRef,
  showValidationErrors,
}: {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
  error?: string;
  fieldKey?: string;
  registerRef?: (name: string) => (node: HTMLElement | null) => void;
  showValidationErrors?: boolean;
}) {
  const showErrorGlow = Boolean(showValidationErrors && error);

  return (
    <div
      ref={fieldKey && registerRef ? registerRef(fieldKey) : undefined}
      className="block md:col-span-2"
    >
      <span className="text-sm font-semibold text-navy">{label}</span>
      <div
        className={`mt-2 flex flex-wrap gap-3 rounded-[1rem] transition-all ${
          showErrorGlow ? "ring-2 ring-salmon/80 shadow-[0_0_0_6px_rgba(241,155,154,0.18)]" : ""
        }`}
      >
        {options.map((option) => {
          const isActive = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${
                isActive
                  ? "bg-navy text-beige"
                  : "border border-navy/10 bg-white text-navy hover:bg-beige"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function updateDraft<K extends keyof MaternityGrantDraft>(
  setDraft: Dispatch<SetStateAction<MaternityGrantDraft>>,
  key: K,
  value: MaternityGrantDraft[K]
) {
  setDraft((current) => ({ ...current, [key]: value }));
}

type FieldPlacement = {
  pageIndex: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

function getFieldMap(templatePdf: PDFDocument, form: ReturnType<PDFDocument["getForm"]>) {
  const pageRefs = new Map(templatePdf.getPages().map((page, index) => [page.ref.toString(), index]));
  const map = new Map<string, FieldPlacement>();

  for (const field of form.getFields()) {
    const widget = field.acroField.getWidgets?.()[0];
    const rect = widget?.getRectangle?.();
    const pageRef = widget?.P?.()?.toString?.();
    if (!rect || !pageRef) {
      continue;
    }

    const pageIndex = pageRefs.get(pageRef);
    if (pageIndex === undefined) {
      continue;
    }

    map.set(field.getName(), {
      pageIndex,
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
    });
  }

  return map;
}

function drawFieldText(
  pages: ReturnType<PDFDocument["getPages"]>,
  fieldMap: Map<string, FieldPlacement>,
  name: string,
  value: string,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>,
  options: { multiline?: boolean; size?: number; rowCount?: number } = {}
) {
  const placement = fieldMap.get(name);
  if (!placement || !value.trim()) {
    return;
  }

  const page = pages[placement.pageIndex];
  const size = options.size ?? 10;
  const color = rgb(0.12, 0.15, 0.22);

  if (options.multiline) {
    const lines = wrapMultilineText(value, font, size, placement.width - 6);
    const visibleRows = options.rowCount ?? Math.max(1, Math.floor(placement.height / (size * 2)));
    const rowHeight = placement.height / visibleRows;
    lines.slice(0, visibleRows).forEach((line, index) => {
      page.drawText(line, {
        x: placement.x + 3,
        y: placement.y + placement.height - rowHeight * (index + 1) + (rowHeight - size) / 2 + 1,
        size,
        font,
        color,
        maxWidth: placement.width - 6,
      });
    });
    return;
  }

  page.drawText(value, {
    x: placement.x + 3,
    y: placement.y + (placement.height - size) / 2 + 1,
    size,
    font,
    color,
    maxWidth: placement.width - 6,
  });
}

function drawCheckboxMark(
  pages: ReturnType<PDFDocument["getPages"]>,
  fieldMap: Map<string, FieldPlacement>,
  name: string,
  checked: boolean,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>
) {
  const placement = fieldMap.get(name);
  if (!placement || !checked) {
    return;
  }

  pages[placement.pageIndex].drawText("X", {
    x: placement.x + placement.width / 2 - 4,
    y: placement.y + placement.height / 2 - 5,
    size: 11,
    font,
    color: rgb(0.12, 0.15, 0.22),
  });
}

function drawDateTriplet(
  pages: ReturnType<PDFDocument["getPages"]>,
  fieldMap: Map<string, FieldPlacement>,
  names: [string, string, string],
  value: string,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>
) {
  const parsed = splitDate(value);
  drawFieldText(pages, fieldMap, names[0], parsed?.day ?? "", font);
  drawFieldText(pages, fieldMap, names[1], parsed?.month ?? "", font);
  drawFieldText(pages, fieldMap, names[2], parsed?.year ?? "", font);
}

function drawDigitFields(
  pages: ReturnType<PDFDocument["getPages"]>,
  fieldMap: Map<string, FieldPlacement>,
  names: string[],
  digits: string,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>
) {
  names.forEach((name, index) => {
    drawFieldText(pages, fieldMap, name, digits[index] ?? "", font);
  });
}

function splitDate(value: string) {
  const cleaned = value.replace(/\s+/g, "");
  const parts = cleaned.includes("/") ? cleaned.split("/") : cleaned.split("-");
  if (parts.length !== 3) {
    return null;
  }

  const [a, b, c] = parts;
  if (a.length === 4) {
    return { day: b, month: c, year: a };
  }

  return { day: a, month: b, year: c };
}

function splitDateParts(value: string): [string, string, string] {
  const parsed = splitDate(value);
  if (!parsed) {
    return ["", "", ""];
  }
  return [parsed.day, parsed.month, parsed.year];
}

function joinDateParts(parts: [string, string, string]) {
  const [day, month, year] = parts;
  if (!day && !month && !year) {
    return "";
  }
  return `${day}/${month}/${year}`;
}

function wrapText(
  value: string,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>,
  size: number,
  maxWidth: number
) {
  const words = value.replace(/\r/g, "").split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;
    if (font.widthOfTextAtSize(nextLine, size) <= maxWidth) {
      currentLine = nextLine;
      continue;
    }

    if (currentLine) {
      lines.push(currentLine);
    }
    currentLine = word;
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

function wrapMultilineText(
  value: string,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>,
  size: number,
  maxWidth: number
) {
  return value
    .replace(/\r/g, "")
    .split("\n")
    .flatMap((line) => {
      const trimmed = line.trim();
      return trimmed ? wrapText(trimmed, font, size, maxWidth) : [""];
    });
}

function getValidationErrors(draft: MaternityGrantDraft, language: "en" | "es") {
  const errors: Partial<Record<keyof MaternityGrantDraft, string>> = {};
  const requiredMessage = (label: string) =>
    language === "es" ? `Añade ${label}.` : `Add ${label}.`;

  if (!draft.babyBornYet) {
    errors.babyBornYet =
      language === "es" ? "Elige si el bebé ya ha nacido." : "Choose whether the baby has already been born.";
  }

  if (!draft.claimantFullName.trim()) {
    errors.claimantFullName =
      language === "es" ? "Añade tu nombre completo." : "Add your full name.";
  }

  if (!draft.address.trim()) {
    errors.address =
      language === "es" ? "Añade tu dirección." : "Add your address.";
  }

  if (!draft.claimantDob.trim()) {
    errors.claimantDob =
      language === "es" ? "Añade tu fecha de nacimiento." : "Add your date of birth.";
  }

  if (!draft.phone.trim()) {
    errors.phone =
      language === "es" ? "Añade tu teléfono." : "Add your phone number.";
  }

  if (!draft.nationality.trim()) {
    errors.nationality =
      language === "es" ? "Añade tu nacionalidad." : "Add your nationality.";
  }

  if (!draft.taxReference.trim()) {
    errors.taxReference =
      language === "es" ? "Añade tu referencia fiscal." : "Add your tax reference number.";
  }

  if (!draft.idCardNumber.trim()) {
    errors.idCardNumber =
      language === "es" ? "Añade tu número de tarjeta de identidad." : "Add your ID card number.";
  }

  if (!draft.claimRecordMode) {
    errors.claimRecordMode =
      language === "es"
        ? "Elige si reclamas con tu propia cotización o la de tu pareja."
        : "Choose whether you are claiming on your own record or your partner’s.";
  }

  if (draft.claimRecordMode === "self" && !draft.claimantEmployer.trim()) {
    errors.claimantEmployer =
      language === "es"
        ? "Añade el nombre y la dirección de tu empresa."
        : "Add your employer’s name and address.";
  }

  if (draft.claimRecordMode === "partner") {
    if (!draft.marriedToPartner) {
      errors.marriedToPartner =
        language === "es"
          ? "Elige si estáis casados o en unión civil."
          : "Choose whether you are married or in a civil partnership.";
    }

    if (!draft.partnerFullName.trim()) {
      errors.partnerFullName =
        language === "es" ? "Añade el nombre completo de tu pareja." : "Add your partner’s full name.";
    }

    if (!draft.partnerDob.trim()) {
      errors.partnerDob =
        language === "es" ? "Añade la fecha de nacimiento de tu pareja." : "Add your partner’s date of birth.";
    }

    if (!draft.partnerTaxReference.trim()) {
      errors.partnerTaxReference =
        language === "es"
          ? "Añade la referencia fiscal de tu pareja."
          : "Add your partner’s tax reference number.";
    }

    if (!draft.partnerIdCard.trim()) {
      errors.partnerIdCard =
        language === "es"
          ? "Añade el número de ID de tu pareja."
          : "Add your partner’s ID card number.";
    }

    if (draft.marriedToPartner === "yes" && !draft.marriageDate.trim()) {
      errors.marriageDate =
        language === "es"
          ? "Añade la fecha de matrimonio o unión civil."
          : "Add the date of marriage or civil partnership.";
    }

    if (!draft.partnerEmployer.trim()) {
      errors.partnerEmployer =
        language === "es"
          ? "Añade el nombre y la dirección de la empresa de tu pareja."
          : "Add your partner’s employer name and address.";
    }
  }

  if (draft.workedOutsideGibraltar === "yes") {
    if (!draft.country1Name.trim()) {
      errors.country1Name = requiredMessage(language === "es" ? "el país 1" : "country 1");
    }
    if (!draft.country1From.trim()) {
      errors.country1From = requiredMessage(language === "es" ? "la fecha desde del país 1" : "country 1 start date");
    }
    if (!draft.country1To.trim()) {
      errors.country1To = requiredMessage(language === "es" ? "la fecha hasta del país 1" : "country 1 end date");
    }
    if (!draft.country1InsuranceNumber.trim()) {
      errors.country1InsuranceNumber =
        language === "es"
          ? "Añade el número de seguridad social o referencia del país 1."
          : "Add the social security or reference number for country 1.";
    }
  }

  if (!draft.bankName.trim()) {
    errors.bankName = language === "es" ? "Añade el nombre del banco." : "Add the bank name.";
  }

  if (!draft.accountHolder.trim()) {
    errors.accountHolder =
      language === "es" ? "Añade el nombre del titular." : "Add the account holder name.";
  }

  if (!draft.sortCode.trim()) {
    errors.sortCode = language === "es" ? "Añade el sort code." : "Add the sort code.";
  }

  if (!draft.accountNumber.trim()) {
    errors.accountNumber =
      language === "es" ? "Añade el número de cuenta." : "Add the account number.";
  }

  if (!draft.email.trim()) {
    errors.email =
      language === "es" ? "Añade tu email." : "Add your email address.";
  }

  const emailError = getEmailError(draft.email, language);
  if (emailError) {
    errors.email = emailError;
  }

  const dateFields: (keyof MaternityGrantDraft)[] = [
    "claimantDob",
    "partnerDob",
    "marriageDate",
    "country1From",
    "country1To",
    "country2From",
    "country2To",
  ];

  for (const field of dateFields) {
    const dateError = getDateError(draft[field], language);
    if (dateError) {
      errors[field] = dateError;
    }
  }

  return errors;
}

function getDateError(value: string, language: "en" | "es") {
  if (!value.trim()) {
    return "";
  }

  const parsed = splitDate(value);
  if (!parsed) {
    return language === "es"
      ? "Usa 2 cifras para día, 2 para mes y 4 para año."
      : "Use 2 digits for day, 2 for month, and 4 for year.";
  }

  const { day, month, year } = parsed;
  if (day.length !== 2 || month.length !== 2 || year.length !== 4) {
    return language === "es"
      ? "Usa 2 cifras para día, 2 para mes y 4 para año."
      : "Use 2 digits for day, 2 for month, and 4 for year.";
  }

  const dayNumber = Number(day);
  const monthNumber = Number(month);
  const yearNumber = Number(year);
  const date = new Date(yearNumber, monthNumber - 1, dayNumber);

  if (
    Number.isNaN(dayNumber) ||
    Number.isNaN(monthNumber) ||
    Number.isNaN(yearNumber) ||
    date.getFullYear() !== yearNumber ||
    date.getMonth() !== monthNumber - 1 ||
    date.getDate() !== dayNumber
  ) {
    return language === "es"
      ? "Esa fecha no parece correcta."
      : "That date doesn’t look right.";
  }

  return "";
}

function getEmailError(value: string, language: "en" | "es") {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  const lowered = trimmed.toLowerCase();
  const typoHints = ["gmale.", "gamil.", "gmial.", "hotnail.", "@icloud,com"];
  if (typoHints.some((hint) => lowered.includes(hint))) {
    return language === "es"
      ? "Ese email parece tener una errata. Revísalo antes de seguir."
      : "That email looks like it may have a typo. Please check it.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(trimmed)) {
    return language === "es"
      ? "Añade un email completo, por ejemplo nombre@correo.com."
      : "Please use a full email address, for example name@example.com.";
  }

  return "";
}

function getSupportingChecklist(
  draft: MaternityGrantDraft,
  language: "en" | "es"
): SupportingChecklistItem[] {
  const items: SupportingChecklistItem[] = [];

  if (draft.babyBornYet === "no") {
    items.push({
      kind: "text",
      text:
        language === "es"
          ? "Presentarlo no antes de 9 semanas antes de tu semana prevista de parto."
          : "To submit this form no earlier than 9 weeks before your due week.",
    });
    items.push({
      kind: "text",
      text:
        language === "es"
          ? "Pedir a tu médico o matrona que complete la parte 4."
          : "To ask your midwife or doctor to complete Part 4.",
    });
  } else {
    items.push({
      kind: "text",
      text:
        language === "es"
          ? "Presentarlo dentro de los 6 meses posteriores al nacimiento del bebé."
          : "To submit this form within 6 months of your baby’s birth.",
    });
  }

  if (draft.claimRecordMode === "partner") {
    items.push({
      kind: "text",
      text:
        draft.marriedToPartner === "yes"
          ? language === "es"
            ? "Tu certificado de matrimonio o de unión civil."
            : "Your marriage or civil partnership certificate."
          : language === "es"
            ? "El certificado de nacimiento del bebé."
            : "Your baby’s birth certificate.",
    });
  }

  if (draft.babyBornYet === "yes") {
    items.push({
      kind: "text",
      text:
        language === "es"
          ? "Pedir a tu médico o matrona que complete la parte 5, o usar el certificado de nacimiento del bebé."
          : "To ask your midwife or doctor to complete Part 5, OR use your baby’s birth certificate.",
    });
  }

  items.push({ kind: "return" });

  return items;
}

function formatSortCode(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 6);
  if (digits.length <= 2) {
    return digits;
  }
  if (digits.length <= 4) {
    return `${digits.slice(0, 2)}-${digits.slice(2)}`;
  }
  return `${digits.slice(0, 2)}-${digits.slice(2, 4)}-${digits.slice(4)}`;
}

function sanitizePhone(value: string) {
  const trimmed = value.replace(/[^\d+\s()-]/g, "");
  const plusAtStart = trimmed.startsWith("+");
  const withoutPluses = trimmed.replace(/\+/g, "");
  return plusAtStart ? `+${withoutPluses}` : withoutPluses;
}

function drawDeclarationStrikeout(
  page: ReturnType<PDFDocument["getPages"]>[number],
  babyBornYet: YesNoUnset
) {
  const color = rgb(0.12, 0.15, 0.22);

  if (babyBornYet === "yes") {
    page.drawLine({
      start: { x: 272, y: 761 },
      end: { x: 404, y: 756 },
      thickness: 1.5,
      color,
    });
    return;
  }

  if (babyBornYet === "no") {
    page.drawLine({
      start: { x: 200, y: 746 },
      end: { x: 300, y: 743 },
      thickness: 1.5,
      color,
    });
  }
}

function renderInlineFormatting(line: string) {
  const parts = line.split(/(\*\*.*?\*\*|\*.*?\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-navy">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={`${part}-${index}`} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

function shouldWarnTaxReference(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length > 0 && (digits.length < 5 || digits.length > 6);
}

function handleSignatureUpload(
  event: ChangeEvent<HTMLInputElement>,
  setDraft: Dispatch<SetStateAction<MaternityGrantDraft>>
) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const result = typeof reader.result === "string" ? reader.result : "";
    if (!result) {
      return;
    }
    setDraft((current) => ({ ...current, signatureDataUrl: result }));
  };
  reader.readAsDataURL(file);
}

function SignaturePad({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);

    if (!value) {
      return;
    }

    const image = new window.Image();
    image.onload = () => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    image.src = value;
  }, [value]);

  function getPoint(event: ReactPointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    if (!canvas) {
      return null;
    }
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    };
  }

  function startDrawing(event: ReactPointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const point = getPoint(event);
    if (!canvas || !context || !point) {
      return;
    }
    isDrawingRef.current = true;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = 3;
    context.strokeStyle = "#2d384d";
    context.beginPath();
    context.moveTo(point.x, point.y);
  }

  function draw(event: ReactPointerEvent<HTMLCanvasElement>) {
    if (!isDrawingRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const point = getPoint(event);
    if (!canvas || !context || !point) {
      return;
    }
    context.lineTo(point.x, point.y);
    context.stroke();
  }

  function stopDrawing() {
    if (!isDrawingRef.current) {
      return;
    }
    isDrawingRef.current = false;
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    onChange(canvas.toDataURL("image/png"));
  }

  return (
    <canvas
      ref={canvasRef}
      width={640}
      height={180}
      className="h-40 w-full rounded-[1rem] border border-dashed border-navy/20 bg-white touch-none"
      onPointerDown={startDrawing}
      onPointerMove={draw}
      onPointerUp={stopDrawing}
      onPointerLeave={stopDrawing}
    />
  );
}
