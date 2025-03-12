import "@/assets/css/globals.css"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TextAnimated from "@/components/text-animated"
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
            <body
                className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
            >
                <SidebarProvider>
                    <AppSidebar />
                    <main className="h-[100vh] w-[100vw]">
                        <Card className="w-full flex flex-row-reverse justify-between items-center 
                        fixed h-[60px] px-[16px] md:px-[50px] py-[0px] border-b z-50">
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
                        <Card className="w-full mt-[60px] px-[16px] flex justify-center 
        md:flex-row md:items-center md:px-[50px] xl:mt-[80px]">
                            <CardHeader className="flex items-center p-0 md:mr-[60px]">
                                <Avatar className="w-[72px] h-[72px] mb-[10px] sm:w-[100px] sm:h-[100px] 
                md:w-[200px] md:h-[200px] lg:w-[230px] lg:h-[230px] md:rounded-[20px]">
                                    <AvatarImage src="https://avatars.githubusercontent.com/u/154464565?v=4" />
                                    <AvatarFallback>AR</AvatarFallback>
                                </Avatar>
                                <CardTitle className="text-[20px] md:text-center">
                                    Ângelo Rodrigues
                                </CardTitle>
                                <CardDescription className="text-[16px] md:text-center">
                                    Full Stack Developer
                                </CardDescription>
                            </CardHeader>
                            {children}
                        </Card>
                    </main>
                </SidebarProvider>
            </body>
        </html>
    )
}