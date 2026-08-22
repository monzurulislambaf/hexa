import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import connectDB from "@/lib/mongodb";
import { BlogPost } from "@/lib/models";

const blogSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  excerpt: z.string().min(10),
  content: z.string().optional(),
  category: z.string().min(2),
  image: z.string().url().optional().or(z.literal("")),
  published: z.boolean().optional(),
});

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const published = searchParams.get("published");

    const filter: Record<string, unknown> = {};
    if (category) filter.category = category;
    if (published === "true") filter.published = true;
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { excerpt: { $regex: search, $options: "i" } },
      ];
    }

    const posts = await BlogPost.find(filter).sort({ createdAt: -1 });
    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const data = blogSchema.parse(body);

    const post = await BlogPost.create({
      ...data,
      image: data.image || undefined,
      published: data.published ?? false,
    });

    return NextResponse.json({ success: true, post }, { status: 201 });
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
