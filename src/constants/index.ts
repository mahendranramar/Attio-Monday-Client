export const ROOT_DOMAIN = ".konnectifyapp.co"; //".staging.us.konnectify.dev"; // .prestaging.us.konnectify.dev | .stack5.us.konnectify.dev
export const API_PATH = "/ipaas/api";
export const UI_PATH = "/ipaas/ui";

export const APP_IDS = {
  monday: "mondaycrm-1.0.0",
  attio: "attio-1.0.0",
} as const;

// ─── Secondary app config ────────────────────────────────────────────────────
// Monday.com is the fixed primary app. SECONDARY_APP describes whichever app
// it's currently paired with (Attio today). This is the ONLY
// place you
// need to edit to swap it out for Hubspot/etc.
//
// NOTE: swapping this alone does NOT swap the workflow template — see
// WORKFLOW_TEMPLATES below, its `id` points at a template folder whose
// actual contents ("Attio records -> Monday records") are app-specific.
// You'll need a new template id whenever the secondary app changes.
export const SECONDARY_APP = {
  // internal identifier — used as the Step id / discriminated union key in
  // SetupWizard.tsx.
  key: "attio",

  // the id connectionService/konnectifyClient use to identify this app
  appId: APP_IDS.attio,

  // human-facing name, properly capitalized
  displayName: "Attio",

  // name sent to connectionService.create/edit
  connectionName: "Attio Connection",

  // wizard step indicator label
  stepLabel: "Connect Attio",

  // button copy
  connectButtonText: "Connect Attio",
  connectedButtonText: "Attio Connected",

  // SecondaryAppStep form copy
  panelSubtitle: "Click Connect Attio to authorize your account with OAuth 2.0",

  // TemplatesStep bullet copy
  templateDescription: "Attio records -> Monday records",
} as const;

export const templateFolderId = 11 as const;
export const orgId = "27" as const;
export const projectId = "27" as const;

// export const WORKFLOW_TEMPLATE_IDS = [3] as const;
// export const WORKFLOW_TEMPLATE_IDS = [4] as const;

export const WORKFLOW_TEMPLATES = [
  {
    id: templateFolderId,
    name: "Add Newly Created Attio Contact to Monday Contacts",
    description: "Automatically creates a new contact in Monday Contacts when a contact is added in Attio.",
  },
  {
    id: templateFolderId,
    name: "Update Monday Contact from Updated Attio Contact",
    description: "Automatically updates a contact in Monday Contacts when a contact is updated in Attio.",
  },
  {
    id: templateFolderId,
    name: "Add Newly Created Attio Company to Monday Accounts",
    description: "Automatically creates a new account in Monday Accounts when a company is added in Attio.",
  },
  {
    id: templateFolderId,
    name: "Update Monday Account from Updated Attio Company",
    description: "Automatically updates an account in Monday Accounts when a company is updated in Attio.",
  },
  {
    id: templateFolderId,
    name: "Add Newly Created Attio Deal to Monday Deals",
    description: "Automatically creates a new deal in Monday Deals when a deal is added in Attio.",
  },
  {
    id: templateFolderId,
    name: "Update Monday Deal from Updated Attio Deal",
    description: "Automatically updates a deal in Monday Deals when a deal is updated in Attio.",
  },
] as const;

export const ACCOUNT_SETTINGS_SECTIONS = [{ id: "connections", label: "Connections" }] as const;

export const BOARD_VIEW_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "workflows", label: "Workflows" },
  { id: "logs", label: "Event Logs" },
] as const;

export type AccountSettingsSection = (typeof ACCOUNT_SETTINGS_SECTIONS)[number]["id"];
export type BoardViewSection = (typeof BOARD_VIEW_SECTIONS)[number]["id"];
