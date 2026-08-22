import { NextRequest, NextResponse } from "next/server";
import { projects } from "@/lib/data";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  let filtered = projects;

  if (category) {
    filtered = filtered.filter(
      (project) => project.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
    filtered = filtered.filter(
      (project) =>
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  return NextResponse.json({ projects: filtered });
}
