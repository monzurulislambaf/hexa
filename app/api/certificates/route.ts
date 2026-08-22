import { NextRequest, NextResponse } from "next/server";

// Demo certificates data
const demoCertificates = [
  {
    id: "HEXA-2025-001",
    name: "Rahman Industries Ltd.",
    email: "info@rahman.com",
    issueDate: "2025-01-15",
    expiryDate: "2027-01-15",
    type: "Energy Audit Certificate",
    status: "valid",
  },
  {
    id: "HEXA-2025-002",
    name: "GreenField Pharmaceuticals",
    email: "contact@greenfield.com",
    issueDate: "2025-02-20",
    expiryDate: "2026-02-20",
    type: "Safety Compliance Certificate",
    status: "valid",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");

  if (search) {
    const certificate = demoCertificates.find(
      (cert) =>
        cert.id.toLowerCase() === search.toLowerCase() ||
        cert.name.toLowerCase().includes(search.toLowerCase())
    );
    return NextResponse.json({ certificate: certificate || null });
  }

  return NextResponse.json({ certificates: demoCertificates });
}
