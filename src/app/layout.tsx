import "@/assets/css/globals.css"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TextAnimated from "@/components/text-animated"
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link"

const ibmPlexSans = IBM_Plex_Sans({
    variable: "--font-ibm-plex-sans",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"]
})

const ibmPlexMono = IBM_Plex_Mono({
    variable: "--font-ibm-plex-mono",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
    title: "Angelo Rodrigues",
    description: "",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}>
                <SidebarProvider>
                    <AppSidebar />
                    <main className="w-[100vw] h-auto flex items-center">
                        <Card className="w-full flex flex-row-reverse justify-between items-center 
                        fixed top-0 h-[60px] px-[16px] md:px-[50px] py-[0px] border-b z-50">
                            <nav className="hidden md:flex md:gap-7">
                                <Link href="/" className="hover:underline">
                                    Início
                                </Link>
                                <Link href="/stack" className="hover:underline">
                                    Stack
                                </Link>
                                <Link href="/contato" className="hover:underline">
                                    Contato
                                </Link>
                            </nav>
                            <SidebarTrigger className="md:hidden" />
                            <TextAnimated />
                        </Card>
                        <Card className="w-full mt-[60px] px-[16px] flex 
                        justify-between md:flex-row md:items-center md:px-[50px]">
                            <CardHeader className="flex items-center p-0 md:mr-[60px]">
                                <Avatar className="w-[85px] h-[85px] mb-[10px] 
                                sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[200px] 
                                lg:w-[230px] lg:h-[230px] md:rounded-[20px]">
                                    <AvatarImage src="https://avatars.githubusercontent.com/u/154464565?v=4" />
                                    <AvatarFallback className="md:rounded-[20px]">AR</AvatarFallback>
                                </Avatar>
                                <CardTitle className="text-[20px] md:text-center">
                                    Ângelo Rodrigues
                                </CardTitle>
                                <CardDescription className="text-[16px] md:text-center mb-[5px]">
                                    Full Stack Developer
                                </CardDescription>
                                <div className="flex flex-wrap gap-6 mb-[20px] md:mb-0">
                                    <a href="https://www.linkedin.com/in/%C3%A2ngelo-rodrigues-a60087247/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-[25px] h-[25px] flex justify-center items-center text-[#A9A9A9] hover:text-white">
                                        <FaLinkedin className="w-[25px] h-[25px]" title="LinkedIn" />
                                    </a>
                                    <a href="https://www.instagram.com/angelorodriguesz_/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-[25px] h-[25px] flex justify-center items-center text-[#A9A9A9] hover:text-white">
                                        <FaInstagram className="w-[25px] h-[25px]" title="Instagram" />
                                    </a>
                                    <a href="https://github.com/AngeloResplandes"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-[25px] h-[25px] flex justify-center items-center text-[#A9A9A9] hover:text-white">
                                        <FaGithub className="w-[25px] h-[25px]" title="GitHub" />
                                    </a>
                                </div>
                            </CardHeader>
                            {children}
                        </Card>
                    </main>
                </SidebarProvider>
            </body>
        </html>
    )
}