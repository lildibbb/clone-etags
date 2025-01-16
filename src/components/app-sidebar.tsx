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
							url: "/dashboard/admin/manage/internal-users",
						},
						{
							title: "Pengguna Luaran",
							url: "/dashboard/admin/manage/external-users",
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
					title: "Aduan Baru (Borang 1)",
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
					title: "Aduan Baru (Borang 2)",
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
	admin: {
		name: "Admin User",
		email: "admin@example.com",
		avatar: "/avatars/admin.jpg",
		type: "admin",
	},
	pegawai: {
		name: "Pegawai User",
		email: "pegawai@example.com",
		avatar: "/avatars/pegawai.jpg",
		type: "pegawai",
	},
	pengadu: {
		name: "Pengadu User",
		email: "pengadu@example.com",
		avatar: "/avatars/pengadu.jpg",
		type: "pengadu",
	},
	responden: {
		name: "Responden User",
		email: "responden@example.com",
		avatar: "/avatars/responden.jpg",
		type: "responden",
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
				<div className="flex items-center gap-3 px-2 group-data-[collapsible=icon]:justify-center">
					<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:h-8">
						<img
							src="/jata-negara.svg"
							alt="Jata Negara"
							className="w-10 h-10 group-data-[collapsible=icon]:w-6 group-data-[collapsible=icon]:h-6"
						/>
					</div>
					<div className="flex flex-col min-w-0 group-data-[collapsible=icon]:hidden">
						<div className="text-lg font-bold">e-TAGS</div>
						<div className="text-xs text-muted-foreground leading-tight">
							Kementerian Pembangunan Wanita,
						</div>
						<div className="text-xs text-muted-foreground leading-tight">
							Keluarga dan Masyarakat (KPWKM)
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
