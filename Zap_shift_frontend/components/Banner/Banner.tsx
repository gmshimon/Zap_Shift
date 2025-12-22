"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import banner1 from "../../public/assets/banner/banner1.png";
import banner2 from "../../public/assets/banner/banner2.png";
import banner3 from "../../public/assets/banner/banner3.png";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Banner = () => {
  const bannerImage = [banner1, banner2, banner3];
  return (
    <section>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {bannerImage.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full">
              <Image
                src={image}
                alt="banner 1"
                className="w-full  object-cover"
              />
              <div className="absolute bottom-10 left-10 flex gap-4">
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[#b6d35e] text-black px-6 py-2 rounded-2xl font-semibold flex items-center"
  >
    Track Your Parcel
    <span className="ml-2 bg-black text-[#b6d35e] p-1 rounded-2xl">
      <ArrowUpRight />
    </span>
  </motion.button>

  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-black text-white px-6 py-2 rounded-md font-semibold"
  >
    Be A Rider
  </motion.button>
</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
