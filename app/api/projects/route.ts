import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import connectDB from "@/lib/mongodb";
import { Project } from "@/lib/models";

const projectSchema = z.object({
  title: z.string().min(2),
  category: z.string().min(2),
  description: z.string().min(10),
  location: z.string().min(2),
  image: z.string().url().optional().or(z.literal("")),
  year: z.string().min(4),
  featured: z.boolean().optional(),
});

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const featured = searchParams.get("featured");

    const filter: Record<string, unknown> = {};
    if (category) filter.category = category;
    if (featured === "true") filter.featured = true;
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const projects = await Project.find(filter).sort({ createdAt: -1 });
    return NextResponse.json({ projects });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const data = projectSchema.parse(body);

    const project = await Project.create({
      ...data,
      image: data.image || undefined,
    });

    return NextResponse.json({ success: true, project }, { status: 201 });
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
