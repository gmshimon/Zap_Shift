"use client";
import Image from "next/image";
import bookIcon from "../../public/assets/bookingIcon.png";
import serviceIcon from "../../public/assets/service.png";
import { motion } from "framer-motion";

const OurServices = () => {
  const data = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      des: "From personal packages to business shipments - we deliver on time, every time.",
    },
    {
      id: 2,
      title: "Cash On Delivery",
      des: "From personal packages to business shipments - we deliver on time, every time.",
    },
    {
      id: 3,
      title: "Delivery Hub",
      des: "From personal packages to business shipments - we deliver on time, every time.",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      des: "From personal packages to business shipments - we deliver on time, every time.",
    },
  ];

  const services = [
    {
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      is_highlighted: false,
    },
    {
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      is_highlighted: true,
    },
    {
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      is_highlighted: false,
    },
    {
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      is_highlighted: false,
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
      is_highlighted: false,
    },
    {
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      is_highlighted: false,
    },
  ];
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const textFade = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="mt-10">
      {/* How it Works */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-6">How it Works</h1>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {data.map((item, index) => (
            <motion.div
              variants={card}
              key={index}
              whileHover={{
                y: -6,
                scale: 1.01,
                boxShadow: "0 14px 40px rgba(15, 23, 42, 0.08)",
              }}
              whileTap={{ scale: 0.99 }}
              className="rounded-2xl border bg-white p-6 shadow-sm shadow-slate-200/60 transition-transform"
            >
              <Image src={bookIcon} alt="icon" className="mb-4 w-12" />
              <h1 className="mb-2 text-lg font-semibold">{item.title}</h1>
              <p className="text-sm text-slate-700">{item.des}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Our Services */}
      <div className="rounded-xl bg-[#04373D] py-20">
        <motion.h1
          variants={textFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-3xl font-bold text-white"
        >
          Our Services
        </motion.h1>
        <motion.div
          variants={textFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-2 max-w-2xl"
        >
          <p className="text-center text-sm text-slate-200">
            Enjoy fast reliable Parcel Delivery with real-time tracking and zero
            hassle. From Personal Packages to business shipments- we deliver on
            time, every time
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-6 px-3 md:grid-cols-3"
        >
          {services.map((item, index) => (
            <motion.div
              variants={card}
              whileHover={{
                y: -6,
                scale: 1.01,
                boxShadow: "0 14px 40px rgba(15, 23, 42, 0.08)",
              }}
              whileTap={{ scale: 0.99 }}
              key={index}
              className={`rounded-xl p-10 shadow-sm shadow-slate-200/50 transition-transform ${
                item.is_highlighted ? "bg-[#CAEB66]" : "bg-white"
              }`}
            >
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-gradient-to-t from-pink-100/5 via-purple-200 to-pink-200/60 p-3">
                  <Image src={serviceIcon} alt="service icon" />
                </div>
              </div>
              <h1 className="text-center text-xl font-semibold">
                {item?.title}
              </h1>
              <p className="mt-2 text-center text-sm">{item?.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
