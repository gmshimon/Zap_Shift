import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { TextAlignStart } from "lucide-react"
export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      {/* <div className="bg-black min-h-screen grid grid-cols-[260px,1fr]"> */}

      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12  ">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-2">
              <TextAlignStart className="h-5 w-5" />
            </SidebarTrigger>
          </div>
        </header>
        <div className="flex bg-[#EBECED] flex-1 flex-col gap-4 p-4 ">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
