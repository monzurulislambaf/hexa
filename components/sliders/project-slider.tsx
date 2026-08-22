"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ProjectSlider() {
  const swiperRef = useRef(null);

  return (
    <div className="relative group">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: ".project-next",
          prevEl: ".project-prev",
        }}
        pagination={{ clickable: true, el: ".project-pagination" }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="group/card bg-card rounded-xl overflow-hidden ring-1 ring-border hover:ring-primary/30 transition-all duration-300 hover:shadow-lg">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1 text-white/80 text-sm">
                    <MapPin className="h-3 w-3" />
                    {project.location}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                  <span>{project.year}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover/card:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {project.description}
                </p>
                <Button asChild variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                  <Link href={`/projects#${project.id}`}>
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <button className="project-prev absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background shadow-lg border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all opacity-0 group-hover:opacity-100">
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button className="project-next absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background shadow-lg border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all opacity-0 group-hover:opacity-100">
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Pagination */}
      <div className="project-pagination mt-4" />
    </div>
  );
}
