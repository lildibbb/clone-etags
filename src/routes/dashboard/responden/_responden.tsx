import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/responden/_responden")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex min-h-screen">
			<SidebarProvider>
				<AppSidebar userType="responden" />
				<div className="flex-1 flex flex-col">
					<Outlet />
				</div>
			</SidebarProvider>
		</div>
	);
}
