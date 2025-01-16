import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { createFileRoute } from "@tanstack/react-router";
import {
	Activity,
	AlertCircle,
	BarChart3,
	CheckCircle,
	Clock,
	HelpCircle,
	MessageSquare,
	MonitorSmartphone,
	Users2,
} from "lucide-react";
import {
	Area,
	AreaChart,
	Line,
	LineChart,
	ResponsiveContainer,
} from "recharts";

// Data untuk carta
const dataPengguna = [
	{ bulan: "Jan", jumlah: 1200 },
	{ bulan: "Feb", jumlah: 1400 },
	{ bulan: "Mac", jumlah: 1800 },
	{ bulan: "Apr", jumlah: 2400 },
	{ bulan: "Mei", jumlah: 2800 },
	{ bulan: "Jun", jumlah: 3200 },
];

const dataAktiviti = [
	{ bulan: "Jan", nilai: 400 },
	{ bulan: "Feb", nilai: 300 },
	{ bulan: "Mac", nilai: 200 },
	{ bulan: "Apr", nilai: 500 },
	{ bulan: "Mei", nilai: 350 },
	{ bulan: "Jun", nilai: 600 },
];

const aktivitiTerkini = [
	{
		id: 1,
		pengguna: "Ahmad Faiz",
		tindakan: "Akaun pengguna baharu dicipta",
		masa: "2 minit yang lalu",
		jenis: "success",
	},
	{
		id: 2,
		pengguna: "Nur Aisyah",
		tindakan: "Mengemaskini tetapan sistem",
		masa: "5 minit yang lalu",
		jenis: "warning",
	},
	{
		id: 3,
		pengguna: "Mohd Hafiz",
		tindakan: "Menjana laporan bulanan",
		masa: "10 minit yang lalu",
		jenis: "info",
	},
	{
		id: 4,
		pengguna: "Siti Aminah",
		tindakan: "Meminta reset kata laluan",
		masa: "15 minit yang lalu",
		jenis: "warning",
	},
];

export const Route = createFileRoute("/dashboard/admin/_admin/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col h-screen">
			<main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
				<div className="flex flex-col gap-6">
					{/* Kad Header */}
					<Card className="relative overflow-hidden">
						<div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-6 text-white">
							<h1 className="text-2xl font-semibold">Selamat Datang, Admin</h1>
							<h2 className="text-3xl font-bold mb-2">Aliff Ikmal</h2>
							<p className="text-sm opacity-90">
								Log masuk terakhir: 14 Januari 2025 (12:40 PM)
							</p>
						</div>
					</Card>

					{/* Statistik Ringkas */}
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						<Card>
							<CardHeader className="flex flex-row items-center justify-between pb-2">
								<CardTitle className="text-sm font-medium">
									Jumlah Pengguna
								</CardTitle>
								<Users2 className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">3,247</div>
								<p className="text-xs text-muted-foreground">
									+180 dari bulan lepas
								</p>
								<div className="mt-4 h-[60px]">
									<ResponsiveContainer width="100%" height="100%">
										<LineChart data={dataPengguna}>
											<Line
												type="monotone"
												dataKey="jumlah"
												stroke="#8884d8"
												strokeWidth={2}
											/>
										</LineChart>
									</ResponsiveContainer>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className="flex flex-row items-center justify-between pb-2">
								<CardTitle className="text-sm font-medium">Kes Aktif</CardTitle>
								<Activity className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">98</div>
								<p className="text-xs text-muted-foreground">
									+12 kes baharu hari ini
								</p>
								<div className="mt-4 h-[60px]">
									<ResponsiveContainer width="100%" height="100%">
										<AreaChart data={dataAktiviti}>
											<Area
												type="monotone"
												dataKey="nilai"
												stroke="#8884d8"
												fill="#8884d8"
											/>
										</AreaChart>
									</ResponsiveContainer>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className="flex flex-row items-center justify-between pb-2">
								<CardTitle className="text-sm font-medium">
									Prestasi Sistem
								</CardTitle>
								<MonitorSmartphone className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">98.2%</div>
								<p className="text-xs text-muted-foreground">
									Semua sistem beroperasi
								</p>
								<Progress value={98} className="mt-4" />
							</CardContent>
						</Card>

						<Card>
							<CardHeader className="flex flex-row items-center justify-between pb-2">
								<CardTitle className="text-sm font-medium">
									Tiket Sokongan
								</CardTitle>
								<MessageSquare className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">12</div>
								<p className="text-xs text-muted-foreground">
									4 memerlukan perhatian
								</p>
								<div className="mt-4 flex gap-2">
									<div className="flex items-center gap-1">
										<div className="h-2 w-2 rounded-full bg-green-500" />
										<span className="text-xs">Terbuka</span>
									</div>
									<div className="flex items-center gap-1">
										<div className="h-2 w-2 rounded-full bg-yellow-500" />
										<span className="text-xs">Menunggu</span>
									</div>
									<div className="flex items-center gap-1">
										<div className="h-2 w-2 rounded-full bg-red-500" />
										<span className="text-xs">Segera</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Sumber Sistem */}
					<div className="grid gap-4 md:grid-cols-2">
						<Card>
							<CardHeader>
								<CardTitle>Penggunaan Sumber</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="grid gap-2">
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-2">
												<MonitorSmartphone className="h-4 w-4" />
												<span>Penggunaan CPU</span>
											</div>
											<span className="text-sm">78%</span>
										</div>
										<Progress value={78} />
									</div>
									<div className="grid gap-2">
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-2">
												<Activity className="h-4 w-4" />
												<span>Penggunaan Memori</span>
											</div>
											<span className="text-sm">64%</span>
										</div>
										<Progress value={64} />
									</div>
									<div className="grid gap-2">
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-2">
												<BarChart3 className="h-4 w-4" />
												<span>Penggunaan Storan</span>
											</div>
											<span className="text-sm">42%</span>
										</div>
										<Progress value={42} />
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Aktiviti Terkini */}
						<Card>
							<CardHeader>
								<CardTitle>Aktiviti Terkini</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{aktivitiTerkini.map((aktiviti) => (
										<div
											key={aktiviti.id}
											className="flex items-center gap-4 rounded-lg border p-3"
										>
											<Avatar className="h-9 w-9">
												<AvatarFallback>
													{aktiviti.pengguna
														.split(" ")
														.map((n) => n[0])
														.join("")}
												</AvatarFallback>
											</Avatar>
											<div className="flex-1 space-y-1">
												<p className="text-sm font-medium">
													{aktiviti.tindakan}
												</p>
												<p className="text-xs text-muted-foreground">
													oleh {aktiviti.pengguna}
												</p>
											</div>
											<div className="flex items-center gap-2">
												<Clock className="h-4 w-4 text-muted-foreground" />
												<span className="text-xs text-muted-foreground">
													{aktiviti.masa}
												</span>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Status Sistem */}
					<Card>
						<CardHeader>
							<CardTitle>Status Sistem</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="flex items-center gap-4 rounded-lg border border-green-200 bg-green-50 p-3">
									<CheckCircle className="h-5 w-5 text-green-600" />
									<div className="flex-1">
										<p className="font-medium text-green-900">
											Kemaskini Sistem Berjaya
										</p>
										<p className="text-sm text-green-700">
											Semua komponen sistem telah dikemaskini ke versi terkini
										</p>
									</div>
									<Button variant="outline" size="sm">
										Lihat Butiran
									</Button>
								</div>

								<div className="flex items-center gap-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3">
									<HelpCircle className="h-5 w-5 text-yellow-600" />
									<div className="flex-1">
										<p className="font-medium text-yellow-900">
											Peringatan Sandaran
										</p>
										<p className="text-sm text-yellow-700">
											Sandaran sistem mingguan dijadualkan untuk malam ini pada
											jam 2:00 pagi
										</p>
									</div>
									<Button variant="outline" size="sm">
										Konfigurasi
									</Button>
								</div>

								<div className="flex items-center gap-4 rounded-lg border border-red-200 bg-red-50 p-3">
									<AlertCircle className="h-5 w-5 text-red-600" />
									<div className="flex-1">
										<p className="font-medium text-red-900">
											Amaran Ruang Storan
										</p>
										<p className="text-sm text-red-700">
											Cakera storan utama hampir mencapai 80% kapasiti
										</p>
									</div>
									<Button variant="outline" size="sm">
										Ambil Tindakan
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
}
