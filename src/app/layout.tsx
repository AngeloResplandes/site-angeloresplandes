import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "@/assets/css/globals.css";
import { Card } from "@/components/ui/card";

const ibmPlexSans = IBM_Plex_Sans({
    variable: "--font-ibm-plex-sans",
    subsets: ["latin"],
    weight: "400"
});

const ibmPlexMono = IBM_Plex_Mono({
    variable: "--font-ibm-plex-mono",
    subsets: ["latin"],
    weight: "400"
});

export const metadata: Metadata = {
    title: "Angelo Rodrigues",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
            >
                <SidebarProvider>
                    <AppSidebar />
                    <main className="h-[100vh] w-[100vw]">
                        <Card className="flex flex-row justify-between 
                        items-center h-[60px] px-[16px] py-[0px]">
                            <SidebarTrigger />
                            <h1>Angelo Rodrigues</h1>
                        </Card>
                        {children}
                    </main>
                </SidebarProvider>
            </body>
        </html>
    );
}