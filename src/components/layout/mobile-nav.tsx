"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";

import { RegisterButton } from "@/components/register-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { NavItem } from "@/types/ppdb";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            aria-label="Buka menu navigasi"
          />
        }
      >
        <MenuIcon aria-hidden="true" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            Pilih bagian halaman yang ingin dibuka.
          </SheetDescription>
        </SheetHeader>
        <nav aria-label="Navigasi seluler" className="px-3">
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center rounded-lg px-3 text-lg font-medium hover:bg-muted"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto p-5">
          <RegisterButton size="lg" className="w-full" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
