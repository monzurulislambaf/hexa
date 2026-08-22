import type { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/service-detail-template";
import { services } from "@/lib/data";

const service = services.find((s) => s.slug === "etp-stp")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function EtpStpPage() {
  return <ServiceDetailTemplate service={service} />;
}
