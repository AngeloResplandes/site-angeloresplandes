import type { Metadata } from "next"
import AnimatedContent from "@/components/animations/animatedContent/AnimatedContent"
import FormContact from "@/components/form-contact"

export const metadata: Metadata = {
    title: "Angelo Rodrigues - Contato"
}

export default function Contato() {
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
                <FormContact />
            </AnimatedContent>
        </div>
    )
}