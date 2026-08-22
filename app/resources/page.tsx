import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Download engineering resources, guides, and technical documents from Hexa Engineering Limited.",
};

const resources = [
  {
    title: "Energy Audit Checklist",
    description: "Comprehensive checklist for conducting industrial energy audits.",
    category: "Energy Audit",
    fileSize: "2.4 MB",
  },
  {
    title: "BNBC Fire Safety Guide",
    description: "Essential guide to Bangladesh National Building Code fire safety requirements.",
    category: "Safety",
    fileSize: "3.1 MB",
  },
  {
    title: "Carbon Footprint Calculator",
    description: "Step-by-step guide to calculate your organization's carbon footprint.",
    category: "Carbon Accounting",
    fileSize: "1.8 MB",
  },
  {
    title: "LEED Certification Roadmap",
    description: "Comprehensive roadmap for achieving LEED certification in Bangladesh.",
    category: "Sustainability",
    fileSize: "4.2 MB",
  },
  {
    title: "ETP Design Standards",
    description: "Technical standards and guidelines for Effluent Treatment Plant design.",
    category: "ETP & STP",
    fileSize: "5.6 MB",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4 uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-primary" />
              Resources
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Engineering Resources & Guides
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Download our technical resources, guides, and tools to help you
              navigate energy efficiency, safety compliance, and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-card rounded-xl ring-1 ring-border hover:ring-primary/30 transition-all duration-300 gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="bg-muted px-2 py-1 rounded">{resource.category}</span>
                      <span>{resource.fileSize}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
