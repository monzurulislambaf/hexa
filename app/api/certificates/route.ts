import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import connectDB from "@/lib/mongodb";
import { Certificate } from "@/lib/models";

const certificateSchema = z.object({
  certId: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email().optional(),
  issueDate: z.string(),
  expiryDate: z.string().optional(),
  type: z.string().min(2),
  status: z.enum(["ACTIVE", "EXPIRED", "REVOKED"]).optional(),
});

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");

    const filter: Record<string, unknown> = {};
    if (search) {
      filter.$or = [
        { certId: { $regex: search, $options: "i" } },
        { name: { $regex: search, $options: "i" } },
      ];
    }

    const certificates = await Certificate.find(filter).sort({ createdAt: -1 });
    return NextResponse.json({ certificates });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to fetch certificates" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const data = certificateSchema.parse(body);

    const certificate = await Certificate.create({
      ...data,
      issueDate: new Date(data.issueDate),
      expiryDate: data.expiryDate ? new Date(data.expiryDate) : undefined,
    });

    return NextResponse.json({ success: true, certificate }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
