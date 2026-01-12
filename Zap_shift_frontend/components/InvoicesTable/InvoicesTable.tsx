import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
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
    price: "4500.00",
    date: "Jan 6, 2025",
  },
  {
    id: "#RQ21534",
    price: "9800.00",
    date: "Jan 8, 2025",
  },
  {
    id: "#RQ21534",
    price: "2000.00",
    date: "12 Feb, 2025",
  },
  {
    id: "#RQ21534",
    price: "2700.00",
    date: "06 Jan, 2025",
  },
  {
    id: "#RQ21534",
    price: "8500.00",
    date: "22 Dec, 2024",
  },
  {
    id: "#RQ21534",
    price: "4300.00",
    date: "15 Nov, 2024",
  },
];

const InvoicesTable = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Late Invoices</CardTitle>
        <button className="bg-[#b6d35e] text-black px-4 py-2 rounded-2xl flex items-center cursor-pointer">
          View All Invoices
        </button>
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
                  Date
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Price
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
                
                  <TableCell className="px-4 py-3 text-slate-700">
                    {item.date}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-slate-700">
                    {item.price}
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
                        <Trash size={16} />
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

export default InvoicesTable;
