import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { Certificate } from "@/lib/models";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    await Certificate.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to delete certificate" },
      { status: 500 }
    );
  }
}
