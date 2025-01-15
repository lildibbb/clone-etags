import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/responden/_responden")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
