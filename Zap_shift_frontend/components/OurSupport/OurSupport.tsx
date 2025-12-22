"use client";
import amazon_vector from "../../public/assets/brands/amazon_vector.png";
import amazon from "../../public/assets/brands/amazon.png";
import casio from "../../public/assets/brands/casio.png";
import moonstar from "../../public/assets/brands/moonstar.png";
import randstad from "../../public/assets/brands/randstad.png";
import star from "../../public/assets/brands/star.png";
import start_people from "../../public/assets/brands/start_people.png";
import safe_delivery from "../../public/assets/safe-delivery.png";
import live_tracking from "../../public/assets/live-tracking.png";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";
const OurSupport = () => {

    const salesTeams = [
        amazon_vector,
        amazon,
        casio,
        moonstar,
        randstad,
        star,
        start_people
    ]

    const features = [
        {
            title: "Live Parcel Tracking",
            description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
            image: live_tracking
        },
        {
            title: "100% Safe Delivery",
            description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
            image: safe_delivery
        },
        {
            title: "24/7 Call Center Support",
            description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
            image: safe_delivery
        }
    ]

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        show: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: "easeOut", delay: i * 0.08 },
        }),
    };

    return (
        <section className="mt-12">
            {/* Sales team  */}
            <div>
                <h1 className="text-2xl text-center font-semibold mb-8">We&apos;ve helped thousands of sales teams</h1>
                <Marquee pauseOnHover>
                    {
                        salesTeams.map((item,index)=><div key={index} className="ml-32 flex items-center">
                            <Image  src={item} alt="image"/>
                        </div>)
                    }
                </Marquee>
            </div>
            <div className="mt-12  border-y border-slate-500 border-dashed py-16">
                <div className="flex flex-col gap-5">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="rounded-2xl bg-white px-5 py-5 shadow-sm shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-md hover:shadow-slate-200 sm:px-8 sm:py-6"
                        >
                            <div className="flex flex-col items-center gap-6 sm:flex-row">
                                <div className="flex items-center justify-center border-r-0 border-slate-300 pr-0 sm:border-r sm:border-dashed sm:pr-8">
                                    <Image src={item?.image} alt="image" className="w-32 sm:w-40" />
                                </div>
                                <div className="w-full border-t border-dashed border-slate-200 pt-4 text-center sm:border-t-0 sm:pt-0 sm:text-left">
                                    <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">
                                        {item.title}
                                    </h2>
                                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default OurSupport;
