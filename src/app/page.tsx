import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
    return (
        <Card className="w-full px-[16px] md:flex-row md:items-center md:px-[50px]
         md:my-[40px] lg:my-[75px] xl:my-[100px]">
            <CardHeader className="flex items-center p-0 xl:mr-[60px]">
                <Avatar className="w-[72px] h-[72px] sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[200px] lg:w-[230px] lg:h-[230px]">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/154464565?v=4" />
                    <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <CardTitle className="text-[20px] md:text-center">Ângelo Rodrigues</CardTitle>
                <CardDescription className="md:text-center">Full Stack Develop</CardDescription>
            </CardHeader>
            <div className="md:flex-col">
                <CardContent className="text-justify p-0">
                    <CardTitle className="text-[20px] mb-[15px]">Sobre Mim</CardTitle>
                    <p className="text-[#A9A9A9] font-light mb-[15px]">Olá, eu
                        sou Ângelo, acadêmico em Sistemas de Informação - UNIFESSPA
                        e desenvolvedor web júnior apaixonado por criar soluções
                        digitais.</p>
                    <p className="text-[#A9A9A9] font-light mb-[15px]">Desde o
                        início da minha jornada, sempre fui fascinado por tecnologia
                        e como ela pode melhorar a vida das pessoas, e é essa
                        paixão que me motiva a aprimorar minhas habilidades.</p>
                    <p className="text-[#A9A9A9] font-light mb-[15px]">Possuo
                        experiência em JavaScript, TypeScript, React, Node.js,
                        gosto de trabalhar em projetos que desafiem minha
                        criatividade e habilidades técnicas.</p>
                </CardContent>
                <CardContent className="p-0">
                    <CardTitle className="text-[20px] mb-[15px]">Minhas Experiências</CardTitle>
                    <h1 className="font-semibold mb-[5px]">🦎 Exception
                        Júnior | Ago 2024 - Presente</h1>
                    <p className="text-[#A9A9A9] font-light mb-[15px] text-justify">Empresa
                        Júnior na Universidade Federal do Sul e Sudeste do Pará,
                        atuando como Desenvolvedor Full Stack.</p>
                    <h1 className="font-semibold mb-[5px]">🐴 Steed
                        | Fev 2025 - Presente</h1>
                    <p className="text-[#A9A9A9] font-light text-justify">Startup
                        especializada em desenvolvimento de sites, onde atuo como
                        Fundador e Desenvolvedor Full Stack.</p>
                </CardContent>
            </div>
        </Card>
    )
}