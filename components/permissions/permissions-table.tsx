"use client";

import React, { useState, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, ChevronDown, ChevronRight } from "lucide-react";

interface Permission {
  id: string;
  userEmail: string;
  functionCodes: {
    code: string;
    assignedDate: string;
    status: "active" | "inactive";
  }[];
}

const sampleData: Permission[] = [
  {
    id: "1",
    userEmail: "john.doe@example.com",
    functionCodes: [
      { code: "FUNC_MANAGE", assignedDate: "2024-01-01", status: "active" },
      { code: "USER_ADMIN", assignedDate: "2024-01-02", status: "active" },
    ],
  },
  {
    id: "2",
    userEmail: "jane.smith@example.com",
    functionCodes: [
      { code: "REPORT_VIEW", assignedDate: "2024-01-03", status: "active" },
      { code: "DATA_EXPORT", assignedDate: "2024-01-04", status: "inactive" },
    ],
  },
  {
    id: "3",
    userEmail: "mike.wilson@example.com",
    functionCodes: [
      { code: "SYSTEM_CONFIG", assignedDate: "2024-01-05", status: "active" },
      { code: "API_ACCESS", assignedDate: "2024-01-06", status: "active" },
    ],
  },
];

export function PermissionsTable() {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const toggleRow = useCallback((id: string) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  const renderStatusBadge = (status: "active" | "inactive") => (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
        status === "active"
          ? "bg-green-100 text-green-800"
          : "bg-yellow-100 text-yellow-800"
      }`}
    >
      {status}
    </span>
  );

  const renderActionButtons = () => (
    <div className="flex justify-end gap-2">
      <Button variant="ghost" size="icon">
        <Edit className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[30px]"></TableHead>
            <TableHead>User Email</TableHead>
            <TableHead>Function Code</TableHead>
            <TableHead>Assigned Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((permission) => (
            <React.Fragment key={permission.id}>
              <TableRow className="group">
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4"
                    onClick={() => toggleRow(permission.id)}
                  >
                    {expandedRows[permission.id] ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                </TableCell>
                <TableCell>{permission.userEmail}</TableCell>
                <TableCell>{permission.functionCodes[0].code}</TableCell>
                <TableCell>{permission.functionCodes[0].assignedDate}</TableCell>
                <TableCell>
                  {renderStatusBadge(permission.functionCodes[0].status)}
                </TableCell>
                <TableCell className="text-right">
                  {renderActionButtons()}
                </TableCell>
              </TableRow>
              {expandedRows[permission.id] &&
                permission.functionCodes.slice(1).map((functionCode, index) => (
                  <TableRow key={`${permission.id}-${index + 1}`}>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>{functionCode.code}</TableCell>
                    <TableCell>{functionCode.assignedDate}</TableCell>
                    <TableCell>{renderStatusBadge(functionCode.status)}</TableCell>
                    <TableCell className="text-right">
                      {renderActionButtons()}
                    </TableCell>
                  </TableRow>
                ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}