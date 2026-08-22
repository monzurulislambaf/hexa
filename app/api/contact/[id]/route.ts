import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { Contact } from "@/lib/models";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    await Contact.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to delete contact" },
      { status: 500 }
    );
  }
}
