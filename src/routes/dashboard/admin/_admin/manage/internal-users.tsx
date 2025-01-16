import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
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
		<div className="p-4 space-y-8">
			<div className="flex items-center justify-between space-y-2">
				<div>
					<h2 className="text-2xl font-bold tracking-tight">Internal Users</h2>
					<p className="text-muted-foreground">
						Here's a list of all internal users and their roles.
					</p>
				</div>
			</div>
			<DataTable columns={columns} data={users} />
		</div>
	);
}
