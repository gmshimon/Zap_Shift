import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArchiveX, CornerDownLeft, PlaneTakeoff, Ship, SquarePen, Trash, Van, Wallet } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
const data = [
    {
        title: "Total",
        amount: 129,
        icon:<Wallet size={24}/>
    },
    {
        title:"Return",
        amount: 1325,
        icon:<CornerDownLeft size={24} />
    },
    {
        title:"Paid Return",
        amount: 532,
        icon:<ArchiveX size={24} />
    }
]

const deliveries = [
  {
    id: "#PTD 145/42547",
    store: "Rafa Enterprise",
    date: "Today",
    recipientName: "Shakil",
    recipientAddress: "নারায়ণগঞ্জ, ফতুল্লা নগর সম্বায়, ফতুল্লা",
    recipientPhone: "01773869877",
    deliveryStatus: "Paid Return",
    deliveryStatusTone: "text-emerald-600",
    amount: {
      cod: "COD ৳ 100",
      charge: "Charge ৳ 121",
      discount: "Discount ৳ 0",
    },
    payment: "Unpaid",
    paymentTone: "text-amber-600",
  },
  {
    id: "#PTD 145/42547",
    store: "Rafa Enterprise",
    date: "1 day ago",
    recipientName: "—",
    recipientAddress: "নারায়ণগঞ্জ, ফতুল্লা নগর সম্বায়, ফতুল্লা",
    recipientPhone: "",
    deliveryStatus: "Delivered",
    deliveryStatusTone: "text-emerald-600",
    amount: {
      cod: "",
      charge: "",
      discount: "",
    },
    payment: "Paid",
    paymentTone: "text-emerald-600",
  },
  {
    id: "#PTD 145/42547",
    store: "Rafa Enterprise",
    date: "Jan 12, 2025",
    recipientName: "Anika",
    recipientAddress: "অখিলুর,\nআব্দুল্লাহপুর, সাভার, ঢাকা",
    recipientPhone: "01987654321",
    deliveryStatus: "Pending",
    deliveryStatusTone: "text-amber-500",
    amount: {
      cod: "COD ৳ 150",
      charge: "Charge ৳ 175",
      discount: "Discount ৳ 25",
    },
    payment: "Pending",
    paymentTone: "text-amber-500",
  },
  {
    id: "#PTD 145/42547",
    store: "Rafa Enterprise",
    date: "2 days ago",
    recipientName: "—",
    recipientAddress: "নারায়ণগঞ্জ, ফতুল্লা নগর সম্বায়, ফতুল্লা",
    recipientPhone: "",
    deliveryStatus: "Cancelled",
    deliveryStatusTone: "text-rose-500",
    amount: {
      cod: "",
      charge: "",
      discount: "",
    },
    payment: "Overdue",
    paymentTone: "text-emerald-600",
  },
  {
    id: "#PTD 145/42547",
    store: "Rafa Enterprise",
    date: "Jan 10, 2025",
    recipientName: "Rameez",
    recipientAddress: "রনিম\nআব্দুল্লাহপুর, সাভার\n01823456789",
    recipientPhone: "",
    deliveryStatus: "Refunded",
    deliveryStatusTone: "text-emerald-600",
    amount: {
      cod: "COD ৳ 200",
      charge: "Charge ৳ 220",
      discount: "Discount ৳ 0",
    },
    payment: "Refunded",
    paymentTone: "text-amber-500",
  },
];
const page = () => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-3xl">All Deliveries</CardTitle>
      </CardHeader>
      

         <CardContent className="p-x-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-3/4 gap-6 mb-6">
            {data.map((item)=>(
                <div key={item.title} className="bg-[#ffefef91] rounded-xl p-6 flex">
                    <div className="text-black mb-4 bg-[#ffefef91] p-4 border border-[#F5F5F78] rounded-full">{item.icon}</div>
                    <div className="flex flex-col justify-center ml-6">
                        <h2 className="text-md font-medium">{item.title}</h2>
                        <p className="text-3xl font-bold mt-2">{item.amount}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <Table className="text-sm">
            <TableHeader>
              <TableRow className="bg-[#f5f1f1]">
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Cons. ID
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Store
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Date
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Recipient Info
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Delivery Status
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Amount
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Payment
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deliveries.map((item, index) => (
                <TableRow
                  key={`${item.id}-${index}`}
                  className="even:bg-[#f3eaea]"
                >
                  <TableCell className="px-4 py-3 text-slate-700">
                    {item.id}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-slate-800 font-medium">
                    {item.store}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-slate-700">
                    {item.date || "—"}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-slate-700">
                    <div className="space-y-1">
                      <p className="font-semibold text-slate-800">{item.recipientName}</p>
                      <p className="whitespace-pre-line text-slate-600 text-xs leading-tight">
                        {item.recipientAddress}
                        {item.recipientPhone ? `\n${item.recipientPhone}` : ""}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-slate-700">
                    <span className={`font-semibold ${item.deliveryStatusTone}`}>
                      {item.deliveryStatus}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-slate-700">
                    <div className="text-xs text-slate-700 space-y-1">
                      {item.amount.cod && <p>{item.amount.cod}</p>}
                      {item.amount.charge && <p>{item.amount.charge}</p>}
                      {item.amount.discount && <p>{item.amount.discount}</p>}
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <span className={`text-sm font-semibold ${item.paymentTone}`}>
                      {item.payment}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button className="bg-lime-400 hover:bg-lime-300 text-black rounded-md px-3 py-1 text-xs font-semibold cursor-pointer">
                        Pay
                      </button>
                      <button className="bg-[#e9f0ff] text-slate-700 rounded-md px-3 py-1 text-xs font-semibold cursor-pointer">
                        View
                      </button>
                      <button className="bg-rose-100 text-rose-600 rounded-md px-3 py-1 text-xs font-semibold cursor-pointer">
                        Delete
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default page;
