"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  FilePenLine,
  LoaderCircle,
  Lock,
  Mailbox,
  PenLine,
  ShieldCheck,
  Upload,
  UserRound,
  Users,
  X,
} from "lucide-react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

import rockyMascot from "@/Rocky.png";
import { useSiteLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

const SESSION_KEY = "kotr-gibraltar-passport-draft";

const supportedForms = [
  { value: "maternity-grant", label: "Maternity Grant Claim", labelEs: "Solicitud de ayuda por maternidad" },
  { value: "gibraltar-passport", label: "Gibraltar Passport Application", labelEs: "Solicitud de pasaporte de Gibraltar" },
  { value: "identity-card-application", label: "Identity Card Application", labelEs: "Solicitud de tarjeta de identidad" },
] as const;

type ApplicantType = "adult" | "child" | "";
type PassportType = "renewal" | "first" | "replacement" | "change" | "";
type Title = "mr" | "mrs" | "miss" | "ms" | "other" | "";
type Gender = "male" | "female" | "";
type YesNo = "yes" | "no" | "";
type SignerRole = "parent1" | "parent2" | "guardian" | "other" | "";

type FieldPlacement = {
  pageIndex: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

interface ParentDraft {
  surname: string;
  firstNames: string;
  otherNames: string;
  placeOfBirth: string;
  countryOfBirth: string;
  dateOfBirth: string;
  nationalityAtBirth: string;
  passportNumber: string;
  passportIssueDate: string;
}

interface PassportDraft {
  applicantType: ApplicantType;
  passportType: PassportType;
  changeName: boolean;
  newPhoto: boolean;
  changeNationalityStatus: boolean;
  title: Title;
  otherTitle: string;
  surname: string;
  maidenSurname: string;
  firstNames: string;
  previousNames: string;
  dateOfBirth: string;
  gender: Gender;
  townOfBirth: string;
  countryOfBirth: string;
  address: string;
  townCity: string;
  country: string;
  postcode: string;
  daytimePhone: string;
  mobilePhone: string;
  email: string;
  deliverySameAsHome: YesNo;
  deliveryAddress: string;
  includeNaturalisation: YesNo;
  naturalisationCertificateNumber: string;
  naturalisationIssuePlace: string;
  naturalisationIssueDate: string;
  needParentDetails: YesNo;
  parent1: ParentDraft;
  parent2: ParentDraft;
  marriageOrPartnershipDetails: string;
  previousPassportNumber: string;
  previousPassportIssueDate: string;
  previousPassportExpiryDate: string;
  previousPassportAuthority: string;
  previousPassportName: string;
  moreInformation: string;
  childOver12: YesNo;
  signerRole: SignerRole;
  signerName: string;
  signerRelationship: string;
  declarationSignatureDataUrl: string;
  applicantSignatureDataUrl: string;
  needsCountersignatory: YesNo;
  countersignTitle: Title;
  countersignOtherTitle: string;
  countersignFirstNames: string;
  countersignSurname: string;
  countersignYearsKnown: string;
  countersignKnowsAs: string;
  countersignProfession: string;
  countersignEmployer: string;
  countersignAddress: string;
  countersignPassportNumber: string;
  countersignDayPhone: string;
  countersignAltPhone: string;
  countersignEmail: string;
  countersignSignatureDataUrl: string;
}

const emptyParent = (): ParentDraft => ({
  surname: "",
  firstNames: "",
  otherNames: "",
  placeOfBirth: "",
  countryOfBirth: "",
  dateOfBirth: "",
  nationalityAtBirth: "",
  passportNumber: "",
  passportIssueDate: "",
});

const defaultDraft: PassportDraft = {
  applicantType: "",
  passportType: "",
  changeName: false,
  newPhoto: false,
  changeNationalityStatus: false,
  title: "",
  otherTitle: "",
  surname: "",
  maidenSurname: "",
  firstNames: "",
  previousNames: "",
  dateOfBirth: "",
  gender: "",
  townOfBirth: "",
  countryOfBirth: "",
  address: "",
  townCity: "",
  country: "",
  postcode: "",
  daytimePhone: "",
  mobilePhone: "",
  email: "",
  deliverySameAsHome: "yes",
  deliveryAddress: "",
  includeNaturalisation: "no",
  naturalisationCertificateNumber: "",
  naturalisationIssuePlace: "",
  naturalisationIssueDate: "",
  needParentDetails: "",
  parent1: emptyParent(),
  parent2: emptyParent(),
  marriageOrPartnershipDetails: "",
  previousPassportNumber: "",
  previousPassportIssueDate: "",
  previousPassportExpiryDate: "",
  previousPassportAuthority: "",
  previousPassportName: "",
  moreInformation: "",
  childOver12: "",
  signerRole: "",
  signerName: "",
  signerRelationship: "",
  declarationSignatureDataUrl: "",
  applicantSignatureDataUrl: "",
  needsCountersignatory: "",
  countersignTitle: "",
  countersignOtherTitle: "",
  countersignFirstNames: "",
  countersignSurname: "",
  countersignYearsKnown: "",
  countersignKnowsAs: "",
  countersignProfession: "",
  countersignEmployer: "",
  countersignAddress: "",
  countersignPassportNumber: "",
  countersignDayPhone: "",
  countersignAltPhone: "",
  countersignEmail: "",
  countersignSignatureDataUrl: "",
};

export function PassportFormFiller() {
  const { language } = useSiteLanguage();
  const router = useRouter();
  const [draft, setDraft] = useState<PassportDraft>(defaultDraft);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showValidationErrors, setShowValidationErrors] = useState(false);
  const [showCountersignHelp, setShowCountersignHelp] = useState(false);
  const [showDocumentsHelp, setShowDocumentsHelp] = useState(false);
  const fieldRefs = useRef<Record<string, HTMLElement | null>>({});

  const copy =
    language === "es"
      ? {
          eyebrow: "Rocky",
          title: "Vamos a rellenar el pasaporte de Gibraltar",
          intro:
            "Lo hacemos en trozos pequeños, con lenguaje normal, y solo te preguntamos lo que aplica a tu caso.",
          privacyTitle: "Tu información se queda contigo",
          privacyBody:
            "Todo esto se guarda solo en tu navegador hasta que descargues el PDF. No lo estamos subiendo a ningún sitio.",
          selectorLabel: "¿Qué formulario necesitas hoy?",
          basicsTitle: "Lo básico",
          basicsHelp:
            "Primero decidimos qué tipo de solicitud es. Eso recorta bastante lo que viene después.",
          detailsTitle: "Datos de la persona del pasaporte",
          detailsHelp:
            "Los detalles personales que van en la primera página del formulario.",
          deliveryTitle: "Dónde enviar el pasaporte",
          deliveryHelp:
            "Si quieres que llegue a otra dirección, lo abrimos. Si no, reutilizamos la de casa y te ahorras repetirla.",
          parentsTitle: "Padres o personas con responsabilidad parental",
          parentsHelp:
            "Esto suele aplicar a solicitudes de menores, y a algunos casos de primer pasaporte o nacionalidad.",
          previousTitle: "Pasaporte anterior y extras",
          previousHelp:
            "Solo pedimos lo del pasaporte anterior si no es una primera solicitud.",
          countersignTitle: "Contrafirma",
          countersignHelp:
            "Solo hace falta si tu caso lo pide.",
          countersignLink: "Haz clic aquí para saber si tu caso necesita una.",
          countersignModalTitle: "¿Quién necesita contrafirma y por qué?",
          countersignBullets: [
            "Si es un primer pasaporte británico, normalmente sí.",
            "Si es un reemplazo por pérdida, robo o daño, normalmente sí.",
            "Si es una renovación pero la foto actual ya no se parece bastante a la persona, también puede hacer falta.",
            "Si es un pasaporte infantil renovado, suele hacer falta.",
            "Si estás cambiando la autoridad emisora, también puede aplicar.",
            "La idea es que otra persona confirme quién eres y que la foto es realmente tuya.",
            "En solicitudes de menores, también sirve para confirmar que conoce a la persona adulta que firma y que esa persona tiene responsabilidad parental.",
            "La persona que contrafirma no debe ser familiar y debe tener un pasaporte británico completo y vigente.",
          ],
          signaturesTitle: "Firmas",
          signaturesHelp:
            "Puedes subir una imagen de firma o firmar aquí mismo con el dedo o el ratón. Si prefieres, también puedes dejarlo en blanco y firmar en papel.",
          downloadButton: "Descargar formulario relleno",
          clearButton: "Borrar este formulario",
          checklistTitle: "Antes de entregar esto, revisa:",
          checklistChild: "Un menor necesita firma de quien tenga la responsabilidad parental.",
          checklistCounter: "Si tu caso necesita contrafirma, no te olvides de que esa persona también firme su sección.",
          checklistPhoto: "Las fotos y documentos de apoyo siguen siendo aparte; este rellena solo el formulario.",
          checklistLink: "Haz clic aquí para ver lo que suele hacer falta.",
          checklistModalTitle: "Lo que normalmente te van a pedir junto al formulario",
          checklistBullets: [
            "Dos fotos idénticas de pasaporte del solicitante. No las pegues ni las adjuntes al formulario.",
            "Si tu caso necesita contrafirma, una de esas fotos debe ir certificada en el reverso por la persona que contrafirma.",
            "El pasaporte actual o anterior, si esto es una renovación, un reemplazo o un cambio de datos.",
            "En solicitudes de menores, la declaración la firma la persona con responsabilidad parental.",
            "Si el menor tiene 12 años o más, también debe firmar en la casilla de firma que irá en el pasaporte.",
            "Cualquier documento que respalde el tipo de solicitud, por ejemplo papeles de nacimiento, registro, naturalización o cambio de nombre si aplican a tu caso.",
          ],
        }
      : {
          eyebrow: "Rocky",
          title: "Let’s fill out the Gibraltar passport form",
          intro:
            "We’ll do it in small chunks, in normal language, and only ask what actually applies to your case.",
          privacyTitle: "Your info stays with you",
          privacyBody:
            "Everything stays in your browser until you download the PDF. Nothing here gets uploaded anywhere.",
          selectorLabel: "Which form do you need today?",
          basicsTitle: "The main bits",
          basicsHelp:
            "First we work out what kind of application this is. That trims a lot of the rest.",
          detailsTitle: "Who the passport is for",
          detailsHelp:
            "The personal details that belong on the first page of the form.",
          deliveryTitle: "Where the passport should go",
          deliveryHelp:
            "If you want it sent somewhere else, we open that up. Otherwise we reuse the home address and save you typing it twice.",
          parentsTitle: "Parents or people with parental responsibility",
          parentsHelp:
            "This usually applies to child applications, and to some first-passport or nationality cases.",
          previousTitle: "Previous passport and extras",
          previousHelp:
            "We only ask about the old passport if this is not a first application.",
          countersignTitle: "Countersignature",
          countersignHelp:
            "Only needed if your case calls for one.",
          countersignLink: "Click here to find out if your case calls for one.",
          countersignModalTitle: "Who needs a countersignatory and why?",
          countersignBullets: [
            "If this is a first British passport, you will usually need one.",
            "If this is a replacement because the passport was lost, stolen, or damaged, you will usually need one.",
            "If this is a renewal but the current photo no longer looks enough like the person, one may still be needed.",
            "If this is a child passport renewal, one is usually needed.",
            "If you are changing issuing authority, it can apply there too.",
            "The point is that someone else confirms who you are and that the photo really is you.",
            "For child applications, they also help confirm they know the adult signing the form and that this adult has parental responsibility.",
            "The countersignatory should not be a relative and must hold a full current British passport.",
          ],
          signaturesTitle: "Signatures",
          signaturesHelp:
            "You can upload a signature image or sign here with your mouse or finger (don't make it too small). If you prefer, you can leave it blank and sign on paper later.",
          downloadButton: "Download filled form",
          clearButton: "Clear this form",
          checklistTitle: "Before you hand this in, double-check:",
          checklistChild:
            "A child application needs the signature of the person with parental responsibility.",
          checklistCounter:
            "If your case needs a countersignatory, make sure that person signs their section too.",
          checklistPhoto:
            "Photos and supporting documents still need sorting separately; this just fills the form itself.",
          checklistLink: "Click here to see what you usually need to send with it.",
          checklistModalTitle: "What you will usually need with the form",
          checklistBullets: [
            "Two identical passport photos of the applicant. Do not attach them to the form.",
            "If your case needs a countersignatory, one of those photos should be certified on the back by the countersignatory.",
            "The current or previous passport, if this is a renewal, replacement, or change application.",
            "For child applications, the declaration must be signed by the person with parental responsibility.",
            "If the child is 12 or over, they should also sign in the passport-signature box.",
            "Any documents that support the type of application, for example birth, registration, naturalisation, or name-change papers if those apply to your case.",
          ],
        };

  const validationErrors = getValidationErrors(draft, language);
  const needsParentDetails =
    draft.applicantType === "child" ||
    draft.needParentDetails === "yes" ||
    draft.changeNationalityStatus;
  const needsPreviousPassport = draft.passportType && draft.passportType !== "first";

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
    const target = field.querySelector("input, textarea, button") as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLButtonElement
      | null;
    target?.focus();
  }

  async function handleDownload() {
    if (Object.keys(validationErrors).length > 0) {
      setShowValidationErrors(true);
      const firstInvalid = Object.keys(validationErrors)[0];
      if (firstInvalid) {
        focusField(firstInvalid);
      }
      return;
    }

    try {
      setIsDownloading(true);
      const payload = (await fetch("/api/forms/gibraltar-passport", {
        cache: "no-store",
      }).then((response) => response.json())) as {
        pdf: string;
        templatePdf: string;
      };
      const pdfBytes = base64ToUint8Array(payload.pdf);
      const templatePdfBytes = base64ToUint8Array(payload.templatePdf);
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const templatePdf = await PDFDocument.load(templatePdfBytes);
      const form = templatePdf.getForm();
      const formFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const pages = pdfDoc.getPages();
      const fieldMap = getFieldMap(templatePdf, form);

      const homeLines = splitAddressLines(draft.address, 3);
      const deliveryLines =
        draft.deliverySameAsHome !== "no"
          ? [...homeLines, draft.townCity, draft.country, draft.postcode]
          : splitAddressLines(draft.deliveryAddress, 6);
      const today = new Date().toLocaleDateString("en-GB");
      const childSigner = getChildSigner(draft);

      drawCheckboxMark(
        pages,
        fieldMap,
        checkboxNameForType(draft.applicantType, draft.passportType),
        true,
        formFont
      );
      if (draft.passportType === "change" || draft.changeNationalityStatus) {
        drawCheckboxMark(pages, fieldMap, "Check_7", draft.changeNationalityStatus, formFont);
        drawCheckboxMark(pages, fieldMap, "Check_8", draft.newPhoto, formFont);
        drawCheckboxMark(pages, fieldMap, "Check_9", draft.changeName, formFont);
        drawCheckboxMark(pages, fieldMap, "Check_10", draft.applicantType === "child", formFont);
        drawCheckboxMark(pages, fieldMap, "Check_11", draft.applicantType === "adult", formFont);
      }

      drawCheckboxMark(pages, fieldMap, "Check_12", draft.title === "mr", formFont);
      drawCheckboxMark(pages, fieldMap, "Check_13", draft.title === "mrs", formFont);
      drawCheckboxMark(pages, fieldMap, "Check_14", draft.title === "miss", formFont);
      drawCheckboxMark(pages, fieldMap, "Check_15", draft.title === "ms", formFont);
      drawCheckboxMark(pages, fieldMap, "Check_16", draft.gender === "male", formFont);
      drawCheckboxMark(pages, fieldMap, "Check_17", draft.gender === "female", formFont);

      drawFieldText(pages, fieldMap, "Text_1", draft.title === "other" ? draft.otherTitle : "", formFont);
      drawFieldText(pages, fieldMap, "Text_2", draft.surname, formFont);
      drawFieldText(pages, fieldMap, "Text_3", draft.maidenSurname, formFont);
      drawFieldText(pages, fieldMap, "Text_4", draft.firstNames, formFont);
      drawFieldText(pages, fieldMap, "Text_5", draft.previousNames, formFont);
      drawFieldText(pages, fieldMap, "Text_6", draft.townOfBirth, formFont);
      drawFieldText(pages, fieldMap, "Text_7", draft.countryOfBirth, formFont);
      drawFieldText(pages, fieldMap, "Text_8", homeLines[0] ?? "", formFont);
      drawFieldText(pages, fieldMap, "Text_9", homeLines[1] ?? "", formFont);
      drawFieldText(pages, fieldMap, "Text_10", homeLines[2] ?? "", formFont);
      drawFieldText(pages, fieldMap, "Text_11", draft.townCity, formFont, { yOffset: 3 });
      drawFieldText(pages, fieldMap, "Text_12", draft.country, formFont, { yOffset: 3 });
      drawFieldText(pages, fieldMap, "Text_13", draft.postcode, formFont, { yOffset: 3 });
      drawFieldText(pages, fieldMap, "Text_14", draft.daytimePhone, formFont, { yOffset: 3 });
      drawFieldText(pages, fieldMap, "Text_15", draft.mobilePhone, formFont, { yOffset: 3 });
      drawFieldText(pages, fieldMap, "Text_16", draft.email, formFont, { yOffset: 3 });
      drawDateDigits(pages[0], draft.dateOfBirth);

      drawFieldText(pages, fieldMap, "Text_17", deliveryLines[0] ?? "", formFont);
      drawFieldText(pages, fieldMap, "Text_18", deliveryLines[1] ?? "", formFont);
      drawFieldText(pages, fieldMap, "Text_19", deliveryLines[2] ?? "", formFont);
      drawFieldText(pages, fieldMap, "Text_20", deliveryLines[3] ?? "", formFont);
      drawFieldText(pages, fieldMap, "Text_21", deliveryLines[4] ?? "", formFont);
      drawFieldText(pages, fieldMap, "Text_22", deliveryLines[5] ?? "", formFont);

      if (draft.includeNaturalisation === "yes") {
        drawFieldText(pages, fieldMap, "Text_23", draft.naturalisationCertificateNumber, formFont);
        drawFieldText(pages, fieldMap, "Text_24", draft.naturalisationIssuePlace, formFont);
        drawDigitFields(
          pages,
          fieldMap,
          ["Text_81", "Text_82", "Text_83", "Text_84", "Text_85", "Text_86", "Text_87", "Text_88"],
          digitsFromDate(draft.naturalisationIssueDate),
          formFont
        );
      }

      if (needsParentDetails) {
        drawFieldText(pages, fieldMap, "Text_25", draft.parent1.surname, formFont);
        drawFieldText(pages, fieldMap, "Text_42", draft.parent1.firstNames, formFont);
        drawFieldText(pages, fieldMap, "Text_41", draft.parent1.otherNames, formFont);
        drawFieldText(pages, fieldMap, "Text_40", draft.parent1.placeOfBirth, formFont);
        drawFieldText(pages, fieldMap, "Text_39", draft.parent1.countryOfBirth, formFont);
        drawFieldText(pages, fieldMap, "Text_38", draft.parent1.dateOfBirth, formFont);
        drawFieldText(pages, fieldMap, "Text_37", draft.parent1.nationalityAtBirth, formFont);
        drawFieldText(pages, fieldMap, "Text_36", draft.parent1.passportNumber, formFont);
        drawFieldText(pages, fieldMap, "Text_35", draft.parent1.passportIssueDate, formFont);

        drawFieldText(pages, fieldMap, "Text_26", draft.parent2.surname, formFont);
        drawFieldText(pages, fieldMap, "Text_27", draft.parent2.firstNames, formFont);
        drawFieldText(pages, fieldMap, "Text_34", draft.parent2.otherNames, formFont);
        drawFieldText(pages, fieldMap, "Text_33", draft.parent2.placeOfBirth, formFont);
        drawFieldText(pages, fieldMap, "Text_32", draft.parent2.countryOfBirth, formFont);
        drawFieldText(pages, fieldMap, "Text_31", draft.parent2.dateOfBirth, formFont);
        drawFieldText(pages, fieldMap, "Text_30", draft.parent2.nationalityAtBirth, formFont);
        drawFieldText(pages, fieldMap, "Text_29", draft.parent2.passportNumber, formFont);
        drawFieldText(pages, fieldMap, "Text_28", draft.parent2.passportIssueDate, formFont);
        drawFieldText(pages, fieldMap, "Text_43", draft.marriageOrPartnershipDetails, formFont);
      }

      if (needsPreviousPassport) {
        drawDigitFields(
          pages,
          fieldMap,
          ["Text_89", "Text_90", "Text_91", "Text_92", "Text_93", "Text_94", "Text_95", "Text_96", "Text_97"],
          compactPassportNumber(draft.previousPassportNumber),
          formFont
        );
        drawDigitFields(
          pages,
          fieldMap,
          ["Text_98", "Text_99", "Text_100", "Text_101", "Text_102", "Text_103", "Text_104", "Text_105"],
          digitsFromDate(draft.previousPassportIssueDate),
          formFont
        );
        drawDigitFields(
          pages,
          fieldMap,
          ["Text_106", "Text_107", "Text_108", "Text_109", "Text_110", "Text_111", "Text_112", "Text_113"],
          digitsFromDate(draft.previousPassportExpiryDate),
          formFont
        );
        drawFieldText(pages, fieldMap, "Text_44", draft.previousPassportAuthority, formFont);
        drawFieldText(pages, fieldMap, "Text_45", draft.previousPassportName || `${draft.firstNames} ${draft.surname}`.trim(), formFont);
      }

      drawFieldText(pages, fieldMap, "Multi_1", draft.moreInformation, formFont, {
        multiline: true,
        size: 9,
        rowCount: 12,
      });
      drawDigitFields(
        pages,
        fieldMap,
        ["Text_140", "Text_141", "Text_142", "Text_143", "Text_144", "Text_145", "Text_146", "Text_147"],
        digitsFromDate(today),
        formFont
      );
      drawFieldText(pages, fieldMap, "Multi_3", draft.applicantType === "child" ? childSigner.name : "", formFont);
      drawFieldText(pages, fieldMap, "Multi_4", draft.applicantType === "child" ? childSigner.relationship : "", formFont);

      if (draft.needsCountersignatory === "yes") {
        setCountersignTitle(pages, fieldMap, draft.countersignTitle, draft.countersignOtherTitle, formFont);
        drawFieldText(pages, fieldMap, "Text_50", draft.countersignFirstNames, formFont);
        drawFieldText(pages, fieldMap, "Text_51", draft.countersignSurname, formFont);
        drawFieldText(pages, fieldMap, "Text_48", draft.countersignYearsKnown, formFont);
        drawFieldText(pages, fieldMap, "Text_49", draft.countersignKnowsAs, formFont);
        drawFieldText(pages, fieldMap, "Text_52", draft.countersignProfession, formFont);
        drawFieldText(pages, fieldMap, "Text_53", draft.countersignEmployer, formFont);
        const counterAddress = splitAddressLines(draft.countersignAddress, 2);
        drawFieldText(pages, fieldMap, "Text_54", counterAddress[0] ?? "", formFont);
        drawFieldText(pages, fieldMap, "Text_55", counterAddress[1] ?? "", formFont);
        drawDigitFields(
          pages,
          fieldMap,
          ["Text_61", "Text_62", "Text_63", "Text_64", "Text_65", "Text_66", "Text_67", "Text_68", "Text_69"],
          compactPassportNumber(draft.countersignPassportNumber),
          formFont
        );
        drawFieldText(pages, fieldMap, "Text_78", draft.countersignDayPhone, formFont);
        drawFieldText(pages, fieldMap, "Text_80", draft.countersignAltPhone, formFont);
        drawFieldText(pages, fieldMap, "Text_79", draft.countersignEmail, formFont);
        drawDigitFields(
          pages,
          fieldMap,
          ["Text_70", "Text_71", "Text_72", "Text_73", "Text_74", "Text_75", "Text_76", "Text_77"],
          digitsFromDate(today),
          formFont
        );
      }

      if (draft.declarationSignatureDataUrl) {
        await drawSignature(pdfDoc, pages, fieldMap, "Multi_2", draft.declarationSignatureDataUrl);
      }
      if (shouldUseApplicantSignature(draft) && draft.applicantSignatureDataUrl) {
        await drawSignature(pdfDoc, pages, fieldMap, "Multi_6", draft.applicantSignatureDataUrl);
      }
      if (draft.needsCountersignatory === "yes" && draft.countersignSignatureDataUrl) {
        await drawSignature(pdfDoc, pages, fieldMap, "Multi_7", draft.countersignSignatureDataUrl);
      }

      const bytes = await pdfDoc.save();
      const blob = new Blob([new Uint8Array(bytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "gibraltar-passport-draft.pdf";
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
            value="gibraltar-passport"
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
              label={language === "es" ? "¿Qué tipo de solicitud es?" : "What kind of application is this?"}
              value={draft.passportType}
              onChange={(value) => updateDraft(setDraft, "passportType", value)}
              options={[
                { value: "renewal", label: language === "es" ? "Renovación" : "Renewal" },
                { value: "first", label: language === "es" ? "Primer pasaporte" : "First passport" },
                { value: "replacement", label: language === "es" ? "Pérdida o robo" : "Replacement" },
                { value: "change", label: language === "es" ? "Cambio de datos" : "Changes" },
              ]}
              error={validationErrors.passportType}
              fieldKey="passportType"
              registerRef={registerFieldRef}
              showValidationErrors={showValidationErrors}
            />
            {draft.passportType === "change" ? (
              <div className="md:col-span-2 rounded-[1.25rem] border border-navy/8 bg-white p-4">
                <p className="text-sm font-semibold text-navy">
                  {language === "es" ? "¿Qué ha cambiado?" : "What has changed?"}
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <TogglePill active={draft.changeName} onClick={() => setDraft((current) => ({ ...current, changeName: !current.changeName }))}>
                    {language === "es" ? "Nombre" : "Name"}
                  </TogglePill>
                  <TogglePill active={draft.newPhoto} onClick={() => setDraft((current) => ({ ...current, newPhoto: !current.newPhoto }))}>
                    {language === "es" ? "Foto nueva" : "New photo"}
                  </TogglePill>
                  <TogglePill active={draft.changeNationalityStatus} onClick={() => setDraft((current) => ({ ...current, changeNationalityStatus: !current.changeNationalityStatus }))}>
                    {language === "es" ? "Nacionalidad / estatus" : "Nationality status"}
                  </TogglePill>
                </div>
              </div>
            ) : null}
          </QuestionSection>

          <QuestionSection icon={UserRound} title={copy.detailsTitle} help={copy.detailsHelp}>
            <ChoiceField
              label={language === "es" ? "Tratamiento" : "Title"}
              value={draft.title}
              onChange={(value) => updateDraft(setDraft, "title", value)}
              options={[
                { value: "mr", label: "Mr" },
                { value: "mrs", label: "Mrs" },
                { value: "miss", label: "Miss" },
                { value: "ms", label: "Ms" },
                { value: "other", label: language === "es" ? "Otro" : "Other" },
              ]}
            />
            {draft.title === "other" ? (
              <Field label={language === "es" ? "Otro tratamiento" : "Other title"} value={draft.otherTitle} onChange={(value) => updateDraft(setDraft, "otherTitle", value)} />
            ) : null}
            <Field label={language === "es" ? "Apellido" : "Surname"} value={draft.surname} onChange={(value) => updateDraft(setDraft, "surname", value)} error={validationErrors.surname} fieldKey="surname" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
            <Field label={language === "es" ? "Apellido de soltera" : "Maiden surname"} help={language === "es" ? "Solo si aplica" : "Only if it applies"} value={draft.maidenSurname} onChange={(value) => updateDraft(setDraft, "maidenSurname", value)} />
            <Field label={language === "es" ? "Nombre y segundos nombres" : "First and middle names"} value={draft.firstNames} onChange={(value) => updateDraft(setDraft, "firstNames", value)} error={validationErrors.firstNames} fieldKey="firstNames" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
            <Field label={language === "es" ? "Nombres anteriores" : "Previous names"} help={language === "es" ? "Si nunca cambió, déjalo en blanco" : "Leave blank if it has always been the same"} value={draft.previousNames} onChange={(value) => updateDraft(setDraft, "previousNames", value)} />
            <DateField label={language === "es" ? "Fecha de nacimiento" : "Date of birth"} value={draft.dateOfBirth} onChange={(value) => updateDraft(setDraft, "dateOfBirth", value)} error={validationErrors.dateOfBirth} fieldKey="dateOfBirth" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
            <ChoiceField
              label={language === "es" ? "Sexo" : "Gender"}
              value={draft.gender}
              onChange={(value) => updateDraft(setDraft, "gender", value)}
              options={[
                { value: "male", label: language === "es" ? "Masculino" : "Male" },
                { value: "female", label: language === "es" ? "Femenino" : "Female" },
              ]}
            />
            <Field label={language === "es" ? "Ciudad o pueblo de nacimiento" : "Town of birth"} value={draft.townOfBirth} onChange={(value) => updateDraft(setDraft, "townOfBirth", value)} error={validationErrors.townOfBirth} fieldKey="townOfBirth" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
            <Field label={language === "es" ? "País de nacimiento" : "Country of birth"} value={draft.countryOfBirth} onChange={(value) => updateDraft(setDraft, "countryOfBirth", value)} error={validationErrors.countryOfBirth} fieldKey="countryOfBirth" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
            <Field label={language === "es" ? "Dirección" : "Home address"} value={draft.address} onChange={(value) => updateDraft(setDraft, "address", value)} multiline multilineClassName="min-h-[7.25rem]" error={validationErrors.address} fieldKey="address" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
            <Field label={language === "es" ? "Ciudad" : "Town / City"} value={draft.townCity} onChange={(value) => updateDraft(setDraft, "townCity", value)} error={validationErrors.townCity} fieldKey="townCity" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
            <Field label={language === "es" ? "País" : "Country"} value={draft.country} onChange={(value) => updateDraft(setDraft, "country", value)} error={validationErrors.country} fieldKey="country" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
            <Field label={language === "es" ? "Código postal" : "Postcode"} value={draft.postcode} onChange={(value) => updateDraft(setDraft, "postcode", value)} error={validationErrors.postcode} fieldKey="postcode" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
            <Field label={language === "es" ? "Teléfono de día" : "Daytime phone"} value={draft.daytimePhone} onChange={(value) => updateDraft(setDraft, "daytimePhone", sanitizePhone(value))} error={validationErrors.daytimePhone} fieldKey="daytimePhone" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
            <Field label={language === "es" ? "Teléfono móvil" : "Mobile phone"} value={draft.mobilePhone} onChange={(value) => updateDraft(setDraft, "mobilePhone", sanitizePhone(value))} />
            <Field label="Email" value={draft.email} onChange={(value) => updateDraft(setDraft, "email", value)} type="email" inputMode="email" error={validationErrors.email} fieldKey="email" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
          </QuestionSection>

          <QuestionSection icon={Mailbox} title={copy.deliveryTitle} help={copy.deliveryHelp}>
            <ChoiceField
              label={language === "es" ? "¿Usamos la misma dirección para la entrega?" : "Use the same address for delivery?"}
              value={draft.deliverySameAsHome}
              onChange={(value) => updateDraft(setDraft, "deliverySameAsHome", value)}
              options={[
                { value: "yes", label: language === "es" ? "Sí" : "Yes" },
                { value: "no", label: language === "es" ? "No" : "No" },
              ]}
            />
            {draft.includeNaturalisation === "no" ? null : null}
            {draft.deliverySameAsHome === "no" ? (
              <Field
                label={language === "es" ? "Dirección de entrega" : "Delivery address"}
                help={language === "es" ? "Ponla tal y como quieres que la usen" : "Write it as you want it used"}
                value={draft.deliveryAddress}
                onChange={(value) => updateDraft(setDraft, "deliveryAddress", value)}
                multiline
                multilineClassName="min-h-[8rem]"
                error={validationErrors.deliveryAddress}
                fieldKey="deliveryAddress"
                registerRef={registerFieldRef}
                showValidationErrors={showValidationErrors}
              />
            ) : null}
            <ChoiceField
              label={language === "es" ? "¿Necesitas rellenar la parte de naturalización / registro?" : "Do you need the naturalisation / registration section?"}
              value={draft.includeNaturalisation}
              onChange={(value) => updateDraft(setDraft, "includeNaturalisation", value)}
              options={[
                { value: "no", label: language === "es" ? "No" : "No" },
                { value: "yes", label: language === "es" ? "Sí" : "Yes" },
              ]}
            />
            {draft.includeNaturalisation === "yes" ? (
              <>
                <Field label={language === "es" ? "Número del certificado" : "Certificate number"} value={draft.naturalisationCertificateNumber} onChange={(value) => updateDraft(setDraft, "naturalisationCertificateNumber", value)} error={validationErrors.naturalisationCertificateNumber} fieldKey="naturalisationCertificateNumber" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
                <Field label={language === "es" ? "Lugar de expedición" : "Place of issue"} value={draft.naturalisationIssuePlace} onChange={(value) => updateDraft(setDraft, "naturalisationIssuePlace", value)} error={validationErrors.naturalisationIssuePlace} fieldKey="naturalisationIssuePlace" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
                <DateField label={language === "es" ? "Fecha de expedición" : "Date of issue"} value={draft.naturalisationIssueDate} onChange={(value) => updateDraft(setDraft, "naturalisationIssueDate", value)} error={validationErrors.naturalisationIssueDate} fieldKey="naturalisationIssueDate" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
              </>
            ) : null}
          </QuestionSection>

          <QuestionSection icon={Users} title={copy.parentsTitle} help={copy.parentsHelp}>
            {draft.applicantType !== "child" ? (
              <ChoiceField
                label={language === "es" ? "¿Tu caso necesita datos de padres?" : "Does your case need parent details?"}
                value={draft.needParentDetails}
                onChange={(value) => updateDraft(setDraft, "needParentDetails", value)}
                options={[
                  { value: "no", label: language === "es" ? "No" : "No" },
                  { value: "yes", label: language === "es" ? "Sí" : "Yes" },
                ]}
              />
            ) : null}
            {needsParentDetails ? (
              <>
                <ParentFields
                  title={language === "es" ? "Padre / primer progenitor" : "Father / first parent"}
                  parent={draft.parent1}
                  onChange={(value) => setDraft((current) => ({ ...current, parent1: value }))}
                  language={language}
                  prefix="parent1"
                  registerRef={registerFieldRef}
                  showValidationErrors={showValidationErrors}
                  errors={validationErrors}
                />
                <ParentFields
                  title={language === "es" ? "Madre / segundo progenitor" : "Mother / second parent"}
                  parent={draft.parent2}
                  onChange={(value) => setDraft((current) => ({ ...current, parent2: value }))}
                  language={language}
                  prefix="parent2"
                  registerRef={registerFieldRef}
                  showValidationErrors={showValidationErrors}
                  errors={validationErrors}
                />
                <div className="md:col-span-2">
                  <Field label={language === "es" ? "Fecha y lugar de matrimonio o unión civil" : "Date and place of marriage or civil partnership"} help={language === "es" ? "Solo si aplica" : "Only if it applies"} value={draft.marriageOrPartnershipDetails} onChange={(value) => updateDraft(setDraft, "marriageOrPartnershipDetails", value)} />
                </div>
              </>
            ) : null}
          </QuestionSection>

          <QuestionSection icon={ShieldCheck} title={copy.previousTitle} help={copy.previousHelp}>
            {needsPreviousPassport ? (
              <>
                <Field label={language === "es" ? "Número del pasaporte anterior" : "Previous passport number"} value={draft.previousPassportNumber} onChange={(value) => updateDraft(setDraft, "previousPassportNumber", value)} error={validationErrors.previousPassportNumber} fieldKey="previousPassportNumber" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
                <DateField label={language === "es" ? "Fecha de expedición" : "Date of issue"} value={draft.previousPassportIssueDate} onChange={(value) => updateDraft(setDraft, "previousPassportIssueDate", value)} error={validationErrors.previousPassportIssueDate} fieldKey="previousPassportIssueDate" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
                <DateField label={language === "es" ? "Fecha de caducidad" : "Date of expiry"} value={draft.previousPassportExpiryDate} onChange={(value) => updateDraft(setDraft, "previousPassportExpiryDate", value)} error={validationErrors.previousPassportExpiryDate} fieldKey="previousPassportExpiryDate" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
                <Field label={language === "es" ? "Autoridad emisora" : "Issuing authority"} value={draft.previousPassportAuthority} onChange={(value) => updateDraft(setDraft, "previousPassportAuthority", value)} />
                <Field label={language === "es" ? "Nombre tal y como salía en ese pasaporte" : "Name shown on that passport"} value={draft.previousPassportName} onChange={(value) => updateDraft(setDraft, "previousPassportName", value)} />
              </>
            ) : null}
            {draft.applicantType === "child" ? (
              <ChoiceField
                label={language === "es" ? "¿El menor tiene 12 años o más?" : "Is the child 12 or over?"}
                value={draft.childOver12}
                onChange={(value) => updateDraft(setDraft, "childOver12", value)}
                options={[
                  { value: "no", label: language === "es" ? "No" : "No" },
                  { value: "yes", label: language === "es" ? "Sí" : "Yes" },
                ]}
              />
            ) : null}
            <div className="md:col-span-2">
              <Field label={language === "es" ? "Algo más que convenga explicar" : "Anything else worth explaining"} value={draft.moreInformation} onChange={(value) => updateDraft(setDraft, "moreInformation", value)} multiline multilineRows={8} multilineClassName="min-h-[14rem]" />
            </div>
          </QuestionSection>

          <QuestionSection
            icon={FilePenLine}
            title={copy.countersignTitle}
            help={
              <>
                {copy.countersignHelp}{" "}
                <button
                  type="button"
                  onClick={() => setShowCountersignHelp(true)}
                  className="font-sans text-sm text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                >
                  {copy.countersignLink}
                </button>
              </>
            }
            aside={
              null
            }
          >
            <ChoiceField
              label={language === "es" ? "¿Este caso necesita contrafirma?" : "Does this application need a countersignatory?"}
              value={draft.needsCountersignatory}
              onChange={(value) => updateDraft(setDraft, "needsCountersignatory", value)}
              options={[
                { value: "no", label: language === "es" ? "No" : "No" },
                { value: "yes", label: language === "es" ? "Sí" : "Yes" },
              ]}
            />
            {draft.needsCountersignatory === "yes" ? (
              <>
                <ChoiceField
                  label={language === "es" ? "Tratamiento de la persona que contrafirma" : "Countersignatory title"}
                  value={draft.countersignTitle}
                  onChange={(value) => updateDraft(setDraft, "countersignTitle", value)}
                  options={[
                    { value: "mr", label: "Mr" },
                    { value: "mrs", label: "Mrs" },
                    { value: "miss", label: "Miss" },
                    { value: "ms", label: "Ms" },
                    { value: "other", label: language === "es" ? "Otro" : "Other" },
                  ]}
                />
                {draft.countersignTitle === "other" ? <Field label={language === "es" ? "Otro tratamiento" : "Other title"} value={draft.countersignOtherTitle} onChange={(value) => updateDraft(setDraft, "countersignOtherTitle", value)} /> : null}
                <Field label={language === "es" ? "Nombre y segundos nombres" : "First and middle names"} value={draft.countersignFirstNames} onChange={(value) => updateDraft(setDraft, "countersignFirstNames", value)} error={validationErrors.countersignFirstNames} fieldKey="countersignFirstNames" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
                <Field label={language === "es" ? "Apellido" : "Surname"} value={draft.countersignSurname} onChange={(value) => updateDraft(setDraft, "countersignSurname", value)} error={validationErrors.countersignSurname} fieldKey="countersignSurname" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
                <Field label={language === "es" ? "Cuántos años conoce a la persona" : "Years known"} value={draft.countersignYearsKnown} onChange={(value) => updateDraft(setDraft, "countersignYearsKnown", value)} />
                <Field label={language === "es" ? "La conoce como..." : "Knows them as"} value={draft.countersignKnowsAs} onChange={(value) => updateDraft(setDraft, "countersignKnowsAs", value)} help={language === "es" ? "Ejemplo: amiga de la familia, profesora, jefe" : "Example: family friend, teacher, manager"} />
                <Field label={language === "es" ? "Profesión / cargo" : "Profession / position"} value={draft.countersignProfession} onChange={(value) => updateDraft(setDraft, "countersignProfession", value)} />
                <Field label={language === "es" ? "Empresa" : "Employer"} value={draft.countersignEmployer} onChange={(value) => updateDraft(setDraft, "countersignEmployer", value)} />
                <Field label={language === "es" ? "Dirección" : "Address"} value={draft.countersignAddress} onChange={(value) => updateDraft(setDraft, "countersignAddress", value)} multiline multilineClassName="min-h-[7rem]" />
                <Field label={language === "es" ? "Número de pasaporte" : "Passport number"} value={draft.countersignPassportNumber} onChange={(value) => updateDraft(setDraft, "countersignPassportNumber", value)} />
                <Field label={language === "es" ? "Teléfono de día" : "Daytime phone"} value={draft.countersignDayPhone} onChange={(value) => updateDraft(setDraft, "countersignDayPhone", sanitizePhone(value))} />
                <Field label={language === "es" ? "Otro teléfono" : "Alternative phone"} value={draft.countersignAltPhone} onChange={(value) => updateDraft(setDraft, "countersignAltPhone", sanitizePhone(value))} />
                <Field label="Email" value={draft.countersignEmail} onChange={(value) => updateDraft(setDraft, "countersignEmail", value)} type="email" inputMode="email" />
              </>
            ) : null}
          </QuestionSection>

          <QuestionSection icon={PenLine} title={copy.signaturesTitle} help={copy.signaturesHelp}>
            {draft.applicantType === "child" ? (
              <>
                <ChoiceField
                  label={language === "es" ? "¿Quién firma por el menor?" : "Who is signing on behalf of the child?"}
                  value={draft.signerRole}
                  onChange={(value) => updateDraft(setDraft, "signerRole", value)}
                  options={[
                    { value: "parent1", label: language === "es" ? "Primer progenitor" : "First parent" },
                    { value: "parent2", label: language === "es" ? "Segundo progenitor" : "Second parent" },
                    { value: "guardian", label: language === "es" ? "Tutor / guardián" : "Guardian" },
                    { value: "other", label: language === "es" ? "Otra persona" : "Someone else" },
                  ]}
                />
                {(draft.signerRole === "guardian" || draft.signerRole === "other") ? (
                  <>
                    <Field label={language === "es" ? "Nombre de quien firma" : "Name of the person signing"} value={draft.signerName} onChange={(value) => updateDraft(setDraft, "signerName", value)} error={validationErrors.signerName} fieldKey="signerName" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
                    <Field label={language === "es" ? "Relación con el menor" : "Relationship to child"} value={draft.signerRelationship} onChange={(value) => updateDraft(setDraft, "signerRelationship", value)} error={validationErrors.signerRelationship} fieldKey="signerRelationship" registerRef={registerFieldRef} showValidationErrors={showValidationErrors} />
                  </>
                ) : null}
              </>
            ) : null}
            <SignatureField
              label={language === "es" ? "Firma de la declaración" : "Declaration signature"}
              value={draft.declarationSignatureDataUrl}
              onChange={(value) => updateDraft(setDraft, "declarationSignatureDataUrl", value)}
              language={language}
            />
            {shouldUseApplicantSignature(draft) ? (
              <SignatureField
                label={language === "es" ? "Firma que saldrá en el pasaporte" : "Signature for the passport itself"}
                value={draft.applicantSignatureDataUrl}
                onChange={(value) => updateDraft(setDraft, "applicantSignatureDataUrl", value)}
                language={language}
              />
            ) : null}
            {draft.needsCountersignatory === "yes" ? (
              <SignatureField
                label={language === "es" ? "Firma de la contrafirma" : "Countersignature signature"}
                value={draft.countersignSignatureDataUrl}
                onChange={(value) => updateDraft(setDraft, "countersignSignatureDataUrl", value)}
                language={language}
              />
            ) : null}
          </QuestionSection>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-salmon/20 bg-salmon/10 p-4">
          <p className="text-lg font-bold text-navy">{copy.checklistTitle}</p>
          <ul className="mt-3 space-y-2 font-sans text-sm leading-7 text-navy/72">
            <li>{copy.checklistPhoto}</li>
            {draft.applicantType === "child" ? <li>{copy.checklistChild}</li> : null}
            {draft.needsCountersignatory === "yes" ? <li>{copy.checklistCounter}</li> : null}
          </ul>
          <button
            type="button"
            onClick={() => setShowDocumentsHelp(true)}
            className="mt-3 font-sans text-sm text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
          >
            {copy.checklistLink}
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={handleDownload} className="min-w-[14rem] gap-2 font-sans text-sm font-medium" disabled={isDownloading}>
            {isDownloading ? <LoaderCircle className="size-4 animate-spin" /> : <Download className="size-4" />}
            <span>{isDownloading ? (language === "es" ? "Preparando PDF..." : "Preparing PDF...") : copy.downloadButton}</span>
          </Button>
          <Button type="button" variant="outline" className="gap-1.5 font-sans text-sm font-medium" onClick={clearDraft}>
            <X className="size-4" />
            {copy.clearButton}
          </Button>
        </div>
      </section>

      {showCountersignHelp ? (
        <RockyModal
          onClose={() => setShowCountersignHelp(false)}
          actions={
            <Button type="button" onClick={() => setShowCountersignHelp(false)}>
              {language === "es" ? "Vale" : "Got it"}
            </Button>
          }
        >
          <div className="space-y-4">
            <p className="text-center font-display text-2xl font-bold leading-tight text-navy">
              {copy.countersignModalTitle}
            </p>
            <ul className="space-y-3 text-left font-sans text-base leading-7 text-navy/78">
              {copy.countersignBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[0.65rem] h-2 w-2 shrink-0 rounded-full bg-salmon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </RockyModal>
      ) : null}

      {showDocumentsHelp ? (
        <RockyModal
          onClose={() => setShowDocumentsHelp(false)}
          actions={
            <Button type="button" onClick={() => setShowDocumentsHelp(false)}>
              {language === "es" ? "Vale" : "Got it"}
            </Button>
          }
        >
          <div className="space-y-4">
            <p className="text-center font-display text-2xl font-bold leading-tight text-navy">
              {copy.checklistModalTitle}
            </p>
            <ul className="space-y-3 text-left font-sans text-base leading-7 text-navy/78">
              {copy.checklistBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[0.65rem] h-2 w-2 shrink-0 rounded-full bg-salmon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </RockyModal>
      ) : null}
    </>
  );
}

function ParentFields({
  title,
  parent,
  onChange,
  language,
  prefix,
  registerRef,
  showValidationErrors,
  errors,
}: {
  title: string;
  parent: ParentDraft;
  onChange: (value: ParentDraft) => void;
  language: "en" | "es";
  prefix: "parent1" | "parent2";
  registerRef: (name: string) => (node: HTMLElement | null) => void;
  showValidationErrors: boolean;
  errors: Record<string, string>;
}) {
  return (
    <div className="md:col-span-2 rounded-[1.25rem] border border-navy/8 bg-white p-4">
      <p className="text-lg font-bold text-navy">{title}</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Field label={language === "es" ? "Apellido" : "Surname"} value={parent.surname} onChange={(value) => onChange({ ...parent, surname: value })} error={errors[`${prefix}.surname`]} fieldKey={`${prefix}.surname`} registerRef={registerRef} showValidationErrors={showValidationErrors} />
        <Field label={language === "es" ? "Nombre y segundos nombres" : "First and middle names"} value={parent.firstNames} onChange={(value) => onChange({ ...parent, firstNames: value })} error={errors[`${prefix}.firstNames`]} fieldKey={`${prefix}.firstNames`} registerRef={registerRef} showValidationErrors={showValidationErrors} />
        <Field label={language === "es" ? "Apellido de soltera u otros nombres" : "Maiden or other names"} value={parent.otherNames} onChange={(value) => onChange({ ...parent, otherNames: value })} />
        <Field label={language === "es" ? "Lugar de nacimiento" : "Place of birth"} value={parent.placeOfBirth} onChange={(value) => onChange({ ...parent, placeOfBirth: value })} />
        <Field label={language === "es" ? "País de nacimiento" : "Country of birth"} value={parent.countryOfBirth} onChange={(value) => onChange({ ...parent, countryOfBirth: value })} />
        <DateField label={language === "es" ? "Fecha de nacimiento" : "Date of birth"} value={parent.dateOfBirth} onChange={(value) => onChange({ ...parent, dateOfBirth: value })} />
        <Field label={language === "es" ? "Nacionalidad al nacer el solicitante" : "Nationality when applicant was born"} value={parent.nationalityAtBirth} onChange={(value) => onChange({ ...parent, nationalityAtBirth: value })} />
        <Field label={language === "es" ? "Número de pasaporte" : "Passport number"} value={parent.passportNumber} onChange={(value) => onChange({ ...parent, passportNumber: value })} />
        <DateField label={language === "es" ? "Fecha de expedición del pasaporte" : "Passport date of issue"} value={parent.passportIssueDate} onChange={(value) => onChange({ ...parent, passportIssueDate: value })} />
      </div>
    </div>
  );
}

function SignatureField({
  label,
  value,
  onChange,
  language,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  language: "en" | "es";
}) {
  return (
    <div className="md:col-span-2 rounded-[1.25rem] border border-navy/8 bg-white p-4">
      <p className="text-sm font-semibold text-navy">{label}</p>
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

function QuestionSection({
  icon: Icon,
  title,
  help,
  aside,
  children,
}: {
  icon: typeof UserRound;
  title: string;
  help: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[1.5rem] border border-navy/8 bg-[#fffdfa] p-5 shadow-[0_10px_28px_rgba(45,56,77,0.06)]">
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
        className="w-full max-w-[36rem] rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_24px_80px_rgba(45,56,77,0.18)] md:p-8"
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

function TogglePill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${
        active ? "bg-navy text-beige" : "border border-navy/10 bg-white text-navy hover:bg-beige"
      }`}
    >
      {children}
    </button>
  );
}

function Field({
  label,
  help,
  value,
  onChange,
  multiline = false,
  multilineClassName,
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
  multilineClassName?: string;
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
        {help && !multiline ? (
          <span className="font-sans text-xs font-normal leading-5 text-navy/52">
            {help.startsWith("(") ? help : `(${help})`}
          </span>
        ) : null}
      </span>
      {help && multiline ? (
        <span className="mt-1 block font-sans text-xs leading-6 text-navy/52">{help}</span>
      ) : null}
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value.replace(/\r/g, ""))}
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
      <div className={`mt-2 flex items-center gap-2 rounded-[1rem] transition-all ${showErrorGlow ? "ring-2 ring-salmon/80 shadow-[0_0_0_6px_rgba(241,155,154,0.18)]" : ""}`}>
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
      <div className={`mt-2 flex flex-wrap gap-3 rounded-[1rem] transition-all ${showErrorGlow ? "ring-2 ring-salmon/80 shadow-[0_0_0_6px_rgba(241,155,154,0.18)]" : ""}`}>
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

function updateDraft<K extends keyof PassportDraft>(
  setDraft: Dispatch<SetStateAction<PassportDraft>>,
  key: K,
  value: PassportDraft[K]
) {
  setDraft((current) => ({ ...current, [key]: value }));
}

function getValidationErrors(draft: PassportDraft, language: "en" | "es") {
  const errors: Record<string, string> = {};
  const message = (en: string, es: string) => (language === "es" ? es : en);

  if (!draft.applicantType) errors.applicantType = message("Choose who the passport is for.", "Elige para quién es el pasaporte.");
  if (!draft.passportType) errors.passportType = message("Choose the type of application.", "Elige el tipo de solicitud.");
  if (!draft.surname.trim()) errors.surname = message("Add the surname.", "Añade el apellido.");
  if (!draft.firstNames.trim()) errors.firstNames = message("Add the first and middle names.", "Añade el nombre y los segundos nombres.");
  if (!draft.dateOfBirth.trim()) errors.dateOfBirth = message("Add the date of birth.", "Añade la fecha de nacimiento.");
  if (!draft.townOfBirth.trim()) errors.townOfBirth = message("Add the town of birth.", "Añade la ciudad o pueblo de nacimiento.");
  if (!draft.countryOfBirth.trim()) errors.countryOfBirth = message("Add the country of birth.", "Añade el país de nacimiento.");
  if (!draft.address.trim()) errors.address = message("Add the home address.", "Añade la dirección.");
  if (!draft.townCity.trim()) errors.townCity = message("Add the town or city.", "Añade la ciudad.");
  if (!draft.country.trim()) errors.country = message("Add the country.", "Añade el país.");
  if (!draft.postcode.trim()) errors.postcode = message("Add the postcode.", "Añade el código postal.");
  if (!draft.daytimePhone.trim()) errors.daytimePhone = message("Add the daytime phone number.", "Añade el teléfono de día.");

  const emailError = getEmailError(draft.email, language);
  if (emailError) errors.email = emailError;

  const dateFields = [
    "dateOfBirth",
    "naturalisationIssueDate",
    "previousPassportIssueDate",
    "previousPassportExpiryDate",
    "parent1.dateOfBirth",
    "parent1.passportIssueDate",
    "parent2.dateOfBirth",
    "parent2.passportIssueDate",
  ] as const;

  for (const field of dateFields) {
    const value = getDraftValue(draft, field);
    const dateError = getDateError(value, language);
    if (dateError) errors[field] = dateError;
  }

  if (draft.deliverySameAsHome === "no" && !draft.deliveryAddress.trim()) {
    errors.deliveryAddress = message("Add the delivery address.", "Añade la dirección de entrega.");
  }

  if (draft.includeNaturalisation === "yes") {
    if (!draft.naturalisationCertificateNumber.trim()) {
      errors.naturalisationCertificateNumber = message("Add the certificate number.", "Añade el número del certificado.");
    }
    if (!draft.naturalisationIssuePlace.trim()) {
      errors.naturalisationIssuePlace = message("Add the place of issue.", "Añade el lugar de expedición.");
    }
    if (!draft.naturalisationIssueDate.trim()) {
      errors.naturalisationIssueDate = message("Add the issue date.", "Añade la fecha de expedición.");
    }
  }

  if (draft.applicantType === "child" || draft.needParentDetails === "yes" || draft.changeNationalityStatus) {
    if (!draft.parent1.surname.trim()) errors["parent1.surname"] = message("Add the first parent's surname.", "Añade el apellido del primer progenitor.");
    if (!draft.parent1.firstNames.trim()) errors["parent1.firstNames"] = message("Add the first parent's names.", "Añade el nombre del primer progenitor.");
  }

  if (draft.passportType && draft.passportType !== "first") {
    if (!draft.previousPassportNumber.trim()) {
      errors.previousPassportNumber = message("Add the previous passport number.", "Añade el número del pasaporte anterior.");
    }
  }

  if (draft.applicantType === "child") {
    if (!draft.signerRole) {
      errors.signerRole = message("Choose who is signing for the child.", "Elige quién firma por el menor.");
    }
    if ((draft.signerRole === "guardian" || draft.signerRole === "other") && !draft.signerName.trim()) {
      errors.signerName = message("Add the signer's name.", "Añade el nombre de quien firma.");
    }
    if ((draft.signerRole === "guardian" || draft.signerRole === "other") && !draft.signerRelationship.trim()) {
      errors.signerRelationship = message("Add the relationship to the child.", "Añade la relación con el menor.");
    }
  }

  if (draft.needsCountersignatory === "yes") {
    if (!draft.countersignFirstNames.trim()) errors.countersignFirstNames = message("Add the countersignatory's names.", "Añade el nombre de la persona que contrafirma.");
    if (!draft.countersignSurname.trim()) errors.countersignSurname = message("Add the countersignatory's surname.", "Añade el apellido de la persona que contrafirma.");
  }

  return errors;
}

function getDraftValue(draft: PassportDraft, path: string) {
  return path.split(".").reduce<unknown>((current, key) => {
    if (typeof current !== "object" || current === null) {
      return "";
    }
    return (current as Record<string, unknown>)[key];
  }, draft) as string;
}

function getDateError(value: string, language: "en" | "es") {
  if (!value.trim()) {
    return "";
  }
  const [day, month, year] = splitDateParts(value);
  if (day.length !== 2 || month.length !== 2 || year.length !== 4) {
    return language === "es" ? "Usa DD/MM/AAAA." : "Use DD/MM/YYYY.";
  }
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  if (
    Number.isNaN(date.getTime()) ||
    date.getFullYear() !== Number(year) ||
    date.getMonth() !== Number(month) - 1 ||
    date.getDate() !== Number(day)
  ) {
    return language === "es" ? "Esa fecha no parece correcta." : "That date doesn't look right.";
  }
  return "";
}

function getEmailError(value: string, language: "en" | "es") {
  if (!value.trim()) {
    return "";
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(value.trim())) {
    return language === "es"
      ? "Añade un email completo, por ejemplo nombre@correo.com."
      : "Please use a full email address, for example name@example.com.";
  }
  return "";
}

function splitDateParts(value: string): [string, string, string] {
  const parts = value.split("/");
  return [parts[0] ?? "", parts[1] ?? "", parts[2] ?? ""];
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

function splitAddressLines(value: string, maxLines: number) {
  return value
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, maxLines);
}

function checkboxNameForType(applicantType: ApplicantType, passportType: PassportType) {
  if (passportType === "renewal") return applicantType === "child" ? "Check_2" : "Check_1";
  if (passportType === "first") return applicantType === "child" ? "Check_4" : "Check_3";
  if (passportType === "replacement") return applicantType === "child" ? "Check_6" : "Check_5";
  return undefined;
}

function getFieldMap(
  pdfDoc: PDFDocument,
  form: ReturnType<PDFDocument["getForm"]>
) {
  const pageRefs = new Map(
    pdfDoc.getPages().map((page, index) => [page.ref.toString(), index])
  );
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

function digitsFromDate(value: string) {
  return value.replace(/\D/g, "").slice(0, 8);
}

function compactPassportNumber(value: string) {
  return value.replace(/\s+/g, "").slice(0, 9);
}

function base64ToUint8Array(value: string) {
  const binaryString = window.atob(value);
  const bytes = new Uint8Array(binaryString.length);

  for (let index = 0; index < binaryString.length; index += 1) {
    bytes[index] = binaryString.charCodeAt(index);
  }

  return bytes;
}

function drawFieldText(
  pages: ReturnType<PDFDocument["getPages"]>,
  fieldMap: Map<string, FieldPlacement>,
  name: string,
  value: string,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>,
  options: { multiline?: boolean; size?: number; rowCount?: number; yOffset?: number } = {}
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
    const visibleRows =
      options.rowCount ??
      Math.max(1, Math.floor(placement.height / (size * 2)));
    const rowHeight = placement.height / visibleRows;
    lines.slice(0, visibleRows).forEach((line, index) => {
      page.drawText(line, {
        x: placement.x + 3,
        y:
          placement.y +
          placement.height -
          rowHeight * (index + 1) +
          (rowHeight - size) / 2 +
          1 +
          (options.yOffset ?? 0),
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
    y: placement.y + (placement.height - size) / 2 + 1 + (options.yOffset ?? 0),
    size,
    font,
    color,
    maxWidth: placement.width - 6,
  });
}

function drawCheckboxMark(
  pages: ReturnType<PDFDocument["getPages"]>,
  fieldMap: Map<string, FieldPlacement>,
  name: string | undefined,
  checked: boolean,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>
) {
  if (!name || !checked) {
    return;
  }

  const placement = fieldMap.get(name);
  if (!placement) {
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

function drawDigitFields(
  pages: ReturnType<PDFDocument["getPages"]>,
  fieldMap: Map<string, FieldPlacement>,
  fieldNames: string[],
  digits: string,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>
) {
  fieldNames.forEach((fieldName, index) => {
    drawFieldText(pages, fieldMap, fieldName, digits[index] ?? "", font);
  });
}

function drawDateDigits(page: ReturnType<PDFDocument["getPages"]>[number], value: string) {
  const digits = digitsFromDate(value);
  if (digits.length !== 8) {
    return;
  }
  const xs = [160.6, 178.7, 197.4, 217.2, 236.5, 254.5, 272.5, 290.6];
  xs.forEach((x, index) => {
    page.drawText(digits[index] ?? "", {
      x,
      y: 246.6,
      size: 10.5,
      color: rgb(0.12, 0.15, 0.22),
    });
  });
}

async function drawSignature(
  pdfDoc: PDFDocument,
  pages: ReturnType<PDFDocument["getPages"]>,
  fieldMap: Map<string, FieldPlacement>,
  fieldName: string,
  dataUrl: string
) {
  const placement = fieldMap.get(fieldName);
  if (!placement) {
    return;
  }
  const image = dataUrl.startsWith("data:image/jpeg")
    ? await pdfDoc.embedJpg(dataUrl)
    : await pdfDoc.embedPng(dataUrl);
  const maxWidth = placement.width - 4;
  const maxHeight = placement.height - 4;
  const scale = Math.min(maxWidth / image.width, maxHeight / image.height) * 1.1;
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  const x = placement.x + (placement.width - drawWidth) / 2;
  const y = placement.y + (placement.height - drawHeight) / 2 + 1;

  // Draw twice very slightly offset so the signature reads darker in the PDF.
  pages[placement.pageIndex].drawImage(image, {
    x,
    y,
    width: drawWidth,
    height: drawHeight,
  });
  pages[placement.pageIndex].drawImage(image, {
    x: x + 0.35,
    y,
    width: drawWidth,
    height: drawHeight,
    opacity: 0.7,
  });
}

function setCountersignTitle(
  pages: ReturnType<PDFDocument["getPages"]>,
  fieldMap: Map<string, FieldPlacement>,
  title: Title,
  otherTitle: string,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>
) {
  const map: Record<Exclude<Title, "" | "other">, string> = {
    mr: "Text_56",
    mrs: "Text_57",
    miss: "Text_58",
    ms: "Text_59",
  };
  if (title && title !== "other") {
    drawFieldText(pages, fieldMap, map[title], "X", font);
  }
  if (title === "other") {
    drawFieldText(pages, fieldMap, "Text_60", otherTitle, font);
  }
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

function getChildSigner(draft: PassportDraft) {
  if (draft.signerRole === "parent1") {
    return {
      name: [draft.parent1.firstNames, draft.parent1.surname].filter(Boolean).join(" "),
      relationship: "Parent",
    };
  }
  if (draft.signerRole === "parent2") {
    return {
      name: [draft.parent2.firstNames, draft.parent2.surname].filter(Boolean).join(" "),
      relationship: "Parent",
    };
  }
  return {
    name: draft.signerName,
    relationship: draft.signerRelationship,
  };
}

function shouldUseApplicantSignature(draft: PassportDraft) {
  return draft.applicantType === "adult" || draft.childOver12 === "yes";
}

function handleSignatureUpload(
  event: ChangeEvent<HTMLInputElement>,
  onChange: (value: string) => void
) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const result = typeof reader.result === "string" ? reader.result : "";
    if (result) onChange(result);
  };
  reader.readAsDataURL(file);
}
