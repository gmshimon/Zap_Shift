"use client";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition focus:border-lime-500 focus:ring-2 focus:ring-lime-100 focus:outline-none";

const division = [
  "Dhaka",
  "Chattogram",
  "Khulna",
  "Rajshahi",
  "Barisal",
  "Sylhet",
  "Rangpur",
  "Mymensingh",
];

const page = () => {
  const [parcel_type, setParcel_type] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [weight, setWeight] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  const handleCalculate = () => {
    switch (parcel_type) {
      case "Document":
        if (destination === "Dhaka") {
          setPrice(60);
        } else {
          setPrice(80);
        }
        break;
      case "Non-Document":
        if (weight <= 3) {
          if (destination == "Dhaka") {
            setPrice(110);
          } else {
            setPrice(150);
          }
        } else {
          if (destination == "Dhaka") {
            setPrice(110 + (weight - 3) * 40);
          } else {
            setPrice(110 + 40 + (weight - 3) * 40);
          }
        }
        break;
      default:
        setPrice(0)
        break;
    }

    console.log({
      parcel_type,
      destination,
      weight,
    });
  };

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-lime-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lime-700 shadow-sm">
              Smart Estimate
            </p>
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
                Pricing Calculator
              </h1>
              <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
                Enjoy fast, reliable parcel delivery with real-time tracking and
                zero hassle. From personal packages to business shipments, we
                deliver on time every time.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <form
            onSubmit={handleCalculate}
            className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="parcel"
                  className="text-sm font-semibold text-slate-900"
                >
                  Parcel Type
                </Label>
                <Select onValueChange={(value) => setParcel_type(value)}>
                  <SelectTrigger className={fieldClass} id="parcel">
                    <SelectValue placeholder="Select Parcel Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Parcel Type</SelectLabel>
                      <SelectItem value="Document">Document</SelectItem>
                      <SelectItem value="Non-Document">Non-Document</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="destination"
                  className="text-sm font-semibold text-slate-900"
                >
                  Delivery Destination
                </Label>
                <Select onValueChange={(value) => setDestination(value)}>
                  <SelectTrigger className={fieldClass} id="destination">
                    <SelectValue placeholder="Select Delivery Destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Division</SelectLabel>
                      {division.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label
                  htmlFor="weight"
                  className="text-sm font-semibold text-slate-900"
                >
                  Weight (KG)
                </Label>
                <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                  <Input
                    type="number"
                    inputMode="decimal"
                    id="weight"
                    placeholder="e.g. 1.5"
                    className={fieldClass}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                  />
                  <div className="flex items-center gap-3 rounded-xl border border-lime-100 bg-lime-50 px-4 py-3 text-xs text-lime-900 shadow-sm">
                    <div className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-lime-700">
                      Best rate
                    </div>
                    <p className="text-left">
                      Same-day available up to 20 KG with secured handling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={handleCalculate}
                type="button"
                className="bg-[#b6d35e] text-black px-6 py-2 rounded-2xl font-semibold flex items-center"
              >
                Calculate
              </button>
              <button
                type="reset"
                className="border border-[#b6d35e] text-[#b6d35e] px-6 py-2 rounded-2xl font-semibold flex items-center bg-transparent"
              >
                Reset
              </button>
              <p className="text-xs text-slate-500">
                Transparent pricing with doorstep pickup. No hidden fees.
              </p>
            </div>
          </form>

          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 text-white shadow-2xl sm:p-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
                    Estimated cost
                  </p>
                  <p className="text-sm text-slate-200">
                    Standard delivery with live tracking and insurance.
                  </p>
                </div>
                <p className="text-5xl font-semibold leading-none sm:text-6xl">
                  Tk {price}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-slate-300">Pickup</p>
                  <p className="text-base font-semibold">Free</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-slate-300">Coverage</p>
                  <p className="text-base font-semibold">Nationwide</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-slate-300">Speed</p>
                  <p className="text-base font-semibold">Same-day</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">What you get</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 text-xs font-semibold text-lime-200">
                      ✓
                    </span>
                    <span>Real-time tracking with SMS and email alerts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 text-xs font-semibold text-lime-200">
                      ✓
                    </span>
                    <span>
                      Secured handling and delivery confirmation photos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 text-xs font-semibold text-lime-200">
                      ✓
                    </span>
                    <span>Priority support with dedicated rider hotline.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
