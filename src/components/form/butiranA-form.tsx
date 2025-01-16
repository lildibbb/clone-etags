import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Butiran A - Personal Information Form
export function ComplainantForm() {
	return (
		<div className="space-y-6">
			{/* Personal Information */}
			<Card className="shadow-md">
				<CardHeader>
					<CardTitle className="text-lg font-semibold text-primary">
						Maklumat Peribadi
					</CardTitle>
					<CardDescription>
						Sila isi butiran peribadi anda.{" "}
						<span className="text-destructive">(*) adalah maklumat wajib.</span>
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					{/* Basic Details Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="md:col-span-2">
							<Label htmlFor="name" className="text-sm font-medium">
								Nama Penuh <span className="text-destructive text-base">*</span>
							</Label>
							<Input
								id="name"
								className="mt-1.5"
								placeholder="Masukkan nama penuh anda"
								required
							/>
						</div>
						<div>
							<Label htmlFor="id" className="text-sm font-medium">
								No. Kad Pengenalan{" "}
								<span className="text-destructive text-base">*</span>
							</Label>
							<Input
								id="id"
								className="mt-1.5"
								placeholder="xxxxxx-xx-xxxx"
								required
							/>
						</div>
						<div>
							<Label htmlFor="email" className="text-sm font-medium">
								Emel
							</Label>
							<Input
								id="email"
								className="mt-1.5"
								type="email"
								placeholder="nama@contoh.com"
							/>
						</div>
						<div className="md:col-span-2">
							<Label htmlFor="occupation" className="text-sm font-medium">
								Pekerjaan
							</Label>
							<Input
								id="occupation"
								className="mt-1.5"
								placeholder="Masukkan pekerjaan anda"
							/>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Address Information */}
			<Card className="shadow-md">
				<CardHeader>
					<CardTitle className="text-lg font-semibold text-primary">
						Alamat
					</CardTitle>
					<CardDescription>Sila isi alamat lengkap anda</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="space-y-4">
						{/* Address Lines */}
						<div>
							<Input className="mb-3" placeholder="Alamat Baris 1" />
							<Input className="mb-3" placeholder="Alamat Baris 2" />
							<Input placeholder="Alamat Baris 3" />
						</div>

						{/* Location Details */}
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
		</div>
	);
}
