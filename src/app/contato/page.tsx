import type { Metadata } from "next"
import AnimatedContent from "@/components/animations/animatedContent/AnimatedContent"
import { CardContent, CardTitle } from "@/components/ui/card"
import {
    SiWhatsapp,
} from "react-icons/si"
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaInstagram } from "react-icons/fa"

export const metadata: Metadata = {
    title: "Contato - Ângelo Resplandes"
}

export default function Contato() {
    const itemsContact = [
        {
            icon: SiWhatsapp,
            url: "https://wa.me/+5594981691243?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Desejo%20conversar%20sobre%20um%20poss%C3%ADvel%20projeto%20web!",
            content: "WhatsApp"
        },
        {
            icon: MdOutlineEmail,
            url: "mailto:angeloodrigues@gmail.com",
            content: "Email"
        },
        {
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/angeloresplandes/",
            content: "Linkedin"
        },
        {
            icon: FaInstagram,
            url: "https://www.instagram.com/angelo_resplandes/",
            content: "Instagram"
        },
    ]

    return (
        <div className="w-full overflow-hidden md:flex-col md:pl-[290px]">
            <AnimatedContent
                distance={100}
                reverse={false}
                initialOpacity={0.2}
                animateOpacity
                scale={1.0}
                threshold={0.1}
            >
                <CardContent className="p-0">
                    <CardTitle className="text-[20px] mb-[15px]">
                        Fale Comigo!
                    </CardTitle>
                    <h1 className="font-medium">
                        Ficou com alguma dúvida, quer compartilhar uma ideia ou precisa de um orçamento?
                    </h1>
                    <h1 className="font-medium mb-[15px]">
                        Estou aqui pra ajudar 😎
                    </h1>
                    <div className="flex flex-wrap gap-4 mb-[15px]">
                        {itemsContact.map((item) => (
                            <div key={item.content}>
                                <a href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={item.content}
                                    className="w-[50px] h-[50px] 
                                flex justify-center items-center border 
                                rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] 
                                hover:text-white active:text-white 
                                active:border-[#007DFF] cursor-pointer 
                                transition-all duration-300 hover:bg-gradient-to-b">
                                    <item.icon className="w-[32px] h-[32px]" />
                                </a>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </AnimatedContent>
        </div>
    )
}