"use client";
import { motion } from "framer-motion";
import merchantIcon from "../../public/assets/location-merchant.png";
import customerTopImage from "../../public/assets/customer-top.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import CustomerReviewCard from "../CustomerReviewCard/CustomerReviewCard";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const image = {
  hidden: { opacity: 0, x: 30, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CustomerSatisfaction = () => {
  return (
    <section className="mt-12">
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="relative flex overflow-hidden rounded-2xl bg-[#04373D] bg-top bg-no-repeat px-6 py-14 sm:px-10 lg:px-14"
        style={{
          backgroundImage: "url('/assets/be-a-merchant-bg.png')",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/5 to-black/20"
          aria-hidden
        />
        <div className="relative grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={container}
            className="space-y-4 text-center text-white lg:text-left"
          >
            <motion.span
              variants={item}
              className="inline-block rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#b6d35e] backdrop-blur sm:text-sm"
            >
              Experience-first delivery
            </motion.span>
            <motion.h1
              variants={item}
              className="text-3xl font-semibold leading-tight sm:text-4xl"
            >
              Merchant and Customer Satisfaction{" "}
              <span className="block sm:inline">is Our First Priority</span>
            </motion.h1>
            <motion.p
              variants={item}
              className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base lg:mx-0"
            >
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh on time.
            </motion.p>
            <motion.div
              variants={item}
              className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="w-full rounded-3xl bg-[#b6d35e] px-6 py-3 text-center text-base font-semibold text-black sm:w-auto"
              >
                Become a Merchant
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="w-full rounded-3xl border border-[#b6d35e] px-6 py-3 text-center text-base font-semibold text-[#b6d35e] sm:w-auto"
              >
                Earn with ZapShift Courier
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div variants={image} className="relative flex justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
            >
              <Image
                src={merchantIcon}
                alt="Merchant satisfaction illustration"
                className="w-full drop-shadow-2xl"
                priority
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 360px, 280px"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <section className="mt-14 w-full">
        <div className="flex justify-center">
          <Image src={customerTopImage} alt="customer top image" />
        </div>
        <h1 className="text-center text-3xl font-semibold mt-4">
          What our Customers are sayings
        </h1>
        <p className="text-center max-w-1/2 mx-auto mt-2">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your with
          easel
        </p>
        <div className="mt-6">
          <Swiper
            effect={"coverflow"}
            grabCursor
            centeredSlides
            loop={false}
            initialSlide={0}
            slidesPerView={1.05}
            spaceBetween={16}
            coverflowEffect={{
              rotate: 24,
              stretch: -10,
              depth: 180,
              modifier: 1.1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 1.4, spaceBetween: 18 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 2.6, spaceBetween: 22 },
              1280: { slidesPerView: 3.1, spaceBetween: 24 },
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="satisfaction-swiper review-swiper"
          >
            {[0, 1, 2, 3].map((key) => (
              <SwiperSlide key={key} className="flex h-auto justify-center">
                <CustomerReviewCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </section>
  );
};

export default CustomerSatisfaction;
