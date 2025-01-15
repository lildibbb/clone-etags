import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/pengadu/_pengadu")({
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
