export const SITE_CONFIG = {
  name: "Hexa Engineering Limited",
  title: "Hexa Engineering Limited | SREDA Certified Energy Audit, Carbon & Sustainability Consultant in Bangladesh",
  description:
    "Hexa Engineering Limited is a premier engineering consultancy firm in Bangladesh dedicated to transforming the industrial landscape through energy efficiency, safety, and sustainability.",
  url: "https://hexa-bd.com",
  ogImage: "/images/og-image.jpg",
  phone: "+01881-927234",
  email: "contact@hexa-bd.com",
  address: {
    headOffice: {
      label: "Head Office",
      address: "Azimpur Adhunik Nagar Market, Lalbag, Dhaka",
      phone: "+01881-927234",
      email: "contact@hexa-bd.com",
    },
    branchOffice: {
      label: "Branch Office",
      address: "Hazi Super Market, Zirabo Ashulia, Dhaka",
      phone: "+01881-927234",
      email: "contact@hexa-bd.com",
    },
  },
  social: {
    facebook: "https://facebook.com/hexaengineering",
    twitter: "https://twitter.com/hexaengineering",
    linkedin: "https://linkedin.com/company/hexaengineering",
    instagram: "https://instagram.com/hexaengineering",
    vimeo: "https://vimeo.com/hexaengineering",
    pinterest: "https://pinterest.com/hexaengineering",
  },
  company: {
    chairman: "MD. S A Bhuiyan",
    managingDirector: "Md. Abu Rayhan",
    type: "Private Limited Company",
    registrationNo: "C-206202-2025",
    tradeLicenseNo: "018306",
    tin: "652523193839",
    bin: "008880464-0403",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Energy Audit & Efficiency", href: "/services/energy-audit" },
      { label: "Safety & Compliance", href: "/services/safety-compliance" },
      { label: "Sustainability", href: "/services/sustainability" },
      { label: "ETP & STP Solutions", href: "/services/etp-stp" },
      { label: "Carbon Accounting", href: "/services/carbon-accounting" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;
