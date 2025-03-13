import { CardContent, CardTitle } from "@/components/ui/card"

export default function Contato() {
    return (
        <div className="w-full md:flex-col">
            <CardContent className="p-0">
                <CardTitle className="text-[20px] mb-[15px]">Contato</CardTitle>
                <h1 className="font-medium mb-[15px]">
                    Título
                </h1>
                <div className="flex flex-wrap gap-4">
                    Lorem ipslum
                </div>
            </CardContent>
        </div>
    )
}