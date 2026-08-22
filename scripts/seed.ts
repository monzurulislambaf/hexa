import "dotenv/config";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/hexa";

async function main() {
  console.log("🌱 Seeding database...");

  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB");

  // Dynamically import models so they register with mongoose
  const { User } = await import("../lib/models/User");
  const { Service } = await import("../lib/models/Service");
  const { Contact } = await import("../lib/models/Contact");
  const { Project } = await import("../lib/models/Project");
  const { Certificate } = await import("../lib/models/Certificate");
  const { BlogPost } = await import("../lib/models/BlogPost");

  // Seed Users
  await User.create([
    {
      _id: "1",
      email: "admin@hexa-bd.com",
      name: "Admin",
      password: "admin123",
      role: "ADMIN",
    },
    {
      _id: "2",
      email: "editor@hexa-bd.com",
      name: "Editor",
      password: "editor123",
      role: "EDITOR",
    },
  ]).catch(() => console.log("Users may already exist, skipping..."));

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
    await Service.findOneAndUpdate({ slug: service.slug }, service, {
      upsert: true,
      returnDocument: 'after',
    });
  }
  console.log("✅ Services seeded");

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
    await Project.create(project).catch(() =>
      console.log(`Project "${project.title}" may already exist, skipping...`)
    );
  }
  console.log("✅ Projects seeded");

  // Seed Contacts
  await Contact.create([
    {
      name: "Ahmed Rahman",
      email: "ahmed@rahman-industries.com",
      phone: "+8801712345678",
      subject: "Energy Audit Inquiry",
      message: "Interested in comprehensive energy audit for our textile mill.",
      status: "READ",
    },
    {
      name: "Fatima Khan",
      email: "fatima@greenfield-pharma.com",
      phone: "+8801819876543",
      subject: "Safety Compliance",
      message: "Requesting BNBC and NFPA compliance assessment.",
      status: "PENDING",
    },
    {
      name: "Mohammad Ali",
      email: "mohammad@etp-solution.com",
      phone: "+8801926543210",
      subject: "ETP Design Request",
      message: "Need ETP design for 500 KLD capacity garment factory.",
      status: "REPLIED",
    },
    {
      name: "Rahman Industries Ltd.",
      email: "info@rahman.com",
      phone: "+8801755551234",
      subject: "Certificate Verification",
      message: "Verifying energy audit certificate status.",
      status: "READ",
    },
    {
      name: "GreenField Pharmaceuticals",
      email: "contact@greenfield.com",
      phone: "+8801888888888",
      subject: "Safety Training",
      message: "Organizing safety training program for staff.",
      status: "PENDING",
    },
    {
      name: "Bangladesh Textile Mills",
      email: "admin@btmills.com",
      phone: "+8801666666666",
      subject: "Carbon Accounting",
      message: "Requesting carbon footprint assessment for RMG sector.",
      status: "ARCHIVED",
    },
    {
      name: "City Corporation",
      email: "procurement@citycorp.gov.bd",
      phone: "+8801555555555",
      subject: "Solar PV Installation",
      message: "Inquiry about 2MW rooftop solar system.",
      status: "READ",
    },
    {
      name: "Future Energy Ltd.",
      email: "hello@futureenergy.com",
      phone: "+8801444444444",
      subject: "MEP Design",
      message: "Looking for integrated MEP design consultancy.",
      status: "PENDING",
    },
  ]).catch(() => console.log("Contacts may already exist, skipping..."));
  console.log("✅ Contacts seeded");

  // Seed Blog Posts
  const blogPosts = [
    {
      title: "Top 5 Energy Saving Tips for Textile Mills",
      slug: "top-5-energy-saving-tips",
      excerpt: "Discover practical strategies to cut energy costs in textile manufacturing by up to 30%.",
      category: "Energy Audit",
      published: true,
    },
    {
      title: "BNBC Compliance Checklist for Industrial Facilities",
      slug: "bnbc-compliance-checklist",
      excerpt: "A comprehensive guide to meeting Bangladesh National Building Code requirements.",
      category: "Safety & Compliance",
      published: true,
    },
    {
      title: "How to Achieve LEED Certification in Bangladesh",
      slug: "leed-certification-bangladesh",
      excerpt: "Step-by-step roadmap for green building certification in the Bangladeshi context.",
      category: "Sustainability",
      published: true,
    },
    {
      title: "ETP Design Best Practices for Garment Industry",
      slug: "etp-design-best-practices",
      excerpt: "Key considerations and modern approaches for designing effective effluent treatment plants.",
      category: "ETP & STP",
      published: true,
    },
    {
      title: "Understanding Carbon Accounting: A Beginner's Guide",
      slug: "carbon-accounting-beginners-guide",
      excerpt: "Everything you need to know about measuring and reducing your organization's carbon footprint.",
      category: "Carbon Accounting",
      published: false,
    },
  ];

  for (const post of blogPosts) {
    await BlogPost.findOneAndUpdate({ slug: post.slug }, post, {
      upsert: true,
      returnDocument: 'after',
    });
  }
  console.log("✅ Blog posts seeded");

  // Seed Certificates
  const certificates = [
    {
      certId: "HEXA-2025-001",
      name: "Rahman Industries Ltd.",
      email: "info@rahman.com",
      issueDate: new Date("2025-01-15"),
      expiryDate: new Date("2027-01-15"),
      type: "Energy Audit Certificate",
      status: "ACTIVE",
    },
    {
      certId: "HEXA-2025-002",
      name: "GreenField Pharmaceuticals",
      email: "contact@greenfield.com",
      issueDate: new Date("2025-02-20"),
      expiryDate: new Date("2026-02-20"),
      type: "Safety Compliance Certificate",
      status: "ACTIVE",
    },
  ];

  for (const cert of certificates) {
    await Certificate.findOneAndUpdate({ certId: cert.certId }, cert, {
      upsert: true,
      returnDocument: 'after',
    });
  }
  console.log("✅ Certificates seeded");

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
