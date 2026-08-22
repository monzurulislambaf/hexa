import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering articles, insights, and news from Hexa Engineering Limited on energy efficiency, sustainability, and industrial compliance.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4 uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-primary" />
              Blog
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Engineering Insights & Articles
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay updated with the latest insights on energy efficiency, safety
              compliance, sustainability, and engineering best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-card rounded-2xl overflow-hidden ring-1 ring-border hover:ring-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <Button asChild variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
