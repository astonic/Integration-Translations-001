"use client";

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pencil, Trash2 } from 'lucide-react';
import { useTranslations } from '@/hooks/use-translations';

interface TranslationsTableProps {
  functionId: number;
}

export function TranslationsTable({ functionId }: TranslationsTableProps) {
  const { translations } = useTranslations(functionId);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Key1</TableHead>
          <TableHead>Key2</TableHead>
          <TableHead>Key3</TableHead>
          <TableHead>Key4</TableHead>
          <TableHead>Key5</TableHead>
          <TableHead>Value</TableHead>
          <TableHead className="w-[100px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {translations.map((translation) => (
          <TableRow key={translation.id}>
            <TableCell>{translation.key1}</TableCell>
            <TableCell>{translation.key2}</TableCell>
            <TableCell>{translation.key3}</TableCell>
            <TableCell>{translation.key4}</TableCell>
            <TableCell>{translation.key5}</TableCell>
            <TableCell>{translation.value}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}