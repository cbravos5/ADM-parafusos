"use client";

import { Button } from "@/app/components/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/form";
import { Input } from "@/app/components/input";
import { Textarea } from "@/app/components/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').max(50),
  phone: z.string().regex(/\d{2,}\d{4,}\d{4}/g, 'Não é um telefone válido'),
  email: z.string().min(1, 'E-mail é obrigatório').email('Não é um e-mail válido'),
  description: z.string().min(5, "Descreva o motivo do contato").max(250, "Máximo 250 caracteres")
})

type ContactForm = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      description: "",
      email: "",
      name: "",
      phone: ""
    }
  });

  return <Form {...form}>
    <form onSubmit={form.handleSubmit(console.log)} className="w-full space-y-3">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl>
              <Input placeholder="Seu nome" {...field}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefone</FormLabel>
            <FormControl>
              <PatternFormat
                format="(##) #####-####"
                customInput={Input}
                placeholder="Seu telefone"
                onValueChange={(values) => {
                  form.setValue('phone', values.value);
                  form.trigger('phone');
                }}
                onBlur={field.onBlur}
                getInputRef={() => field.ref}
                disabled={field.disabled}
                name={field.name}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>E-mail</FormLabel>
            <FormControl>
              <Input placeholder="Seu email" {...field}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Razão do contato</FormLabel>
            <FormControl>
              <Textarea placeholder="Razão do seu contato" rows={6}  {...field}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button type="submit" color="blue" size="small" className="!mt-5">FALE COM NOSSOS VENDEDORES AGORA!</Button>
    </form>
  </Form>
}