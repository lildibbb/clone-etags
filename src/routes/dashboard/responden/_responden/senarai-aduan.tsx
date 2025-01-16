import borang3 from "@/assets/borang3.pdf";
import { PDFViewerModal } from "@/components/pdf-viewer-modal";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { createFileRoute } from "@tanstack/react-router";
import { Eye } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute(
	"/dashboard/responden/_responden/senarai-aduan",
)({
	component: RouteComponent,
});

interface Complaint {
	no: number;
	id: string;
	complainantName: string;
	respondentName: string;
	disturbanceType: string;
	state: string;
	formType: string;
	date: string;
}

const complaints: Complaint[] = [
	{
		no: 1,
		id: "ETAGS-2512",
		complainantName: "Kamal Abdullah",
		respondentName: "Ariff Iqbal",
		disturbanceType: "Gangguan Verbal",
		state: "Selangor",
		formType: "Selesai Notis Pendengaran",
		date: "23-11-2024",
	},
	{
		no: 2,
		id: "ETAGS-6423",
		complainantName: "Sarah Yasmin",
		respondentName: "Ariff Iqbal",
		disturbanceType: "Gangguan Non-Verbal",
		state: "Selangor",
		formType: "Draf-Aduan Gangguan Seksual",
		date: "",
	},
];

function RouteComponent() {
	const [isPDFOpen, setIsPDFOpen] = useState(false);
	const [selectedPDF, setSelectedPDF] = useState("");

	const handleViewPDF = (complaintId: string, formType: string) => {
		// In a real application, you would construct the PDF URL based on the complaint ID and form type
		// const pdfUrl = { borangA };
		setSelectedPDF(borang3);
		setIsPDFOpen(true);
	};

	return (
		<SidebarInset>
			<header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background">
				<div className="flex items-center gap-2 px-4">
					<SidebarTrigger className="-ml-1" />
					<Separator orientation="vertical" className="mr-2 h-4" />
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem className="hidden md:block">
								<BreadcrumbLink href="/dashboard/responden">
									Dashboard Responden
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="hidden md:block" />
							<BreadcrumbItem>
								<BreadcrumbPage>Senarai Aduan</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</header>
			<div className="flex flex-col min-h-screen bg-gray-100">
				<main className="flex-1 p-4 sm:p-6 lg:p-8">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between">
							<div>
								<CardTitle className="text-xl font-semibold">
									Senarai Aduan
								</CardTitle>
								<p className="text-sm text-muted-foreground mt-1">
									Senarai aduan terkini yang telah difailkan
								</p>
							</div>
						</CardHeader>
						<CardContent>
							<div className="rounded-md border">
								<Table>
									<TableHeader>
										<TableRow className="bg-slate-100">
											<TableHead className="w-[80px]">NO</TableHead>
											<TableHead>ID ADUAN</TableHead>
											<TableHead>NAMA PENGADU</TableHead>
											<TableHead>NAMA RESPONDEN</TableHead>
											<TableHead>JENIS GANGGUAN</TableHead>
											<TableHead>KEJADIAN DI NEGERI</TableHead>
											<TableHead>JENIS BORANG</TableHead>
											<TableHead>TARIKH ADUAN</TableHead>
											<TableHead>TINDAKAN</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{complaints.map((complaint) => (
											<TableRow key={complaint.id}>
												<TableCell>{complaint.no}</TableCell>
												<TableCell className="font-medium text-blue-600">
													{complaint.id}
												</TableCell>
												<TableCell>{complaint.complainantName}</TableCell>
												<TableCell>{complaint.respondentName}</TableCell>
												<TableCell>{complaint.disturbanceType}</TableCell>
												<TableCell>{complaint.state}</TableCell>
												<TableCell>{complaint.formType}</TableCell>
												<TableCell>{complaint.date}</TableCell>
												<TableCell>
													<div className="flex flex-col gap-2">
														<Button
															className="bg-violet-500 hover:bg-violet-600 text-white text-xs flex items-center gap-2"
															size="sm"
															onClick={() =>
																handleViewPDF(complaint.id, "form1-2")
															}
														>
															<Eye className="h-3 w-3" />
															Lihat Aduan (Borang 1 & Borang 2)
														</Button>
														<Button
															className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs flex items-center gap-2"
															size="sm"
															onClick={() =>
																handleViewPDF(complaint.id, "form3")
															}
														>
															<Eye className="h-3 w-3" />
															Lihat Notis Pendengaran (Borang 3)
														</Button>
														<Button
															className="bg-orange-500 hover:bg-orange-600 text-white text-xs flex items-center gap-2"
															size="sm"
															// onClick={() => handleViewPDF(complaint.id, "form1")}
														>
															<Eye className="h-3 w-3" />
															Draf-Aduan Gangguan Seksual(Borang 1)
														</Button>
													</div>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
						</CardContent>
					</Card>
				</main>
				<PDFViewerModal
					isOpen={isPDFOpen}
					onClose={() => setIsPDFOpen(false)}
					pdfUrl={selectedPDF}
				/>
			</div>
		</SidebarInset>
	);
}
