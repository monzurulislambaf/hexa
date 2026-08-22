import { NextRequest, NextResponse } from "next/server";
import { blogPosts } from "@/lib/data";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  let filtered = blogPosts;

  if (category) {
    filtered = filtered.filter(
      (post) => post.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
    filtered = filtered.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase())
    );
  }

  return NextResponse.json({ posts: filtered });
}
