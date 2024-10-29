"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  userEmail: z.string().email("Invalid email address"),
  functionCode: z.string().min(1, "Function Code is required"),
  status: z.enum(["active", "inactive"]),
});

interface Permission {
  id: string;
  userEmail: string;
  functionCode: string;
  assignedDate: string;
  status: "active" | "inactive";
}

interface PermissionFormProps {
  mode: "create" | "edit";
  permission?: Permission;
}

export function PermissionForm({ mode, permission }: PermissionFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userEmail: permission?.userEmail || "",
      functionCode: permission?.functionCode || "",
      status: permission?.status || "active",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (mode === "create") {
      // Implement create logic here
      console.log("Creating:", values);
    } else {
      // Implement update logic here
      console.log("Updating:", values);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-6">
        <FormField
          control={form.control}
          name="userEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="user@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="functionCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Function Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter function code..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-3 pt-4">
          <Button type="submit">
            {mode === "create" ? "Create Permission" : "Save Changes"}
          </Button>
        </div>
      </form>
    </Form>
  );
}