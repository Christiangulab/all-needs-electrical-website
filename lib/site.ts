export const site = {
  name: "All Needs Electrical Solutions",
  domain: "www.allneedselec.com.au",
  url: "https://www.allneedselec.com.au",
  phone: "0405 714 340",
  phoneHref: "tel:+61405714340",
  email: "info@allneedselec.com.au",
  location: "Sydney NSW",
};

export const serviceAreas = ["St George", "Sutherland Shire", "Inner West", "Eastern Suburbs"];

export const suburbs = [
  "Hurstville",
  "Kogarah",
  "Rockdale",
  "Miranda",
  "Cronulla",
  "Concord",
  "Five Dock",
  "Leichhardt",
  "Bondi",
  "Rose Bay",
  "Double Bay",
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Emergency", href: "/emergency-electrician-sydney" },
  { label: "EV Chargers", href: "/ev-charger-installation-sydney" },
  { label: "CCTV", href: "/cctv-security-camera-installation-sydney" },
  { label: "Switchboards", href: "/switchboard-upgrades-sydney" },
  { label: "Strata", href: "/property-manager-strata-services" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Emergency Electrician Sydney",
    href: "/emergency-electrician-sydney",
    description: "Fast fault finding, urgent repairs, outage support and make-safe electrical work across Sydney.",
  },
  {
    title: "EV Charger Installation Sydney",
    href: "/ev-charger-installation-sydney",
    description: "Premium home and strata EV charger installs with load checks, neat cabling and compliant commissioning.",
  },
  {
    title: "CCTV & Security Camera Installation Sydney",
    href: "/cctv-security-camera-installation-sydney",
    description: "Discreet camera, intercom and security wiring for homes, shops, offices and shared properties.",
  },
  {
    title: "Switchboard Upgrades Sydney",
    href: "/switchboard-upgrades-sydney",
    description: "Modern switchboards, safety switches, surge protection and capacity upgrades for safer properties.",
  },
  {
    title: "Property Manager & Strata Services",
    href: "/property-manager-strata-services",
    description: "Responsive maintenance, reporting and scheduled electrical support for agencies and strata committees.",
  },
];

export const servicePages = {
  "/emergency-electrician-sydney": {
    title: "Emergency Electrician Sydney",
    description:
      "Need an emergency electrician in Sydney? All Needs Electrical Solutions handles urgent faults, outages, tripping circuits and make-safe repairs.",
    h1: "Emergency Electrician Sydney",
    intro:
      "When power, safety or access is on the line, you need a calm, licensed electrician who can find the fault fast and leave the property safe.",
    bullets: ["Power outages and tripping circuits", "Burning smells, damaged outlets and urgent make-safe work", "After-hours electrical faults for homes, strata and businesses"],
    proof: ["Priority triage for urgent faults", "Make-safe repairs and clear next steps", "Residential, commercial and strata support"],
  },
  "/ev-charger-installation-sydney": {
    title: "EV Charger Installation Sydney",
    description:
      "Premium EV charger installation in Sydney for homes, apartments and strata properties by All Needs Electrical Solutions.",
    h1: "EV Charger Installation Sydney",
    intro:
      "Install a smarter EV charging setup with careful load assessment, clean cable runs and a finish that suits a premium property.",
    bullets: ["Home wall charger installation", "Apartment and strata EV charging advice", "Load checks, protection and compliance certificates"],
    proof: ["Wall-mounted charger installation", "Load management advice", "Future-ready property positioning"],
  },
  "/cctv-security-camera-installation-sydney": {
    title: "CCTV & Security Camera Installation Sydney",
    description:
      "CCTV and security camera installation in Sydney for homes, shops, offices and strata buildings.",
    h1: "CCTV & Security Camera Installation Sydney",
    intro:
      "Protect entrances, driveways, common areas and business premises with a discreet camera system installed by a licensed electrician.",
    bullets: ["Camera placement and wiring", "NVR, intercom and network-ready installs", "Residential, commercial and strata security upgrades"],
    proof: ["Clean cable paths", "Strategic camera positioning", "Residential and commercial systems"],
  },
  "/switchboard-upgrades-sydney": {
    title: "Switchboard Upgrades Sydney",
    description:
      "Switchboard upgrades in Sydney including safety switches, surge protection, circuit capacity and compliant modern boards.",
    h1: "Switchboard Upgrades Sydney",
    intro:
      "Older switchboards can limit capacity and increase risk. Upgrade to a safer, cleaner board ready for modern appliances, EV charging and renovations.",
    bullets: ["Safety switch and circuit protection upgrades", "Ceramic fuse replacement", "Capacity upgrades for renovations, air conditioning and EV chargers"],
    proof: ["Safety switch protection", "Neat labelled boards", "Capacity planning for modern loads"],
  },
  "/property-manager-strata-services": {
    title: "Property Manager & Strata Electrical Services",
    description:
      "Reliable electrical maintenance for Sydney property managers, strata committees and real estate agencies.",
    h1: "Property Manager & Strata Services",
    intro:
      "A dependable electrical partner for maintenance requests, common-area faults and scheduled upgrades across managed properties.",
    bullets: ["Clear communication and job updates", "Common-area lighting, power and security repairs", "Planned maintenance and compliance-focused upgrades"],
    proof: ["Agency-friendly communication", "Strata common area support", "Scheduled and reactive maintenance"],
  },
} as const;

export type ServicePath = keyof typeof servicePages;
