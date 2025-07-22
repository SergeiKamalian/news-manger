const TELCELL_MARKET = {
  id: 0,
  boxShadow:
    "rgba(255, 102, 67, 0.1) 0px 0px 100px 100px, rgb(255 100 67 / 10%) 0px 0px 150px 150px, rgba(255, 100, 67, 0.2) 0px 0px 300px 100px",
  preview: "/telcell-preview.png",
  logo: "/tcm-logo.png",
  name: "Telcell Market",
  description: "Armenian online marketplace",
  type: "Web app",
};

const DINELY = {
  id: 1,
  boxShadow:
    "rgba(255, 165, 0, 0.1) 0px 0px 100px 100px, rgb(255 165 0 / 4%) 0px 0px 150px 150px, rgba(255, 165, 0, 0.2) 0px 0px 300px 100px",
  preview: "/dinely-preview.png",
  logo: "/dinely-logo.svg",
  name: "Dinely",
  description: "QR ordering platform",
  type: "Web app",
};
const RUSARM = {
  id: 2,
  boxShadow:
    "rgb(3 74 221 / 58%) 0px 0px 100px 100px, rgb(5 77 228 / 8%) 0px 0px 150px 150px, rgb(24 93 238 / 13%) 0px 0px 300px 150px",
  preview: "/rusarm-preview.png",
  logo: "/rusarm-logo.png",
  name: "RA Services",
  description: "Online ticketing & logistics",
  type: "Web app",
};
const UI_KIT = {
  id: 3,
  boxShadow:
    "rgb(253 100 69 / 42%) 0px 0px 100px 100px, rgba(5, 77, 228, 0.08) 0px 0px 150px 150px, rgba(24, 93, 238, 0.13) 0px 0px 300px 150px",
  preview: "/ui-kit-preview.png",
  logo: "/ui-kit-logo.png",
  name: "TCM UI Lib",
  description: "Customizable multi-project UI kit",
  type: "UI Kit",
};
const BUSINESS = {
  id: 4,
  boxShadow:
    "rgb(17 155 130 / 58%) 0px 0px 100px 100px, rgba(5, 77, 228, 0.08) 0px 0px 150px 150px, rgba(24, 93, 238, 0.13) 0px 0px 300px 150px",
  preview: "/business-preview.png",
  logo: "/business-logo.png",
  name: "Telcell Business",
  description: "Business growth landing page",
  type: "Web app",
};
const IPO = {
  id: 5,
  boxShadow:
    "rgb(236 110 78 / 53%) 0px 0px 100px 100px, rgba(5, 77, 228, 0.08) 0px 0px 150px 150px, rgba(24, 93, 238, 0.13) 0px 0px 300px 150px",
  preview: "/invest-preview.png",
  logo: "/invest-logo.png",
  name: "Telcell Invest",
  description: "IPO stock purchase page",
  type: "Web app",
};

export const PROJECTS = [TELCELL_MARKET, DINELY, RUSARM, UI_KIT, BUSINESS, IPO];

export type ProjectType = typeof TELCELL_MARKET;
