import { Card } from "@/components/ui/card"
import Link from "next/link"
import { SidebarTrigger } from "@/components/ui/sidebar"
import TextAnimated from "@/components/text-animated"

export default function Header() {
    return (
        <Card className="w-full flex flex-row-reverse justify-between items-center fixed top-0 h-[60px] px-[16px] md:px-[100px] py-[0px] border-b z-50">
            <nav className="hidden md:flex md:gap-7">
                <Link href="/" className="hover:underline">
                    Início
                </Link>
                <Link href="/stack" className="hover:underline">
                    Stack
                </Link>
                <Link href="/certificacoes" className="hover:underline">
                    Certificações
                </Link>
                <Link href="/contato" className="hover:underline">
                    Contato
                </Link>
            </nav>
            <SidebarTrigger className="md:hidden" />
            <TextAnimated />
        </Card>
    )
}