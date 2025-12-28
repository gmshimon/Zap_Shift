"use client";

import Image from "next/image";
import tiny_deliveryman from "../../public/assets/tiny-deliveryman.png";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import TopAgents from "@/components/TopAgents";
const page = () => {
  return (
    <section>
      <div className="flex w-full max-w-7xl flex-col items-center rounded-2xl bg-white px-6 py-12 text-center shadow-sm sm:px-10">
        <Image
          src={tiny_deliveryman}
          alt="Delivery illustration"
          className="h-auto w-44 sm:w-52"
        />
        <h1 className="mt-4 text-start max-w-2xl text-3xl font-bold sm:text-4xl">How Earning Works</h1>
        <p className="mt-3 max-w-2xl text-start text-sm text-slate-700 sm:text-base">
          Easy, fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 flex items-center rounded-2xl bg-[#b6d35e] px-6 py-3 text-base font-semibold text-black"
        >
          Be a Rider
          <span className="ml-2 rounded-2xl bg-black p-1 text-[#b6d35e]">
            <ArrowUpRight />
          </span>
        </motion.button>
      </div>

      <div>
        <h1 className="text-4xl font-semibold text-center mt-12">Our Top Agents</h1>
        <p className="mt-2 text-center text-sm text-slate-600 sm:text-base">
        Meet the people keeping routes smooth and customers happy every day.
      </p>
        <TopAgents/>
      </div>
    </section>
  );
};

export default page;
