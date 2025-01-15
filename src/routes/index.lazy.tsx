import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { createLazyFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
