"use client";

import { ModeToggle } from "@/components/layout/mode-toggle";
import { UserNav } from "@/components/layout/user-nav";
import { MainNav } from "@/components/layout/main-nav";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function TopBar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative w-64">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-8" placeholder="Search..." />
          </div>
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  );
}