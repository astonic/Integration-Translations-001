import { Metadata } from "next";
import { TranslationsHeader } from "@/components/translations/translations-header";
import { TranslationsTable } from "@/components/translations/translations-table";

export const metadata: Metadata = {
  title: "Translation Management",
  description: "Manage translations for functions and keys",
};

export default function TranslationsPage() {
  return (
    <div className="flex flex-col gap-6">
      <TranslationsHeader />
      <TranslationsTable />
    </div>
  );
}