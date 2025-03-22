import type { Metadata } from "next"
import { CardContent, CardTitle } from "@/components/ui/card"
import {
    FaJava
} from "react-icons/fa"
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiPython,
    SiSwift,
    SiTailwindcss,
    SiShadcnui,
    SiZod,
    SiExpress,
    SiSequelize,
    SiGit,
    SiMysql,
    SiSqlite,
    SiMongodb,
    SiPostman,
    SiFigma,
    SiBrave,
    SiDbeaver,
    SiXcode,
    SiWarp,
    SiLinux
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { TbBrandNextjs } from "react-icons/tb"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import AnimatedContent from "@/components/animations/animatedContent/AnimatedContent"

export const metadata: Metadata = {
    title: "Angelo Rodrigues - Stack"
}

export const itemsProgramming = [
    {
        icon: SiHtml5,
        content: "HTML5"
    },
    {
        icon: SiCss3,
        content: "CSS3"
    },
    {
        icon: SiJavascript,
        content: "JavaScript"
    },
    {
        icon: SiTypescript,
        content: "TypeScript"
    },
    {
        icon: FaJava,
        content: "Java"
    },
    {
        icon: SiPython,
        content: "Python"
    },
    {
        icon: SiSwift,
        content: "Swift"
    }
]

export const itemsFrameworks = [
    {
        icon: SiReact,
        content: "ReactJS"
    },
    {
        icon: TbBrandNextjs,
        content: "NextJS"
    },
    {
        icon: SiTailwindcss,
        content: "TailwindCSS"
    },
    {
        icon: SiShadcnui,
        content: "Shadcn/ui"
    },
    {
        icon: SiZod,
        content: "Zod"
    },
    {
        icon: SiNodedotjs,
        content: "Node.js"
    },
    {
        icon: SiExpress,
        content: "Express"
    },
    {
        icon: SiSequelize,
        content: "Sequelize"
    },
    {
        icon: SiGit,
        content: "Git"
    }
]

export const itemsDatabases = [
    {
        icon: SiMysql,
        content: "MySQL"
    },
    {
        icon: SiSqlite,
        content: "SQLite"
    },
    {
        icon: SiMongodb,
        content: "MongoDB"
    }
]

export const itemsTools = [
    {
        icon: VscVscode,
        content: "Visual Studio Code"
    },
    {
        icon: SiPostman,
        content: "Postman"
    },
    {
        icon: SiFigma,
        content: "Figma"
    },
    {
        icon: SiBrave,
        content: "Brave"
    },
    {
        icon: SiDbeaver,
        content: "Dbeaver"
    },
    {
        icon: SiXcode,
        content: "Xcode"
    },
    {
        icon: SiWarp,
        content: "Warp"
    },
    {
        icon: SiLinux,
        content: "Linux"
    }
]

export default function Stack() {
    return (
        <div className="w-full overflow-hidden md:flex-col md:pl-[290px]">
            <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                initialOpacity={0.2}
                animateOpacity
                scale={1.0}
                threshold={0.1}
            >
                <CardContent className="p-0">
                    <CardTitle className="text-[20px] mb-[15px]">
                        Development Stack
                    </CardTitle>

                    <h1 className="font-medium mb-[15px]">
                        Linguagens de Marcação/Programação
                    </h1>

                    <div className="flex flex-wrap gap-4 mb-[15px]">
                        {itemsProgramming.map((item) => (
                            <Popover key={item.content}>
                                <PopoverTrigger className="w-[50px] h-[50px] 
                                flex justify-center items-center border 
                                rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] 
                                hover:text-white active:text-white 
                                active:border-[#007DFF] cursor-pointer 
                                transition-all duration-300 hover:bg-gradient-to-b">
                                    <item.icon className="w-[32px] h-[32px]" />
                                </PopoverTrigger>
                                <PopoverContent className="w-full rounded-[7px]">{item.content}</PopoverContent>
                            </Popover>
                        ))}
                    </div>

                    <h1 className="font-medium mb-[15px]">
                        Bibliotecas, Frameworks e Tecnologias
                    </h1>

                    <div className="flex flex-wrap gap-4 mb-[15px]">
                        {itemsFrameworks.map((item) => (
                            <Popover key={item.content}>
                                <PopoverTrigger className="w-[50px] h-[50px] 
                                flex justify-center items-center border rounded-[7px] 
                                text-[#A9A9A9] hover:border-[#007DFF] 
                                hover:text-white active:text-white active:border-[#007DFF] 
                                cursor-pointer transition-all duration-300 hover:bg-gradient-to-b">
                                    <item.icon className="w-[35px] h-[35px]" />
                                </PopoverTrigger>
                                <PopoverContent className="w-full rounded-[7px]">{item.content}</PopoverContent>
                            </Popover>
                        ))}
                    </div>

                    <h1 className="font-medium mb-[15px]">
                        Banco de Dados
                    </h1>

                    <div className="flex flex-wrap gap-4 mb-[15px]">
                        {itemsDatabases.map((item) => (
                            <Popover key={item.content}>
                                <PopoverTrigger className="w-[50px] h-[50px] 
                                flex justify-center items-center border 
                                rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] 
                                hover:text-white active:text-white active:border-[#007DFF] 
                                cursor-pointer transition-all duration-300 hover:bg-gradient-to-b">
                                    <item.icon className="w-[35px] h-[35px]" />
                                </PopoverTrigger>
                                <PopoverContent className="w-full rounded-[7px]">{item.content}</PopoverContent>
                            </Popover>
                        ))}
                    </div>

                    <h1 className="font-medium mb-[15px]">
                        Apps e Softwares
                    </h1>

                    <div className="flex flex-wrap gap-4">
                        {itemsTools.map((item) => (
                            <Popover key={item.content}>
                                <PopoverTrigger className="w-[50px] h-[50px] 
                                flex justify-center items-center border rounded-[7px] 
                                text-[#A9A9A9] hover:border-[#007DFF] hover:text-white 
                                active:text-white active:border-[#007DFF] 
                                cursor-pointer transition-all duration-300 hover:bg-gradient-to-b">
                                    <item.icon className="w-[35px] h-[35px]" />
                                </PopoverTrigger>
                                <PopoverContent className="w-full rounded-[7px]">{item.content}</PopoverContent>
                            </Popover>
                        ))}
                    </div>
                </CardContent>
            </AnimatedContent>
        </div>
    )
}