import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

export function ComplaintDetailsForm() {
	return (
		<div className="space-y-6">
			{/* Respondent Information */}
			<Card className="shadow-md">
				<CardHeader>
					<CardTitle className="text-lg font-semibold text-primary">
						Maklumat Responden
					</CardTitle>
					<CardDescription>
						Sila isi maklumat responden.{" "}
						<span className="text-destructive">(*) adalah maklumat wajib.</span>
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div>
						<Label className="text-sm font-medium">
							Nama Responden{" "}
							<span className="text-destructive text-base">*</span>
						</Label>
						<Input
							className="mt-1.5"
							placeholder="Masukkan nama responden"
							required
						/>
					</div>

					{/* Respondent Address */}
					<div className="space-y-4">
						<Label className="text-sm font-medium">Alamat Responden</Label>
						<div className="space-y-3">
							<Input placeholder="Alamat Baris 1" />
							<Input placeholder="Alamat Baris 2" />
							<Input placeholder="Alamat Baris 3" />
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div>
								<Label className="text-sm font-medium">Poskod</Label>
								<Input className="mt-1.5" placeholder="00000" />
							</div>
							<div>
								<Label className="text-sm font-medium">Daerah/Bandar</Label>
								<Input
									className="mt-1.5"
									placeholder="Masukkan daerah/bandar"
								/>
							</div>
							<div>
								<Label className="text-sm font-medium">Negeri</Label>
								<Input className="mt-1.5" placeholder="Masukkan negeri" />
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Complaint Details */}
			<Card className="shadow-md">
				<CardHeader>
					<CardTitle className="text-lg font-semibold text-primary">
						Butiran Aduan
					</CardTitle>
					<CardDescription>
						Sila berikan butiran terperinci aduan anda
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="space-y-4">
						<div>
							<Label className="text-sm font-medium">
								Keterangan Aduan{" "}
								<span className="text-destructive text-base">*</span>
							</Label>
							<Textarea
								className="mt-1.5 min-h-[200px]"
								placeholder="Sila berikan keterangan terperinci mengenai aduan anda"
								required
							/>
						</div>

						<div className="space-y-3">
							<Label className="text-sm font-medium">Pengakuan Pengadu</Label>
							<RadioGroup defaultValue="tiada" className="space-y-3">
								<div className="flex items-start space-x-3">
									<RadioGroupItem value="ada" id="ada" className="mt-1" />
									<Label htmlFor="ada" className="text-sm leading-tight">
										Saya dengan ini mengaku ADA membuat aduan mengenai perkara
										di atas di platform perundangan lain.
									</Label>
								</div>
								<div className="flex items-start space-x-3">
									<RadioGroupItem value="tiada" id="tiada" className="mt-1" />
									<Label htmlFor="tiada" className="text-sm leading-tight">
										Saya dengan ini mengaku TIADA membuat aduan mengenai perkara
										di atas di platform perundangan lain.
									</Label>
								</div>
							</RadioGroup>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
