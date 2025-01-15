import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { createLazyFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  window.location.href = "/login";
  return (
    <div className="flex min-h-screen">
      {/* <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Outlet />
      </div> */}
    </div>
  );
}
