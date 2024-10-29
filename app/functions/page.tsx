import { Metadata } from "next";
import { FunctionManagement } from "@/components/functions/function-management";

export const metadata: Metadata = {
  title: "Function Management",
  description: "Manage functions and their translations",
};

export default function FunctionsPage() {
  return <FunctionManagement />;
}