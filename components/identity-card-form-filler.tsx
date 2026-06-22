"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type {
  ChangeEvent,
  Dispatch,
  PointerEvent as ReactPointerEvent,
  ReactNode,
  SetStateAction,
} from "react";
import {
  Download,
  FileBadge2,
  HeartHandshake,
  IdCard,
  LoaderCircle,
  Lock,
  Upload,
  UserRound,
  Users,
  X,
} from "lucide-react";
import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from "pdf-lib";

import rockyMascot from "@/Rocky.png";
import { useSiteLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

const SESSION_KEY = "kotr-identity-card-draft";

const supportedForms = [
  { value: "maternity-grant", label: "Maternity Grant Claim", labelEs: "Solicitud de ayuda por maternidad" },
  { value: "gibraltar-passport", label: "Gibraltar Passport Application", labelEs: "Solicitud de pasaporte de Gibraltar" },
  { value: "identity-card-application", label: "Identity Card Application", labelEs: "Solicitud de tarjeta de identidad" },
] as const;

type ApplicationReason = "new" | "change" | "damaged" | "renewal" | "lost" | "";
type ApplicantType = "adult" | "child" | "";
type Title = "mr" | "mrs" | "miss" | "master" | "other" | "";
type Gender = "male" | "female" | "";
type AccommodationType = "owner" | "private" | "government" | "";
type RelationshipStatus =
  | "single"
  | "married"
  | "civil-partner"
  | "unmarried-partner"
  | "surviving-civil-partner"
  | "separated"
  | "widowed"
  | "divorced"
  | "";
type YesNo = "yes" | "no" | "";
type SignerRole = "applicant" | "parent1" | "parent2" | "guardian" | "other" | "";

interface ParentDraft {
  fullName: string;
  placeCountryBirth: string;
  dateOfBirth: string;
  currentIdNumber: string;
}

interface IdentityCardDraft {
  applicationReason: ApplicationReason;
  currentIdNumber: string;
  applicantType: ApplicantType;
  title: Title;
  otherTitle: string;
  fullName: string;
  maidenOrPreviousNames: string;
  dateOfBirth: string;
  gender: Gender;
  heightCm: string;
  eyeColour: string;
  placeOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  residentialAddress: string;
  accommodationType: AccommodationType;
  homePhone: string;
  mobilePhone: string;
  email: string;
  parent1: ParentDraft;
  addSecondParent: YesNo;
  parent2: ParentDraft;
  relationshipStatus: RelationshipStatus;
  spouseSurname: string;
  spouseFirstName: string;
  spouseMaidenName: string;
  registeredGibraltarian: YesNo;
  gibraltarianEntryNumber: string;
  signerRole: SignerRole;
  signerName: string;
  signatureDataUrl: string;
}

const defaultParent: ParentDraft = {
  fullName: "",
  placeCountryBirth: "",
  dateOfBirth: "",
  currentIdNumber: "",
};

const defaultDraft: IdentityCardDraft = {
  applicationReason: "",
  currentIdNumber: "",
  applicantType: "",
  title: "",
  otherTitle: "",
  fullName: "",
  maidenOrPreviousNames: "",
  dateOfBirth: "",
  gender: "",
  heightCm: "",
  eyeColour: "",
  placeOfBirth: "",
  countryOfBirth: "",
  nationality: "",
  residentialAddress: "",
  accommodationType: "",
  homePhone: "",
  mobilePhone: "",
  email: "",
  parent1: defaultParent,
  addSecondParent: "no",
  parent2: defaultParent,
  relationshipStatus: "",
  spouseSurname: "",
  spouseFirstName: "",
  spouseMaidenName: "",
  registeredGibraltarian: "",
  gibraltarianEntryNumber: "",
  signerRole: "",
  signerName: "",
  signatureDataUrl: "",
};

export function IdentityCardFormFiller() {
  const { language } = useSiteLanguage();
  const router = useRouter();
  const [draft, setDraft] = useState<IdentityCardDraft>(defaultDraft);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showValidationErrors, setShowValidationErrors] = useState(false);
  const [showChecklistModal, setShowChecklistModal] = useState(false);
  const fieldRefs = useRef<Record<string, HTMLElement | null>>({});
  const validationErrors = useMemo(() => getValidationErrors(draft, language), [draft, language]);
  const age = getAgeFromDate(draft.dateOfBirth);
  const isChildUnder15 = draft.applicantType === "child" && age !== null && age < 15;

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
    if (!isLoaded) return;
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(draft));
  }, [draft, isLoaded]);

  useEffect(() => {
    if (showValidationErrors && Object.keys(validationErrors).length === 0) {
      setShowValidationErrors(false);
    }
  }, [showValidationErrors, validationErrors]);

  const copy =
    language === "es"
      ? {
          eyebrow: "Rocky",
          title: "Vamos a rellenar la tarjeta de identidad",
          intro:
            "Lo haremos paso a paso y solo abriremos las secciones que de verdad apliquen. Nada de repetir lo mismo dos veces si podemos evitarlo.",
          privacyTitle: "Tus datos se quedan aquí",
          privacyBody:
            "Todo se guarda solo en este navegador mientras trabajas. No se envía a ninguna parte a menos que descargues el PDF.",
          selectorLabel: "¿Qué formulario necesitas hoy?",
          basicsTitle: "Lo básico",
          basicsHelp: "Qué tipo de solicitud es, para quién es, y el nombre tal y como debe salir en la tarjeta.",
          detailsTitle: "Datos personales",
          detailsHelp: "La parte principal del formulario: fecha de nacimiento, nacionalidad, dirección y contacto.",
          parentsTitle: "Padres o tutores",
          parentsHelp: "Solo hace falta para solicitantes menores de 15 años.",
          partnerTitle: "Cónyuge o pareja civil",
          partnerHelp: "Solo abrimos esta parte si no marcas estado civil soltero.",
          gibraltarianTitle: "Registro gibraltareño y firma",
          gibraltarianHelp: "La parte final: si estás en el Registro de Gibraltareños y quién firma la declaración.",
          signatureHelp:
            "Puedes subir una firma o firmar aquí con el dedo o el ratón. Si prefieres, también puedes dejarlo en blanco y firmarlo en papel después.",
          checklistTitle: "Antes de entregarlo, revisa esto:",
          checklistIntro:
            "La foto, los documentos y la tasa siguen yendo aparte; esto solo te deja el formulario rellenado.",
          checklistLink: "Pulsa aquí para ver lo que normalmente piden con esta solicitud.",
          checklistModalTitle: "Lo que normalmente tendrás que llevar con la solicitud",
          checklistBullets: [
            "Una foto reciente tamaño pasaporte, tomada en estudio, en color y con fondo blanco.",
            "Tu pasaporte y tu tarjeta actual si es una renovación o un cambio de datos.",
            "Un certificado de nacimiento completo si es una primera solicitud y naciste fuera de Gibraltar.",
            "Pruebas de domicilio o de ocupación de vivienda, según tu situación.",
            "Pruebas del cambio de datos si estás cambiando nombre, dirección u otros datos.",
            "Una denuncia policial si la tarjeta anterior se perdió o fue robada.",
          ],
          downloadButton: "Descargar formulario rellenado",
          clearButton: "Borrar este formulario",
          clearModalTitle: "¿Seguro que quieres borrar todo y empezar de nuevo?",
          gotIt: "Entendido",
        }
      : {
          eyebrow: "Rocky",
          title: "Let's fill the Identity Card form",
          intro:
            "We’ll do it in normal language, only open the bits that apply, and reuse details where we can so you are not typing the same thing twice.",
          privacyTitle: "Your information stays with you",
          privacyBody:
            "Everything stays in this browser while you work. Nothing gets uploaded anywhere unless you download the finished PDF.",
          selectorLabel: "Which form do you need today?",
          basicsTitle: "Basics",
          basicsHelp: "What kind of ID application this is, who it is for, and the name exactly as it should appear on the card.",
          detailsTitle: "Personal details",
          detailsHelp: "The main section of the form: birth details, nationality, address, and contact details.",
          parentsTitle: "Parents or guardians",
          parentsHelp: "Only needed for applicants under 15.",
          partnerTitle: "Spouse or civil partner",
          partnerHelp: "We only open this if you are not marking the applicant as single.",
          gibraltarianTitle: "Register and signature",
          gibraltarianHelp: "The last bit: whether the applicant is a registered Gibraltarian, plus who is signing the declaration.",
          signatureHelp:
            "You can upload a signature image or sign here with your mouse or finger. If you prefer, you can still leave it blank and sign on paper later.",
          checklistTitle: "Before you hand this in, double-check:",
          checklistIntro:
            "The photo, supporting documents, and fee still need sorting separately; this just fills the form itself.",
          checklistLink: "Click here to see what they will usually want with this application.",
          checklistModalTitle: "What you will usually need with the application",
          checklistBullets: [
            "One recent passport-size photograph taken in a studio, in colour, against a white background.",
            "The applicant's passport and current identity card if this is a renewal or change request.",
            "A full birth certificate if this is a first application and the applicant was born outside Gibraltar.",
            "Proof of address or accommodation status, depending on how the applicant lives there.",
            "Evidence of the change if the application is for changed particulars.",
            "A police report if the previous card was lost or stolen.",
          ],
          downloadButton: "Download filled form",
          clearButton: "Clear this form",
          clearModalTitle: "Are you sure you want to clear everything and start again?",
          gotIt: "Got it",
        };

  function registerFieldRef(name: string) {
    return (node: HTMLElement | null) => {
      fieldRefs.current[name] = node;
    };
  }

  function focusField(name: string) {
    const field = fieldRefs.current[name];
    if (!field) return;
    field.scrollIntoView({ behavior: "smooth", block: "center" });
    const focusTarget = field.querySelector("input, textarea, button") as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLButtonElement
      | null;
    focusTarget?.focus();
  }

  async function handleDownload() {
    if (Object.keys(validationErrors).length) {
      setShowValidationErrors(true);
      const firstInvalidField = Object.keys(validationErrors)[0];
      if (firstInvalidField) focusField(firstInvalidField);
      return;
    }

    try {
      setIsDownloading(true);
      const payload = (await fetch("/api/forms/identity-card", { cache: "no-store" }).then((res) => res.json())) as {
        pdf: string;
      };
      const pdfBytes = base64ToUint8Array(payload.pdf);
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const pages = pdfDoc.getPages();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

      await drawIdentityPdf(pdfDoc, pages, font, boldFont, draft, age);

      const bytes = await pdfDoc.save();
      const blob = new Blob([new Uint8Array(bytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "identity-card-application-draft.pdf";
      link.click();
      URL.revokeObjectURL(url);
    } finally {
      setIsDownloading(false);
    }
  }

  function clearDraft() {
    setDraft(defaultDraft);
    window.sessionStorage.removeItem(SESSION_KEY);
    setShowValidationErrors(false);
  }

  return (
    <>
      <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 pt-4 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10 md:pt-7">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_280px]">
          <div className="max-w-[40rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">{copy.eyebrow}</p>
            <h1 className="mt-4 max-w-[34rem] text-3xl font-bold leading-tight md:text-4xl">{copy.title}</h1>
            <p className="mt-5 max-w-[34rem] font-sans text-lg leading-8 text-navy/72">{copy.intro}</p>
          </div>
          <div className="relative mx-auto w-full max-w-[240px] pt-1 md:pt-3">
            <div className="group relative aspect-square transition-transform duration-300 hover:scale-[1.02]">
              <Image src={rockyMascot} alt="Rocky" fill className="object-contain transition-transform duration-300 group-hover:scale-[1.05]" priority />
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-navy/10 bg-[#fffdfa] px-5 py-4">
          <div className="flex items-start gap-3">
            <Lock className="mt-1 size-5 shrink-0 text-salmon" />
            <div className="min-w-0">
              <p className="text-lg font-bold text-navy">{copy.privacyTitle}</p>
              <p className="mt-1 font-sans text-sm leading-6 text-navy/68">{copy.privacyBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10">
        <label className="block">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">{copy.selectorLabel}</span>
          <select
            value="identity-card-application"
            onChange={(event) => router.replace(`/forms/filler?form=${event.target.value}`)}
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
          <QuestionSection icon={FileBadge2} title={copy.basicsTitle} help={copy.basicsHelp}>
            <ChoiceField
              label={language === "es" ? "¿Qué tipo de solicitud es?" : "What kind of application is this?"}
              value={draft.applicationReason}
              onChange={(value) => updateDraft(setDraft, "applicationReason", value)}
              options={[
                { value: "new", label: language === "es" ? "Nueva" : "New application" },
                { value: "renewal", label: language === "es" ? "Renovación" : "Renewal" },
                { value: "change", label: language === "es" ? "Cambio de datos" : "Change of particulars" },
                { value: "damaged", label: language === "es" ? "Dañada" : "Destroyed / damaged" },
                { value: "lost", label: language === "es" ? "Perdida o robada" : "Lost / stolen" },
              ]}
              error={validationErrors.applicationReason}
              fieldKey="applicationReason"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label={language === "es" ? "Número personal de la tarjeta actual" : "Current ID personal number"}
              help={language === "es" ? "Solo si ya tenía tarjeta" : "Only if there is one already"}
              value={draft.currentIdNumber}
              onChange={(value) => updateDraft(setDraft, "currentIdNumber", value)}
            />
            <ChoiceField
              label={language === "es" ? "¿Es para un adulto o un menor?" : "Is this for an adult or a child?"}
              value={draft.applicantType}
              onChange={(value) => updateDraft(setDraft, "applicantType", value)}
              options={[
                { value: "adult", label: language === "es" ? "Adulto" : "Adult" },
                { value: "child", label: language === "es" ? "Menor" : "Child" },
              ]}
              error={validationErrors.applicantType}
              fieldKey="applicantType"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <ChoiceField
              label={language === "es" ? "Tratamiento" : "Title"}
              value={draft.title}
              onChange={(value) => updateDraft(setDraft, "title", value)}
              options={[
                { value: "mr", label: "Mr" },
                { value: "mrs", label: "Mrs" },
                { value: "miss", label: "Miss" },
                { value: "master", label: "Master" },
                { value: "other", label: language === "es" ? "Otro" : "Other" },
              ]}
              error={validationErrors.title}
              fieldKey="title"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            {draft.title === "other" ? (
              <Field
                label={language === "es" ? "Escribe el tratamiento" : "Write the title"}
                value={draft.otherTitle}
                onChange={(value) => updateDraft(setDraft, "otherTitle", value)}
                error={validationErrors.otherTitle}
                fieldKey="otherTitle"
                registerRef={registerFieldRef}
                showValidationErrors={showValidationErrors}
              />
            ) : null}
            <Field
              label={language === "es" ? "Nombre completo tal como sale en el pasaporte o tarjeta" : "Full name as shown in passport or ID card"}
              value={draft.fullName}
              onChange={(value) => updateDraft(setDraft, "fullName", value)}
              error={validationErrors.fullName}
              fieldKey="fullName"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
          </QuestionSection>

          <QuestionSection icon={UserRound} title={copy.detailsTitle} help={copy.detailsHelp}>
            <Field
              label={language === "es" ? "Apellidos de soltera o anteriores" : "Maiden or previous names"}
              help={language === "es" ? "Solo si aplica" : "Only if it applies"}
              value={draft.maidenOrPreviousNames}
              onChange={(value) => updateDraft(setDraft, "maidenOrPreviousNames", value)}
            />
            <ChoiceField
              label={language === "es" ? "Sexo" : "Gender"}
              value={draft.gender}
              onChange={(value) => updateDraft(setDraft, "gender", value)}
              options={[
                { value: "male", label: language === "es" ? "Masculino" : "Male" },
                { value: "female", label: language === "es" ? "Femenino" : "Female" },
              ]}
              error={validationErrors.gender}
              fieldKey="gender"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <DateField
              label={language === "es" ? "Fecha de nacimiento" : "Date of birth"}
              value={draft.dateOfBirth}
              onChange={(value) => updateDraft(setDraft, "dateOfBirth", value)}
              error={validationErrors.dateOfBirth}
              fieldKey="dateOfBirth"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label={language === "es" ? "Altura (cm)" : "Height (cm)"}
              value={draft.heightCm}
              onChange={(value) => updateDraft(setDraft, "heightCm", value.replace(/\D/g, "").slice(0, 3))}
              inputMode="numeric"
            />
            <Field
              label={language === "es" ? "Color de ojos" : "Eye colour"}
              value={draft.eyeColour}
              onChange={(value) => updateDraft(setDraft, "eyeColour", value)}
            />
            <Field
              label={language === "es" ? "Lugar de nacimiento" : "Place of birth"}
              value={draft.placeOfBirth}
              onChange={(value) => updateDraft(setDraft, "placeOfBirth", value)}
              error={validationErrors.placeOfBirth}
              fieldKey="placeOfBirth"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label={language === "es" ? "País de nacimiento" : "Country of birth"}
              value={draft.countryOfBirth}
              onChange={(value) => updateDraft(setDraft, "countryOfBirth", value)}
              error={validationErrors.countryOfBirth}
              fieldKey="countryOfBirth"
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
              label={language === "es" ? "Dirección de residencia" : "Residential address"}
              value={draft.residentialAddress}
              onChange={(value) => updateDraft(setDraft, "residentialAddress", value.slice(0, 52))}
              multiline
              multilineRows={4}
              error={validationErrors.residentialAddress}
              fieldKey="residentialAddress"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <ChoiceField
              label={language === "es" ? "Tipo de alojamiento" : "Type of accommodation"}
              value={draft.accommodationType}
              onChange={(value) => updateDraft(setDraft, "accommodationType", value)}
              options={[
                { value: "owner", label: language === "es" ? "Propia" : "Owner occupied" },
                { value: "private", label: language === "es" ? "Alquiler privado" : "Privately rented" },
                { value: "government", label: language === "es" ? "Gobierno" : "Government rented" },
              ]}
              error={validationErrors.accommodationType}
              fieldKey="accommodationType"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label={language === "es" ? "Teléfono fijo" : "Telephone number (home)"}
              value={draft.homePhone}
              onChange={(value) => updateDraft(setDraft, "homePhone", sanitizePhone(value))}
            />
            <Field
              label={language === "es" ? "Móvil" : "Telephone number (mobile)"}
              value={draft.mobilePhone}
              onChange={(value) => updateDraft(setDraft, "mobilePhone", sanitizePhone(value))}
              error={validationErrors.mobilePhone}
              fieldKey="mobilePhone"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            <Field
              label={language === "es" ? "Correo electrónico" : "Email address"}
              value={draft.email}
              onChange={(value) => updateDraft(setDraft, "email", value)}
              type="email"
              error={validationErrors.email}
              fieldKey="email"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
          </QuestionSection>

          {isChildUnder15 ? (
            <QuestionSection icon={Users} title={copy.parentsTitle} help={copy.parentsHelp}>
              <Field
                label={language === "es" ? "Padre/madre/tutor 1 - nombre completo" : "Parent/guardian 1 - full name"}
                value={draft.parent1.fullName}
                onChange={(value) => updateNestedDraft(setDraft, "parent1", "fullName", value)}
                error={validationErrors["parent1.fullName"]}
                fieldKey="parent1.fullName"
                registerRef={registerFieldRef}
                showValidationErrors={showValidationErrors}
              />
              <Field
                label={language === "es" ? "Padre/madre/tutor 1 - lugar y país de nacimiento" : "Parent/guardian 1 - place & country of birth"}
                value={draft.parent1.placeCountryBirth}
                onChange={(value) => updateNestedDraft(setDraft, "parent1", "placeCountryBirth", value)}
                error={validationErrors["parent1.placeCountryBirth"]}
                fieldKey="parent1.placeCountryBirth"
                registerRef={registerFieldRef}
                showValidationErrors={showValidationErrors}
              />
              <DateField
                label={language === "es" ? "Padre/madre/tutor 1 - fecha de nacimiento" : "Parent/guardian 1 - date of birth"}
                value={draft.parent1.dateOfBirth}
                onChange={(value) => updateNestedDraft(setDraft, "parent1", "dateOfBirth", value)}
                error={validationErrors["parent1.dateOfBirth"]}
                fieldKey="parent1.dateOfBirth"
                registerRef={registerFieldRef}
                showValidationErrors={showValidationErrors}
              />
              <Field
                label={language === "es" ? "Padre/madre/tutor 1 - número de tarjeta" : "Parent/guardian 1 - current ID personal number"}
                value={draft.parent1.currentIdNumber}
                onChange={(value) => updateNestedDraft(setDraft, "parent1", "currentIdNumber", value)}
              />
              <ChoiceField
                label={language === "es" ? "¿Añadir un segundo padre/tutor?" : "Add a second parent/guardian?"}
                value={draft.addSecondParent}
                onChange={(value) => updateDraft(setDraft, "addSecondParent", value)}
                options={[
                  { value: "no", label: language === "es" ? "No" : "No" },
                  { value: "yes", label: language === "es" ? "Sí" : "Yes" },
                ]}
              />
              {draft.addSecondParent === "yes" ? (
                <>
                  <Field
                    label={language === "es" ? "Padre/madre/tutor 2 - nombre completo" : "Parent/guardian 2 - full name"}
                    value={draft.parent2.fullName}
                    onChange={(value) => updateNestedDraft(setDraft, "parent2", "fullName", value)}
                  />
                  <Field
                    label={language === "es" ? "Padre/madre/tutor 2 - lugar y país de nacimiento" : "Parent/guardian 2 - place & country of birth"}
                    value={draft.parent2.placeCountryBirth}
                    onChange={(value) => updateNestedDraft(setDraft, "parent2", "placeCountryBirth", value)}
                  />
                  <DateField
                    label={language === "es" ? "Padre/madre/tutor 2 - fecha de nacimiento" : "Parent/guardian 2 - date of birth"}
                    value={draft.parent2.dateOfBirth}
                    onChange={(value) => updateNestedDraft(setDraft, "parent2", "dateOfBirth", value)}
                  />
                  <Field
                    label={language === "es" ? "Padre/madre/tutor 2 - número de tarjeta" : "Parent/guardian 2 - current ID personal number"}
                    value={draft.parent2.currentIdNumber}
                    onChange={(value) => updateNestedDraft(setDraft, "parent2", "currentIdNumber", value)}
                  />
                </>
              ) : null}
            </QuestionSection>
          ) : null}

          <QuestionSection icon={HeartHandshake} title={copy.partnerTitle} help={copy.partnerHelp}>
            <ChoiceField
              label={language === "es" ? "Estado de la relación" : "Relationship status"}
              value={draft.relationshipStatus}
              onChange={(value) => updateDraft(setDraft, "relationshipStatus", value)}
              options={[
                { value: "single", label: language === "es" ? "Soltero/a" : "Single" },
                { value: "married", label: language === "es" ? "Casado/a" : "Married" },
                { value: "civil-partner", label: language === "es" ? "Pareja civil" : "Civil partner" },
                { value: "unmarried-partner", label: language === "es" ? "Pareja no casada" : "Unmarried partner" },
                { value: "surviving-civil-partner", label: language === "es" ? "Pareja civil superviviente" : "Surviving civil partner" },
                { value: "separated", label: language === "es" ? "Separado/a" : "Separated" },
                { value: "widowed", label: language === "es" ? "Viudo/a" : "Widow / widower" },
                { value: "divorced", label: language === "es" ? "Divorciado/a" : "Divorced / dissolved" },
              ]}
            />
            {draft.relationshipStatus && draft.relationshipStatus !== "single" ? (
              <>
                <Field
                  label={language === "es" ? "Apellido de cónyuge/pareja civil" : "Surname of spouse/civil partner"}
                  value={draft.spouseSurname}
                  onChange={(value) => updateDraft(setDraft, "spouseSurname", value)}
                  error={validationErrors.spouseSurname}
                  fieldKey="spouseSurname"
                  registerRef={registerFieldRef}
                  showValidationErrors={showValidationErrors}
                />
                <Field
                  label={language === "es" ? "Nombre" : "First name"}
                  value={draft.spouseFirstName}
                  onChange={(value) => updateDraft(setDraft, "spouseFirstName", value)}
                  error={validationErrors.spouseFirstName}
                  fieldKey="spouseFirstName"
                  registerRef={registerFieldRef}
                  showValidationErrors={showValidationErrors}
                />
                <Field
                  label={language === "es" ? "Apellido de soltera" : "Maiden name"}
                  help={language === "es" ? "Solo si aplica" : "Only if it applies"}
                  value={draft.spouseMaidenName}
                  onChange={(value) => updateDraft(setDraft, "spouseMaidenName", value)}
                />
              </>
            ) : null}
          </QuestionSection>

          <QuestionSection icon={IdCard} title={copy.gibraltarianTitle} help={copy.gibraltarianHelp}>
            <ChoiceField
              label={language === "es" ? "¿Es gibraltareño/a registrado/a?" : "Is the applicant a registered Gibraltarian?"}
              value={draft.registeredGibraltarian}
              onChange={(value) => updateDraft(setDraft, "registeredGibraltarian", value)}
              options={[
                { value: "yes", label: language === "es" ? "Sí" : "Yes" },
                { value: "no", label: language === "es" ? "No" : "No" },
              ]}
            />
            {draft.registeredGibraltarian === "yes" ? (
              <Field
                label={language === "es" ? "Número de entrada en el Registro de Gibraltareños" : "Register of Gibraltarians entry number"}
                value={draft.gibraltarianEntryNumber}
                onChange={(value) => updateDraft(setDraft, "gibraltarianEntryNumber", value)}
                error={validationErrors.gibraltarianEntryNumber}
                fieldKey="gibraltarianEntryNumber"
                registerRef={registerFieldRef}
                showValidationErrors={showValidationErrors}
              />
            ) : null}
            {isChildUnder15 ? (
              <>
                <ChoiceField
                  label={language === "es" ? "¿Quién firma por el menor?" : "Who is signing for the child?"}
                  value={draft.signerRole}
                  onChange={(value) => updateDraft(setDraft, "signerRole", value)}
                  options={[
                    { value: "parent1", label: language === "es" ? "Padre/madre/tutor 1" : "Parent / guardian 1" },
                    { value: "parent2", label: language === "es" ? "Padre/madre/tutor 2" : "Parent / guardian 2" },
                    { value: "guardian", label: language === "es" ? "Otro tutor" : "Another guardian" },
                    { value: "other", label: language === "es" ? "Otra persona" : "Other signer" },
                  ]}
                  error={validationErrors.signerRole}
                  fieldKey="signerRole"
                  registerRef={registerFieldRef}
                  showValidationErrors={showValidationErrors}
                />
                {(draft.signerRole === "guardian" || draft.signerRole === "other") ? (
                  <Field
                    label={language === "es" ? "Nombre completo de quien firma" : "Full name of the person signing"}
                    value={draft.signerName}
                    onChange={(value) => updateDraft(setDraft, "signerName", value)}
                    error={validationErrors.signerName}
                    fieldKey="signerName"
                    registerRef={registerFieldRef}
                    showValidationErrors={showValidationErrors}
                  />
                ) : null}
              </>
            ) : null}
            <SignatureField
              label={language === "es" ? "Firma" : "Signature"}
              help={copy.signatureHelp}
              value={draft.signatureDataUrl}
              onChange={(value) => updateDraft(setDraft, "signatureDataUrl", value)}
              language={language}
            />
          </QuestionSection>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-salmon/30 bg-[#fff5f4] p-5">
          <p className="font-bold text-navy">{copy.checklistTitle}</p>
          <p className="mt-2 font-sans text-sm leading-7 text-navy/68">{copy.checklistIntro}</p>
          <button
            type="button"
            onClick={() => setShowChecklistModal(true)}
            className="mt-3 font-sans text-sm font-medium text-salmon underline decoration-salmon/40 underline-offset-4"
          >
            {copy.checklistLink}
          </button>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button type="button" className="gap-2" onClick={handleDownload} disabled={isDownloading}>
            {isDownloading ? <LoaderCircle className="size-4 animate-spin" /> : <Download className="size-4" />}
            {copy.downloadButton}
          </Button>
          <Button type="button" variant="outline" className="gap-2" onClick={clearDraft}>
            <X className="size-4" />
            {copy.clearButton}
          </Button>
        </div>
      </section>

      {showChecklistModal ? (
        <RockyModal
          onClose={() => setShowChecklistModal(false)}
          actions={
            <Button type="button" onClick={() => setShowChecklistModal(false)}>
              {copy.gotIt}
            </Button>
          }
        >
          <h3 className="text-center text-3xl font-bold leading-tight text-navy">{copy.checklistModalTitle}</h3>
          <ul className="mt-4 space-y-4 font-sans text-lg leading-8 text-navy/78">
            {copy.checklistBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-4">
                <span className="mt-[0.65rem] h-2 w-2 shrink-0 rounded-full bg-salmon" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </RockyModal>
      ) : null}
    </>
  );
}

async function drawIdentityPdf(
  pdfDoc: PDFDocument,
  pages: PDFPage[],
  font: PDFFont,
  boldFont: PDFFont,
  draft: IdentityCardDraft,
  age: number | null
) {
  const dark = rgb(0.12, 0.15, 0.22);
  const upper = (value: string) => value.trim().toUpperCase();
  const page1 = pages[0];
  const page2 = pages[1];
  const page3 = pages[2];

  drawCheckbox(page1, 191.2, 485.5, draft.applicationReason === "new", boldFont);
  drawCheckbox(page1, 361.2, 485.5, draft.applicationReason === "change", boldFont);
  drawCheckbox(page1, 538.1, 485.5, draft.applicationReason === "damaged", boldFont);
  drawCheckbox(page1, 191.2, 466.4, draft.applicationReason === "renewal", boldFont);
  drawCheckbox(page1, 361.2, 466.4, draft.applicationReason === "lost", boldFont);
  drawBoxText(page1, upper(draft.currentIdNumber), 46.5, 403.5, 18.05, 32, font);

  drawCheckbox(page1, 84.7, 337.6, draft.applicantType === "adult", boldFont);
  drawCheckbox(page1, 151.3, 337.6, draft.applicantType === "child", boldFont);
  drawBoxText(page1, age !== null ? String(age).slice(0, 3) : "", 301.5, 339.2, 18.2, 3, font, 11);
  drawCheckbox(page1, 84.6, 298.4, draft.title === "mr", boldFont);
  drawCheckbox(page1, 139.4, 298.4, draft.title === "mrs", boldFont);
  drawCheckbox(page1, 194.3, 298.4, draft.title === "miss", boldFont);
  drawCheckbox(page1, 267.4, 298.4, draft.title === "master", boldFont);
  drawText(page1, draft.title === "other" ? upper(draft.otherTitle) : "", 333, 295.5, font, 10, 85);
  drawBoxTextRows(page1, upper(draft.fullName), 46.5, 256.5, 18.05, 32, 2, 30.8, font);

  drawBoxText(page2, upper(draft.maidenOrPreviousNames), 46.5, 764.5, 18.05, 26, font);
  drawCheckbox(page2, 84.7, 725.9, draft.gender === "male", boldFont);
  drawCheckbox(page2, 151.3, 725.9, draft.gender === "female", boldFont);
  drawDateDigits(page2, draft.dateOfBirth, [48.2, 67.3, 103.6, 124, 161.4, 180, 198.5, 217.1], 687.5, font);
  drawBoxText(page2, draft.heightCm.replace(/\D/g, "").slice(0, 3), 270.5, 682.8, 18.2, 4, font);
  drawBoxText(page2, upper(draft.eyeColour), 383.5, 682.8, 18.15, 10, font);
  drawBoxText(page2, upper(draft.placeOfBirth), 46.5, 641.8, 18.05, 26, font);
  drawBoxText(page2, upper(draft.countryOfBirth), 46.5, 600.7, 18.05, 26, font);
  drawBoxText(page2, upper(draft.nationality), 46.5, 559.6, 18.05, 26, font);
  drawBoxTextRows(page2, upper(draft.residentialAddress), 46.5, 518.5, 18.05, 26, 2, 15.8, font);
  drawCheckbox(page2, 140, 459.8, draft.accommodationType === "owner", boldFont);
  drawCheckbox(page2, 253.6, 459.8, draft.accommodationType === "private", boldFont);
  drawCheckbox(page2, 381.1, 459.8, draft.accommodationType === "government", boldFont);
  drawBoxText(page2, draft.homePhone.replace(/\s+/g, ""), 46.5, 417.8, 18.15, 10, font);
  drawBoxText(page2, draft.mobilePhone.replace(/\s+/g, ""), 301.7, 417.8, 18.15, 11, font);
  drawText(page2, draft.email, 42.5, 377, font, 10, 500);

  if (draft.applicantType === "child" && age !== null && age < 15) {
    drawBoxText(page2, upper(draft.parent1.fullName), 46.5, 310.3, 18.05, 26, font);
    drawBoxText(page2, upper(draft.parent1.placeCountryBirth), 46.5, 269.2, 18.05, 26, font);
    drawDateDigits(page2, draft.parent1.dateOfBirth, [48.2, 67.3, 103.6, 124, 161.4, 180, 198.5, 217.1], 226.5, font);
    drawBoxText(page2, upper(draft.parent1.currentIdNumber), 46.5, 187, 18.05, 26, font);
    drawBoxText(page2, upper(draft.parent2.fullName), 46.5, 145.9, 18.05, 26, font);
    drawBoxText(page2, upper(draft.parent2.placeCountryBirth), 46.5, 104.8, 18.05, 26, font);

    drawDateDigits(page3, draft.parent2.dateOfBirth, [48.2, 67.3, 103.6, 124, 161.4, 180, 198.5, 217.1], 748.5, font);
    drawBoxText(page3, upper(draft.parent2.currentIdNumber), 46.5, 703, 18.05, 26, font);
  }

  drawCheckbox(page3, 161.4, 641.8, draft.relationshipStatus === "single", boldFont);
  drawCheckbox(page3, 366.8, 641.8, draft.relationshipStatus === "married", boldFont);
  drawCheckbox(page3, 537, 641.8, draft.relationshipStatus === "civil-partner", boldFont);
  drawCheckbox(page3, 161.4, 622.6, draft.relationshipStatus === "unmarried-partner", boldFont);
  drawCheckbox(page3, 366.8, 622.6, draft.relationshipStatus === "surviving-civil-partner", boldFont);
  drawCheckbox(page3, 537, 622.6, draft.relationshipStatus === "separated", boldFont);
  drawCheckbox(page3, 161.4, 603.5, draft.relationshipStatus === "widowed", boldFont);
  drawCheckbox(page3, 366.8, 603.5, draft.relationshipStatus === "divorced", boldFont);
  drawBoxText(page3, upper(draft.spouseSurname), 46.5, 562.8, 18.05, 26, font);
  drawBoxText(page3, upper(draft.spouseFirstName), 46.5, 521.7, 18.05, 26, font);
  drawBoxText(page3, upper(draft.spouseMaidenName), 46.5, 480.6, 18.05, 26, font);

  drawCheckbox(page3, 84.7, 416.8, draft.registeredGibraltarian === "yes", boldFont);
  drawCheckbox(page3, 140, 416.8, draft.registeredGibraltarian === "no", boldFont);
  drawBoxText(page3, upper(draft.gibraltarianEntryNumber), 400.5, 416.5, 21.7, 5, font);

  drawText(page3, upper(getSignerFullName(draft, age)), 158, 350.3, font, 8.2, 120);
  drawCheckbox(page3, 487.4, 209.8, true, boldFont);
  drawDateDigits(
    page3,
    new Date().toLocaleDateString("en-GB"),
    [377, 396.2, 426.4, 446.8, 478.2, 496.7, 515.2, 533.6],
    174.2,
    font
  );

  if (draft.signatureDataUrl) {
    await drawSignatureImage(pdfDoc, page1, draft.signatureDataUrl, { x: 220, y: 52, width: 284, height: 58 });
    await drawSignatureImage(pdfDoc, page3, draft.signatureDataUrl, { x: 65, y: 150, width: 250, height: 54 });
  }

  page3.drawText("", { x: 0, y: 0, size: 1, font, color: dark });
}

function QuestionSection({
  icon: Icon,
  title,
  help,
  children,
}: {
  icon: typeof UserRound;
  title: string;
  help: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[1.5rem] border border-navy/8 bg-[#fffdfa] p-5 shadow-[0_10px_28px_rgba(45,56,77,0.06)]">
      <div className="flex items-start gap-3">
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-beige text-salmon">
          <Icon className="size-5" />
        </span>
        <div>
          <h2 className="text-2xl font-bold leading-tight text-navy">{title}</h2>
          <p className="mt-2 font-sans text-sm leading-7 text-navy/66">{help}</p>
        </div>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  );
}

function Field({
  label,
  help,
  value,
  onChange,
  multiline = false,
  multilineRows = 4,
  type = "text",
  inputMode,
  error,
  fieldKey,
  registerRef,
  showValidationErrors,
}: {
  label: string;
  help?: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  multilineRows?: number;
  type?: "text" | "email";
  inputMode?: React.InputHTMLAttributes<HTMLInputElement>["inputMode"];
  error?: string;
  fieldKey?: string;
  registerRef?: (name: string) => (node: HTMLElement | null) => void;
  showValidationErrors?: boolean;
}) {
  const showErrorGlow = Boolean(showValidationErrors && error);
  return (
    <label ref={fieldKey && registerRef ? registerRef(fieldKey) : undefined} className="block">
      <span className="flex min-h-6 items-baseline gap-2 text-sm font-semibold text-navy">
        <span>{label}</span>
        {help && !multiline ? <span className="font-sans text-xs font-normal leading-5 text-navy/52">({help})</span> : null}
      </span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value.replace(/\r/g, ""))}
          rows={multilineRows}
          className={`mt-2 w-full resize-none rounded-[1rem] border border-navy/10 bg-white px-4 py-3 font-sans text-base text-navy outline-none transition-colors focus:border-salmon ${
            showErrorGlow ? "ring-2 ring-salmon/80 shadow-[0_0_0_6px_rgba(241,155,154,0.18)]" : ""
          }`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          inputMode={inputMode}
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
    <label ref={fieldKey && registerRef ? registerRef(fieldKey) : undefined} className="block">
      <span className="text-sm font-semibold text-navy">{label}</span>
      <div className={`mt-2 flex items-center gap-2 rounded-[1rem] ${showErrorGlow ? "ring-2 ring-salmon/80 shadow-[0_0_0_6px_rgba(241,155,154,0.18)]" : ""}`}>
        <DateInputBox value={parts[0]} onChange={(nextValue) => updatePart(0, nextValue)} placeholder="DD" maxLength={2} />
        <span className="font-sans text-lg text-navy/46">/</span>
        <DateInputBox value={parts[1]} onChange={(nextValue) => updatePart(1, nextValue)} placeholder="MM" maxLength={2} />
        <span className="font-sans text-lg text-navy/46">/</span>
        <DateInputBox value={parts[2]} onChange={(nextValue) => updatePart(2, nextValue)} placeholder="YYYY" maxLength={4} year />
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
    <div ref={fieldKey && registerRef ? registerRef(fieldKey) : undefined} className="block md:col-span-2">
      <span className="text-sm font-semibold text-navy">{label}</span>
      <div className={`mt-2 flex flex-wrap gap-3 rounded-[1rem] ${showErrorGlow ? "ring-2 ring-salmon/80 shadow-[0_0_0_6px_rgba(241,155,154,0.18)]" : ""}`}>
        {options.map((option) => {
          const isActive = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${
                isActive ? "bg-navy text-beige" : "border border-navy/10 bg-white text-navy hover:bg-beige"
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

function SignatureField({
  label,
  help,
  value,
  onChange,
  language,
}: {
  label: string;
  help: string;
  value: string;
  onChange: (value: string) => void;
  language: "en" | "es";
}) {
  return (
    <div className="md:col-span-2 rounded-[1.25rem] border border-navy/8 bg-white p-4">
      <p className="text-sm font-semibold text-navy">{label}</p>
      <p className="mt-1 font-sans text-sm leading-6 text-navy/60">{help}</p>
      <div className="mt-3 flex flex-wrap gap-3">
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 font-sans text-sm font-medium text-navy transition-colors hover:bg-beige">
          <Upload className="size-4" />
          <span>{language === "es" ? "Subir firma" : "Upload signature"}</span>
          <input type="file" accept="image/png,image/jpeg" className="hidden" onChange={(event) => handleSignatureUpload(event, onChange)} />
        </label>
        <Button type="button" variant="outline" className="gap-1.5 font-sans text-sm font-medium" onClick={() => onChange("")}>
          <X className="size-4" />
          {language === "es" ? "Borrar firma" : "Clear signature"}
        </Button>
      </div>
      <div className="mt-4">
        <SignaturePad value={value} onChange={onChange} />
      </div>
    </div>
  );
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
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    if (!value) return;
    const image = new window.Image();
    image.onload = () => {
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      const scale = Math.min(canvas.width / image.width, canvas.height / image.height);
      const drawWidth = image.width * scale;
      const drawHeight = image.height * scale;
      const x = (canvas.width - drawWidth) / 2;
      const y = (canvas.height - drawHeight) / 2;
      context.drawImage(image, x, y, drawWidth, drawHeight);
    };
    image.src = value;
  }, [value]);

  function getPoint(event: ReactPointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    if (!canvas) return null;
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
    if (!canvas || !context || !point) return;
    isDrawingRef.current = true;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = 3;
    context.strokeStyle = "#2d384d";
    context.beginPath();
    context.moveTo(point.x, point.y);
  }

  function draw(event: ReactPointerEvent<HTMLCanvasElement>) {
    if (!isDrawingRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const point = getPoint(event);
    if (!canvas || !context || !point) return;
    context.lineTo(point.x, point.y);
    context.stroke();
  }

  function stopDrawing() {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    const canvas = canvasRef.current;
    if (!canvas) return;
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
        className="w-full max-w-[40rem] rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_24px_80px_rgba(45,56,77,0.18)] md:p-8"
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

function updateDraft<K extends keyof IdentityCardDraft>(
  setDraft: Dispatch<SetStateAction<IdentityCardDraft>>,
  key: K,
  value: IdentityCardDraft[K]
) {
  setDraft((current) => ({ ...current, [key]: value }));
}

function updateNestedDraft<K extends keyof Pick<IdentityCardDraft, "parent1" | "parent2">, P extends keyof ParentDraft>(
  setDraft: Dispatch<SetStateAction<IdentityCardDraft>>,
  key: K,
  prop: P,
  value: ParentDraft[P]
) {
  setDraft((current) => ({
    ...current,
    [key]: {
      ...current[key],
      [prop]: value,
    },
  }));
}

function getValidationErrors(draft: IdentityCardDraft, language: "en" | "es") {
  const errors: Record<string, string> = {};
  const message = (en: string, es: string) => (language === "es" ? es : en);
  const age = getAgeFromDate(draft.dateOfBirth);
  const isChildUnder15 = draft.applicantType === "child" && age !== null && age < 15;

  if (!draft.applicationReason) errors.applicationReason = message("Choose the reason for applying.", "Elige el motivo de la solicitud.");
  if (!draft.applicantType) errors.applicantType = message("Choose whether this is for an adult or child.", "Elige si es para un adulto o un menor.");
  if (!draft.title) errors.title = message("Choose a title.", "Elige un tratamiento.");
  if (draft.title === "other" && !draft.otherTitle.trim()) errors.otherTitle = message("Add the title.", "Añade el tratamiento.");
  if (!draft.fullName.trim()) errors.fullName = message("Add the full name.", "Añade el nombre completo.");
  if (!draft.gender) errors.gender = message("Choose a gender.", "Elige el sexo.");
  if (!draft.dateOfBirth.trim()) errors.dateOfBirth = message("Add the date of birth.", "Añade la fecha de nacimiento.");
  const dobError = getDateError(draft.dateOfBirth, language);
  if (dobError) errors.dateOfBirth = dobError;
  if (!draft.placeOfBirth.trim()) errors.placeOfBirth = message("Add the place of birth.", "Añade el lugar de nacimiento.");
  if (!draft.countryOfBirth.trim()) errors.countryOfBirth = message("Add the country of birth.", "Añade el país de nacimiento.");
  if (!draft.nationality.trim()) errors.nationality = message("Add the nationality.", "Añade la nacionalidad.");
  if (!draft.residentialAddress.trim()) errors.residentialAddress = message("Add the address.", "Añade la dirección.");
  if (!draft.accommodationType) errors.accommodationType = message("Choose the accommodation type.", "Elige el tipo de alojamiento.");
  if (!draft.mobilePhone.trim()) errors.mobilePhone = message("Add a mobile number.", "Añade un móvil.");
  const emailError = getEmailError(draft.email, language);
  if (emailError) errors.email = emailError;

  if (isChildUnder15) {
    if (!draft.parent1.fullName.trim()) errors["parent1.fullName"] = message("Add the first parent or guardian's name.", "Añade el nombre del primer padre, madre o tutor.");
    if (!draft.parent1.placeCountryBirth.trim()) errors["parent1.placeCountryBirth"] = message("Add the first parent or guardian's place and country of birth.", "Añade el lugar y país de nacimiento del primer padre, madre o tutor.");
    const parent1DobError = getDateError(draft.parent1.dateOfBirth, language);
    if (parent1DobError) errors["parent1.dateOfBirth"] = parent1DobError;
    if (!draft.signerRole) errors.signerRole = message("Choose who is signing for the child.", "Elige quién firma por el menor.");
    if ((draft.signerRole === "guardian" || draft.signerRole === "other") && !draft.signerName.trim()) {
      errors.signerName = message("Add the signer's full name.", "Añade el nombre completo de quien firma.");
    }
  }

  if (draft.relationshipStatus && draft.relationshipStatus !== "single") {
    if (!draft.spouseSurname.trim()) errors.spouseSurname = message("Add the spouse or partner surname.", "Añade el apellido del cónyuge o pareja.");
    if (!draft.spouseFirstName.trim()) errors.spouseFirstName = message("Add the spouse or partner first name.", "Añade el nombre del cónyuge o pareja.");
  }

  if (draft.registeredGibraltarian === "yes" && !draft.gibraltarianEntryNumber.trim()) {
    errors.gibraltarianEntryNumber = message("Add the register entry number if you have it.", "Añade el número de registro si lo tienes.");
  }

  return errors;
}

function getAgeFromDate(value: string) {
  const [day, month, year] = splitDateParts(value);
  if (day.length !== 2 || month.length !== 2 || year.length !== 4) return null;
  const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
  if (Number.isNaN(birthDate.getTime())) return null;
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
}

function getSignerFullName(draft: IdentityCardDraft, age: number | null) {
  if (!(draft.applicantType === "child" && age !== null && age < 15)) {
    return draft.fullName;
  }
  if (draft.signerRole === "parent1") return draft.parent1.fullName;
  if (draft.signerRole === "parent2") return draft.parent2.fullName;
  return draft.signerName;
}

function getEmailError(value: string, language: "en" | "es") {
  if (!value.trim()) {
    return language === "es" ? "Añade un correo electrónico." : "Add an email address.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
    return language === "es" ? "Pon un correo válido." : "Use a valid email address.";
  }
  return "";
}

function getDateError(value: string, language: "en" | "es") {
  if (!value.trim()) {
    return language === "es" ? "Añade la fecha." : "Add the date.";
  }
  const [day, month, year] = splitDateParts(value);
  if (day.length !== 2 || month.length !== 2 || year.length !== 4) {
    return language === "es" ? "Pon la fecha completa." : "Use the full date.";
  }
  const parsedDate = new Date(Number(year), Number(month) - 1, Number(day));
  if (
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate.getFullYear() !== Number(year) ||
    parsedDate.getMonth() !== Number(month) - 1 ||
    parsedDate.getDate() !== Number(day)
  ) {
    return language === "es" ? "La fecha no parece válida." : "That date does not look valid.";
  }
  return "";
}

function splitDateParts(value: string): [string, string, string] {
  const cleaned = value.replace(/\D/g, "").slice(0, 8);
  return [cleaned.slice(0, 2), cleaned.slice(2, 4), cleaned.slice(4, 8)];
}

function joinDateParts(parts: [string, string, string]) {
  const [day, month, year] = parts;
  if (!day && !month && !year) return "";
  return `${day}/${month}/${year}`;
}

function sanitizePhone(value: string) {
  const trimmed = value.replace(/[^\d+\s()-]/g, "");
  const plusAtStart = trimmed.startsWith("+");
  const withoutPluses = trimmed.replace(/\+/g, "");
  return plusAtStart ? `+${withoutPluses}` : withoutPluses;
}

function base64ToUint8Array(value: string) {
  const binaryString = window.atob(value);
  const bytes = new Uint8Array(binaryString.length);
  for (let index = 0; index < binaryString.length; index += 1) {
    bytes[index] = binaryString.charCodeAt(index);
  }
  return bytes;
}

function drawText(page: PDFPage, value: string, x: number, y: number, font: PDFFont, size = 10, maxWidth?: number) {
  if (!value.trim()) return;
  page.drawText(value, {
    x,
    y,
    size,
    font,
    color: rgb(0.12, 0.15, 0.22),
    maxWidth,
  });
}

function drawBoxText(
  page: PDFPage,
  value: string,
  startX: number,
  y: number,
  step: number,
  boxCount: number,
  font: PDFFont,
  size = 10
) {
  if (!value.trim()) return;
  const chars = value.slice(0, boxCount).split("");
  chars.forEach((char, index) => {
    page.drawText(char, {
      x: startX + index * step,
      y,
      size,
      font,
      color: rgb(0.12, 0.15, 0.22),
    });
  });
}

function drawBoxTextRows(
  page: PDFPage,
  value: string,
  startX: number,
  startY: number,
  step: number,
  boxCount: number,
  rowCount: number,
  rowGap: number,
  font: PDFFont,
  size = 10
) {
  if (!value.trim()) return;
  for (let row = 0; row < rowCount; row += 1) {
    const sliceStart = row * boxCount;
    const sliceEnd = sliceStart + boxCount;
    drawBoxText(page, value.slice(sliceStart, sliceEnd), startX, startY - row * rowGap, step, boxCount, font, size);
  }
}

function drawCheckbox(page: PDFPage, x: number, y: number, checked: boolean, font: PDFFont) {
  if (!checked) return;
  page.drawText("X", {
    x,
    y,
    size: 11,
    font,
    color: rgb(0.12, 0.15, 0.22),
  });
}

function drawDateDigits(page: PDFPage, value: string, xs: number[], y: number, font: PDFFont) {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  xs.forEach((x, index) => {
    const digit = digits[index];
    if (!digit) return;
    page.drawText(digit, {
      x,
      y,
      size: 10.5,
      font,
      color: rgb(0.12, 0.15, 0.22),
    });
  });
}

async function drawSignatureImage(
  pdfDoc: PDFDocument,
  page: PDFPage,
  dataUrl: string,
  box: { x: number; y: number; width: number; height: number }
) {
  const image = dataUrl.startsWith("data:image/jpeg")
    ? await pdfDoc.embedJpg(dataUrl)
    : await pdfDoc.embedPng(dataUrl);
  const maxWidth = box.width - 8;
  const maxHeight = box.height - 6;
  const scale = Math.min(maxWidth / image.width, maxHeight / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  const x = box.x + (box.width - drawWidth) / 2;
  const y = box.y + (box.height - drawHeight) / 2;

  page.drawImage(image, { x, y, width: drawWidth, height: drawHeight });
  page.drawImage(image, { x: x + 0.35, y, width: drawWidth, height: drawHeight, opacity: 0.7 });
}

async function handleSignatureUpload(
  event: ChangeEvent<HTMLInputElement>,
  onChange: (value: string) => void
) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => onChange(String(reader.result ?? ""));
  reader.readAsDataURL(file);
  event.target.value = "";
}
