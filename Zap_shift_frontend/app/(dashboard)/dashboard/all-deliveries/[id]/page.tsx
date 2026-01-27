"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "next/navigation";

type InfoItem = { label: string; value: string };

const InfoCard = ({ title, items }: { title: string; items: InfoItem[] }) => (
  <Card className="bg-[#F5F5F5] border-slate-200 shadow-sm">
    <CardHeader className="pb-3">
      <CardTitle className="text-lg font-semibold text-slate-900">{title}</CardTitle>
    </CardHeader>
    <CardContent className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col gap-1 rounded-lg bg-slate-50/70 px-3 py-2 sm:flex-row sm:items-center sm:gap-3"
        >
          <span className="w-32 text-xs font-medium uppercase tracking-wide text-slate-500 sm:w-28">
            {item.label}
          </span>
          <span className="text-base font-semibold text-slate-900">{item.value || "—"}</span>
        </div>
      ))}
    </CardContent>
  </Card>
);

const Page = () => {
  const { id } = useParams<{ id: string }>();

  const deliveryDetails = {
    sender: {
      name: "Zahid Hossain",
      phone: "+8801758000056",
      email: "zahid@example.com",
      region: "Dhaka, Bangladesh",
      address: "Gulshan Badda Link Rd, Dhaka 1212",
    },
    receiver: {
      name: "Zahid Hossain",
      phone: "+8801758000056",
      email: "zahid@example.com",
      region: "Dhaka, Bangladesh",
      address: "Gulshan Badda Link Rd, Dhaka 1212",
    },
    parcel: {
      title: "Zahid Hossain",
      type: "Mango",
      weight: "5 KG",
      charge: "Tk 320",
      status: "Pending",
      pickupInstruction: "N/A",
      deliveryInstruction: "N/A",
      trackingNumber: "25820",
      pickupOTP: "6345",
      deliveryOTP: "5555",
    },
  };

  const senderItems: InfoItem[] = [
    { label: "Name", value: deliveryDetails.sender.name },
    { label: "Phone", value: deliveryDetails.sender.phone },
    { label: "Email", value: deliveryDetails.sender.email },
    { label: "Region", value: deliveryDetails.sender.region },
    { label: "Address", value: deliveryDetails.sender.address },
  ];

  const receiverItems: InfoItem[] = [
    { label: "Name", value: deliveryDetails.receiver.name },
    { label: "Phone", value: deliveryDetails.receiver.phone },
    { label: "Email", value: deliveryDetails.receiver.email },
    { label: "Region", value: deliveryDetails.receiver.region },
    { label: "Address", value: deliveryDetails.receiver.address },
  ];

  const parcelItems: InfoItem[] = [
    { label: "Title", value: deliveryDetails.parcel.title },
    { label: "Type", value: deliveryDetails.parcel.type },
    { label: "Weight", value: deliveryDetails.parcel.weight },
    { label: "Charge", value: deliveryDetails.parcel.charge },
    { label: "Status", value: deliveryDetails.parcel.status },
    { label: "Pickup Instruction", value: deliveryDetails.parcel.pickupInstruction },
    { label: "Delivery Instruction", value: deliveryDetails.parcel.deliveryInstruction },
    { label: "Tracking Number", value: deliveryDetails.parcel.trackingNumber },
    { label: "Pickup OTP", value: deliveryDetails.parcel.pickupOTP },
    { label: "Delivery OTP", value: deliveryDetails.parcel.deliveryOTP },
  ];

  return (
    <section className="space-y-5">
      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-3xl text-slate-900 leading-tight">Parcel Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <InfoCard title="Sender Info" items={senderItems} />
            <InfoCard title="Receiver Info" items={receiverItems} />
          </div>
          <InfoCard title="Parcel details" items={parcelItems} />
        </CardContent>
      </Card>
    </section>
  );
};

export default Page;
