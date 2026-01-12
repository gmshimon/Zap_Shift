import { ClipboardList, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ShipmentAlert = () => {

const alerts =[
    {
        shipment:"#RQ21534",
        status:"Damaged Package",
        time:"2 hours ago",
        tone:"border-red-400 text-red-600 bg-red-100"
    },
    {
        shipment:"#RQ21535",
        status:"Weather Delay",
        time:"5 hours ago",
        tone:"border-yellow-400 text-yellow-600 bg-yellow-100"
    },
    {
        shipment:"#RQ21536",
        status:"Weather Delay",
        time:"1 day ago",
        tone:"border-yellow-400 text-yellow-600 bg-yellow-100"  
    },
    {
        shipment:"#RQ21537",
        status:"Damaged Package",
        time:"2 days ago",
        tone:"border-red-400 text-red-600 bg-red-100"
    }
]

    return (
         <Card className="w-full">
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Shipment Alerts</CardTitle>
                <button className="bg-[#b6d35e] text-black px-4 py-2 rounded-2xl flex items-center cursor-pointer">
                    View All Invoices
                </button>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#f3eaea]">
                    <div className="p-6 flex justify-center text-sm text-slate-700">
                        <div className="text-center border-r-2 border-black border-dashed px-8">
                            <h2 className="font-bold text-xl mb-1">2</h2>
                            <p>Damaged</p>
                        </div>
                        {/* <div className="border-l px-4"/> */}
                        <div className="text-center pl-8">
                            <h2 className="font-bold text-xl mb-1">10</h2>
                            <p>Weather Delays</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 border rounded-xl" >
                   
                   <div className="overflow-hidden rounded-xl border border-slate-200">
          {alerts.map((alert, idx) => (
            <div
              key={`${alert.shipment}-${idx}`}
              className="flex items-center justify-between px-4 py-3 gap-3 border-b border-dashed last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`grid place-items-center h-10 w-10 rounded-full border ${alert.tone}`}
                >
                  <Info size={16} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold text-slate-800">
                    {alert.status}
                  </p>
                  <p className="text-xs text-slate-500">
                    Shipment {alert.shipment} <span className="mx-1">•</span>{" "}
                    {alert.time}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <ClipboardList size={16} className="hover:text-slate-700" />
              </div>
            </div>
          ))}
        </div>
                </div>
              </CardContent>
        </Card>
    );
};

export default ShipmentAlert;