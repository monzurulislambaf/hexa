import type { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/service-detail-template";
import { services } from "@/lib/data";

const service = services.find((s) => s.slug === "carbon-accounting")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function CarbonAccountingPage() {
  return <ServiceDetailTemplate service={service} />;
}
