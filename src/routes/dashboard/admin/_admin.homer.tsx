import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Avatar } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Battery,
  CheckCircle,
  Clock,
  Cpu,
  Database,
  HardDrive,
  MemoryStickIcon as Memory,
  MonitorDot,
  Ticket,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/admin/_admin/homer")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Welcome Card */}
          <Card className="bg-purple-500 text-white">
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <h2 className="text-2xl font-bold">Welcome back,</h2>
                <h3 className="text-3xl font-bold mb-2">Admin</h3>
                <p className="text-sm opacity-90">
                  Last login 14 June 2023 (4pm)
                </p>
              </div>
              <div className="w-24 h-24">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KPkzOoXubv6cLan4qrwgg57X2rpbm5.png"
                  alt="Puzzle pieces"
                  className="w-full h-full object-contain"
                />
              </div>
            </CardContent>
          </Card>

          {/* Admin Profile Card */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-6">
                <Avatar className="w-16 h-16 mb-2 bg-gray-100">
                  <span className="text-2xl">A</span>
                </Avatar>
                <h3 className="text-xl font-semibold">Admin</h3>
                <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">
                  Superadmin
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground">
                    Username:
                  </label>
                  <Input defaultValue="Admin" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">
                    Email:
                  </label>
                  <Input
                    defaultValue="superadmin@yopmail.com"
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-3">
                  <Button className="flex-1 bg-purple-500 hover:bg-purple-600">
                    Update
                  </Button>
                  <Button variant="destructive" className="flex-1">
                    Suspend Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Helpdesk Tracker Card */}
          <Card>
            <CardHeader>
              <CardTitle>Helpdesk Tracker</CardTitle>
              <p className="text-sm text-muted-foreground">Last 7 Days</p>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <span className="text-5xl font-bold">163</span>
                <p className="text-sm text-muted-foreground">Tickets</p>
              </div>

              <div className="relative flex items-center justify-center my-8">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-purple-100"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-purple-500"
                      strokeWidth="8"
                      strokeDasharray={`${83 * 2.51} ${100 * 2.51}`}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-2xl font-bold">83%</span>
                      <p className="text-xs text-muted-foreground">
                        Completed Tickets
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <Ticket className="w-8 h-8 mx-auto text-purple-500" />
                  <p className="text-2xl font-bold">29</p>
                  <p className="text-xs text-muted-foreground">New Tickets</p>
                </div>
                <div className="space-y-1">
                  <CheckCircle className="w-8 h-8 mx-auto text-green-500" />
                  <p className="text-2xl font-bold">63</p>
                  <p className="text-xs text-muted-foreground">Open Tickets</p>
                </div>
                <div className="space-y-1">
                  <Clock className="w-8 h-8 mx-auto text-orange-500" />
                  <p className="text-2xl font-bold">1d</p>
                  <p className="text-xs text-muted-foreground">Response Time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Resources Card */}
          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle>System Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>NAME</TableHead>
                    <TableHead>TYPE</TableHead>
                    <TableHead>USAGE</TableHead>
                    <TableHead>UPDATED AT</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Memory",
                      type: "RAM",
                      usage: 45,
                      icon: <Memory className="w-5 h-5" />,
                    },
                    {
                      name: "Storage",
                      type: "Database",
                      usage: 68,
                      icon: <HardDrive className="w-5 h-5" />,
                    },
                    {
                      name: "Database",
                      type: "SQL",
                      usage: 52,
                      icon: <Database className="w-5 h-5" />,
                    },
                    {
                      name: "CPU",
                      type: "Processor",
                      usage: 78,
                      icon: <Cpu className="w-5 h-5" />,
                    },
                    {
                      name: "RAM",
                      type: "Memory",
                      usage: 32,
                      icon: <Memory className="w-5 h-5" />,
                    },
                    {
                      name: "CPU",
                      type: "Graphics",
                      usage: 48,
                      icon: <MonitorDot className="w-5 h-5" />,
                    },
                    {
                      name: "Battery",
                      type: "Power",
                      usage: 89,
                      icon: <Battery className="w-5 h-5" />,
                    },
                  ].map((resource, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {resource.icon}
                          {resource.name}
                        </div>
                      </TableCell>
                      <TableCell>{resource.type}</TableCell>
                      <TableCell>
                        <Progress value={resource.usage} className="h-2" />
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        10, Jan 2021 20:07
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
