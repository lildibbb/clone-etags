import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/dashboard/pegawai/_pegawai/")({
	component: OfficerDashboard,
});

const recentCases = [
	{
		id: "ETAGS-001",
		location: "Arau",
		type: "Gangguan Verbal",
		date: "23-November-2024",
		status: "Selesai Notis Pendengaran",
	},
	{
		id: "ETAGS-002",
		location: "W.P. Kuala Lumpur",
		type: "Gangguan Fizikal",
		date: "26-November-2024",
		status: "Draf Keputusan-Award Aduan",
	},
	{
		id: "ETAGS-003",
		location: "Selangor",
		type: "Gangguan Seksual",
		date: "28-November-2024",
		status: "Keputusan-Award Aduan",
	},
	{
		id: "ETAGS-004",
		location: "Perak",
		type: "Gangguan Siber",
		date: "2-Januari-2025",
		status: "Draf Keputusan-Award Aduan",
	},
	{
		id: "ETAGS-005",
		location: "Selangor",
		type: "Gangguan Verbal",
		date: "10-Januari-2025",
		status: "Dihantar Oleh Pengadu",
	},
];

function OfficerDashboard() {
	const navigate = useNavigate();
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
				</div>
			</main>
		</div>
	);
}
