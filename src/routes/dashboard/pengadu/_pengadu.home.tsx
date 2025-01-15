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
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/dashboard/pengadu/_pengadu/home")({
  component: OfficerDashboard,
});

const recentCases = [
  {
    id: "ETAGS-001",
    location: "Selangor",
    type: "Gangguan Verbal",
    date: "23-November-2024",
    status: "Selesai Notis Pendengaran",
  },
  {
    id: "ETAGS-002",
    location: "W.P Kuala Lumpur",
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
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Dashboard Pegawai Tribunal
          </h1>
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/avatars/officer-avatar.jpg" />
              <AvatarFallback>HD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Haziq Dibo</p>
              <p className="text-xs text-gray-500">Pegawai Kanan e-TAGS</p>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-2xl font-bold text-gray-800">
                Status Aduan Terkini
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold text-gray-600">
                      Kes ID
                    </TableHead>
                    <TableHead className="font-semibold text-gray-600">
                      Lokasi
                    </TableHead>
                    <TableHead className="font-semibold text-gray-600">
                      Jenis Gangguan
                    </TableHead>
                    <TableHead className="font-semibold text-gray-600">
                      Tarikh
                    </TableHead>
                    <TableHead className="font-semibold text-gray-600">
                      Status Aduan
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentCases.map((caseItem) => (
                    <TableRow
                      key={caseItem.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <TableCell className="font-medium text-blue-600">
                        {caseItem.id}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                          {caseItem.location}
                        </div>
                      </TableCell>
                      <TableCell>{caseItem.type}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gray-400" />
                          {caseItem.date}
                        </div>
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={caseItem.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="p-4 border-t mt-4">
                <Button variant="outline" className="w-full sm:w-auto">
                  Lihat semua kes
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const statusConfig: Record<
    string,
    { color: string; bgColor: string; icon: React.ReactNode }
  > = {
    "Selesai Notis Pendengaran": {
      color: "text-green-700",
      bgColor: "bg-green-100",
      icon: "✓",
    },
    "Draf Keputusan-Award Aduan": {
      color: "text-yellow-700",
      bgColor: "bg-yellow-100",
      icon: "⌛",
    },
    "Keputusan-Award Aduan": {
      color: "text-blue-700",
      bgColor: "bg-blue-100",
      icon: "🏆",
    },
    "Dihantar Oleh Pengadu": {
      color: "text-purple-700",
      bgColor: "bg-purple-100",
      icon: "📬",
    },
  };

  const { color, bgColor, icon } = statusConfig[status] || {
    color: "text-gray-700",
    bgColor: "bg-gray-100",
    icon: "•",
  };

  return (
    <Badge
      variant="secondary"
      className={`${color} ${bgColor} font-semibold px-2 py-1`}
    >
      {icon} {status}
    </Badge>
  );
}
