import type { Metadata } from "next"
import { CardContent, CardTitle } from "@/components/ui/card"
import AnimatedContent from "@/components/animations/animatedContent/AnimatedContent"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Angelo Rodrigues - Certificações"
}

export const itemsCertifications = [
    {
        title: "HTML5 e CSS3",
        description: "Certificação de HTML5 e CSS3",
        link: "https://alunos.b7web.com.br/media/certificates/certificado_8981311.jpg"
    },
    {
        title: "Javascript",
        description: "Certificação de Javascript",
        link: "https://alunos.b7web.com.br/media/certificates/certificado_4002557.jpg"
    },
    {
        title: "TailwindCSS",
        description: "Certificação de TailwindCSS",
        link: "https://alunos.b7web.com.br/media/certificates/certificado_7842844.jpg"
    },
    {
        title: "Typescript",
        description: "Certificação de Typescript",
        link: "https://alunos.b7web.com.br/media/certificates/certificado_5166645.jpg"
    },
    {
        title: "Banco de Dados",
        description: "Certificação de Banco de Dados SQL",
        link: "https://alunos.b7web.com.br/media/certificates/certificado_1533629.jpg"
    }

]

export default function Home() {
    return (
        <div className="w-full overflow-hidden md:flex-col md:pl-[290px]">
            <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                initialOpacity={0.2}
                animateOpacity
                scale={1.0}
                threshold={0.1}
            >
                <CardContent className="p-0">
                    <CardTitle className="text-[20px] mb-[15px]">Minhas Certificações</CardTitle>
                    <div className="flex flex-col gap-4 mb-[15px]">
                        {itemsCertifications.map((item) => (
                            <Link href={item.link} target="_blank" key={item.title}>
                                <Button className="w-full h-full bg-[--color-background] 
                                flex flex-col items-start border rounded-[7px] 
                                cursor-pointer transition-all duration-300 hover:bg-gradient-to-b
                                hover:bg-[#181818] active:bg-[#181818]">
                                    <h1 className="text-[16px] font-bold">{item.title}</h1>
                                    <p className="text-[#A9A9A9] text-[14px] font-light ">{item.description}</p>
                                </Button>
                            </Link>
                        ))}
                    </div>
                </CardContent>
            </AnimatedContent>
        </div>
    )
}