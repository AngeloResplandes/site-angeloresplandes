import type { Metadata } from "next"
import { CardContent, CardTitle } from "@/components/ui/card"
import AnimatedContent from "@/components/animations/animatedContent/AnimatedContent"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Página não encontrada!"
}

export default function NotFound() {
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
                        Página não encontrada!
                    </CardTitle>
                    <p className="text-[#A9A9A9] font-light mb-[15px] text-justify">
                        Ops, não conseguimos encontrar o que você está procurando.
                    </p>
                    <p className="text-[#A9A9A9] font-light mb-[15px] text-justify">
                        Parece que você digitou um endereço errado ou a página foi removida. 😕
                    </p>
                    <h1 className="font-medium">
                        Volte para a <Link href="/" className="text-white hover:underline">página inicial</Link>
                    </h1>
                </CardContent>
            </AnimatedContent>
        </div>
    )
}