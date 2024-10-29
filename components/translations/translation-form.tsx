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

const formSchema = z.object({
  functionCode: z.string().min(1, "Function Code is required"),
  key1: z.string().min(1, "Key1 is required"),
  key2: z.string().optional(),
  key3: z.string().optional(),
  key4: z.string().optional(),
  key5: z.string().optional(),
  value: z.string().min(1, "Value is required"),
});

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

interface TranslationFormProps {
  mode: "create" | "edit";
  translation?: Translation;
}

export function TranslationForm({ mode, translation }: TranslationFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      functionCode: translation?.functionCode || "",
      key1: translation?.key1 || "",
      key2: translation?.key2 || "",
      key3: translation?.key3 || "",
      key4: translation?.key4 || "",
      key5: translation?.key5 || "",
      value: translation?.value || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (mode === "create") {
      console.log("Creating:", values);
    } else {
      console.log("Updating:", values);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-6">
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
          name="key1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key1</FormLabel>
              <FormControl>
                <Input placeholder="Enter key1..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="key2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key2</FormLabel>
              <FormControl>
                <Input placeholder="Enter key2..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="key3"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key3</FormLabel>
              <FormControl>
                <Input placeholder="Enter key3..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="key4"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key4</FormLabel>
              <FormControl>
                <Input placeholder="Enter key4..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="key5"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key5</FormLabel>
              <FormControl>
                <Input placeholder="Enter key5..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Value</FormLabel>
              <FormControl>
                <Input placeholder="Enter translation value..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-3 pt-4">
          <Button type="submit">
            {mode === "create" ? "Create Translation" : "Save Changes"}
          </Button>
        </div>
      </form>
    </Form>
  );
}