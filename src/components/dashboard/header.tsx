"use client";

import Link from "next/link";
import { Github, Megaphone } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b bg-card sticky top-0 z-10 w-full shrink-0">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="-ml-2" />
        <div className="flex items-center gap-2">
          <Megaphone className="size-4 text-muted-foreground" />
<<<<<<< HEAD
          <span className="text-sm font-semibold">Campaigns</span>
=======
          <span className="text-sm font-semibold">Hello Prof</span>
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
<<<<<<< HEAD
        <Button variant="ghost" size="icon" asChild className="size-8">
          <Link
            href="https://github.com/ln-dev7/square-ui/tree/master/templates/marketing-dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="size-5" />
          </Link>
        </Button>
=======
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
      </div>
    </header>
  );
}
