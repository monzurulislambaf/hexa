"use client";

import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ServiceSlider() {
  const swiperRef = useRef(null);

  return (
    <div className="relative group">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: ".service-next",
          prevEl: ".service-prev",
        }}
        pagination={{ clickable: true, el: ".service-pagination" }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-12"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <SwiperSlide key={service.id}>
              <Link href={`/services/${service.slug}`}>
                <div className="group/card relative h-full p-6 bg-card rounded-xl ring-1 ring-border hover:ring-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Icon */}
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover/card:bg-primary group-hover/card:text-white transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover/card:text-white transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-lg mb-2 group-hover/card:text-primary transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {service.description}
                  </p>

                  {/* Link */}
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover/card:opacity-100 transition-opacity">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation */}
      <button className="service-prev absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background shadow-lg border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all opacity-0 group-hover:opacity-100">
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button className="service-next absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background shadow-lg border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all opacity-0 group-hover:opacity-100">
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Pagination */}
      <div className="service-pagination mt-4" />
    </div>
  );
}
