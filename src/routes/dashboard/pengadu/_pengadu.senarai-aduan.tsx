import { createFileRoute } from "@tanstack/react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Eye, MinusIcon } from "lucide-react";
import { useState } from "react";
import { PDFViewerModal } from "@/components/pdf-viewer-modal";
import borang3 from "../../../assets/borang3.pdf";
export const Route = createFileRoute(
  "/dashboard/pengadu/_pengadu/senarai-aduan"
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
    id: "AGS-2024-000001",
    complainantName: "Lily Ng",
    respondentName: "Alex To",
    disturbanceType: "Gangguan Verbal",
    state: "Selangor",
    formType: "Selesai Notis Pendengaran",
    date: "23-11-2024",
  },
  {
    no: 2,
    id: "AGS-2024-000006",
    complainantName: "Lily Ng",
    respondentName: "Mike",
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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-xl font-bold">Senarai Aduan</CardTitle>
            <Button variant="ghost" size="icon">
              <MinusIcon className="h-4 w-4" />
            </Button>
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
                            onClick={() => handleViewPDF(complaint.id, "form3")}
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
  );
}
