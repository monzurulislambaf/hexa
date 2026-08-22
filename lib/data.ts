import {
  Zap,
  Shield,
  Leaf,
  Droplets,
  Cloud,
  Cog,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  image: string;
  year: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Energy Audit & Efficiency Consulting",
    shortTitle: "Energy Audit",
    slug: "energy-audit",
    description:
      "Services focused on reducing industrial energy waste and operational costs through scientific and data-driven approaches.",
    longDescription:
      "Our energy audit services help industries identify hidden inefficiencies and implement cost-effective solutions. We use advanced diagnostic tools and ASHRAE standards to deliver comprehensive energy assessments that reduce consumption by 15-40%.",
    icon: Zap,
    features: [
      "Level I, II & III Energy Audits",
      "ASHRAE Standard Compliance",
      "Motor & Drives Efficiency Analysis",
      "Steam System Optimization",
      "Lighting Retrofit Design",
      "HVAC System Assessment",
      "Energy Management Systems (ISO 50001)",
      "Waste Heat Recovery Analysis",
    ],
    benefits: [
      "Reduce energy costs by 15-40%",
      "Improve operational efficiency",
      "Extend equipment lifespan",
      "Meet SREDA compliance requirements",
      "Achieve faster ROI on energy investments",
    ],
  },
  {
    id: "2",
    title: "Safety & Regulatory Compliance",
    shortTitle: "Safety & Compliance",
    slug: "safety-compliance",
    description:
      "Services dedicated to safeguarding lives, assets, and operations through rigorous compliance with national and international safety standards.",
    longDescription:
      "We ensure your facilities meet all safety codes and regulations including BNBC, NFPA, and international electrical standards. Our comprehensive compliance assessments protect your workforce and assets.",
    icon: Shield,
    features: [
      "BNBC Compliance Assessment",
      "NFPA Fire Safety Audits",
      "Electrical Safety Inspections",
      "Hazardous Area Classification",
      "Emergency Response Planning",
      "Safety Training Programs",
      "Risk Assessment & Mitigation",
      "Documentation & Certification",
    ],
    benefits: [
      "Ensure regulatory compliance",
      "Protect workforce and assets",
      "Avoid costly penalties and shutdowns",
      "Build a culture of safety",
      "Meet international standards",
    ],
  },
  {
    id: "3",
    title: "Sustainability & Green Building",
    shortTitle: "Sustainability",
    slug: "sustainability",
    description:
      "Services aimed at guiding industries toward a low-carbon and resource-efficient future.",
    longDescription:
      "Our sustainability consultants help organizations transition to green practices, achieve LEED certification, and implement renewable energy solutions. We guide you through every step of your sustainability journey.",
    icon: Leaf,
    features: [
      "LEED & EDGE Certification",
      "Green Building Design",
      "Renewable Energy Integration",
      "Solar PV System Design",
      "Energy Efficiency Benchmarking",
      "Sustainability Reporting",
      "Resource Efficiency Analysis",
      "Environmental Impact Assessment",
    ],
    benefits: [
      "Achieve green building certifications",
      "Reduce carbon footprint",
      "Lower operational costs",
      "Enhance brand reputation",
      "Access green financing",
    ],
  },
  {
    id: "4",
    title: "ETP & STP Solutions",
    shortTitle: "ETP & STP",
    slug: "etp-stp",
    description:
      "Integrated solutions for environmentally compliant water and wastewater management.",
    longDescription:
      "From design to commissioning, we deliver complete ETP and STP solutions that ensure environmental compliance. Our engineering approach maximizes treatment efficiency while minimizing operational costs.",
    icon: Droplets,
    features: [
      "ETP Design & Engineering",
      "STP Design & Engineering",
      "Equipment Procurement Support",
      "Construction Supervision",
      "Commissioning & Testing",
      "Effluent Monitoring Systems",
      "Sludge Management Solutions",
      "Regulatory Compliance Support",
    ],
    benefits: [
      "Meet environmental discharge standards",
      "Reduce water consumption",
      "Minimize environmental impact",
      "Lower wastewater treatment costs",
      "Ensure continuous compliance",
    ],
  },
  {
    id: "5",
    title: "Carbon Accounting & Market Support",
    shortTitle: "Carbon Accounting",
    slug: "carbon-accounting",
    description:
      "Services focused on carbon reduction, decarbonization planning, and access to carbon finance mechanisms.",
    longDescription:
      "We help organizations measure, report, and reduce their carbon emissions. Our experts guide you through carbon markets, voluntary carbon credits, and decarbonization strategies aligned with global climate goals.",
    icon: Cloud,
    features: [
      "GHG Protocol Accounting",
      "Scope 1, 2 & 3 Emissions Analysis",
      "Carbon Footprint Assessment",
      "Decarbonization Roadmaps",
      "Voluntary Carbon Market Access",
      "Science-Based Targets (SBTi)",
      "CDP Reporting Support",
      "Carbon Credit Verification",
    ],
    benefits: [
      "Meet global climate commitments",
      "Access carbon finance mechanisms",
      "Reduce environmental liability",
      "Improve ESG ratings",
      "Gain competitive market advantage",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Comprehensive Energy Audit for Textile Mill",
    category: "Energy Audit",
    description:
      "Complete energy assessment of a 500,000 sq ft textile manufacturing facility resulting in 32% energy cost reduction.",
    location: "Dhaka, Bangladesh",
    image: "https://hexa-bd.com/wp-content/uploads/2026/02/IMG_20250917_160601-1024x768.jpg",
    year: "2025",
  },
  {
    id: "2",
    title: "Fire Safety Compliance for Pharmaceutical Plant",
    category: "Safety & Compliance",
    description:
      "Full BNBC and NFPA compliance assessment and implementation for a pharmaceutical manufacturing facility.",
    location: "Gazipur, Bangladesh",
    image: "https://hexa-bd.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-01-19-at-1.01.57-PM-1-1024x768.jpeg",
    year: "2025",
  },
  {
    id: "3",
    title: "LEED Gold Certification for Commercial Tower",
    category: "Sustainability",
    description:
      "Guided a commercial tower to achieve LEED Gold certification through sustainable design and energy optimization.",
    location: "Gulshan, Dhaka",
    image: "https://hexa-bd.com/wp-content/uploads/2026/02/2.png",
    year: "2024",
  },
  {
    id: "4",
    title: "ETP Design for Garment Factory",
    category: "ETP & STP",
    description:
      "Designed and supervised construction of a 500 KLD Effluent Treatment Plant for a major garment manufacturer.",
    location: "Narayanganj, Bangladesh",
    image: "https://hexa-bd.com/wp-content/uploads/2026/02/IMG_20250917_160601-768x576.jpg",
    year: "2024",
  },
  {
    id: "5",
    title: "Carbon Footprint Assessment for RMG Sector",
    category: "Carbon Accounting",
    description:
      "Comprehensive GHG accounting and decarbonization roadmap for a leading RMG export group.",
    location: "Bangladesh",
    image: "https://hexa-bd.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-01-19-at-1.01.57-PM-1-768x576.jpeg",
    year: "2024",
  },
  {
    id: "6",
    title: "Solar PV System for Industrial Complex",
    category: "Sustainability",
    description:
      "Designed and implemented a 2MW rooftop solar PV system for an industrial complex, reducing grid dependency by 40%.",
    location: "Chattogram, Bangladesh",
    image: "https://hexa-bd.com/wp-content/uploads/2026/02/1-1-768x566.png",
    year: "2023",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rahman Industries Ltd.",
    company: "Textile Manufacturing",
    review:
      "Hexa Engineering's energy audit helped us reduce our energy costs by 35%. Their team was professional, thorough, and delivered actionable recommendations that we could implement immediately.",
    rating: 5,
    avatar: "/images/avatars/client-1.jpg",
  },
  {
    id: "2",
    name: "GreenField Pharmaceuticals",
    company: "Pharmaceutical Industry",
    review:
      "Their safety compliance assessment was comprehensive. They identified critical gaps in our fire safety systems and helped us achieve full BNBC compliance within 3 months.",
    rating: 5,
    avatar: "/images/avatars/client-2.jpg",
  },
  {
    id: "3",
    name: "Dhaka Commercial Corp.",
    company: "Real Estate & Construction",
    review:
      "Hexa Engineering guided us through the LEED certification process with expertise and patience. Their sustainability recommendations transformed our building's efficiency profile.",
    rating: 5,
    avatar: "/images/avatars/client-3.jpg",
  },
  {
    id: "4",
    name: "Pacific Textile Mills",
    company: "RMG Sector",
    review:
      "The carbon accounting report provided by Hexa Engineering gave us clarity on our emissions profile. Their decarbonization roadmap is now our guiding strategy for sustainability.",
    rating: 5,
    avatar: "/images/avatars/client-4.jpg",
  },
];

export const industries: Industry[] = [
  {
    id: "1",
    name: "Textile & RMG",
    description: "Energy efficiency and compliance solutions for the textile and garment industry.",
    icon: "🏭",
  },
  {
    id: "2",
    name: "Manufacturing",
    description: "Comprehensive engineering solutions for manufacturing facilities of all scales.",
    icon: "⚙️",
  },
  {
    id: "3",
    name: "Pharmaceuticals",
    description: "GMP-compliant safety and environmental solutions for pharmaceutical plants.",
    icon: "💊",
  },
  {
    id: "4",
    name: "Commercial Buildings",
    description: "Green building design and energy optimization for commercial real estate.",
    icon: "🏢",
  },
  {
    id: "5",
    name: "Renewable Energy",
    description: "Solar, wind, and hybrid energy system design and implementation.",
    icon: "☀️",
  },
  {
    id: "6",
    name: "Heavy Industry",
    description: "Specialized engineering services for heavy industrial operations.",
    icon: "🏗️",
  },
];

export const stats: Stat[] = [
  { label: "Certified Experts", value: "50", suffix: "+" },
  { label: "Club Members", value: "500", suffix: "K" },
  { label: "Quality Programs", value: "100", suffix: "%" },
  { label: "Award Winning", value: "25", suffix: "+" },
];

export const heroSlides = [
  {
    title: "Engineering Sustainable Solutions",
    subtitle: "Leading engineering consultancy for energy efficiency, safety, and sustainability in Bangladesh",
    image: "https://hexa-bd.com/wp-content/uploads/2026/02/IMG_20250917_160601-scaled.jpg",
    cta: { text: "Get Consultation", href: "/contact" },
  },
  {
    title: "Energy Efficiency & Industrial Optimization",
    subtitle: "Data-driven audits and implementation support for industrial energy savings",
    image: "https://hexa-bd.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-01-19-at-1.01.57-PM-1.jpeg",
    cta: { text: "Explore Services", href: "/services" },
  },
  {
    title: "Building a Greener Future",
    subtitle: "Guiding industries toward renewable energy, green building practices, and carbon reduction",
    image: "https://hexa-bd.com/wp-content/uploads/2026/02/1-1.png",
    cta: { text: "Learn More", href: "/about" },
  },
];

export const whyChooseUs = [
  {
    title: "Technical Expertise",
    description: "Our team combines local expertise with global standards including ASHRAE, NFPA, and BNBC.",
    icon: Cog,
  },
  {
    title: "Sustainable Engineering",
    description: "We design solutions that balance operational efficiency with environmental responsibility.",
    icon: Leaf,
  },
  {
    title: "Cost Optimization",
    description: "Data-driven approaches that deliver measurable ROI and long-term cost savings.",
    icon: Zap,
  },
  {
    title: "Industry Compliance",
    description: "Ensuring your facilities meet all national and international safety and environmental regulations.",
    icon: Shield,
  },
  {
    title: "Data-Driven Solutions",
    description: "Scientific and analytical methods that provide clear insights and actionable recommendations.",
    icon: Cloud,
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "The Importance of Energy Audits in Bangladesh's Industrial Sector",
    excerpt: "Discover how energy audits can help Bangladeshi industries reduce operational costs and improve efficiency.",
    date: "2025-01-15",
    category: "Energy Audit",
    image: "https://hexa-bd.com/wp-content/uploads/2026/02/IMG_20250917_160601-768x576.jpg",
    slug: "importance-energy-audits-bangladesh",
  },
  {
    id: "2",
    title: "Understanding BNBC Fire Safety Requirements for Commercial Buildings",
    excerpt: "A comprehensive guide to Bangladesh National Building Code fire safety requirements.",
    date: "2025-01-10",
    category: "Safety",
    image: "https://hexa-bd.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-01-19-at-1.01.57-PM-1-768x576.jpeg",
    slug: "bnbc-fire-safety-requirements",
  },
  {
    id: "3",
    title: "Carbon Accounting: A Beginner's Guide for Bangladeshi Manufacturers",
    excerpt: "Learn how to measure, report, and reduce your organization's carbon footprint.",
    date: "2025-01-05",
    category: "Carbon Accounting",
    image: "https://hexa-bd.com/wp-content/uploads/2026/02/1-1-768x566.png",
    slug: "carbon-accounting-beginners-guide",
  },
  {
    id: "4",
    title: "LEED Certification: Is Your Building Ready?",
    excerpt: "Steps to prepare your commercial building for LEED certification in Bangladesh.",
    date: "2024-12-20",
    category: "Sustainability",
    image: "https://hexa-bd.com/wp-content/uploads/2026/02/2.png",
    slug: "leed-certification-readiness",
  },
];
