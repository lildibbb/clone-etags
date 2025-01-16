import { ComplainantForm } from "@/components/form/butiranA-form";
import { ComplaintDetailsForm } from "@/components/form/butiranB-form";
import { PaymentForm } from "@/components/form/payment-form";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute(
	"/dashboard/pengadu/_pengadu/aduan-baru/borang-1",
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
		<div className="flex flex-col h-screen">
			<main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
				<Card className="border-none shadow-lg">
					<CardHeader className="text-center border-b bg-card">
						<CardTitle className="text-2xl font-semibold text-primary">
							BORANG 1 : Aduan Gangguan Seksual
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
									<PaymentForm />
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
			</main>
		</div>
	);
}
