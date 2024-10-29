"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDownIcon, ArrowUpIcon, Search } from "lucide-react";
import { useState, useMemo } from "react";

interface Function {
  id: string;
  code: string;
  description: string;
}

interface FunctionListProps {
  searchQuery: string;
}

export function FunctionList({ searchQuery }: FunctionListProps) {
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedFunction, setSelectedFunction] = useState<string | null>(null);

  // Sample data - replace with actual data source
  const functions: Function[] = [
    { id: "1", code: "FUNC_001", description: "User Management" },
    { id: "2", code: "FUNC_002", description: "Report Generation" },
    { id: "3", code: "FUNC_003", description: "Data Export" },
    { id: "4", code: "FUNC_004", description: "System Configuration" },
    { id: "5", code: "FUNC_005", description: "Access Control" },
  ];

  const filteredAndSortedFunctions = useMemo(() => {
    return functions
      .filter(func => 
        func.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        func.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        const comparison = a.code.localeCompare(b.code);
        return sortDirection === 'asc' ? comparison : -comparison;
      });
  }, [functions, searchQuery, sortDirection]);

  const toggleSort = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-md border">
        <div className="border-b p-4">
          <Button
            variant="ghost"
            className="w-full justify-between font-semibold"
            onClick={toggleSort}
          >
            Function Code
            {sortDirection === 'asc' ? (
              <ArrowUpIcon className="h-4 w-4" />
            ) : (
              <ArrowDownIcon className="h-4 w-4" />
            )}
          </Button>
        </div>
        {filteredAndSortedFunctions.map((func) => (
          <Button
            key={func.id}
            variant="ghost"
            className={`w-full justify-start rounded-none border-b px-4 py-6 last:border-0 ${
              selectedFunction === func.id ? 'bg-muted' : ''
            }`}
            onClick={() => setSelectedFunction(func.id)}
          >
            <div>
              <div className="font-medium">{func.code}</div>
              <div className="text-sm text-muted-foreground">
                {func.description}
              </div>
            </div>
          </Button>
        ))}
        {filteredAndSortedFunctions.length === 0 && (
          <div className="p-4 text-center text-sm text-muted-foreground">
            No functions found
          </div>
        )}
      </div>
    </div>
  );
}