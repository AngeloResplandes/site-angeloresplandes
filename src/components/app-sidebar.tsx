import { Home, Computer, GraduationCap, Contact } from "lucide-react"
import "@/assets/css/globals.css"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

export const items = [
    {
        title: "Início",
        url: "/",
        icon: Home,
    },
    {
        title: "Stack",
        url: "/stack",
        icon: Computer,
    },
    {
        title: "Cerificações",
        url: "/certificacoes",
        icon: GraduationCap,
    },
    {
        title: "Contato",
        url: "/contato",
        icon: Contact,
    }
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-[18px] mb-[10px]">Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon className="color-icons" />
                                            <span className="text-[16px]">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}