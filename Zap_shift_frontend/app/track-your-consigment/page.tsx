import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Check, SearchIcon } from "lucide-react";
const fieldClass =
  "rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-[0_6px_24px_rgba(0,0,0,0.03)] transition focus:border-[#b6d35e] focus:shadow-[0_12px_30px_rgba(182,211,94,0.25)] focus:outline-none";
const trackingUpdates = [
  {
    id: 1,
    date: "Jun 02, 2025",
    time: "12:21 am",
    status: "Assigned to rider",
  },
  {
    id: 2,
    date: "Jun 02, 2025",
    time: "12:21 am",
    status: "Assigned to rider",
  },
  {
    id: 3,
    date: "Jun 02, 2025",
    time: "12:21 am",
    status: "Assigned to rider",
  },
  {
    id: 4,
    date: "Jun 02, 2025",
    time: "12:21 am",
    status: "Assigned to rider",
  },
  {
    id: 5,
    date: "Jun 02, 2025",
    time: "12:21 am",
    status: "Assigned to rider",
  },
  {
    id: 6,
    date: "Jun 02, 2025",
    time: "12:21 am",
    status: "Assigned to rider",
  },
  {
    id: 7,
    date: "Jun 02, 2025",
    time: "12:21 am",
    status: "Assigned to rider",
  },
];

const page = () => {
  return (
    <section>
      <div className="rounded-2xl bg-white px-6 py-12">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
          Track Your Consignment
        </h1>
        <p className="text-sm text-slate-600 sm:text-base mt-4">
          Now you can easily track your consignment
        </p>
        <div className="grid w-full grid-cols-2 max-w-7xl gap-2 mt-2 border-b-2 border-dashed pb-10 mb-10">
          <InputGroup className={fieldClass}>
            <InputGroupInput placeholder="Search tracking code here" />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <Button className="bg-[#b6d35e] text-black px-6 py-2 rounded-2xl font-semibold flex items-center w-[150px]">
            Search
          </Button>
        </div>

        {/* track details component */}

        <div className="md:flex md:justify-center gap-y-10 md:gap-x-10 lg:px-10 xl:px-32 max-w-7xl">
          {/* Product Details */}
          <div className="bg-[#F0F3F6] p-10 rounded-3xl w-full">
            <h1 className="mb-8 text-3xl font-bold text-slate-800">
              Product Details
            </h1>
            <div className="mb-10">
              <p className="text-sm mt-2">May 31, 2025 03.41pm</p>
              <p className="text-sm mt-1">
                <span>Id: </span>
                <span className="text-slate-600">148976175</span>
              </p>
              <p className="text-sm mt-1">
                <span>Invoice: </span>
                <span className="text-slate-600">24227</span>
              </p>
              <p className="text-sm mt-1">
                <span>Invoice: </span>
                <span className="text-slate-600">24227</span>
              </p>
              <p className="text-sm mt-1">
                <span>Tracking Code: </span>
                <span className="text-slate-600">EWACEFQFEAWQCQWQFQW</span>
              </p>
            </div>
            <div className="mb-10">
              <p className="text-sm mt-1">
                <span>Name: </span>
                <span className="text-slate-600">G M Shaheen Shah Shimon</span>
              </p>
              <p className="text-sm mt-1">
                <span>Address: </span>
                <span className="text-slate-600">
                  Vetterstrase 72, Chemnitz
                </span>
              </p>
              <p className="text-sm mt-1">
                <span>Phone NUmber: </span>
                <span className="text-slate-600">+60187817582</span>
              </p>
            </div>
            <div>
              <p className="text-sm mt-1">
                <span>Approved: </span>
                <span className="text-slate-600">N/A</span>
              </p>
              <p className="text-sm mt-1">
                <span>Weight: </span>
                <span className="text-slate-600">1KG</span>
              </p>
              <p className="text-sm mt-1">
                <span>COD: </span>
                <span className="text-slate-600">0</span>
              </p>
              <p className="text-sm text-orange-500 font-semibold">Pending</p>
            </div>
          </div>

          {/* Tracking updates */}
          <div className="rounded-3xl bg-[#F0F3F6] p-10 w-full">
            <h2 className="mb-8 text-3xl font-bold text-slate-800">
              Tracking Updates
            </h2>

            <div className="relative space-y-8">
              {trackingUpdates.map((item, index) => (
                <div key={item.id} className="flex gap-6">
                  {/* Left: Date */}
                  <div className="w-28 text-sm text-slate-600">
                    <p>{item.date}</p>
                    <p>{item.time}</p>
                  </div>

                  {/* Middle: Icon + Line */}
                  <div className="relative flex flex-col items-center">
                    {/* Icon */}
                    <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>

                    {/* Line */}
                    {index !== trackingUpdates.length - 1 && (
                      <div className="absolute top-8 h-full w-px bg-slate-200" />
                    )}
                  </div>

                  {/* Right: Status */}
                  <div className="flex-1 text-slate-800">{item.status}.</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
