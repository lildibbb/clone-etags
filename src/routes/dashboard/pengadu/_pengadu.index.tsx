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
		caseNumber: "ETAGS-6324",
		location: "Selangor",
		type: "Gangguan Verbal",
		date: "23-November-2024",
		status: "Selesai Notis Pendengaran",
		icon: <CheckSquare className="w-4 h-4 text-green-500" />, // Icon for completed
	},

	{
		id: "2",
		caseNumber: "ETAGS-7231",
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
								Last login 14 Januari 2025 (12:40 PM)
							</p>
						</div>
					</Card>

					{/* Stats Section */}
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
						{[
							{ id: "all", icon: Eye, label: "Semua", count: 0 },
							{ id: "new", icon: MessageSquare, label: "Baru", count: 1 },
							{ id: "investigation", icon: Heart, label: "Siasatan", count: 0 },
							{
								id: "checking",
								icon: CheckSquare,
								label: "Sedang Disemak",
								count: 0,
							},
							{ id: "completed", icon: Archive, label: "Selesai", count: 1 },
							{ id: "closed", icon: Archive, label: "Ditutup", count: 0 },
						].map((stat) => (
							<Card key={stat.id} className="p-4">
								<div className="flex flex-col items-center gap-2">
									<div
										className={`p-2 rounded-full ${
											stat.id === "all"
												? "bg-blue-100"
												: stat.id === "new"
													? "bg-orange-100"
													: stat.id === "investigation"
														? "bg-red-100"
														: stat.id === "checking"
															? "bg-purple-100"
															: stat.id === "completed"
																? "bg-green-100"
																: "bg-gray-100"
										}`}
									>
										<stat.icon
											className={`h-5 w-5 ${
												stat.id === "all"
													? "text-blue-500"
													: stat.id === "new"
														? "text-orange-500"
														: stat.id === "investigation"
															? "text-red-500"
															: stat.id === "checking"
																? "text-purple-500"
																: stat.id === "completed"
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
								</div>
								<div className="w-full pt-4 border-t">
									<h4 className="text-sm font-medium text-gray-500">
										Pemberitahuan:
									</h4>
									<p className="text-sm mt-2">
										ETAGS-6324 - Selesai Notis Pendengaran
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
