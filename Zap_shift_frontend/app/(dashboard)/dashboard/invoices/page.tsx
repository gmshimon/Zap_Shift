
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    parcelInfo: "Liquid Cleanser",
    recipient: {
      name: "Shakil",
      address: "আরবীন\nনারায়ণগঞ্জ, ফতুল্লা নগর সম্বায়, ফতুল্লা",
      phone: "01773869877",
    },
    trackingNumber: "568352",
    paymentInfo: "৳ 121 (Paid)",
  },
  {
    parcelInfo: "Liquid Cleanser",
    recipient: {
      name: "",
      address: "নারায়ণগঞ্জ, ফতুল্লা নগর সম্বায়, ফতুল্লা",
      phone: "",
    },
    trackingNumber: "568352",
    paymentInfo: "৳ 121 (Paid)",
  },
  {
    parcelInfo: "Liquid Cleanser",
    recipient: {
      name: "Anika",
      address: "অখিলুর\nআব্দুল্লাহপুর, সাভার, ঢাকা",
      phone: "01987654321",
    },
    trackingNumber: "568352",
    paymentInfo: "৳ 121 (Paid)",
  },
  {
    parcelInfo: "Liquid Cleanser",
    recipient: {
      name: "",
      address: "নারায়ণগঞ্জ, ফতুল্লা নগর সম্বায়, ফতুল্লা",
      phone: "",
    },
    trackingNumber: "568352",
    paymentInfo: "৳ 121 (Paid)",
  },
  {
    parcelInfo: "Liquid Cleanser",
    recipient: {
      name: "Rameez",
      address: "রনিম\nকুমিল্লা, ঢাকা",
      phone: "01823456789",
    },
    trackingNumber: "568352",
    paymentInfo: "৳ 121 (Paid)",
  },
];

const page = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl text-slate-900 leading-tight">
          Payment History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <Table className="text-sm">
            <TableHeader>
              <TableRow className="bg-[#f5f1f1]">
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Parcel Info
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Recipient Info
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Tracking Number
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Payment Info
                </TableHead>
                <TableHead className="px-4 py-3 text-xs font-semibold text-black">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((item, index) => (
                <TableRow key={`${item.trackingNumber}-${index}`} className="even:bg-[#f3f6f7]">
                  <TableCell className="px-4 py-3 text-slate-800 font-medium">
                    {item.parcelInfo}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-slate-700">
                    <div className="space-y-1">
                      {item.recipient.name ? (
                        <p className="font-semibold text-slate-800">
                          {item.recipient.name}
                        </p>
                      ) : null}
                      <p className="whitespace-pre-line text-slate-600 text-xs leading-tight">
                        {item.recipient.address}
                        {item.recipient.phone ? `\n${item.recipient.phone}` : ""}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-slate-700">
                    {item.trackingNumber}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-slate-700">
                    {item.paymentInfo}
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <button className="bg-[#e0edf1] text-slate-800 hover:bg-[#d4e6eb] rounded-md px-3 py-1 text-xs font-semibold cursor-pointer">
                      View
                    </button>
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
