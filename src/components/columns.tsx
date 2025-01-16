"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { DataTableColumnHeader } from "./data-table-column-header";

// Define the User type
export type User = {
	id: number;
	name: string;
	email: string;
	role: string;
};

// Define table and row types
import type { Row, Table } from "@tanstack/react-table";
export const columns = [
	{
		id: "select",
		header: ({ table }: { table: Table<User> }) => (
			<Checkbox
				checked={table.getIsAllPageRowsSelected()}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }: { row: Row<User> }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "id",
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		header: ({ column }: { column: any }) => (
			<DataTableColumnHeader column={column} title="ID" />
		),
	},
	{
		accessorKey: "name",
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		header: ({ column }: { column: any }) => (
			<DataTableColumnHeader column={column} title="Name" />
		),
	},
	{
		accessorKey: "email",
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		header: ({ column }: { column: any }) => (
			<DataTableColumnHeader column={column} title="Email" />
		),
	},
	{
		accessorKey: "role",
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		header: ({ column }: { column: any }) => (
			<DataTableColumnHeader column={column} title="Role" />
		),
	},
	{
		id: "actions",
		cell: ({ row }: { row: Row<User> }) => {
			const user = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(user.email)}
						>
							Copy email
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View details</DropdownMenuItem>
						<DropdownMenuItem>Edit user</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
