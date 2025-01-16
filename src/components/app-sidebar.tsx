import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import {
	Clipboard,
	FileText,
	Home,
	MessageSquare,
	Settings,
	Users,
} from "lucide-react";
import type * as React from "react";

// Define different navigation items for each user type
const navSections = {
	admin: [
		{
			// No label for the dashboard section
			items: [
				{
					title: "Dashboard",
					url: "/dashboard/admin",
					icon: Home,
				},
			],
		},
		{
			label: "Management",
			items: [
				{
					title: "Pengurusan Pengguna",
					url: "/dashboard/admin/manage",
					icon: Users,
					isActive: true,
					items: [
						{
							title: "Pengguna Dalaman",
							url: "/dashboard/admin/manage/pengguna-dalaman",
						},
						{
							title: "Pengguna Luaran",
							url: "/dashboard/admin/manage/pengguna-luaran",
						},
					],
				},
				{
					title: "Pengurusan Sistem",
					url: "/dashboard/admin/pengurusan-sistem",
					icon: Settings,
				},
			],
		},
	],
	pegawai: [
		{
			items: [
				{
					title: "Dashboard",
					url: "/dashboard/pegawai",
					icon: Home,
					isActive: true,
				},
			],
		},
		{
			label: "Aduan",
			items: [
				{
					title: "Lapor Aduan Baru",
					url: "/dashboard/pegawai/aduan-baru",
					icon: FileText,
					isActive: true,
					items: [
						{
							title: "Borang 3",
							url: "/dashboard/pegawai/aduan-baru/borang-3",
						},
						{
							title: "Borang 4",
							url: "/dashboard/pegawai/aduan-baru/borang-4",
						},
					],
				},
				{
					title: "Senarai Aduan",
					url: "/dashboard/pegawai/senarai-aduan",
					icon: Clipboard,
				},
			],
		},
	],
	pengadu: [
		{
			items: [
				{
					title: "Dashboard",
					url: "/dashboard/pengadu",
					icon: Home,
				},
			],
		},
		{
			label: "Aduan",
			items: [
				{
					title: "Borang 1 - Aduan Gangguan Seksual",
					url: "/dashboard/pengadu/aduan-baru/borang-1",
					icon: MessageSquare,
				},
				{
					title: "Senarai Aduan",
					url: "/dashboard/pengadu/senarai-aduan",
					icon: FileText,
				},
			],
		},
	],
	responden: [
		{
			items: [
				{
					title: "Dashboard",
					url: "/dashboard/responden",
					icon: Home,
				},
			],
		},
		{
			label: "Aduan",
			items: [
				{
					title: "Borang 2 - Pernyataan Pembelaan",
					url: "/dashboard/responden/aduan-baru/borang-2",
					icon: MessageSquare,
				},
				{
					title: "Senarai Aduan",
					url: "/dashboard/responden/senarai-aduan",
					icon: FileText,
				},
			],
		},
	],
};

// Sample user data for different types
const users = {
	responden: {
		name: "Responden User",
		email: "responden@example.com",
		avatar: "/avatars/responden.jpg",
		type: "responden",
	},
	pengadu: {
		name: "Pengadu User",
		email: "pengadu@example.com",
		avatar: "/avatars/pengadu.jpg",
		type: "pengadu",
	},
	pegawai: {
		name: "Pegawai User",
		email: "pegawai@example.com",
		avatar: "/avatars/pegawai.jpg",
		type: "pegawai",
	},
	admin: {
		name: "Admin User",
		email: "admin@example.com",
		avatar: "/avatars/admin.jpg",
		type: "admin",
	},
};

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
	userType: "admin" | "pegawai" | "pengadu" | "responden";
}

export function AppSidebar({ userType, ...props }: AppSidebarProps) {
	const currentUser = users[userType];
	const currentNavSections = navSections[userType];

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<div className="flex flex-col items-center gap-4 px-3 py-4 group-data-[collapsible=icon]:justify-center">
					{/* Centered Logo Section */}
					<div className="relative flex-shrink-0 w-24 h-24 flex items-center justify-center rounded-xl bg-white/10 p-3 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10">
						<img
							src="/jata-negara.svg"
							alt="Jata Negara"
							className="w-full h-full object-contain group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:h-8"
						/>
					</div>

					{/* Text Section - Centered below logo */}
					<div className="flex flex-col items-center text-center space-y-2 group-data-[collapsible=icon]:hidden">
						{/* Main Title */}
						<div className="space-y-1">
							<div className="text-base font-bold leading-tight">
								e-TRIBUNAL BAGI ANTIGANGGUAN SEKSUAL
							</div>
						</div>

						{/* Ministry Name */}
						<div className="space-y-0.5 border-t border-border/50 pt-2 mt-1">
							<div className="text-[14px] font-medium text-muted-foreground/90">
								Kementerian Pembangunan Wanita, Keluarga dan Masyarakat (KPWKM)
							</div>
						</div>
					</div>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<NavMain sections={currentNavSections} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={currentUser} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
