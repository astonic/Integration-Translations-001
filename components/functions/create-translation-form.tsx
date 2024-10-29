"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  key1: z.string().min(1),
  key2: z.string().optional(),
  key3: z.string().optional(),
  key4: z.string().optional(),
  key5: z.string().optional(),
  value: z.string().min(1),
})

export default function CreateTranslationForm({ functionId }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      key1: "",
      key2: "",
      key3: "",
      key4: "",
      key5: "",
      value: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Implement create functionality
    console.log({ ...values, functionId })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
        <Button type="submit" className="w-full">Create Translation</Button>
      </form>
    </Form>
  );
}