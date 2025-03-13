import { CardContent, CardTitle } from "@/components/ui/card"

export default function Contato() {
    return (
        <div className="w-full md:flex-col">
            <CardContent className="mt-[10px] p-0">
                <CardTitle className="text-[20px] mb-[15px]">Contato</CardTitle>
                <h1 className="font-medium mb-[5px]">
                    🚀 Fibralink | Ago 2024 - Presente
                </h1>
                <p className="text-[#A9A9A9] font-light mb-[15px] text-justify">
                    A Fibralink é um provedor de internet fibra óptica em Marabá
                    - PA, atuando como estagiário na área de Telecomunicações.
                </p>
            </CardContent>
        </div>
    )
}