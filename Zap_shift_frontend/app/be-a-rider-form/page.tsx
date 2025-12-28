"use client"
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import agent_pending from "../../public/assets/agent-pending.png";
import Image from "next/image";

const fieldClass =
  "rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-[0_6px_24px_rgba(0,0,0,0.03)] transition focus:border-[#b6d35e] focus:shadow-[0_12px_30px_rgba(182,211,94,0.25)] focus:outline-none";

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Page = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="show"
      className="rounded-2xl bg-white p-6 shadow-sm sm:p-10"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="flex-1">
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
            Be A Rider
          </h1>
          <p className="mt-3 max-w-xl border-b border-dashed border-slate-200 pb-6 text-sm text-slate-600 sm:mt-4">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Tell us about yourself
              </h2>
              <p className="text-sm text-slate-600">
                Share a few basics so we can get you on the road quickly.
              </p>
            </div>
            <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-semibold">
                  Your Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className={fieldClass}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className={fieldClass}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="license" className="text-sm font-semibold">
                  Driving License Number
                </Label>
                <Input
                  type="text"
                  id="license"
                  placeholder="Driving License Number"
                  className={fieldClass}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="region" className="text-sm font-semibold">
                  Your Region
                </Label>
                <Select>
                  <SelectTrigger className={fieldClass}>
                    <SelectValue placeholder="Select your region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Regions</SelectLabel>
                      <SelectItem value="dhaka">Dhaka</SelectItem>
                      <SelectItem value="chattogram">Chattogram</SelectItem>
                      <SelectItem value="khulna">Khulna</SelectItem>
                      <SelectItem value="rajshahi">Rajshahi</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="district" className="text-sm font-semibold">
                  Your District
                </Label>
                <Select>
                  <SelectTrigger className={fieldClass}>
                    <SelectValue placeholder="Select your district" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Districts</SelectLabel>
                      <SelectItem value="gazipur">Gazipur</SelectItem>
                      <SelectItem value="narayanganj">Narayanganj</SelectItem>
                      <SelectItem value="cumilla">Cumilla</SelectItem>
                      <SelectItem value="bogura">Bogura</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="nid" className="text-sm font-semibold">
                  NID No
                </Label>
                <Input
                  type="text"
                  id="nid"
                  placeholder="NID Number"
                  className={fieldClass}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number" className="text-sm font-semibold">
                  Phone Number
                </Label>
                <Input
                  type="text"
                  id="number"
                  placeholder="Phone Number"
                  className={fieldClass}
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="bike_brand_year"
                  className="text-sm font-semibold"
                >
                  Bike Brand Model and Year
                </Label>
                <Input
                  type="text"
                  id="bike_brand_year"
                  placeholder="e.g., Yamaha FZ 2021"
                  className={fieldClass}
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="bike_registration"
                  className="text-sm font-semibold"
                >
                  Bike Registration Number
                </Label>
                <Input
                  type="text"
                  id="bike_registration"
                  placeholder="Registration Number"
                  className={fieldClass}
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="yourself" className="text-sm font-semibold">
                  Tell Us About Yourself
                </Label>
                <Textarea
                  id="yourself"
                  placeholder="Add a short note about your experience"
                  className={`${fieldClass} min-h-[120px]`}
                />
              </div>
              <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 rounded-2xl bg-[#b6d35e] px-6 py-3 text-base font-semibold text-black cursor-pointer text-center"
        >
          Be a Rider
        </motion.button>
            </form>
          </div>
        </div>
        <div className="mx-auto max-w-md">
          <Image src={agent_pending} alt="Rider pending illustration" />
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
