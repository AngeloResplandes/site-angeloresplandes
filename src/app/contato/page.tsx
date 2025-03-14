"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CardContent, CardTitle } from "@/components/ui/card"
import { sendContactForm } from "@/services/contact"

const formSchema = z.object({
    name: z.string().min(2, "O nome precisa ter pelo menos 2 caracteres"),
    number: z.string().min(8, "Digite um número válido"),
    email: z.string().email("Digite um e-mail válido"),
    description: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres"),
})

export default function Contato() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", number: "", email: "", description: "" },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const result = await sendContactForm(values)
        alert(result.message)
        if (result.success) {
            form.reset()
        }
    }

    return (
        <div className="w-full md:flex-col md:pl-[290px]">
            <CardContent className="p-0">
                <CardTitle className="text-[20px] mb-[15px] flex justify-center">Fale Comigo!</CardTitle>
                <div className="flex justify-center">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[270px] sm:w-[350px]">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="label">Nome</FormLabel>
                                        <FormControl>
                                            <Input className="input rounded-[7px]" placeholder="Digite seu nome" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="number"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="label">Número</FormLabel>
                                        <FormControl>
                                            <Input className="input rounded-[7px]" type="number" placeholder="Digite seu número" {...field} />
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
                                        <FormLabel className="label">Email</FormLabel>
                                        <FormControl>
                                            <Input className="input rounded-[7px]" type="email" placeholder="Digite seu e-mail" {...field} />
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
                                        <FormLabel className="label">Mensagem</FormLabel>
                                        <FormControl>
                                            <Textarea className="h-[100px] input rounded-[7px] resize-none" placeholder="Digite sua mensagem" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-center">
                                <Button className="w-[100px] rounded-[7px] cursor-pointer" type="submit">Enviar</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </CardContent>
        </div>
    )
}