import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"

export default function ProfileAside() {
    return (
        <CardHeader className="flex items-center p-0 md:mr-[60px]">
            <Avatar className="w-[85px] h-[85px] mb-[10px] sm:w-[100px] sm:h-[100px] 
            md:w-[200px] md:h-[200px] lg:w-[230px] lg:h-[230px] md:rounded-[20px]">
                <AvatarImage src="https://avatars.githubusercontent.com/u/154464565?v=4" />
                <AvatarFallback className="md:rounded-[20px]">AR</AvatarFallback>
            </Avatar>
            <CardTitle className="text-[20px] md:text-center">
                Ângelo Rodrigues
            </CardTitle>
            <CardDescription className="text-[16px] md:text-center mb-[5px]">
                Eng. Front End
            </CardDescription>
            <div className="flex flex-wrap gap-6 mb-[20px] md:mb-0">
                <a href="https://www.linkedin.com/in/%C3%A2ngelo-rodrigues-a60087247/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[25px] h-[25px] flex justify-center items-center 
                    text-[#A9A9A9] hover:text-white active:text-white 
                    transition-all duration-300 hover:bg-gradient-to-b">
                    <FaLinkedin className="w-[25px] h-[25px]" title="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/angelorodriguesz_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[25px] h-[25px] flex justify-center items-center 
                    text-[#A9A9A9] hover:text-white active:text-white 
                    transition-all duration-300 hover:bg-gradient-to-b">
                    <FaInstagram className="w-[25px] h-[25px]" title="Instagram" />
                </a>
                <a href="https://github.com/AngeloResplandes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[25px] h-[25px] flex justify-center items-center 
                    text-[#A9A9A9] hover:text-white active:text-white 
                    transition-all duration-300 hover:bg-gradient-to-b">
                    <FaGithub className="w-[25px] h-[25px]" title="GitHub" />
                </a>
            </div>
        </CardHeader>
    )
}