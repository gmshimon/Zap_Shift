"use client";

import * as React from "react";
import type { CSSProperties } from "react";
import {
  FileText,
  LayoutDashboard,
  MapPin,
  Store,
  Tag,
  Truck,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import bandLogo from "../public/assets/logo.png";
const menuItems = [
  {
    title: "Dashboard",
    url: "/user",
    icon: LayoutDashboard,
  },
  {
    title: "Deliveries",
    url: "/user/deliveries",
    icon: Truck,
  },
  {
    title: "Invoices",
    url: "/user/invoices",
    icon: FileText,
  },
  {
    title: "Stores",
    url: "/user/stores",
    icon: Store,
  },
  {
    title: "Pricing Plan",
    url: "/user/pricing",
    icon: Tag,
  },
  {
    title: "Coverage Area",
    url: "/user/coverage",
    icon: MapPin,
  },
];

const sidebarTheme = {
  "--sidebar-accent": "#c7f36b",
  "--sidebar-accent-foreground": "#0f1c16",
} satisfies CSSProperties;

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" style={sidebarTheme} {...props}>
      <SidebarHeader>
        <div className="flex items-center mt-2 border-b-2 border-gray-200 pb-2 px-4 gap-2">
          <Image className="w-6" src={bandLogo} alt="Zapshift logo" />
          <h1 className="text-2xl font-bold group-data-[collapsible=icon]:hidden">
            ZapShift
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={menuItems} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
