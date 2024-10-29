"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Functions, Users, Globe2, Settings } from 'lucide-react';

const navigation = [
  { name: 'Functions', href: '/functions', icon: Functions },
  { name: 'Permissions', href: '/permissions', icon: Users },
  { name: 'Translations', href: '/translations', icon: Globe2 },
  { name: 'Admin', href: '/admin', icon: Settings },
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full border-r bg-background">
      <ScrollArea className="flex-1 py-4">
        <div className="space-y-1 px-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.name}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  pathname === item.href && "bg-accent"
                )}
                asChild
              >
                <Link href={item.href}>
                  <Icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}