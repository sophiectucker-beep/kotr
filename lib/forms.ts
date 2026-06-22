export type FormCategory =
  | "school"
  | "health"
  | "benefits"
  | "id-records"
  | "other";

export interface FormItem {
  slug: string;
  category: FormCategory;
  title: string;
  purpose: string;
  whoNeedsIt: string;
  sourceName: string;
  sourceUrl: string;
}

export const formCategoriesOrder: FormCategory[] = [
  "school",
  "health",
  "benefits",
  "id-records",
  "other",
];

export const usefulForms: FormItem[] = [
  {
    slug: "nursery-reception-enrolment",
    category: "school",
    title: "Nursery & Reception Enrolment",
    purpose:
      "Official starting point for government nursery and reception applications.",
    whoNeedsIt:
      "Parents and carers applying for a first nursery or reception place.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/school-nursery-and-reception-enrolments-1222026-11737",
  },
  {
    slug: "gha-dependent-inclusion",
    category: "health",
    title: "Add a Child or Dependant to GHA",
    purpose:
      "Application for inclusion of a dependant under the GHA medical scheme.",
    whoNeedsIt:
      "Parents registering a child or other dependant under their healthcare entitlement.",
    sourceName: "Gibraltar Health Authority",
    sourceUrl:
      "https://www.gha.gi/wp-content/uploads/2022/10/Application-for-Inclusion-of-Dependent.pdf",
  },
  {
    slug: "gha-registration",
    category: "health",
    title: "GHA Registration",
    purpose:
      "Registration page for health card applications, renewals, and the main GPMS paperwork.",
    whoNeedsIt:
      "Families newly registering with GHA or sorting healthcare admin after a move.",
    sourceName: "Gibraltar Health Authority",
    sourceUrl: "https://www.gha.gi/registration/",
  },
  {
    slug: "gha-change-name-address",
    category: "health",
    title: "GHA Change of Name or Address",
    purpose:
      "Short form for updating your details with GHA when something changes.",
    whoNeedsIt:
      "Families who have moved, changed surname, or need their health records to match current details.",
    sourceName: "Gibraltar Health Authority",
    sourceUrl:
      "https://www.gha.gi/wp-content/uploads/2023/12/Change-of-Name-and-or-Address-Form.pdf",
  },
  {
    slug: "medical-records-request",
    category: "health",
    title: "Medical Records Request",
    purpose:
      "Request a copy of personal medical records or records for a child where you are the legal guardian.",
    whoNeedsIt:
      "Parents needing records for referrals, claims, school paperwork, or just to get things in order.",
    sourceName: "Gibraltar Health Authority",
    sourceUrl: "https://www.gha.gi/services/release-of-records-services/",
  },
  {
    slug: "child-welfare-grant",
    category: "benefits",
    title: "Child Welfare Grant Claim",
    purpose: "Main application form for Child Welfare Grant.",
    whoNeedsIt:
      "Families applying for Child Welfare Grant support for the first time.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/uploads/documents/social-security/child-welfare-grant-application-form.pdf",
  },
  {
    slug: "child-welfare-change-circumstances",
    category: "benefits",
    title: "Child Welfare Grant Change of Circumstances",
    purpose:
      "Notify Social Security when a birth, death, marriage, separation, or other family change affects your claim.",
    whoNeedsIt:
      "Families already on Child Welfare Grant whose household situation has changed.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/uploads/documents/social-security/child-welfare-change-of-circumstances.pdf",
  },
  {
    slug: "child-welfare-school-declaration",
    category: "benefits",
    title: "Child Welfare Grant School Declaration",
    purpose:
      "School declaration used to keep Child Welfare Grant payments in place for older children still in full-time education.",
    whoNeedsIt:
      "Parents or guardians with children over 15 who are still in school or college.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/uploads/documents/social-security/CWG-school-declaration.pdf",
  },
  {
    slug: "maternity-allowance",
    category: "benefits",
    title: "Maternity Allowance Claim",
    purpose:
      "Contributory maternity allowance claim form through Social Security.",
    whoNeedsIt:
      "Pregnant parents or new mums claiming maternity allowance on their social insurance record.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/uploads/documents/social-security/maternity-allowance-claim-form.pdf",
  },
  {
    slug: "maternity-grant",
    category: "benefits",
    title: "Maternity Grant Claim",
    purpose:
      "Grant claim form for the one-off maternity payment through Social Security.",
    whoNeedsIt:
      "Parents claiming the maternity grant around the birth of a baby.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/uploads/documents/social-security/maternity-grant-claim-form.pdf",
  },
  {
    slug: "disability-benefit-child",
    category: "benefits",
    title: "Disability Benefit for a Child",
    purpose:
      "Detailed claim form for disability benefit for a child under 18.",
    whoNeedsIt:
      "Parents or guardians applying for disability-related support for a child.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/uploads/documents/social-security/Application-for-Disability-Benefit-Child.pdf",
  },
  {
    slug: "guardians-allowance",
    category: "benefits",
    title: "Guardian's Allowance Claim",
    purpose: "Allowance claim for a guardian caring for a child after a parent has died.",
    whoNeedsIt:
      "Guardians applying for support for orphaned children or similar circumstances.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/uploads/documents/social-security/guardians-allowance-claim-form.pdf",
  },
  {
    slug: "birth-registration",
    category: "id-records",
    title: "Birth Registration Form",
    purpose:
      "Official registration form for births in Gibraltar, with the guidance notes on the second page.",
    whoNeedsIt:
      "Parents registering a newborn child in Gibraltar.",
    sourceName: "Department of Immigration & Home Affairs",
    sourceUrl:
      "https://www.gibraltar.gov.gi/uploads/Department%20of%20Immigration%20%26%20Home%20Affairs/Births%20and%20Deaths/Births_Registration_Form.pdf",
  },
  {
    slug: "gibraltar-passport",
    category: "id-records",
    title: "Gibraltar Passport Application",
    purpose:
      "Passport form for Gibraltar-issued British passports, including child applications.",
    whoNeedsIt:
      "Families applying for a child passport, first passport, renewal, or change of particulars.",
    sourceName: "Department of Immigration & Home Affairs",
    sourceUrl:
      "https://www.gibraltar.gov.gi/uploads/Department%20of%20Immigration%20%26%20Home%20Affairs/Passports%20and%20Nationality/New_Passport_Application_Form_V6.15-_Website_format.pdf",
  },
  {
    slug: "civilian-registration-card",
    category: "id-records",
    title: "Civilian Registration Card Application",
    purpose:
      "Application form for a Civilian Registration Card and Permit of Residence.",
    whoNeedsIt:
      "Families applying for or renewing civilian registration paperwork in Gibraltar.",
    sourceName: "Department of Immigration & Home Affairs",
    sourceUrl:
      "https://www.gibraltar.gov.gi/uploads/Civil-Status-and-Registration-Office/APPLICATION_FORM_-_Civilian_Reg_Card_-_April_24.pdf",
  },
  {
    slug: "identity-card-application",
    category: "id-records",
    title: "Identity Card Application",
    purpose:
      "Official application form for a Gibraltar identity card, including renewals, change of particulars, and replacement requests.",
    whoNeedsIt:
      "Families renewing a child's Gibraltar identity card or replacing one that is lost, stolen, or damaged.",
    sourceName: "Department of Immigration & Home Affairs",
    sourceUrl:
      "https://www.gibraltar.gov.gi/uploads/Department%20of%20Immigration%20%26%20Home%20Affairs/ID%20cards%20%26%20Civilian%20registration%20cards/APPLICATION_FORM_-_Identity_Card_.pdf",
  },
  {
    slug: "lost-stolen-card",
    category: "id-records",
    title: "Lost or Stolen ID / Civilian Registration Card",
    purpose:
      "Notification form for reporting a lost or stolen Gibraltar identity or civilian registration card.",
    whoNeedsIt:
      "Anyone needing to report a missing ID or sort a replacement card.",
    sourceName: "Department of Immigration & Home Affairs",
    sourceUrl:
      "https://www.gibraltar.gov.gi/uploads/Department%20of%20Immigration%20%26%20Home%20Affairs/ID%20cards%20%26%20Civilian%20registration%20cards/LOST_OR_STOLEN_FORM.pdf",
  },
  {
    slug: "social-security-forms",
    category: "other",
    title: "Social Security Benefits Forms Index",
    purpose:
      "Official index page for benefit claim forms beyond the main parent-facing ones listed here.",
    whoNeedsIt:
      "Families who need a less common Social Security form and want the official list in one place.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/department-social-security/social-security-and-benefits/application-forms",
  },
];
