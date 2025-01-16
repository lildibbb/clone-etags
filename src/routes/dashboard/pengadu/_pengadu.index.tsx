import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { createFileRoute } from "@tanstack/react-router";
import {
	Archive,
	CheckSquare,
	Clock,
	Eye,
	Heart,
	MapPin,
	MessageSquare,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/pengadu/_pengadu/")({
	component: RouteComponent,
});

interface StatusData {
	id: string;
	caseNumber: string;
	location: string;
	type: string;
	date: string;
	status: string;
	icon: React.ReactNode; // Add icon property
}

const statusData: StatusData[] = [
	{
		id: "1",
		caseNumber: "AGS-2024-000001",
		location: "Selangor",
		type: "Gangguan Verbal",
		date: "23-November-2024",
		status: "Selesai Notis Pendengaran",
		icon: <CheckSquare className="w-4 h-4 text-green-500" />, // Icon for completed
	},
	{
		id: "2",
		caseNumber: "AGS-2024-000002",
		location: "W.P Kuala Lumpur",
		type: "Gangguan Fizikal",
		date: "26-November-2024",
		status: "Draf-Aduan Gangguan Seksual",
		icon: <Archive className="w-4 h-4 text-orange-500" />, // Icon for draft
	},
	{
		id: "3",
		caseNumber: "AGS-2024-000003",
		location: "Perak",
		type: "Gangguan Seksual",
		date: "28-November-2024",
		status: "Selesai Notis Pendengaran",
		icon: <CheckSquare className="w-4 h-4 text-green-500" />, // Icon for completed
	},
	{
		id: "4",
		caseNumber: "AGS-2024-000004",
		location: "Johor",
		type: "Gangguan Siber",
		date: "2-Januari-2025",
		status: "Draf-Aduan Gangguan Seksual",
		icon: <Archive className="w-4 h-4 text-orange-500" />, // Icon for draft
	},
	{
		id: "5",
		caseNumber: "AGS-2024-000005",
		location: "Pulau Pinang",
		type: "Gangguan Verbal",
		date: "10-Januari-2025",
		status: "Selesai Notis Pendengaran",
		icon: <CheckSquare className="w-4 h-4 text-green-500" />, // Icon for completed
	},
	{
		id: "6",
		caseNumber: "AGS-2024-000006",
		location: "Sabah",
		type: "Gangguan Fizikal",
		date: "15-Januari-2025",
		status: "Draf-Aduan Gangguan Seksual",
		icon: <Archive className="w-4 h-4 text-orange-500" />, // Icon for draft
	},
	{
		id: "7",
		caseNumber: "AGS-2024-000007",
		location: "Sarawak",
		type: "Gangguan Seksual",
		date: "20-Januari-2025",
		status: "Selesai Notis Pendengaran",
		icon: <CheckSquare className="w-4 h-4 text-green-500" />, // Icon for completed
	},
	{
		id: "8",
		caseNumber: "AGS-2024-000008",
		location: "Kedah",
		type: "Gangguan Siber",
		date: "25-Januari-2025",
		status: "Draf-Aduan Gangguan Seksual",
		icon: <Archive className="w-4 h-4 text-orange-500" />, // Icon for draft
	},
	{
		id: "9",
		caseNumber: "AGS-2024-000009",
		location: "Negeri Sembilan",
		type: "Gangguan Verbal",
		date: "30-Januari-2025",
		status: "Selesai Notis Pendengaran",
		icon: <CheckSquare className="w-4 h-4 text-green-500" />, // Icon for completed
	},
	{
		id: "10",
		caseNumber: "AGS-2024-000010",
		location: "Melaka",
		type: "Gangguan Fizikal",
		date: "5-Februari-2025",
		status: "Draf-Aduan Gangguan Seksual",
		icon: <Archive className="w-4 h-4 text-orange-500" />, // Icon for draft
	},
];

function RouteComponent() {
	return (
		<div className="flex flex-col h-screen">
			<main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
				<div className="flex flex-col gap-6">
					{/* Header Card */}
					<Card className="relative overflow-hidden">
						<div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-6 text-white">
							<h1 className="text-2xl font-semibold">Hello,</h1>
							<h2 className="text-3xl font-bold mb-2">Nur Hamizah</h2>
							<p className="text-sm opacity-90">
								Last login 03 Disember 2024 (4pm)
							</p>
						</div>
					</Card>

					{/* Stats Section */}
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
						{[
							{ icon: Eye, label: "Semua", count: 5 },
							{ icon: MessageSquare, label: "Baru", count: 0 },
							{ icon: Heart, label: "Siasatan", count: 0 },
							{ icon: CheckSquare, label: "Sedang Disemak", count: 0 },
							{ icon: Archive, label: "Selesai", count: 0 },
							{ icon: Archive, label: "Ditutup", count: 0 },
						].map((stat, index) => (
							<Card key={index} className="p-4">
								<div className="flex flex-col items-center gap-2">
									<div
										className={`p-2 rounded-full ${
											index === 0
												? "bg-blue-100"
												: index === 1
													? "bg-orange-100"
													: index === 2
														? "bg-red-100"
														: index === 3
															? "bg-purple-100"
															: index === 4
																? "bg-green-100"
																: "bg-gray-100"
										}`}
									>
										<stat.icon
											className={`h-5 w-5 ${
												index === 0
													? "text-blue-500"
													: index === 1
														? "text-orange-500"
														: index === 2
															? "text-red-500"
															: index === 3
																? "text-purple-500"
																: index === 4
																	? "text-green-500"
																	: "text-gray-500"
											}`}
										/>
									</div>
									<span className="text-2xl font-bold">{stat.count}</span>
									<span className="text-sm text-gray-500 text-center">
										{stat.label}
									</span>
								</div>
							</Card>
						))}
					</div>

					{/* Profile and Recent Activity */}
					<div className="grid md:grid-cols-[300px,1fr] gap-6">
						<Card className="p-6">
							<div className="flex flex-col items-center gap-4">
								<Avatar className="h-20 w-20">
									<AvatarFallback className="text-2xl">NH</AvatarFallback>
								</Avatar>
								<div className="text-center">
									<h3 className="text-xl font-semibold">Nur Hamizah</h3>
									<div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-2" />
								</div>
								<div className="w-full pt-4 border-t">
									<h4 className="text-sm font-medium text-gray-500">
										Recent Activities:
									</h4>
									<p className="text-sm mt-2">
										You have submitted a new case AGS-2024-000006
									</p>
								</div>
							</div>
						</Card>

						{/* Status Table */}
						<Card>
							<div className="p-6">
								<h3 className="text-lg font-semibold mb-4">Status Aduan</h3>
								<div className="overflow-auto">
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead className="w-12">#</TableHead>
												<TableHead>No. Kes</TableHead>
												<TableHead>Lokasi</TableHead>
												<TableHead>Jenis</TableHead>
												<TableHead>Tarikh</TableHead>
												<TableHead>Status</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{statusData.map((row) => (
												<TableRow key={row.id}>
													<TableCell>{row.id}</TableCell>
													<TableCell className="font-medium text-blue-600">
														{row.caseNumber}
													</TableCell>
													<TableCell>
														<div className="flex items-center">
															<MapPin className="w-4 h-4 mr-2 text-gray-400" />
															{row.location}
														</div>
													</TableCell>
													<TableCell>{row.type}</TableCell>
													<TableCell>
														<div className="flex items-center">
															<Clock className="w-4 h-4 mr-2 text-gray-400" />
															{row.date}
														</div>
													</TableCell>
													<TableCell className="flex items-center">
														{row.icon} {/* Render the icon here */}
														<span
															className={`inline-block px-3 py-1 rounded-full text-sm ${
																row.status.includes("Selesai")
																	? "bg-green-100 text-green-700"
																	: row.status.includes("Draf")
																		? "bg-orange-100 text-orange-700"
																		: "bg-gray-100 text-gray-700"
															}`}
														>
															{row.status}
														</span>
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</main>
		</div>
	);
}
