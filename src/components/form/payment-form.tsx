import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CreditCard } from "lucide-react";
import Maybank from "../../assets/bank-logos/maybank.svg";
import AmBank from "../../assets/bank-logos/AmBank.svg";
import Cimb from "../../assets/bank-logos/Cimb.svg";
import PublicBank from "../../assets/bank-logos/PublicBank.svg";
import HongLeong from "../../assets/bank-logos/HongLeongBank.svg";
import BSN from "../../assets/bank-logos/BSN.svg";
import Affin from "../../assets/bank-logos/AffinBank.svg";
import BankIslam from "../../assets/bank-logos/BankIslam.svg";
import UOB from "../../assets/bank-logos/UOB.svg";
import OCBC from "../../assets/bank-logos/OCBC.svg";

export function PaymentForm() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const banks = [
    { name: "Maybank", logo: <Maybank /> },
    { name: "CIMB Bank", logo: <Cimb /> },
    { name: "Public Bank", logo: <PublicBank /> },
    { name: "Hong Leong Bank", logo: <HongLeong /> },
    { name: "AmBank", logo: <AmBank /> },
    { name: "Affin Bank", logo: <Affin /> },
    { name: "Bank Islam", logo: <BankIslam /> },
    { name: "BSN", logo: <BSN /> },
    { name: "UOB", logo: <UOB /> },
    { name: "OCBC", logo: <OCBC /> },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted!");
  };

  const handlePayment = () => {
    setIsModalOpen(true); // Open the modal when the button is clicked
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">
            Maklumat Pembayaran
          </CardTitle>
          <CardDescription>
            Sila pilih kaedah pembayaran yang diinginkan
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Tujuan Pembayaran</Label>
            <Input
              value="PEMBAYARAN BORANG 1 : BORANG ADUAN GANGGUAN SEKSUAL"
              readOnly
              className="bg-muted"
            />
          </div>

          <div className="space-y-2">
            <Label>Amaun Bayaran (RM)</Label>
            <Input type="number" placeholder="RM0.00" className="font-mono" />
          </div>

          <div className="space-y-4">
            <Label>Pilih Bank</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {banks.map((bank) => (
                <Button
                  key={bank.name}
                  variant="outline"
                  className="h-24 flex flex-col items-center justify-center gap-2 hover:border-primary"
                  type="button" // Prevents the button from submitting the form
                >
                  {bank.logo}
                  <span>{bank.name}</span>
                </Button>
              ))}
            </div>
          </div>

          <Button
            className="w-full h-12 text-lg bg-primary hover:bg-primary/90"
            onClick={handlePayment} // Open modal on click
            type="button" // Prevents the button from submitting the form
          >
            <CreditCard className="mr-2 h-5 w-5" />
            BAYAR SEKARANG
          </Button>
        </CardContent>
      </Card>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex justify-center items-center mb-4">
              <div className="h-16 w-16 border-4 border-green-500 rounded-full flex items-center justify-center relative">
                <svg
                  className="w-8 h-8 text-green-500 animate-check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-center">
              Pembayaran Berjaya
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Anda telah buat pembayaran. Terima kasih!
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setIsModalOpen(false)}>Tutup</Button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
