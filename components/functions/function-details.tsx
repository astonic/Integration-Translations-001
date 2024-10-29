"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit2, Trash2 } from "lucide-react";

export function FunctionDetails() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Function Details</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="text-destructive">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div>
          <div className="text-sm font-medium text-muted-foreground">
            Function Code
          </div>
          <div className="mt-1">FUNC_001</div>
        </div>
        <div>
          <div className="text-sm font-medium text-muted-foreground">
            Description
          </div>
          <div className="mt-1">Sample function description</div>
        </div>
      </CardContent>
    </Card>
  );
}