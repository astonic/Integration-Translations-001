"use client";

import { NewFunctionButton } from "./new-function-button";
import { FunctionList } from "./function-list";
import { FunctionDetails } from "./function-details";
import { SearchBar } from "./search-bar";
import { useState } from "react";

export function FunctionManagement() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Function Code</h1>
          <p className="text-muted-foreground">
            Manage your functions and their translations
          </p>
        </div>
        <NewFunctionButton />
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-2">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <FunctionList searchQuery={searchQuery} />
        </div>
        <div className="col-span-3">
          <FunctionDetails />
        </div>
      </div>
    </div>
  );
}