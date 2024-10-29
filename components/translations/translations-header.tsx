"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { TranslationForm } from "./translation-form";

export function TranslationsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Translations</h1>
        <p className="text-muted-foreground">
          Manage translations for functions and keys
        </p>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Translation
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Add Translation</SheetTitle>
          </SheetHeader>
          <TranslationForm mode="create" />
        </SheetContent>
      </Sheet>
    </div>
  );
}