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
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { createFileRoute } from "@tanstack/react-router";
import { UserPlus } from "lucide-react";

export const Route = createFileRoute(
	"/dashboard/admin/_admin/manage/pengguna-luaran",
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
			role: "Pengadu",
		},
		{
			id: 2,
			name: "Nur Aisyah",
			email: "nur.aisyah@example.com",
			role: "Responden",
		},
		{
			id: 3,
			name: "Zainal Abidin",
			email: "zainal.abidin@example.com",
			role: "Pengadu",
		},
		{
			id: 4,
			name: "Siti Nurhaliza",
			email: "siti.nurhaliza@example.com",
			role: "Responden",
		},
		{
			id: 5,
			name: "Mohd Hafiz",
			email: "mohd.hafiz@example.com",
			role: "Pengadu",
		},
		{
			id: 6,
			name: "Farah Hanis",
			email: "farah.hanis@example.com",
			role: "Responden",
		},
		{
			id: 7,
			name: "Rahimah Abdullah",
			email: "rahimah.abdullah@example.com",
			role: "Pengadu",
		},
		{
			id: 8,
			name: "Irfan Hakimi",
			email: "irfan.hakimi@example.com",
			role: "Responden",
		},
		{
			id: 9,
			name: "Amirah Zulaikha",
			email: "amirah.zulaikha@example.com",
			role: "Pengadu",
		},
		{
			id: 10,
			name: "Syafiq Azman",
			email: "syafiq.azman@example.com",
			role: "Responden",
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
							Pengguna Luaran
						</h2>
						<p className="text-muted-foreground">
							Senarai pengguna luaran yang berdaftar dalam sistem
						</p>
					</div>

					<Button className="bg-primary">
						<UserPlus className="mr-2 h-4 w-4" />
						Tambah Pengguna Luaran
					</Button>
				</div>

				<Card className="p-4">
					<DataTable columns={columns} data={users} />
				</Card>
			</div>
		</SidebarInset>
	);
}
