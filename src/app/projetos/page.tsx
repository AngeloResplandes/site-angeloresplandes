import type { Metadata } from "next"
import { CardContent, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { ExternalLink } from 'lucide-react';
import AnimatedContent from "@/components/animations/animatedContent/AnimatedContent"

export const metadata: Metadata = {
    title: "Projetos | Ângelo Resplandes"
}

export default function Home() {
    const itemsProject = [
        {
            image: "https://smartcitycanaadoscarajas.com.br/images/galeria_em_artigos/CC.png",
            name: "Conecta Canaã",
            description: "Site para serviços públicos e ocorrências em Canaã",
            url: "https://smartcitycanaadoscarajas.com.br/index.php/conectacanaa",
            bgColor: "white",
            className: "w-[100px] h-[75px] rounded-none"
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/212/212807.png",
            name: "Library API",
            description: "Protótipo de um sistema de uma biblioteca",
            url: "https://angeloresplandes.github.io/library-api/",
            bgColor: "white",
            className: "w-[75px] h-[75px] rounded-none"
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/4293/4293927.png",
            name: "Jogo de Plataforma",
            description: "Protótipo de um jogo 2D de plataforma para PC",
            url: "https://angeloresplandes.github.io/platform-game/",
            bgColor: "orange",
            className: "w-[100px] h-[100px] rounded-none"
        }
    ]

    return (
        <div className="w-full overflow-hidden md:flex-col md:pl-[290px]">
            <AnimatedContent>
                <CardContent className="p-0">
                    <CardTitle className="text-[20px] mb-[15px]">Projetos</CardTitle>
                    <div className="flex flex-col gap-4 sm:flex-wrap sm:grid sm:grid-cols-2
                    md:flex md:flex-col lg:flex-wrap lg:grid lg:grid-cols-2">
                        {itemsProject.map((item) => (
                            <CardContent key={item.name} className="flex justify-center 
                            items-center border rounded-[7px] flex-col p-5">
                                <div className="w-full h-[200px] flex justify-center 
                                items-center rounded-[10px] mb-[15px]"
                                    style={{ backgroundColor: `${item.bgColor}` }}>
                                    <Avatar className={item.className}>
                                        <AvatarImage src={item.image} />
                                    </Avatar>
                                </div>
                                <CardTitle className="text-[20px] mb-[5px] text-white">{item.name}</CardTitle>
                                <p className="text-[#A9A9A9] mb-[15px] font-light text-justify">
                                    {item.description}
                                </p>
                                <a href={item.url} target="_blank"
                                    className="w-[50px] h-[50px] flex justify-center 
                                items-center border rounded-[7px] text-[#A9A9A9] 
                                hover:border-[#007DFF] hover:text-white 
                                active:text-white active:border-[#007DFF] 
                                transition-all duration-300 hover:bg-gradient-to-b">
                                    <ExternalLink />
                                </a>
                            </CardContent>
                        ))}
                    </div>
                </CardContent>
            </AnimatedContent>
        </div>
    )
}