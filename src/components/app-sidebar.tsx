import JataNegara from "@/assets/jata-negara.svg";
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
	MessageSquare,
	Settings,
	Users,
} from "lucide-react";
import type * as React from "react";

// Define different navigation items for each user type
const navItems = {
	admin: [
		{
			title: "User Management",
			url: "/admin/users",
			icon: Users,
			isActive: false,
			items: [
				{
					title: "Internal User",
					url: "#",
				},
				{
					title: "External User",
					url: "#",
				},
			],
		},
		{
			title: "System Settings",
			url: "/admin/settings",
			icon: Settings,
			isActive: false,
		},
	],
	pegawai: [
		{
			title: "Lapor Aduan Baru",
			url: "/pegawai/aduan-baru/borang3",
			icon: FileText,
			isActive: true,
			items: [
				{
					title: "Borang 3",
					url: "/pegawai/aduan-baru/borang3",
				},
				{
					title: "Borang 4",
					url: "/pegawai/aduan-baru/borang4",
				},
			],
		},
		{
			title: "Reports",
			url: "/pegawai/reports",
			icon: Clipboard,
			isActive: true,
			items: [
				{
					title: "Senarai Aduan",
					url: "/pegawai/senarai-aduan",
				},
			],
		},
	],
	pengadu: [
		{
			title: "Submit Complaint",
			url: "/pengadu/submit",
			icon: MessageSquare,
			isActive: false,
		},
		{
			title: "My Complaints",
			url: "/pengadu/complaints",
			icon: FileText,
			isActive: false,
		},
	],
	responden: [
		{
			title: "Surveys",
			url: "/responden/surveys",
			icon: Clipboard,
			isActive: false,
		},
		{
			title: "My Responses",
			url: "/responden/responses",
			icon: FileText,
			isActive: false,
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
	const currentNavItems = navItems[userType];

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<div className="flex items-center">
					<div className="flex-shrink-0 w-12 flex justify-center">
						<img src={JataNegara} alt="Jata Negara" className="w-8 h-8" />
					</div>
					<div className="ml-2">
						<div className="font-bold">e-TAGS</div>
						<div className="text-sm">KPWKM</div>
					</div>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={currentNavItems} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={currentUser} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
