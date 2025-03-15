import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Header from "@/components/header"
import { Card } from "@/components/ui/card"
import ProfileAside from "@/components/profile-aside"
import type { Metadata } from "next"
import "@/assets/css/globals.css"

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
    icons: "/favicon.ico",
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
                        <Header />
                        <Card className="w-full pt-[80px] pb-[50px] px-[16px] flex justify-between md:flex-row md:items-center md:px-[100px]">
                            <div className="md:fixed md:top-1/4">
                                <ProfileAside />
                            </div>
                            {children}
                        </Card>
                    </main>
                </SidebarProvider>
            </body>
        </html>
    )
}