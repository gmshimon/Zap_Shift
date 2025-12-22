import Banner from "@/components/Banner/Banner";
import OurServices from "@/components/OurServices/OurServices";
import OurSupport from "@/components/OurSupport/OurSupport";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#EAECEE]  min-h-screen ">
      <div className="pt-30 max-w-7xl mx-auto">
        <Banner/>
        <OurServices/>
        <OurSupport/>
      </div>
    </div>
  );
}
