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
    SiGooglechrome,
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

export default function Stack() {
    return (
        <div className="w-full md:flex-col md:pl-[290px]">
            <CardContent className="p-0">
                <CardTitle className="text-[20px] mb-[15px]">Development Stack</CardTitle>
                <h1 className="font-medium mb-[15px]">
                    Linguagens de Marcação/Programação
                </h1>
                <div className="flex flex-wrap gap-4 mb-[15px]">
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiHtml5 className="w-[32px] h-[32px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">HTML5</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiCss3 className="w-[32px] h-[32px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">CSS3</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiJavascript className="w-[32px] h-[32px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">JavaScript</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiTypescript className="w-[33px] h-[33px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">TypeScript</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <FaJava className="w-[33px] h-[33px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Java</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiPython className="w-[33px] h-[33px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Python</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiSwift className="w-[33px] h-[33px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Swift</PopoverContent>
                    </Popover>
                </div>
                <h1 className="font-medium mb-[15px]">
                    Bibliotecas, Frameworks e Tecnologias
                </h1>
                <div className="flex flex-wrap gap-4 mb-[15px]">
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiReact className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">ReactJS</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <TbBrandNextjs className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Next.js</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiTailwindcss className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">TailwindCSS</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiShadcnui className="w-[33px] h-[33px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Shadcn/ui</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiZod className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Zod</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiNodedotjs className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Node.js</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiExpress className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Express</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiSequelize className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Sequelize</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiGit className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Git</PopoverContent>
                    </Popover>
                </div>
                <h1 className="font-medium mb-[15px]">
                    Banco de Dados
                </h1>
                <div className="flex flex-wrap gap-4 mb-[15px]">
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiMysql className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">MySQL</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiSqlite className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">SQLite</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiMongodb className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">MongoDB</PopoverContent>
                    </Popover>
                </div>
                <h1 className="font-medium mb-[15px]">
                    Apps e Softwares
                </h1>
                <div className="flex flex-wrap gap-4">
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <VscVscode className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Visual Studio Code</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiPostman className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Postman</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiFigma className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Figma</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiGooglechrome className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Google Chrome</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiDbeaver className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Dbeaver</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiXcode className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Xcode</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiWarp className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Warp</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] text-[#A9A9A9] hover:border-[#007DFF] hover:text-white active:text-white active:border-[#007DFF] cursor-pointer">
                            <SiLinux className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Linux</PopoverContent>
                    </Popover>
                </div>
            </CardContent>
        </div>
    )
}