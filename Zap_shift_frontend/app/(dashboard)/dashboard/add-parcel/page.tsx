"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import warehousesData from "../../../../public/assets/warehouses.json";
import { useState } from "react";

type Warehouse = {
  region: string;
  district: string;
  city: string;
};

const warehouses = warehousesData as Warehouse[];
const warehouseCities = Array.from(new Set(warehouses.map((item) => item.city))).sort();
const warehouseRegions = Array.from(new Set(warehouses.map((item) => item.region))).sort();

const page = () => {
  const [formData, setFormData] = useState({
    parcelType: "document",
    parcelName: "",
    parcelWeight: "",
    senderName: "",
    senderWarehouse: "",
    senderAddress: "",
    senderContact: "",
    senderRegion: "",
    pickupInstruction: "",
    receiverName: "",
    receiverWarehouse: "",
    receiverAddress: "",
    receiverContact: "",
    receiverRegion: "",
    deliveryInstruction: "",
  });

  const updateField = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="w-full shadow-sm">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-3xl">Add Parcel</CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-8">
        <div className="border-t border-slate-200 pt-6 space-y-8">
          <div className="space-y-2">
            <h1 className="text-xl font-semibold text-slate-800">
              Enter your parcel details
            </h1>
          </div>

          <RadioGroup
            value={formData.parcelType}
            onValueChange={(value) => updateField("parcelType", value)}
            className="flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem
                value="document"
                id="document"
                className="text-lime-600 border-lime-500 data-[state=checked]:text-lime-600 data-[state=checked]:border-lime-600"
              />
              <Label htmlFor="document" className="font-medium text-slate-800">
                Document
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem
                value="non-document"
                id="non-document"
                className="text-slate-400 border-slate-300"
              />
              <Label
                htmlFor="non-document"
                className="font-medium text-slate-600"
              >
                Non-Document
              </Label>
            </div>
          </RadioGroup>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="parcel-name">Parcel Name</Label>
              <Input
                id="parcel-name"
                placeholder="Parcel Name"
                value={formData.parcelName}
                onChange={(e) => updateField("parcelName", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="parcel-weight">Parcel Weight (KG)</Label>
              <Input
                id="parcel-weight"
                placeholder="Parcel Weight (KG)"
                value={formData.parcelWeight}
                onChange={(e) => updateField("parcelWeight", e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-800">
                Sender Details
              </p>
              <div className="grid gap-4">
                <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="sender-name">Sender Name</Label>
                    <Input
                      id="sender-name"
                      placeholder="Sender Name"
                      value={formData.senderName}
                      onChange={(e) => updateField("senderName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="sender-warehouse">
                      Sender Pickup Wire house
                    </Label>
                    <Select
                      value={formData.senderWarehouse}
                      onValueChange={(value) => updateField("senderWarehouse", value)}
                    >
                      <SelectTrigger id="sender-warehouse">
                        <SelectValue placeholder="Select Wire house" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Wirehouses</SelectLabel>
                          <SelectItem value="dhaka">Dhaka</SelectItem>
                          <SelectItem value="ctg">Chattogram</SelectItem>
                          <SelectItem value="sylhet">Sylhet</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="sender-address">Address</Label>
                    <Input
                      id="sender-address"
                      placeholder="Address"
                      value={formData.senderAddress}
                      onChange={(e) => updateField("senderAddress", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="sender-contact">Sender Contact No</Label>
                    <Input
                      id="sender-contact"
                      placeholder="Sender Contact No"
                      value={formData.senderContact}
                      onChange={(e) => updateField("senderContact", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                  <div className="space-y-1 md:col-span-2">
                    <Label htmlFor="sender-region">Your Region</Label>
                    <Select
                      value={formData.senderRegion}
                      onValueChange={(value) => updateField("senderRegion", value)}
                    >
                      <SelectTrigger id="sender-region">
                        <SelectValue placeholder="Select your region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Regions</SelectLabel>
                          {warehouseRegions.map((region) => (
                            <SelectItem key={region} value={region}>
                              {region}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="pickup-instruction">
                    Pickup Instruction
                  </Label>
                  <Textarea
                    id="pickup-instruction"
                    placeholder="Pickup Instruction"
                    className="min-h-20"
                    value={formData.pickupInstruction}
                    onChange={(e) => updateField("pickupInstruction", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-800">
                Receiver Details
              </p>
              <div className="grid gap-4">
                <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="receiver-name">Receiver Name</Label>
                    <Input
                      id="receiver-name"
                      placeholder="Sender Name"
                      value={formData.receiverName}
                      onChange={(e) => updateField("receiverName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="receiver-warehouse">
                      Receiver Delivery Wire house
                    </Label>
                    <Select
                      value={formData.receiverWarehouse}
                      onValueChange={(value) => updateField("receiverWarehouse", value)}
                    >
                      <SelectTrigger id="receiver-warehouse">
                        <SelectValue placeholder="Select Wire house" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Wirehouses</SelectLabel>
                          {warehouseCities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="receiver-address">Receiver Address</Label>
                    <Input
                      id="receiver-address"
                      placeholder="Address"
                      value={formData.receiverAddress}
                      onChange={(e) => updateField("receiverAddress", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="receiver-contact">Receiver Contact No</Label>
                    <Input
                      id="receiver-contact"
                      placeholder="Sender Contact No"
                      value={formData.receiverContact}
                      onChange={(e) => updateField("receiverContact", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                  <div className="space-y-1 md:col-span-2">
                    <Label htmlFor="receiver-region">Receiver Region</Label>
                    <Select
                      value={formData.receiverRegion}
                      onValueChange={(value) => updateField("receiverRegion", value)}
                    >
                      <SelectTrigger id="receiver-region">
                        <SelectValue placeholder="Select your region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Regions</SelectLabel>
                          {warehouseRegions.map((region) => (
                            <SelectItem key={region} value={region}>
                              {region}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="delivery-instruction">
                    Delivery Instruction
                  </Label>
                  <Textarea
                    id="delivery-instruction"
                    placeholder="Delivery Instruction"
                    className="min-h-20"
                    value={formData.deliveryInstruction}
                    onChange={(e) => updateField("deliveryInstruction", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs text-slate-600">
              * PickUp Time 4pm-7pm Approx.
            </p>
            <Button className="bg-[#b6d35e] hover:bg-[#a3c850] text-black font-semibold rounded-lg px-6">
              Proceed to Confirm Booking
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default page;
