"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Functions, Users, Globe2, Settings } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const navigation = [
  { name: 'Functions', href: '/functions', Icon: Functions },
  { name: 'Permissions', href: '/permissions', Icon: Users },
  { name: 'Translations', href: '/translations', Icon: Globe2 },
  { name: 'Admin', href: '/admin', Icon: Settings },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Functions className="h-6 w-6" />
              <span className="font-bold text-xl">FMS</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {navigation.map(({ name, href, Icon }) => (
              <Button
                key={name}
                variant={pathname === href ? "default" : "ghost"}
                asChild
              >
                <Link href={href} className="flex items-center space-x-2">
                  <Icon className="h-4 w-4" />
                  <span>{name}</span>
                </Link>
              </Button>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}