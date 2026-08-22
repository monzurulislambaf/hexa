"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Award,
  MessageSquare,
  Settings,
  LogOut,
  Users,
  TrendingUp,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { title: "Total Contacts", value: "127", change: "+12%", icon: MessageSquare },
  { title: "Published Posts", value: "24", change: "+8%", icon: FileText },
  { title: "Projects", value: "45", change: "+5%", icon: FolderOpen },
  { title: "Certificates", value: "89", change: "+15%", icon: Award },
];

const recentContacts = [
  { name: "Ahmed Rahman", subject: "Energy Audit Inquiry", date: "2025-01-15", status: "New" },
  { name: "Fatima Khan", subject: "Safety Compliance", date: "2025-01-14", status: "Read" },
  { name: "Mohammad Ali", subject: "ETP Design Request", date: "2025-01-13", status: "Replied" },
];

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Projects", icon: FolderOpen },
  { label: "Blog", icon: FileText },
  { label: "Certificates", icon: Award },
  { label: "Contacts", icon: MessageSquare },
  { label: "Users", icon: Users },
  { label: "Settings", icon: Settings },
];

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-background border-r z-40">
        <div className="p-6">
          <h1 className="text-xl font-bold text-primary">HEXA Admin</h1>
          <p className="text-xs text-muted-foreground">Dashboard</p>
        </div>

        <nav className="px-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => setActiveNav(item.label)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  activeNav === item.label
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-muted-foreground">Welcome back, Admin</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-sustainability-green flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Recent Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentContacts.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div>
                      <p className="font-medium text-sm">{contact.name}</p>
                      <p className="text-xs text-muted-foreground">{contact.subject}</p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          contact.status === "New"
                            ? "bg-primary/10 text-primary"
                            : contact.status === "Read"
                            ? "bg-secondary/10 text-secondary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {contact.status}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{contact.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                  <FolderOpen className="h-5 w-5" />
                  <span className="text-sm">Add Project</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                  <FileText className="h-5 w-5" />
                  <span className="text-sm">Write Post</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                  <Award className="h-5 w-5" />
                  <span className="text-sm">Issue Certificate</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  <span className="text-sm">View Contacts</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
