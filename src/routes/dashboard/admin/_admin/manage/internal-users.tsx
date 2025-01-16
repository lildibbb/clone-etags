import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/dashboard/admin/_admin/manage/internal-users",
)({
	component: RouteComponent,
});

function RouteComponent() {
	// Sample data for the table
	const users = [
		{
			id: 1,
			name: "Ahmad Faiz",
			email: "ahmad.faiz@example.com",
			role: "Pegawai Tribunal",
		},
		{
			id: 2,
			name: "Nur Aisyah",
			email: "nur.aisyah@example.com",
			role: "System Admin",
		},
		{
			id: 3,
			name: "Zainal Abidin",
			email: "zainal.abidin@example.com",
			role: "Pegawai Tribunal",
		},
		{
			id: 4,
			name: "Siti Nurhaliza",
			email: "siti.nurhaliza@example.com",
			role: "Pegawai Tribunal",
		},
		{
			id: 5,
			name: "Mohd Hafiz",
			email: "mohd.hafiz@example.com",
			role: "System Admin",
		},
		{
			id: 6,
			name: "Farah Hanis",
			email: "farah.hanis@example.com",
			role: "Pegawai Tribunal",
		},
		{
			id: 7,
			name: "Rahimah Abdullah",
			email: "rahimah.abdullah@example.com",
			role: "System Admin",
		},
		{
			id: 8,
			name: "Irfan Hakimi",
			email: "irfan.hakimi@example.com",
			role: "Pegawai Tribunal",
		},
		{
			id: 9,
			name: "Amirah Zulaikha",
			email: "amirah.zulaikha@example.com",
			role: "System Admin",
		},
		{
			id: 10,
			name: "Syafiq Azman",
			email: "syafiq.azman@example.com",
			role: "Pegawai Tribunal",
		},
	];

	return (
		<SidebarInset>
			<header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background">
				<div className="flex items-center gap-2 px-4">
					<SidebarTrigger className="-ml-1" />
					<Separator orientation="vertical" className="mr-2 h-4" />
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/dashboard/admin">
									Dashboard
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Pengguna Luaran</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</header>

			<div className="flex-1 space-y-6 p-8 pt-6">
				<div className="flex items-center justify-between">
					<div>
						<h2 className="text-2xl font-bold tracking-tight">
							Pengguna Dalaman
						</h2>
						<p className="text-muted-foreground">
							Senarai pengguna dalaman yang terlibat dalam sistem
						</p>
					</div>
				</div>
				<DataTable columns={columns} data={users} />
			</div>
		</SidebarInset>
	);
}
