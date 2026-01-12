import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { CalendarDays, SquarePen, Trash } from "lucide-react";


const shipments = [
  {
    id: "#RQ21534",
    client: "Rasel Ahmed",
    date: "Jan 6, 2025",
    weight: "10 kg",
    shipper: "DHL",
    price: "4500.00",
    status: "Delivered",
  },
  {
    id: "#RQ21534",
    client: "Rakib Hossain",
    date: "Jan 8, 2025",
    weight: "15 kg",
    shipper: "Inpost",
    price: "9800.00",
    status: "Delivered",
  },
  {
    id: "#RQ21534",
    client: "Rakib",
    date: "12 Feb, 2025",
    weight: "5 kg",
    shipper: "Pathao",
    price: "2000.00",
    status: "Transit",
  },
  {
    id: "#RQ21534",
    client: "Abu Sufian",
    date: "06 Jan, 2025",
    weight: "7 kg",
    shipper: "Steadfast",
    price: "2700.00",
    status: "Waiting",
  },
  {
    id: "#RQ21534",
    client: "Rasel Ahmed",
    date: "Jan 5, 2025",
    weight: "15 kg",
    shipper: "UPS",
    price: "1500.00",
    status: "Transit",
  },
  {
    id: "#RQ21534",
    client: "Jhankar Mahbub",
    date: "22 Dec, 2024",
    weight: "10 kg",
    shipper: "DHL",
    price: "8500.00",
    status: "Pending",
  },
];

const statusStyles: Record<
  (typeof shipments)[number]["status"],
  string
> = {
  Delivered: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Transit: "bg-blue-100 text-blue-700 border-blue-200",
  Waiting: "bg-rose-100 text-rose-700 border-rose-200",
  Pending: "bg-amber-100 text-amber-700 border-amber-200",
};

const ShippingReports = () => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Shipping Reports</CardTitle>
        <div>
          <Select defaultValue="this-week">
            <SelectTrigger className="w-50">
              <CalendarDays />
              <SelectValue placeholder="Date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Date Range</SelectLabel>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                <SelectItem value="year-to-date">Year to Date</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="p-x-4">
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <Table className="text-sm">
            <TableHeader>
              <TableRow className="bg-[#f5f1f1]">
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  ID
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Client
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Date
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Weight
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Shipper
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Price
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Status
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shipments.map((item, index) => (
                <TableRow
                  key={`${item.id}-${index}`}
                  className="even:bg-[#f3eaea]"
                >
                  <TableCell className="px-4 py-3 text-slate-700">
                    {item.id}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-slate-800 font-medium">
                    {item.client}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-slate-700">
                    {item.date}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-slate-700">
                    {item.weight}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-slate-700">
                    {item.shipper}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-slate-700">
                    {item.price}
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <div className="flex items-center gap-3 text-slate-400">
                      <button
                        type="button"
                        className="hover:text-slate-700 transition-colors cursor-pointer"
                        aria-label="Edit"
                      >
                        <SquarePen size={20} />
                      </button>
                      <span className="text-slate-300">|</span>
                      <button
                        type="button"
                        className="hover:text-slate-700 transition-colors cursor-pointer"
                        aria-label="More actions"
                      >
                        <Trash  size={16} />
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

export default ShippingReports;
