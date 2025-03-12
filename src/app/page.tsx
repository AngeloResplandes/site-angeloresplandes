import { CardContent, CardTitle } from "@/components/ui/card"

export default function Home() {
    return (
        <div className="md:flex-col">
            <CardContent className="text-justify mt-[10px] p-0">
                <CardTitle className="text-[20px] mb-[15px]">Sobre Mim</CardTitle>
                <p className="text-[#A9A9A9] font-light mb-[15px]">
                    Olá, eu sou Ângelo, acadêmico em Sistemas de Informação
                    - UNIFESSPA e desenvolvedor web júnior apaixonado por
                    criar soluções digitais.
                </p>
                <p className="text-[#A9A9A9] font-light mb-[15px]">
                    Desde o início da minha jornada, sempre fui fascinado
                    por tecnologia e como ela pode melhorar a vida das
                    pessoas, e é essa paixão que me motiva a aprimorar
                    minhas habilidades.
                </p>
                <p className="text-[#A9A9A9] font-light mb-[35px]">
                    Possuo experiência em JavaScript, TypeScript, React,
                    Node.js, gosto de trabalhar em projetos que desafiem
                    minha criatividade e habilidades técnicas.
                </p>
            </CardContent>
            <CardContent className="p-0">
                <CardTitle className="text-[20px] mb-[15px]">
                    Minhas Experiências
                </CardTitle>
                <h1 className="font-medium">🦎 Exception Júnior | Ago 2024
                    - Presente
                </h1>
                <p className="text-[#A9A9A9] font-light mb-[15px] text-justify">
                    Empresa Júnior na Universidade Federal do Sul e Sudeste
                    do Pará, atuando como Desenvolvedor Full Stack.
                </p>
                <h1 className="font-medium">
                    🐴 Steed | Jan 2025 - Presente
                </h1>
                <p className="text-[#A9A9A9] font-light text-justify">
                    Startup especializada em desenvolvimento de sites, onde
                    atuo como Fundador e Desenvolvedor Full Stack.
                </p>
            </CardContent>
        </div>
    )
}