export type NumbersCategory =
  | "emergency-safety"
  | "healthcare"
  | "education-school"
  | "family-support-benefits"
  | "support-lines";

export interface UsefulNumberItem {
  slug: string;
  category: NumbersCategory;
  service: string;
  number: string;
  telHref: string;
  note: string;
  sourceName: string;
  sourceUrl: string;
}

export const usefulNumbersVerifiedDate = "March 2026";

export const usefulNumbers: UsefulNumberItem[] = [
  {
    slug: "emergency-services",
    category: "emergency-safety",
    service: "Emergency services",
    number: "999",
    telHref: "tel:+350999",
    note: "For urgent police, fire, or ambulance help.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl: "https://www.gibraltar.gov.gi/contacts/emergency-calls-16",
  },
  {
    slug: "royal-gibraltar-police-general",
    category: "emergency-safety",
    service: "Royal Gibraltar Police",
    number: "200 72500",
    telHref: "tel:+35020072500",
    note: "General enquiries and non-emergency police contact.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl: "https://www.gibraltar.gov.gi/contacts/police-royal-gibraltar-54",
  },
  {
    slug: "community-safety-unit",
    category: "emergency-safety",
    service: "Community Safety Unit",
    number: "200 48073",
    telHref: "tel:+35020048073",
    note: "Useful if you need the police community safety team directly.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl: "https://www.gibraltar.gov.gi/contacts/police-royal-gibraltar-54",
  },
  {
    slug: "gha-call-centre",
    category: "healthcare",
    service: "GHA Call Centre",
    number: "200 72266",
    telHref: "tel:+35020072266",
    note: "General GHA enquiries and hospital switchboard.",
    sourceName: "Gibraltar Health Authority",
    sourceUrl: "https://www.gha.gi/contact/",
  },
  {
    slug: "primary-care-appointments",
    category: "healthcare",
    service: "Primary Care appointments",
    number: "200 52441",
    telHref: "tel:+35020052441",
    note: "For GP appointments, same-day calls, bloods, dietician, and more.",
    sourceName: "Gibraltar Health Authority",
    sourceUrl: "https://www.gha.gi/contact/",
  },
  {
    slug: "primary-care-enquiries",
    category: "healthcare",
    service: "Primary Care Centre enquiries",
    number: "200 72355",
    telHref: "tel:+35020072355",
    note: "General enquiries for the Primary Care Centre.",
    sourceName: "Gibraltar Health Authority",
    sourceUrl: "https://www.gha.gi/contact/",
  },
  {
    slug: "childrens-health-centre",
    category: "healthcare",
    service: "Children's Health Centre",
    number: "200 63636",
    telHref: "tel:+35020063636",
    note: "Useful if you need the children's service through GHA.",
    sourceName: "Gibraltar Health Authority",
    sourceUrl: "https://www.gha.gi/contact/",
  },
  {
    slug: "dentist",
    category: "healthcare",
    service: "Dentist",
    number: "200 07809",
    telHref: "tel:+35020007809",
    note: "Children usually not seen at the GHA until age 4+ due to looong waiting list.",
    sourceName: "Gibraltar Health Authority",
    sourceUrl: "https://www.gha.gi/contact/",
  },
  {
    slug: "rainbow-childrens-ward",
    category: "healthcare",
    service: "Rainbow Children's Ward",
    number: "200 72266 ext. 2136 / 2137",
    telHref: "tel:+35020072266",
    note: "St Bernard's Hospital children's ward.",
    sourceName: "Gibraltar Health Authority",
    sourceUrl: "https://www.gha.gi/contact/",
  },
  {
    slug: "maternity-ward",
    category: "healthcare",
    service: "Emily Mackintosh Maternity Ward",
    number: "200 72266 ext. 2124 / 2125",
    telHref: "tel:+35020072266",
    note: "Maternity ward at St Bernard's Hospital.",
    sourceName: "Gibraltar Health Authority",
    sourceUrl: "https://www.gha.gi/contact/",
  },
  {
    slug: "department-of-education",
    category: "education-school",
    service: "Department of Education",
    number: "200 77486 / 200 78638",
    telHref: "tel:+35020077486",
    note: "General enquiries for Gibraltar's education department.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl: "https://www.gibraltar.gov.gi/education",
  },
  {
    slug: "gibraltar-schools-directory",
    category: "education-school",
    service: "Schools directory",
    number: "See official school numbers",
    telHref: "https://www.gibraltar.gov.gi/education/schools",
    note: "Official page listing direct phone numbers for Gibraltar schools.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl: "https://www.gibraltar.gov.gi/education/schools",
  },
  {
    slug: "social-assistance-child-welfare",
    category: "family-support-benefits",
    service: "Social Assistance & Child Welfare Grant",
    number: "54072622",
    telHref: "tel:+35054072622",
    note: "Useful for child welfare grant and social assistance queries.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/department-of-social-security-7594",
  },
  {
    slug: "child-welfare-grant-office",
    category: "family-support-benefits",
    service: "Child Welfare Grant office",
    number: "200 51149",
    telHref: "tel:+35020051149",
    note: "Help with assessable income forms and child welfare grant paperwork.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/child-welfare-grant-assessable-income-forms-2024-10089",
  },
  {
    slug: "family-community-centre",
    category: "family-support-benefits",
    service: "Family & Community Centre",
    number: "200 46386",
    telHref: "tel:+35020046386",
    note: "Parenting support and family-focused programmes through the Care Agency.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/incredible-years-parenting-course-to-be-run-by-the-care-agency-6842022-8273",
  },
  {
    slug: "child-protection-team",
    category: "family-support-benefits",
    service: "Child Protection Team",
    number: "200 78528",
    telHref: "tel:+35020078528",
    note: "If you are worried about a child's welfare.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/health/care-agency/child-protection-team",
  },
  {
    slug: "fostering-care-agency",
    category: "family-support-benefits",
    service: "Care Agency fostering enquiries",
    number: "200 78528",
    telHref: "tel:+35020078528",
    note: "For fostering information and first enquiries.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/9852025-care-agency-launches-7-under-7-fostering-campaign-11576",
  },
  {
    slug: "childline",
    category: "support-lines",
    service: "Childline",
    number: "8008",
    telHref: "tel:+3508008",
    note: "Support line for children and young people.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/ongoing-adverse-weather-impacting-our-mental-well-being-832026-11691",
  },
  {
    slug: "teenline",
    category: "support-lines",
    service: "Teenline",
    number: "8009",
    telHref: "tel:+3508009",
    note: "Support line aimed at teenagers.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/ongoing-adverse-weather-impacting-our-mental-well-being-832026-11691",
  },
  {
    slug: "gibsams",
    category: "support-lines",
    service: "GibSams",
    number: "116123",
    telHref: "tel:+350116123",
    note: "Listening support if things feel too much.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/ongoing-adverse-weather-impacting-our-mental-well-being-832026-11691",
  },
  {
    slug: "gha-mental-health-support",
    category: "healthcare",
    service: "GHA urgent healthcare advice",
    number: "111",
    telHref: "tel:+350111",
    note:
      "24-hour GHA advice line for urgent healthcare help when it is not a 999 emergency, and also the access number for mental health crisis support.",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/gha-appeals-to-public-please-use-ae-111-and-gp-services-responsibly-72021-6549",
  },
];
