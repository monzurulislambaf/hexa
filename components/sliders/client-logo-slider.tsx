"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Building2, Factory, FlaskConical, Landmark, Zap, Shirt } from "lucide-react";

const clients = [
  { name: "Rahman Industries", icon: Factory },
  { name: "GreenField Pharma", icon: FlaskConical },
  { name: "Dhaka Corp", icon: Landmark },
  { name: "Pacific Textiles", icon: Shirt },
  { name: "Power Grid Co.", icon: Zap },
  { name: "Metro Builders", icon: Building2 },
  { name: "Apex Manufacturing", icon: Factory },
  { name: "Bangla Chemical", icon: FlaskConical },
];

import "swiper/css";

export function ClientLogoSlider() {
  const swiperRef = useRef(null);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Autoplay]}
      spaceBetween={48}
      slidesPerView={2}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 6 },
      }}
    >
      {clients.map((client, index) => {
        const Icon = client.icon;
        return (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-20 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon className="h-8 w-8" />
                <span className="text-sm font-medium whitespace-nowrap">{client.name}</span>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
