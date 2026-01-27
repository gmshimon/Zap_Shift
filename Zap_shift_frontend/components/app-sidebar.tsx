"use client";

import * as React from "react";
import type { CSSProperties } from "react";
import {
  ChevronUp,
  FileText,
  LayoutDashboard,
  MapPin,
  Store,
  Tag,
  Truck,
  User2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import bandLogo from "../public/assets/logo.png";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Deliveries",
    url: "/dashboard/all-deliveries",
    icon: Truck,
  },
  {
    title: "Invoices",
    url: "/dashboard/invoices",
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
      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  );
}
