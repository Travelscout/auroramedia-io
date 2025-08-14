"use client";

import { useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FormSchema = z.object({
  name: z.string().min(2, "Bitte gib deinen Namen ein"),
  email: z.string().email("Bitte eine gültige E-Mail eingeben"),
  message: z.string().min(10, "Bitte eine Nachricht mit mindestens 10 Zeichen eingeben"),
});

type FormValues = z.infer<typeof FormSchema>;

export default function KontaktForm(): ReactElement {
  const [sent, setSent] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema) });

  const onSubmit = async (values: FormValues) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      setSent(true);
      reset();
    }
  };

  return (
    <Card>
      <CardContent>
        {sent ? (
          <div className="text-green-600">Danke! Wir melden uns zeitnah.</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <Input id="name" {...register("name")} />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">E-Mail</label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Nachricht</label>
              <textarea id="message" className="w-full rounded-md border border-slate-200 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400" rows={5} {...register("message")} />
              {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Senden..." : "Absenden"}</Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}


