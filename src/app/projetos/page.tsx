import type { Metadata } from "next"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import AnimatedContent from "@/components/animations/animatedContent/AnimatedContent"

export const metadata: Metadata = {
    title: "Projetos | Ângelo Resplandes"
}

export default function Home() {
    const itemsProject = [
        {
            content: "Projeto 1"
        },
        {
            content: "Projeto 2"
        },
        {
            content: "Projeto 3"
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
                            <Card key={item.content} className="flex justify-center 
                            items-center border rounded-[7px] text-[#A9A9A9] 
                            hover:border-[#007DFF] hover:text-white active:text-white 
                            active:border-[#007DFF] transition-all duration-300 
                            hover:bg-gradient-to-b">
                                <CardTitle className="text-[20px] mb-[15px]">{item.content}</CardTitle>

                            </Card>
                        ))}
                    </div>
                </CardContent>
            </AnimatedContent>
        </div>
    )
}