"use client";

import Link from "next/link";
<<<<<<< HEAD
import {
  LayoutDashboard,
  Megaphone,
  Layers,
  Users,
  MessageCircle,
  Wallet,
  Folder,
  Plus,
  HelpCircle,
  Settings,
  ChevronDown,
  User,
  Search,
=======
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BookOpen,
  Users,
  MessageCircle,
  BarChart2,
  Settings,
  HelpCircle,
  Plus,
  Search,
  ChevronDown,
  User,
  LogOut,
  Video,
  FolderOpen,
  GraduationCap,
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { folders } from "@/mock-data/creator-dashboard";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/teacher" },
  { title: "Classrooms", icon: Megaphone, href: "/teacher/classrooms" },
  // { title: "Projects", icon: Layers, href: "#" },
  // { title: "Team", icon: Users, href: "#" },
  // { title: "Messages", icon: MessageCircle, href: "#" },
  // { title: "Wallet", icon: Wallet, href: "#" },
];

const bottomNavItems = [
  { title: "Help", icon: HelpCircle, href: "/help" },
  { title: "Settings", icon: Settings, href: "#" },
];

export function DashboardSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  const pathname = usePathname()
=======
import { useAuthStore } from "@/store/auth.store";
import { useBookmarksStore } from "@/store/bookmarks-store";
import { useUserSocket } from "@/store/user-io.store";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { title: "My Courses", icon: BookOpen, href: "/admin/courses", isActive: true },
  { title: "Students", icon: Users, href: "/admin/students" },
  { title: "Virtual Rooms", icon: Video, href: "/admin/rooms" },
  { title: "Messages", icon: MessageCircle, href: "/admin/messages" },
];

const bottomNavItems = [
  { title: "Help", icon: HelpCircle, href: "/admin/help" },
  { title: "Settings", icon: Settings, href: "/admin/settings" },
];

const recentCourses = [
  "Introduction to AI",
  "Python for Beginners",
  "UX Design Basics",
];

export default function adminSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { logout, user } = useAuthStore();
    const pathname = usePathname();
  const { initSocket, disconnectSocket } = useUserSocket()
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
  return (
    <Sidebar collapsible="offcanvas" className="border-r-0!" {...props}>
      <SidebarHeader className="px-3 py-3">
        <div className="flex items-center justify-between w-full">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 outline-none w-full justify-start">
              <Avatar className="size-7.5 shrink-0">
<<<<<<< HEAD
                <AvatarImage src="/ln.png" />
                <AvatarFallback>LN</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Square Marketing</span>
              <ChevronDown className="size-3 text-muted-foreground shrink-0" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel className="text-muted-foreground text-xs font-medium">
                Workspaces
              </DropdownMenuLabel>
              <DropdownMenuItem>
                <Avatar className="size-5 mr-2 shrink-0">
                  <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=creator" />
                  <AvatarFallback>CR</AvatarFallback>
                </Avatar>
                Creator Hub
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="size-5 rounded bg-blue-500/20 mr-2 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400">
                  M
                </div>
                Marketing Team
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Plus className="size-4 mr-2" />
                Create Workspace
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="size-4 mr-2" />
                Profile
              </DropdownMenuItem>
=======
                <AvatarImage src={user?.avatar || ""} />
                <AvatarFallback>{user?.name?.slice(0, 2).toUpperCase() || "TC"}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium leading-none">{user?.name?.split(" ")[0]}</span>

              </div>
              <ChevronDown className="size-3 text-muted-foreground shrink-0 ml-auto" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel className="text-muted-foreground text-sm font-medium">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuItem>
                <User className="size-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="size-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => logout()} className="text-destructive">
                <LogOut className="size-4 mr-2" />
                Log out
              </DropdownMenuItem>
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="size-7 shrink-0">
            <Search className="size-3.5" />
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup className="p-0">
<<<<<<< HEAD
=======
          <SidebarGroupLabel className="px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
            Navigation
          </SidebarGroupLabel>
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
<<<<<<< HEAD
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className="h-9"
                  >
                    <Link href={item.href}>
                      <item.icon
                        className="size-4 shrink-0"
                      />
=======
                  <SidebarMenuButton asChild isActive={pathname==item.href} className="h-9">
                    <Link href={item.href}>
                      <item.icon className="size-4 shrink-0" />
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

<<<<<<< HEAD
        <SidebarGroup className="p-0 mt-2">
          <div className="flex items-center justify-between px-2 py-1">
            <SidebarGroupLabel className="px-0 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Folders
            </SidebarGroupLabel>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="size-5">
                <Search className="size-3" />
              </Button>
              <Button variant="ghost" size="icon" className="size-5">
                <Plus className="size-3" />
              </Button>
            </div>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {folders.map((folder) => (
                <SidebarMenuItem key={folder.id}>
                  <SidebarMenuButton asChild className="h-8">
                    <Link href="#">
                      <Folder className="size-3.5 shrink-0 text-muted-foreground" />
                      <span className="text-sm">{folder.name}</span>
=======
        <SidebarGroup className="p-0 mt-4">
          <div className="flex items-center justify-between px-2 py-1">
            <SidebarGroupLabel className="px-0 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Recent Courses
            </SidebarGroupLabel>
            <Button variant="ghost" size="icon" className="size-5">
              <Plus className="size-3" />
            </Button>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {recentCourses.map((course) => (
                <SidebarMenuItem key={course}>
                  <SidebarMenuButton asChild className="h-8">
                    <Link href="#">
                      <BookOpen className="size-3.5 shrink-0 text-muted-foreground" />
                      <span className="text-sm truncate">{course}</span>
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-8">
<<<<<<< HEAD
                  <Link href="#">
                    <Plus className="size-3.5 shrink-0 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">New folder</span>
=======
                  <Link href="/admin/courses/new">
                    <Plus className="size-3.5 shrink-0 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">New course</span>
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-2 pb-3">
        <SidebarMenu>
          {bottomNavItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className="h-9">
                <Link href={item.href}>
                  <item.icon className="size-4 shrink-0 text-muted-foreground" />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
<<<<<<< HEAD

        <div className="group/sidebar relative flex flex-col gap-2 rounded-lg border p-4 text-sm w-full bg-background group-data-[collapsible=icon]:hidden">
          <div className="text-balance text-lg font-semibold leading-tight group-hover/sidebar:underline">
            Open-source layouts by lndev-ui
          </div>
          <div className="text-muted-foreground">
            Collection of beautifully crafted open-source layouts UI built with
            shadcn/ui.
          </div>
          <Link
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0"
            href="https://square.lndevui.com"
          >
            <span className="sr-only">Square by lndev-ui</span>
          </Link>
          <Button size="sm" className="w-full" asChild>
            <Link
              href="https://square.lndevui.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              square.lndevui.com
            </Link>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
=======
      </SidebarFooter>
    </Sidebar>
  );
}
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
