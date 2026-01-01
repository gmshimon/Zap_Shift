import Banner from "@/components/Banner/Banner";
import CustomerSatisfaction from "@/components/CustomerSatisfaction/CustomerSatisfaction";
import FAQ from "@/components/FAQ/FAQ";
import OurServices from "@/components/OurServices/OurServices";
import OurSupport from "@/components/OurSupport/OurSupport";

export default function Home() {
  return (
    <div className="">
   
        <Banner/>
        <OurServices/>
        <OurSupport/>
        <CustomerSatisfaction/>
        <FAQ/>
      
    </div>
  );
}
