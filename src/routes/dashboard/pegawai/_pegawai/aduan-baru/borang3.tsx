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
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute(
	"/dashboard/pegawai/_pegawai/aduan-baru/borang3",
)({
	component: RouteComponent,
});

function RouteComponent() {
	const [formData, setFormData] = useState({
		noAduan: "",
		namaPengadu: "",
		namaResponden: "",
		tempat: "",
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

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Add your submission logic here
	};

	// Generate a formatted aduan number
	const generateAduanNumber = () => {
		const year = new Date().getFullYear();
		const random = Math.floor(Math.random() * 1000000)
			.toString()
			.padStart(6, "0");
		return `AGS-${year}-${random}`;
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
								<BreadcrumbPage>Lapor Aduan Baru - Borang 3</BreadcrumbPage>
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
								BORANG 3: NOTIS PENDENGARAN
							</CardTitle>
							<CardDescription>
								Sila isi maklumat notis pendengaran dengan lengkap
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="space-y-2">
									<Label htmlFor="noAduan">No Aduan</Label>
									<Input
										id="noAduan"
										name="noAduan"
										value={generateAduanNumber()}
										readOnly
										className="bg-muted"
									/>
								</div>

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

								<div className="space-y-2">
									<Label>Tarikh & Masa</Label>
									<div className="relative">
										<DateTimePicker />
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="tempat">Tempat</Label>
									<Textarea
										id="tempat"
										name="tempat"
										placeholder="Masukkan lokasi pendengaran"
										value={formData.tempat}
										onChange={handleInputChange}
										className="min-h-[100px]"
										required
									/>
								</div>

								<Button type="submit" className="w-full">
									Hantar
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</SidebarInset>
	);
}
