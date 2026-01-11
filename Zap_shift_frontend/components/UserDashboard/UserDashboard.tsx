import { AreaGraphChart } from "../AreaGraphChart/AreaGraphChart";
import ShippingReports from "../ShippingReports/ShippingReports";
import { Button } from "../ui/button";
import { Package, PackageCheck, PlaneTakeoff, Plus, Ship, Van } from "lucide-react";

const data = [
    {
        title: "To Pay",
        amount: 129,
        icon:<Ship size={24}/>
    },
    {
        title:"Ready Pick UP",
        amount: 1325,
        icon:<Van size={24} />
    },
    {
        title:"In Transit",
        amount: 532,
        icon:<PlaneTakeoff size={24} />
    },
    {
        title:"Ready to Deliver",
        amount: 824,
        icon:<Package size={24} />
    },
    {
        title:"Delivered",
        amount: 4321,
        icon:<PackageCheck size={24} />
    }
]

const UserDashboard = () => {
  return (
    <div>
      <div className="flex items-center justify-between border-b-2 border-gray-400 border-dashed pb-6 mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
          <p className="text-sm text-slate-700 mt-2">
            You can access all your data and information from anywhere
          </p>
        </div>
        <Button className="bg-[#b6d35e] hover:bg-[#b6d35e] text-black px-6 py-2 rounded-xl font-semibold flex items-center cursor-pointer">
          <Plus />
          Add Parcel
        </Button>
      </div>

        {/* Additional dashboard content can be added here */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {data.map((item)=>(
                <div key={item.title} className="bg-white rounded-xl p-6 flex">
                    <div className="text-black mb-4 bg-[#ffefef91] p-4 border border-[#F5F5F78] rounded-full">{item.icon}</div>
                    <div className="flex flex-col justify-center ml-6">
                        <h2 className="text-md font-medium">{item.title}</h2>
                        <p className="text-3xl font-bold mt-2">{item.amount}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* chart area can be implemented here */}
        <div className="mt-6">
            <AreaGraphChart/>
        </div>

        {/* Shipping reports section to be added here */}

        <div className="mt-6">
            <ShippingReports />
        </div>
    </div>
  );
};

export default UserDashboard;
