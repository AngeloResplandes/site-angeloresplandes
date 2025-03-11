import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
    return (
        <div className="flex items-center px-[16px]">
            <Card className="w-full flex justify-center items-center">
                <Avatar className="w-[72px] h-[72px]">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/154464565?v=4" />
                    <AvatarFallback>img</AvatarFallback>
                </Avatar>
                <CardHeader className="flex items-center">
                    <CardTitle>Angelo Rodrigues</CardTitle>
                    <CardDescription>Full Stack Develop</CardDescription>
                </CardHeader>
                <CardContent className="text-justify">
                    <CardTitle className="mb-[10px]">Sobre Mim</CardTitle>
                    <p className="text-[#A9A9A9] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum sunt non doloribus, error necessitatibus veritatis
                        quia odio aliquid animi fuga temporibus libero vero qui!
                        Consequuntur sapiente quis eos magnam quae.</p>
                </CardContent>
                <CardContent className="text-justify">
                    <CardTitle className="mb-[10px]">Minhas Experiências</CardTitle>
                    <p className="text-[#A9A9A9] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum sunt non doloribus, error necessitatibus veritatis
                        quia odio aliquid animi fuga temporibus libero vero qui!
                        Consequuntur sapiente quis eos magnam quae.</p>
                </CardContent>
            </Card>
        </div>
    )
}