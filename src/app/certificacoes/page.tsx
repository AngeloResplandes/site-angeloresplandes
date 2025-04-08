import type { Metadata } from "next"
import { CardContent, CardTitle } from "@/components/ui/card"
import AnimatedContent from "@/components/animations/animatedContent/AnimatedContent"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Certificações | Ângelo Resplandes"
}

export default function Certificacoes() {
    const itemsCertifications = [
        {
            title: "HTML5 e CSS3 - 92 Horas",
            description: "B7Web",
            code: "8981311",
            date: "08/2024",
            link: "https://alunos.b7web.com.br/media/certificates/certificado_8981311.jpg"
        },
        {
            title: "Javascript - 66 Horas",
            description: "B7Web",
            code: "4002557",
            date: "03/2025",
            link: "https://alunos.b7web.com.br/media/certificates/certificado_4002557.jpg"
        },
        {
            title: "TailwindCSS - 20 Horas",
            description: "B7Web",
            code: "7842844",
            date: "03/2025",
            link: "https://alunos.b7web.com.br/media/certificates/certificado_7842844.jpg"
        },
        {
            title: "Typescript - 20 Horas",
            description: "B7Web",
            code: "5166645",
            date: "03/2025",
            link: "https://alunos.b7web.com.br/media/certificates/certificado_5166645.jpg"
        },
        {
            title: "Banco de Dados - 20 Horas",
            description: "B7Web",
            code: "1533629",
            date: "09/2024",
            link: "https://alunos.b7web.com.br/media/certificates/certificado_1533629.jpg"
        }
    ]

    return (
        <div className="w-full overflow-hidden md:flex-col md:pl-[290px]">
            <AnimatedContent>
                <CardContent className="p-0">
                    <CardTitle className="text-[20px] mb-[15px]">Minhas Certificações</CardTitle>
                    <div className="flex flex-col gap-4 sm:flex-wrap sm:grid sm:grid-cols-2
                    md:flex md:flex-col lg:flex-wrap lg:grid lg:grid-cols-2">
                        {itemsCertifications.map((item) => (
                            <Link href={item.link} target="_blank" key={item.title}>
                                <Button className="w-full h-full bg-[--color-background] 
                                flex flex-col items-start border rounded-[7px] 
                                cursor-pointer transition-all duration-300 hover:bg-gradient-to-b
                                hover:bg-[#181818] active:bg-[#181818]">
                                    <h1 className="text-[16px] font-bold">{item.title}</h1>
                                    <p className="text-[#A9A9A9] text-[14px] font-light ">Curso: {item.description}</p>
                                    <p className="text-[#A9A9A9] text-[14px] font-light ">Código: {item.code}</p>
                                    <p className="text-[#A9A9A9] text-[14px] font-light ">Data: {item.date}</p>
                                </Button>
                            </Link>
                        ))}
                    </div>
                </CardContent>
            </AnimatedContent>
        </div>
    )
}
