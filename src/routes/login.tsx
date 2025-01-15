import background from "@/assets/anti.jpg";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import logo from "/jata-negara.svg";

// Route definition
export const Route = createFileRoute("/login")({
	component: RouteComponent,
});

// Mock Users with explicit index signature
const mockUsers: {
	[key: number]: { email: string; password: string; role: string };
} = {
	1: { email: "admin@example.com", password: "admin123", role: "admin" },
	2: { email: "pegawai@example.com", password: "manager123", role: "pegawai" },
	3: {
		email: "responden@example.com",
		password: "staff123",
		role: "responden",
	},
	4: { email: "pengadu@example.com", password: "user123", role: "pengadu" },
};

function RouteComponent() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [selectedUser, setSelectedUser] = useState<number | string>("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleUserSelection = (value: string) => {
		const userId = Number(value);
		setSelectedUser(userId);

		if (mockUsers[userId]) {
			setEmail(mockUsers[userId].email);
			setPassword(mockUsers[userId].password);
			setError(""); // Clear any existing errors
		} else {
			setEmail("");
			setPassword("");
		}
	};

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();

		const user = Object.values(mockUsers).find(
			(u) => u.email === email && u.password === password,
		);

		if (user) {
			switch (user.role) {
				case "admin":
					navigate({ to: "/dashboard/admin/home" });
					break;
				case "pegawai":
					navigate({ to: "/dashboard/pegawai/home" });
					break;
				case "pengadu":
					navigate({ to: "/dashboard/pengadu/home" });
					break;
				case "responden":
					navigate({ to: "/dashboard/pengadu/home" });
					break;
				default:
					setError("Invalid role");
			}
		} else {
			setError("Invalid email or password");
		}
	};

	return (
		<div
			className="min-h-screen flex flex-col items-center justify-center p-4 relative"
			style={{
				backgroundImage: `url(${background})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Overlay to improve text readability */}
			<div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

			<div className="w-full max-w-[400px] space-y-6 relative z-10">
				<div className="flex flex-col items-center space-y-4">
					<div className="w-28 h-28 rounded-full bg-white/90 p-4 shadow-lg">
						<img
							src={logo || "/placeholder.svg"}
							alt="Malaysian Coat of Arms"
							className="w-full h-full object-contain"
						/>
					</div>
					<h1 className="text-4xl font-bold text-center text-white drop-shadow-md">
						SISTEM e-TAGS
					</h1>
				</div>

				<Card className="border-0 shadow-xl">
					<CardHeader className="space-y-1">
						<CardTitle className="text-2xl text-center">Welcome back</CardTitle>
						<CardDescription className="text-center">
							Please sign in to your account
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="user">Demo User</Label>
								<Select
									value={String(selectedUser)}
									onValueChange={handleUserSelection}
								>
									<SelectTrigger id="user" className="w-full">
										<SelectValue placeholder="Select Demo User" />
									</SelectTrigger>
									<SelectContent>
										{Object.keys(mockUsers).map((key) => (
											<SelectItem key={key} value={key}>
												{mockUsers[Number(key)].role.charAt(0).toUpperCase() +
													mockUsers[Number(key)].role.slice(1)}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							<form onSubmit={handleLogin} className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										placeholder="name@example.com"
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										className="border-input"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="password">Password</Label>
									<Input
										id="password"
										type="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
										className="border-input"
									/>
								</div>

								{error && (
									<Alert variant="destructive">
										<AlertCircle className="h-4 w-4" />
										<AlertDescription>{error}</AlertDescription>
									</Alert>
								)}

								<Button type="submit" className="w-full" size="lg">
									Log Masuk
								</Button>
							</form>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col space-y-2">
						<p className="px-8 text-center text-sm text-muted-foreground">
							This is a demo login page. Select a user type above to
							automatically fill in credentials.
						</p>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
