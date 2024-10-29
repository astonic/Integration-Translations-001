import { Metadata } from "next";
import { PermissionsTable } from "@/components/permissions/permissions-table";
import { PermissionsHeader } from "@/components/permissions/permissions-header";

export const metadata: Metadata = {
  title: "Permissions Management",
  description: "Manage user permissions and function access",
};

export default function PermissionsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PermissionsHeader />
      <PermissionsTable />
    </div>
  );
}