"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, ArrowUpDown, Search } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { TranslationForm } from "./translation-form";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";

interface Translation {
  id: string;
  functionCode: string;
  key1: string;
  key2?: string;
  key3?: string;
  key4?: string;
  key5?: string;
  value: string;
}

type SortField = 'functionCode' | 'key1' | 'value';
type SortDirection = 'asc' | 'desc';

export function TranslationsTable() {
  const [selectedTranslation, setSelectedTranslation] = useState<Translation | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>('functionCode');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const translations: Translation[] = [
    {
      id: "1",
      functionCode: "FUNC_001",
      key1: "en",
      key2: "menu",
      key3: "home",
      value: "Home Page"
    },
    {
      id: "2",
      functionCode: "FUNC_001",
      key1: "es",
      key2: "menu",
      key3: "home",
      value: "Página Principal"
    },
    {
      id: "3",
      functionCode: "FUNC_002",
      key1: "en",
      key2: "button",
      key3: "save",
      value: "Save Changes"
    }
  ];

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredAndSortedTranslations = useMemo(() => {
    return translations
      .filter(translation => 
        translation.functionCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        translation.key1.toLowerCase().includes(searchQuery.toLowerCase()) ||
        translation.value.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        const direction = sortDirection === 'asc' ? 1 : -1;
        return a[sortField].localeCompare(b[sortField]) * direction;
      });
  }, [translations, searchQuery, sortField, sortDirection]);

  const SortButton = ({ field, label }: { field: SortField; label: string }) => (
    <Button
      variant="ghost"
      onClick={() => toggleSort(field)}
      className="h-8 px-2 hover:bg-muted"
    >
      {label}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search translations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <SortButton field="functionCode" label="Function Code" />
              </TableHead>
              <TableHead>
                <SortButton field="key1" label="Key1" />
              </TableHead>
              <TableHead>Key2</TableHead>
              <TableHead>Key3</TableHead>
              <TableHead>Key4</TableHead>
              <TableHead>Key5</TableHead>
              <TableHead>
                <SortButton field="value" label="Value" />
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedTranslations.map((translation) => (
              <TableRow key={translation.id}>
                <TableCell>{translation.functionCode}</TableCell>
                <TableCell>{translation.key1}</TableCell>
                <TableCell>{translation.key2}</TableCell>
                <TableCell>{translation.key3}</TableCell>
                <TableCell>{translation.key4}</TableCell>
                <TableCell>{translation.key5}</TableCell>
                <TableCell>{translation.value}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => setSelectedTranslation(translation)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="w-[400px] sm:w-[540px]">
                        <SheetHeader>
                          <SheetTitle>Edit Translation</SheetTitle>
                        </SheetHeader>
                        {selectedTranslation && (
                          <TranslationForm 
                            mode="edit"
                            translation={selectedTranslation}
                          />
                        )}
                      </SheetContent>
                    </Sheet>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filteredAndSortedTranslations.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No translations found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}