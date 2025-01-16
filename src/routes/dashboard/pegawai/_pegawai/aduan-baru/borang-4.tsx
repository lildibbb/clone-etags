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
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute(
	"/dashboard/pegawai/_pegawai/aduan-baru/borang-4",
)({
	component: RouteComponent,
});

function RouteComponent() {
	// Generate the aduan number once when component mounts
	const generatedAduanNumber = useMemo(() => {
		const year = new Date().getFullYear();
		const random = Math.floor(Math.random() * 1000000)
			.toString()
			.padStart(6, "0");
		return `AGS-${year}-${random}`;
	}, []); // Empty dependency array means this runs once on mount

	const [formData, setFormData] = useState({
		noAduan: generatedAduanNumber, // Use the memoized value
		namaPengadu: "",
		namaResponden: "",
		kehadiranPengadu: "",
		kehadiranResponden: "",
		nama1: "",
		nama2: "",
		nama3: "",
		tempat: "",
		perintah: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleRadioChange = (name: string, value: string) => {
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<SidebarInset>
			<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
				<div className="flex items-center gap-2 px-4">
					<SidebarTrigger className="-ml-1" />
					<Separator orientation="vertical" className="mr-2 h-4" />
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem className="hidden md:block">
								<BreadcrumbLink href="/dashboard/pegawai/home">
									Dashboard
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="hidden md:block" />
							<BreadcrumbItem>
								<BreadcrumbPage>Lapor Aduan Baru - Borang 4</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</header>

			<div className="flex-1">
				<div className="container mx-auto max-w-4xl">
					<Card>
						<CardHeader className="space-y-1">
							<CardTitle className="text-2xl">
								BORANG 4: AWARD ADUAN GANGGUAN SEKSUAL
							</CardTitle>
							<CardDescription>
								Sila isi maklumat award aduan dengan lengkap
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-6">
								{/* No Aduan */}
								<div className="space-y-2">
									<Label htmlFor="noAduan">No Aduan</Label>
									<Input
										id="noAduan"
										name="noAduan"
										value={formData.noAduan}
										readOnly
										className="bg-muted"
									/>
								</div>

								{/* Nama Pengadu & Responden */}
								<div className="grid gap-4 md:grid-cols-2">
									<div className="space-y-2">
										<Label htmlFor="namaPengadu">Nama Pengadu</Label>
										<Input
											id="namaPengadu"
											name="namaPengadu"
											placeholder="Masukkan nama pengadu"
											value={formData.namaPengadu}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="namaResponden">Nama Responden</Label>
										<Input
											id="namaResponden"
											name="namaResponden"
											placeholder="Masukkan nama responden"
											value={formData.namaResponden}
											onChange={handleInputChange}
											required
										/>
									</div>
								</div>

								{/* Kehadiran Sections */}
								<div className="grid gap-6 md:grid-cols-2">
									<div className="space-y-2">
										<Label>Kehadiran Pengadu</Label>
										<RadioGroup
											name="kehadiranPengadu"
											value={formData.kehadiranPengadu}
											onValueChange={(value) =>
												handleRadioChange("kehadiranPengadu", value)
											}
											className="flex flex-col space-y-1"
										>
											<div className="flex items-center space-x-2">
												<RadioGroupItem value="hadir" id="pengadu-hadir" />
												<Label htmlFor="pengadu-hadir">Hadir</Label>
											</div>
											<div className="flex items-center space-x-2">
												<RadioGroupItem
													value="tidak-hadir"
													id="pengadu-tidak-hadir"
												/>
												<Label htmlFor="pengadu-tidak-hadir">Tidak Hadir</Label>
											</div>
										</RadioGroup>
									</div>

									<div className="space-y-2">
										<Label>Kehadiran Responden</Label>
										<RadioGroup
											name="kehadiranResponden"
											value={formData.kehadiranResponden}
											onValueChange={(value) =>
												handleRadioChange("kehadiranResponden", value)
											}
											className="flex flex-col space-y-1"
										>
											<div className="flex items-center space-x-2">
												<RadioGroupItem value="hadir" id="responden-hadir" />
												<Label htmlFor="responden-hadir">Hadir</Label>
											</div>
											<div className="flex items-center space-x-2">
												<RadioGroupItem
													value="tidak-hadir"
													id="responden-tidak-hadir"
												/>
												<Label htmlFor="responden-tidak-hadir">
													Tidak Hadir
												</Label>
											</div>
										</RadioGroup>
									</div>
								</div>

								{/* Di Hadapan Section */}
								<div className="space-y-4">
									<Label>Di Hadapan</Label>
									<div className="grid gap-4">
										{[1, 2, 3].map((num) => (
											<div key={num} className="flex items-center gap-2">
												<span className="text-sm text-muted-foreground">
													{num}.
												</span>
												<Input
													name={`nama${num}`}
													placeholder={`Nama ${num}`}
													value={
														formData[`nama${num}` as keyof typeof formData]
													}
													onChange={handleInputChange}
												/>
											</div>
										))}
									</div>
								</div>

								{/* Tarikh & Masa */}
								<div className="space-y-2">
									<Label>Tarikh & Masa</Label>
									<div className="relative">
										<DateTimePicker />
									</div>
								</div>

								{/* Tempat */}
								<div className="space-y-2">
									<Label htmlFor="tempat">Tempat</Label>
									<Textarea
										id="tempat"
										name="tempat"
										placeholder="Masukkan lokasi"
										value={formData.tempat}
										onChange={handleInputChange}
										className="min-h-[100px]"
										required
									/>
								</div>

								{/* Perintah Tribunal */}
								<div className="space-y-2">
									<Label htmlFor="perintah">
										Tribunal dengan ini memerintahkan:
									</Label>
									<Textarea
										id="perintah"
										name="perintah"
										placeholder="Masukkan perintah tribunal"
										value={formData.perintah}
										onChange={handleInputChange}
										className="min-h-[150px]"
										required
									/>
								</div>

								<div className="flex justify-end space-x-4">
									<Button type="submit">Hantar</Button>
								</div>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</SidebarInset>
	);
}
