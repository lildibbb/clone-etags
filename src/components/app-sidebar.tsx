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
import { Frame, PieChart, SquareTerminal } from "lucide-react";
import type * as React from "react";

// This is sample data.
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "User Management",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
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
	],
	projects: [
		{
			name: "Design Engineering",
			url: "#",
			icon: Frame,
		},
		{
			name: "Sales & Marketing",
			url: "#",
			icon: PieChart,
		},
		{
			name: "Travel",
			url: "#",
			icon: Map,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			{/* TODO */}
			<SidebarHeader>
				<div className="flex">
					<div className="flex-grow-0 flex-shrink-0 w-12 flex justify-normal">
						<img src={JataNegara} alt="Jata Negara" className="w-8 h-8" />
					</div>
					<div className="">e-TAGS</div>
					<div className="">KPWKM</div>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
