import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Seed Services
  const services = [
    {
      title: "Energy Audit & Efficiency Consulting",
      slug: "energy-audit",
      description:
        "Services focused on reducing industrial energy waste and operational costs through scientific and data-driven approaches.",
      longDescription:
        "Our energy audit services help industries identify hidden inefficiencies and implement cost-effective solutions. We use advanced diagnostic tools and ASHRAE standards to deliver comprehensive energy assessments that reduce consumption by 15-40%.",
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
      icon: "Zap",
      order: 1,
    },
    {
      title: "Safety & Regulatory Compliance",
      slug: "safety-compliance",
      description:
        "Services dedicated to safeguarding lives, assets, and operations through rigorous compliance with national and international safety standards.",
      longDescription:
        "We ensure your facilities meet all safety codes and regulations including BNBC, NFPA, and international electrical standards.",
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
      icon: "Shield",
      order: 2,
    },
    {
      title: "Sustainability & Green Building",
      slug: "sustainability",
      description:
        "Services aimed at guiding industries toward a low-carbon and resource-efficient future.",
      longDescription:
        "Our sustainability consultants help organizations transition to green practices, achieve LEED certification, and implement renewable energy solutions.",
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
      icon: "Leaf",
      order: 3,
    },
    {
      title: "ETP & STP Solutions",
      slug: "etp-stp",
      description:
        "Integrated solutions for environmentally compliant water and wastewater management.",
      longDescription:
        "From design to commissioning, we deliver complete ETP and STP solutions that ensure environmental compliance.",
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
      icon: "Droplets",
      order: 4,
    },
    {
      title: "Carbon Accounting & Market Support",
      slug: "carbon-accounting",
      description:
        "Services focused on carbon reduction, decarbonization planning, and access to carbon finance mechanisms.",
      longDescription:
        "We help organizations measure, report, and reduce their carbon emissions aligned with global climate goals.",
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
      icon: "Cloud",
      order: 5,
    },
    {
      title: "Integrated MEP Design & Consultancy",
      slug: "mep-design",
      description:
        "Services supporting safe, efficient, and reliable building systems across the full project lifecycle.",
      longDescription:
        "Our MEP design and consultancy services cover the full spectrum of building systems including mechanical, electrical, and plumbing for safe and efficient operations.",
      features: [
        "MEP System Design",
        "HVAC Design & Engineering",
        "Electrical Distribution Design",
        "Plumbing & Fire Protection Design",
        "Building Management Systems",
        "Commissioning & Testing",
        "Construction Supervision",
        "Project Delivery Management",
      ],
      benefits: [
        "Integrated building systems design",
        "Energy-efficient MEP solutions",
        "Reduced construction conflicts",
        "Optimized lifecycle costs",
        "Single-source accountability",
      ],
      icon: "Cog",
      order: 6,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }

  // Seed Projects
  const projects = [
    {
      title: "Comprehensive Energy Audit for Textile Mill",
      category: "Energy Audit",
      description:
        "Complete energy assessment of a 500,000 sq ft textile manufacturing facility resulting in 32% energy cost reduction.",
      location: "Dhaka, Bangladesh",
      year: "2025",
      featured: true,
    },
    {
      title: "Fire Safety Compliance for Pharmaceutical Plant",
      category: "Safety & Compliance",
      description:
        "Full BNBC and NFPA compliance assessment and implementation for a pharmaceutical manufacturing facility.",
      location: "Gazipur, Bangladesh",
      year: "2025",
      featured: true,
    },
    {
      title: "LEED Gold Certification for Commercial Tower",
      category: "Sustainability",
      description:
        "Guided a commercial tower to achieve LEED Gold certification through sustainable design and energy optimization.",
      location: "Gulshan, Dhaka",
      year: "2024",
      featured: true,
    },
    {
      title: "ETP Design for Garment Factory",
      category: "ETP & STP",
      description:
        "Designed and supervised construction of a 500 KLD Effluent Treatment Plant for a major garment manufacturer.",
      location: "Narayanganj, Bangladesh",
      year: "2024",
      featured: false,
    },
    {
      title: "Carbon Footprint Assessment for RMG Sector",
      category: "Carbon Accounting",
      description:
        "Comprehensive GHG accounting and decarbonization roadmap for a leading RMG export group.",
      location: "Bangladesh",
      year: "2024",
      featured: true,
    },
    {
      title: "Solar PV System for Industrial Complex",
      category: "Sustainability",
      description:
        "Designed and implemented a 2MW rooftop solar PV system for an industrial complex, reducing grid dependency by 40%.",
      location: "Chattogram, Bangladesh",
      year: "2023",
      featured: true,
    },
  ];

  for (const project of projects) {
    await prisma.project.create({ data: project });
  }

  // Seed Certificates
  const certificates = [
    {
      certId: "HEXA-2025-001",
      name: "Rahman Industries Ltd.",
      email: "info@rahman.com",
      issueDate: new Date("2025-01-15"),
      expiryDate: new Date("2027-01-15"),
      type: "Energy Audit Certificate",
      status: "ACTIVE" as const,
    },
    {
      certId: "HEXA-2025-002",
      name: "GreenField Pharmaceuticals",
      email: "contact@greenfield.com",
      issueDate: new Date("2025-02-20"),
      expiryDate: new Date("2026-02-20"),
      type: "Safety Compliance Certificate",
      status: "ACTIVE" as const,
    },
  ];

  for (const cert of certificates) {
    await prisma.certificate.upsert({
      where: { certId: cert.certId },
      update: cert,
      create: cert,
    });
  }

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
