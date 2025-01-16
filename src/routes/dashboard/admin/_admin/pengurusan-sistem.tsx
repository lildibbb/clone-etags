import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import {
	AlertCircle,
	AlertTriangle,
	Archive,
	Bell,
	Clock,
	Mail,
	RefreshCw,
	Save,
	Server,
	Settings,
	Shield,
} from "lucide-react";

export const Route = createFileRoute(
	"/dashboard/admin/_admin/pengurusan-sistem",
)({
	component: RouteComponent,
});

function RouteComponent() {
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
								<BreadcrumbPage>Pengurusan Sistem</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</header>

			<div className="flex-1 space-y-6 p-8 pt-6">
				<div className="flex items-center justify-between">
					<div>
						<h2 className="text-3xl font-bold tracking-tight">
							Pengurusan Sistem
						</h2>
						<p className="text-muted-foreground">
							Konfigurasi dan pengurusan sistem e-TAGS
						</p>
					</div>
				</div>

				<Tabs defaultValue="general" className="space-y-4">
					<TabsList>
						<TabsTrigger value="general">
							<Settings className="mr-2 h-4 w-4" />
							Umum
						</TabsTrigger>
						<TabsTrigger value="backup">
							<Archive className="mr-2 h-4 w-4" />
							Backup
						</TabsTrigger>
						<TabsTrigger value="notifications">
							<Bell className="mr-2 h-4 w-4" />
							Notifikasi
						</TabsTrigger>
						<TabsTrigger value="maintenance">
							<RefreshCw className="mr-2 h-4 w-4" />
							Penyelenggaraan
						</TabsTrigger>
						<TabsTrigger value="security">
							<Shield className="mr-2 h-4 w-4" />
							Keselamatan
						</TabsTrigger>
					</TabsList>

					<TabsContent value="general" className="space-y-4">
						<Card>
							<CardHeader>
								<CardTitle>Tetapan Sistem</CardTitle>
								<CardDescription>
									Konfigurasi asas sistem e-TAGS
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="grid gap-4">
									<div className="grid gap-2">
										<Label htmlFor="system-name">Nama Sistem</Label>
										<Input
											id="system-name"
											defaultValue="Sistem e-TAGS"
											placeholder="Masukkan nama sistem"
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="admin-email">Email Pentadbir</Label>
										<Input
											id="admin-email"
											type="email"
											defaultValue="admin@etags.gov.my"
											placeholder="Masukkan email pentadbir"
										/>
									</div>
									<div className="grid gap-2">
										<Label>Zon Masa</Label>
										<Select defaultValue="asia-kl">
											<SelectTrigger>
												<SelectValue placeholder="Pilih zon masa" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="asia-kl">
													Asia/Kuala_Lumpur
												</SelectItem>
												<SelectItem value="asia-kk">
													Asia/Kota_Kinabalu
												</SelectItem>
												<SelectItem value="asia-kch">Asia/Kuching</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>

								<div className="flex items-center justify-between rounded-lg border p-4">
									<div className="space-y-0.5">
										<Label>Mod Penyelenggaraan</Label>
										<div className="text-sm text-muted-foreground">
											Aktifkan mod penyelenggaraan untuk sistem
										</div>
									</div>
									<Switch />
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="backup" className="space-y-4">
						<Card>
							<CardHeader>
								<CardTitle>Pengurusan Backup</CardTitle>
								<CardDescription>
									Konfigurasi tetapan backup automatik
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center space-x-4 rounded-lg border p-4">
									<Server className="h-6 w-6 text-muted-foreground" />
									<div className="flex-1 space-y-1">
										<p className="text-sm font-medium">Backup Automatik</p>
										<p className="text-sm text-muted-foreground">
											Backup mingguan pada setiap Ahad, 2:00 AM
										</p>
									</div>
									<Switch defaultChecked />
								</div>

								<div className="grid gap-4">
									<div className="grid gap-2">
										<Label>Kekerapan Backup</Label>
										<Select defaultValue="weekly">
											<SelectTrigger>
												<SelectValue placeholder="Pilih kekerapan" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="daily">Harian</SelectItem>
												<SelectItem value="weekly">Mingguan</SelectItem>
												<SelectItem value="monthly">Bulanan</SelectItem>
											</SelectContent>
										</Select>
									</div>

									<div className="grid gap-2">
										<Label>Lokasi Backup</Label>
										<Select defaultValue="local">
											<SelectTrigger>
												<SelectValue placeholder="Pilih lokasi" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="local">Pelayan Tempatan</SelectItem>
												<SelectItem value="cloud">Cloud Storage</SelectItem>
												<SelectItem value="both">Kedua-duanya</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>

								<div className="flex justify-end">
									<Button className="w-[200px]">
										<Save className="mr-2 h-4 w-4" />
										Backup Sekarang
									</Button>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="notifications" className="space-y-4">
						<Card>
							<CardHeader>
								<CardTitle>Tetapan Notifikasi</CardTitle>
								<CardDescription>
									Urus notifikasi sistem dan email
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="grid gap-4">
									<div className="flex items-center justify-between rounded-lg border p-4">
										<div className="flex items-center space-x-4">
											<Bell className="h-6 w-6 text-muted-foreground" />
											<div>
												<p className="text-sm font-medium">Notifikasi Sistem</p>
												<p className="text-sm text-muted-foreground">
													Notifikasi dalam sistem untuk pengguna
												</p>
											</div>
										</div>
										<Switch defaultChecked />
									</div>

									<div className="flex items-center justify-between rounded-lg border p-4">
										<div className="flex items-center space-x-4">
											<Mail className="h-6 w-6 text-muted-foreground" />
											<div>
												<p className="text-sm font-medium">Notifikasi Email</p>
												<p className="text-sm text-muted-foreground">
													Hantar notifikasi melalui email
												</p>
											</div>
										</div>
										<Switch defaultChecked />
									</div>

									<div className="flex items-center justify-between rounded-lg border p-4">
										<div className="flex items-center space-x-4">
											<AlertTriangle className="h-6 w-6 text-muted-foreground" />
											<div>
												<p className="text-sm font-medium">
													Notifikasi Kecemasan
												</p>
												<p className="text-sm text-muted-foreground">
													Notifikasi untuk isu-isu kritikal
												</p>
											</div>
										</div>
										<Switch defaultChecked />
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="maintenance" className="space-y-4">
						<Card>
							<CardHeader>
								<CardTitle>Penyelenggaraan Sistem</CardTitle>
								<CardDescription>
									Jadual dan tetapan penyelenggaraan
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="grid gap-4">
									<div className="flex items-center justify-between rounded-lg border p-4">
										<div className="flex items-center space-x-4">
											<Clock className="h-6 w-6 text-muted-foreground" />
											<div>
												<p className="text-sm font-medium">
													Penyelenggaraan Berjadual
												</p>
												<p className="text-sm text-muted-foreground">
													Setiap Ahad, 2:00 AM - 4:00 AM
												</p>
											</div>
										</div>
										<Switch defaultChecked />
									</div>

									<div className="grid gap-2">
										<Label>Tempoh Penyelenggaraan</Label>
										<Select defaultValue="2">
											<SelectTrigger>
												<SelectValue placeholder="Pilih tempoh" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="1">1 Jam</SelectItem>
												<SelectItem value="2">2 Jam</SelectItem>
												<SelectItem value="4">4 Jam</SelectItem>
											</SelectContent>
										</Select>
									</div>

									<div className="grid gap-2">
										<Label>Mesej Penyelenggaraan</Label>
										<Input
											placeholder="Masukkan mesej untuk pengguna"
											defaultValue="Sistem sedang dalam penyelenggaraan"
										/>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="security" className="space-y-4">
						<Card>
							<CardHeader>
								<CardTitle>Tetapan Keselamatan</CardTitle>
								<CardDescription>
									Konfigurasi keselamatan sistem
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="grid gap-4">
									<div className="flex items-center justify-between rounded-lg border p-4">
										<div className="flex items-center space-x-4">
											<Shield className="h-6 w-6 text-muted-foreground" />
											<div>
												<p className="text-sm font-medium">2FA Pentadbir</p>
												<p className="text-sm text-muted-foreground">
													Pengesahan dua faktor untuk pentadbir
												</p>
											</div>
										</div>
										<Switch defaultChecked />
									</div>

									<div className="flex items-center justify-between rounded-lg border p-4">
										<div className="flex items-center space-x-4">
											<AlertCircle className="h-6 w-6 text-muted-foreground" />
											<div>
												<p className="text-sm font-medium">Log Keselamatan</p>
												<p className="text-sm text-muted-foreground">
													Rekod log aktiviti keselamatan
												</p>
											</div>
										</div>
										<Switch defaultChecked />
									</div>

									<div className="grid gap-2">
										<Label>Tempoh Tamat Sesi</Label>
										<Select defaultValue="30">
											<SelectTrigger>
												<SelectValue placeholder="Pilih tempoh" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="15">15 Minit</SelectItem>
												<SelectItem value="30">30 Minit</SelectItem>
												<SelectItem value="60">60 Minit</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</SidebarInset>
	);
}
