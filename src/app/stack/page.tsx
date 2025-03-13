import { CardContent, CardTitle } from "@/components/ui/card"
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaSwift } from "react-icons/fa";

export default function Stack() {
    return (
        <div className="w-full md:flex-col">
            <CardContent className="mt-[10px] p-0">
                <CardTitle className="text-[20px] mb-[15px]">Development Stack</CardTitle>
                <h1 className="font-medium mb-[5px]">
                    Linguagens de Marcação/Programação
                </h1>
                <div className="flex mb-[15px]">
                    <IoLogoHtml5 />
                    <IoLogoCss3 />
                    <IoLogoJavascript />
                    <SiTypescript />
                    <FaJava />
                    <FaSwift />
                </div>
                <h1 className="font-medium mb-[5px]">
                    Bibliotecas/Frameworks/Tecnologias
                </h1>
                <p className="text-[#A9A9A9] font-light mb-[15px] text-justify">
                    Lorem ipslum
                </p>
                <h1 className="font-medium mb-[5px]">
                    Banco de Dados
                </h1>
                <p className="text-[#A9A9A9] font-light mb-[15px] text-justify">
                    Lorem ipslum
                </p>
            </CardContent>
        </div>
    )
}