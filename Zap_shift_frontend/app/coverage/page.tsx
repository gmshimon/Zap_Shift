"use client";

import { useMemo, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import warehouses from "../../public/assets/warehouses.json";
import { Button } from "@/components/ui/button";

type Warehouse = {
  region: string;
  district: string;
  city: string;
  covered_area: string[];
  status: string;
  flowchart: string;
  longitude: number;
  latitude: number;
};

const page = () => {
  const fieldClass =
    "rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-[0_6px_24px_rgba(0,0,0,0.03)] transition focus:border-[#b6d35e] focus:shadow-[0_12px_30px_rgba(182,211,94,0.25)] focus:outline-none";

  const data = warehouses as Warehouse[];
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWarehouses = useMemo(() => {
    if (!searchTerm.trim()) return data;
    const term = searchTerm.toLowerCase();
    return data.filter((w) => {
      const haystack = [
        w.city,
        w.district,
        w.region,
        ...(w.covered_area || []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [data, searchTerm]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(inputValue.trim());
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">
    
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white/90 px-6 py-10 shadow-xl shadow-slate-900/5 ring-1 ring-white/60 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                We are Available in 64 Districts
              </h1>
              <p className="text-sm text-slate-600 sm:text-base">
                Search a city, district, or covered area to see where our hubs operate and preview
                the map location instantly.
              </p>
            </div>
            <p className="rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
              Active network • Bangladesh
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-6 grid w-full gap-3 border-b border-dashed border-slate-200 pb-8 sm:grid-cols-[1fr_auto]"
          >
            <InputGroup className={fieldClass}>
              <InputGroupInput
                placeholder="Search by city, district, or area"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
            <Button
              type="submit"
              className="rounded-2xl bg-[#b6d35e] px-6 py-3 text-base font-semibold hover:bg-[#aad32f] text-black cursor-pointer text-center"
            >
              Search
            </Button>
          </form>

          <div className="mt-8 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-xl font-bold text-slate-900">
                We deliver almost all over Bangladesh
              </h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                Showing {filteredWarehouses.length} location
                {filteredWarehouses.length === 1 ? "" : "s"}
              </span>
              {searchTerm && (
                <span className="text-xs text-slate-500">
                  Filtered by: <span className="font-semibold text-slate-800">{searchTerm}</span>
                </span>
              )}
            </div>

            {filteredWarehouses.length === 0 ? (
              <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-6 text-sm text-slate-600">
                No locations matched your search. Try another city, district, or area name.
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredWarehouses.map((location) => {
                  const mapUrl = `https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=11&output=embed`;
                  return (
                    <div
                      key={`${location.city}-${location.district}`}
                      className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-900/5"
                    >
                      <div className="p-4">
                        <p className="text-sm font-semibold text-slate-900">
                          {location.city}, {location.district}
                        </p>
                        <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                          {location.region} Division
                        </p>
                        <p className="mt-2 text-xs text-slate-600">
                          Areas: {location.covered_area.join(", ")}
                        </p>
                        <span className="mt-3 inline-flex rounded-full bg-[#b6d35e]/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                          {location.status === "active" ? "Active hub" : location.status}
                        </span>
                      </div>
                      <div className="relative h-64 w-full overflow-hidden rounded-t-none border-t border-slate-100">
                        <iframe
                          title={`Map of ${location.city}`}
                          src={mapUrl}
                          className="h-full w-full border-0"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
