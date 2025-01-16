import { ComplainantForm } from "@/components/form/butiranA-form";
import { ComplaintDetailsForm } from "@/components/form/butiranB-form";
import { PaymentForm } from "@/components/form/payment-form";
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
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute(
	"/dashboard/responden/_responden/aduan-baru/borang-2",
)({
	component: RouteComponent,
});

function RouteComponent() {
	const [activeTab, setActiveTab] = useState("A");
	const [progress, setProgress] = useState(33);

	const tabs = [
		{ id: "A", label: "MAKLUMAT PENGADU" },
		{ id: "B", label: "BUTIR ADUAN" },
		{ id: "C", label: "PEMBAYARAN" },
	];

	const currentTabIndex = tabs.findIndex((tab) => tab.id === activeTab);

	const handleTabChange = (value: string) => {
		setActiveTab(value);
		setProgress(value === "A" ? 33 : value === "B" ? 66 : 100);
	};

	const handleNext = () => {
		const nextTab = tabs[currentTabIndex + 1];
		if (nextTab) {
			handleTabChange(nextTab.id);
		}
	};

	const handlePrevious = () => {
		const previousTab = tabs[currentTabIndex - 1];
		if (previousTab) {
			handleTabChange(previousTab.id);
		}
	};

	return (
		<SidebarInset className="bg-gray-100">
			{/* Header with Breadcrumb */}
			<header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background">
				<div className="flex items-center gap-2 px-4">
					<SidebarTrigger className="-ml-1" />
					<Separator orientation="vertical" className="mr-2 h-4" />
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/dashboard/responden">
									Dashboard responden
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />

							<BreadcrumbItem>
								<BreadcrumbPage>Aduan Baru - Borang 2</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</header>

			{/* Main Content */}
			<div className="flex-1 p-4 sm:p-6 lg:p-8">
				<Card className="border-none shadow-lg">
					<CardHeader className="text-center border-b bg-card">
						<CardTitle className="text-2xl font-semibold text-primary">
							BORANG 2 : PERNYATAAN PEMBELAAN
						</CardTitle>
						<CardDescription>
							Sila lengkapkan semua maklumat yang diperlukan
						</CardDescription>
						<Progress value={progress} className="mt-4" />
					</CardHeader>

					<CardContent className="p-0">
						<Tabs
							value={activeTab}
							onValueChange={handleTabChange}
							className="w-full"
						>
							<TabsList className="w-full grid grid-cols-3 rounded-none bg-muted/50 p-0 h-auto">
								{tabs.map((tab) => (
									<TabsTrigger
										key={tab.id}
										value={tab.id}
										className="data-[state=active]:bg-background rounded-none border-b-2 border-transparent data-[state=active]:border-primary py-4"
									>
										<span className="flex items-center gap-2">
											<span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
												{tab.id}
											</span>
											<span className="hidden sm:inline">{tab.label}</span>
										</span>
									</TabsTrigger>
								))}
							</TabsList>

							<div className="p-6">
								<TabsContent value="A">
									<ComplainantForm />
								</TabsContent>

								<TabsContent value="B">
									<ComplaintDetailsForm />
								</TabsContent>

								<TabsContent value="C">
									<PaymentForm type="borang-2" />
								</TabsContent>

								<div className="flex justify-between mt-6 pt-6 border-t">
									<Button
										variant="outline"
										onClick={handlePrevious}
										disabled={currentTabIndex === 0}
									>
										<ChevronLeft className="w-4 h-4 mr-2" />
										Sebelumnya
									</Button>

									<Button
										onClick={handleNext}
										disabled={currentTabIndex === tabs.length - 1}
									>
										Seterusnya
										<ChevronRight className="w-4 h-4 ml-2" />
									</Button>
								</div>
							</div>
						</Tabs>
					</CardContent>
				</Card>
			</div>
		</SidebarInset>
	);
}
