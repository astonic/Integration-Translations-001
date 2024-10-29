import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Function Management System",
  description: "Manage your functions, permissions, and translations",
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground">
            Here's an overview of your system
          </p>
        </div>
      </section>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Add your dashboard cards here */}
      </div>
    </div>
  );
}