import { CardContent, CardTitle } from "@/components/ui/card"
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaJava,
    FaReact,
    FaNodeJs
} from "react-icons/fa"
import {
    SiTypescript,
    SiPython,
    SiSwift,
    SiTailwindcss,
    SiZod,
    SiExpress,
    SiSequelize,
    SiGit,
    SiMysql,
    SiSqlite,
    SiMongodb
} from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function Stack() {
    return (
        <div className="w-full md:flex-col">
            <CardContent className="p-0">
                <CardTitle className="text-[20px] mb-[15px]">Development Stack</CardTitle>
                <h1 className="font-medium mb-[15px]">
                    Linguagens de Marcação/Programação
                </h1>
                <div className="flex mb-[15px] flex-wrap gap-4">
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <FaHtml5 className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">HTML5</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <FaCss3Alt className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">CSS3</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <FaJs className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">JavaScript</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <SiTypescript className="w-[33px] h-[33px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">TypeScript</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <FaJava className="w-[33px] h-[33px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Java</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <SiPython className="w-[33px] h-[33px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Python</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <SiSwift className="w-[33px] h-[33px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Swift</PopoverContent>
                    </Popover>
                </div>
                <h1 className="font-medium mb-[15px]">
                    Bibliotecas, Frameworks e Tecnologias
                </h1>
                <div className="flex mb-[15px] flex-wrap gap-4">
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <FaReact className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">React</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <TbBrandNextjs className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Next.js</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <SiTailwindcss className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Tailwind CSS</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <SiZod className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Zod</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <FaNodeJs className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Node.js</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <SiExpress className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Express</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <SiSequelize className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Sequelize</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <SiGit className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">Git</PopoverContent>
                    </Popover>
                </div>
                <h1 className="font-medium mb-[15px]">
                    Banco de Dados
                </h1>
                <div className="flex flex-wrap gap-4">
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <SiMysql className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">MySQL</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <SiSqlite className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">SQLite</PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger className="w-[50px] h-[50px] flex justify-center items-center border rounded-[7px] hover:border-[#007DFF] text-[#A9A9A9] hover:text-white cursor-pointer">
                            <SiMongodb className="w-[35px] h-[35px]" />
                        </PopoverTrigger>
                        <PopoverContent className="w-full rounded-[7px]">MongoDB</PopoverContent>
                    </Popover>
                </div>
            </CardContent>
        </div>
    )
}