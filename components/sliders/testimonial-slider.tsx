"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";

export function TestimonialSlider() {
  const swiperRef = useRef(null);

  return (
    <div className="relative group">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".testimonial-pagination" }}
        breakpoints={{
          640: { slidesPerView: 2 },
        }}
        className="pb-12"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="relative h-full p-8 bg-card rounded-xl ring-1 ring-border">
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.review}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="testimonial-prev absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background shadow-lg border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all opacity-0 group-hover:opacity-100">
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button className="testimonial-next absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background shadow-lg border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all opacity-0 group-hover:opacity-100">
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="testimonial-pagination mt-4" />
    </div>
  );
}
