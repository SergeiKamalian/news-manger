const TELCELL_MARKET = {
  id: 0,
  boxShadow:
    "rgba(255, 102, 67, 0.1) 0px 0px 100px 100px, rgb(255 100 67 / 10%) 0px 0px 150px 150px, rgba(255, 100, 67, 0.2) 0px 0px 300px 100px",
  preview: "/telcell-preview.png",
  logo: "/tcm-logo.png",
  name: "Telcell Market",
  description: "armenian_online_marketplace",
  type: "web_app",
  url: "https://telcell.market/en",
};

const DINELY = {
  id: 1,
  boxShadow:
    "rgba(255, 165, 0, 0.1) 0px 0px 100px 100px, rgb(255 165 0 / 4%) 0px 0px 150px 150px, rgba(255, 165, 0, 0.2) 0px 0px 300px 100px",
  preview: "/dinely-preview.png",
  logo: "/dinely-logo.svg",
  name: "Dinely",
  description: "QR_ordering_platform",
  type: "web_app",
  url: "https://dinely.co/",
};
const RUSARM = {
  id: 2,
  boxShadow:
    "rgb(3 74 221 / 58%) 0px 0px 100px 100px, rgb(5 77 228 / 8%) 0px 0px 150px 150px, rgb(24 93 238 / 13%) 0px 0px 300px 150px",
  preview: "/rusarm-preview.png",
  logo: "/rusarm-logo.png",
  name: "RA Services",
  description: "Online_ticketing_&_logistics",
  type: "web_app",
  url: "https://rusarm-transits.am/",
};
const UI_KIT = {
  id: 3,
  boxShadow:
    "rgb(253 100 69 / 42%) 0px 0px 100px 100px, rgba(5, 77, 228, 0.08) 0px 0px 150px 150px, rgba(24, 93, 238, 0.13) 0px 0px 300px 150px",
  preview: "/ui-kit-preview.png",
  logo: "/ui-kit-logo.png",
  name: "TCM UI Lib",
  description: "Customizable_multi-project_UI_kit",
  type: "UI Kit",
  url: "https://www.npmjs.com/package/tcm-ui-kit",
};
const BUSINESS = {
  id: 4,
  boxShadow:
    "rgb(17 155 130 / 58%) 0px 0px 100px 100px, rgba(5, 77, 228, 0.08) 0px 0px 150px 150px, rgba(24, 93, 238, 0.13) 0px 0px 300px 150px",
  preview: "/business-preview.png",
  logo: "/business-logo.png",
  name: "Telcell Business",
  description: "Business_growth_landing_page",
  type: "web_app",
  url: "",
};
const IPO = {
  id: 5,
  boxShadow:
    "rgb(236 110 78 / 53%) 0px 0px 100px 100px, rgba(5, 77, 228, 0.08) 0px 0px 150px 150px, rgba(24, 93, 238, 0.13) 0px 0px 300px 150px",
  preview: "/invest-preview.png",
  logo: "/invest-logo.png",
  name: "Telcell Invest",
  description: "IPO_stock_purchase_page",
  type: "web_app",
  url: "",
};

export const PROJECTS = [TELCELL_MARKET, DINELY, RUSARM, UI_KIT, BUSINESS, IPO];

export type ProjectType = typeof TELCELL_MARKET;
