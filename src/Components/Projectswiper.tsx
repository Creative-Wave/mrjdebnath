"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const projects = [
  { id: 1, title: "Social Media Post Design", image: "project (1).png" },
  { id: 2, title: "Gelato promotional design", image: "project (2).png" },
  { id: 3, title: "Poster Design", image: "project (3).png" },
  { id: 4, title: "Racing Poster Design", image: "project (4).png" },
  { id: 5, title: "Travel Social Media Post", image: "project (5).png" },
  { id: 6, title: "Nature Hike Poster Design", image: "project (6).png" },
  {
    id: 7,
    title: "F1 Japan Grand Prix Poster Design",
    image: "project (7).png",
  },
  { id: 8, title: "Real estate marketing design", image: "project (8).png" },
  {
    id: 9,
    title: "Game Design Meets Visual Storytelling ",
    image: "project (9).png",
  },
  { id: 10, title: "Travel Blog", image: "project (10).png" },
];

const Projectswiper = () => {
  return (
    <motion.div
      className="w-full max-w-7xl min-h-screen flex flex-col justify-center items-center mx-auto py-12 text-white px-4 sm:px-6 lg:px-8 space-y-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-center text-2xl md:text-4xl font-bold tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Designs That <span className="text-[#6E76FB]">Pop</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        className="w-full relative"
      >
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          spaceBetween={8}
          speed={900} // smoother animation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          breakpoints={{
            480: {
              slidesPerView: 1.1,
              spaceBetween: 8,
              coverflowEffect: {
                rotate: 20,
                stretch: 0,
                depth: 60,
                modifier: 1,
                slideShadows: true,
              },
              speed: 950,
            },
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="w-full"
        >
          {projects.map((project, i) => (
            <SwiperSlide
              key={project.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl cursor-pointer relative group h-[400px] sm:h-[450px] md:h-[500px]"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.05, duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                  {project.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}

          {/* Side Fade Overlays */}
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0F0725] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0F0725] to-transparent z-10 pointer-events-none" />

          {/* Navigation Buttons */}
          <div className="swiper-button-prev !text-white !bg-[#6E76FB]/70 hover:!bg-[#6E76FB] !p-3 rounded-full shadow-lg absolute pointer-events-auto"></div>
          <div className="swiper-button-next !text-white !bg-[#6E76FB]/70 hover:!bg-[#6E76FB] !p-3 rounded-full shadow-lg absolute pointer-events-auto"></div>
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Projectswiper;
