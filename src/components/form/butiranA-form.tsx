import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ComplainantForm() {
	return (
		<form className="space-y-8">
			<div className="space-y-4">
				<div className="grid gap-4">
					<div className="space-y-2">
						<Label htmlFor="name">Nama Pengadu</Label>
						<Input id="name" required placeholder="Masukkan nama penuh" />
					</div>

					<div className="space-y-2">
						<Label htmlFor="occupation">Pekerjaan</Label>
						<Input id="occupation" placeholder="Masukkan pekerjaan" />
					</div>
				</div>

				<Card>
					<CardContent className="grid gap-4 p-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="phone">No. Telefon</Label>
								<Input id="phone" type="tel" placeholder="01x-xxxxxxx" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="mobile">No. Telefon Bimbit</Label>
								<Input id="mobile" type="tel" placeholder="01x-xxxxxxx" />
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" placeholder="nama@contoh.com" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="id">No. Kad Pengenalan</Label>
								<Input id="id" placeholder="xxxxxx-xx-xxxx" />
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardContent className="space-y-4 p-4">
						<Label className="text-base font-medium">Alamat Rumah</Label>
						<div className="space-y-4">
							<Input placeholder="Alamat Baris 1" />
							<Input placeholder="Alamat Baris 2" />
							<Input placeholder="Alamat Baris 3" />

							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div className="space-y-2">
									<Label htmlFor="postcode">Poskod</Label>
									<Input id="postcode" placeholder="00000" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="city">Daerah/Bandar</Label>
									<Input id="city" placeholder="Masukkan daerah/bandar" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="state">Negeri</Label>
									<Input id="state" placeholder="Masukkan negeri" />
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</form>
	);
}
