"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FAQ = () => {
  return (
    <div className="mt-16">
      <h1 className="text-black text-3xl font-semibold text-center">
        Frequently Asked Question (FAQ)
      </h1>
      <p className="text-center text-sm w-1/2 mx-auto mt-2 text-gray-700"> Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
      <Accordion
        type="single"
        collapsible
        className="w-full mt-6"
        defaultValue="item-1" 
      >
        <AccordionItem value="item-1" className="bg-white px-6 py-2 rounded-2xl mb-4">
          <AccordionTrigger className="font-semibold border-b-2 rounded-none shadow-none mb-4 text-xl">Product Information</AccordionTrigger>
          <AccordionContent className="text-justify">
            <p className="w-full">
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability. Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.
            </p>
          </AccordionContent>
        </AccordionItem>
       <AccordionItem value="item-2" className="bg-white px-6 py-2 rounded-2xl">
          <AccordionTrigger className="font-semibold border-b-2 rounded-none shadow-none mb-4 text-xl">Product Information</AccordionTrigger>
          <AccordionContent className="text-justify">
            <p className="w-full">
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability. Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
     <div className="flex justify-center mt-6">
         <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#b6d35e] text-black px-6 py-2 rounded-2xl font-semibold flex items-center cursor-pointer"
                >
                  See More FAQ's
                  <span className="ml-2 bg-black text-[#b6d35e] p-1 rounded-2xl">
                    <ArrowUpRight />
                  </span>
                </motion.button>
     </div>
    </div>
  );
};

export default FAQ;
