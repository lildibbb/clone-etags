import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

export function ComplaintDetailsForm() {
	return (
		<form className="space-y-8">
			<Card>
				<CardHeader>
					<CardTitle className="text-lg font-medium">
						Maklumat Responden
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="respondent-name">Nama Responden</Label>
						<Input
							id="respondent-name"
							required
							placeholder="Masukkan nama responden"
						/>
					</div>

					<div className="space-y-4">
						<Label className="text-base">Alamat Responden</Label>
						<div className="space-y-4">
							<Input placeholder="Alamat Baris 1" />
							<Input placeholder="Alamat Baris 2" />
							<Input placeholder="Alamat Baris 3" />

							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div className="space-y-2">
									<Label>Poskod</Label>
									<Input placeholder="00000" />
								</div>
								<div className="space-y-2">
									<Label>Daerah/Bandar</Label>
									<Input placeholder="Masukkan daerah/bandar" />
								</div>
								<div className="space-y-2">
									<Label>Negeri</Label>
									<Input placeholder="Masukkan negeri" />
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-lg font-medium">Butiran Aduan</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="space-y-2">
						<Label htmlFor="complaint">Keterangan Aduan *</Label>
						<Textarea
							id="complaint"
							className="min-h-[200px]"
							placeholder="Sila berikan keterangan terperinci mengenai aduan anda"
							required
						/>
					</div>

					<div className="space-y-4">
						<Label className="text-base">Pengakuan Pengadu</Label>
						<RadioGroup defaultValue="ada">
							<div className="flex items-start space-x-3 space-y-0">
								<RadioGroupItem value="ada" id="ada" className="mt-1" />
								<Label htmlFor="ada" className="leading-tight">
									Saya dengan ini mengaku ADA membuat aduan mengenai perkara di
									atas di platform perundangan lain.
								</Label>
							</div>
							<div className="flex items-start space-x-3 space-y-0">
								<RadioGroupItem value="tiada" id="tiada" className="mt-1" />
								<Label htmlFor="tiada" className="leading-tight">
									Saya dengan ini mengaku TIADA ADA membuat aduan mengenai
									perkara di atas di platform perundangan lain.
								</Label>
							</div>
						</RadioGroup>
					</div>
				</CardContent>
			</Card>
		</form>
	);
}
