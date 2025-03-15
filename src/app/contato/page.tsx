import type { Metadata } from "next";
import FormContact from "@/components/form-contact"

export const metadata: Metadata = {
    title: "Angelo Rodrigues - Contato",
    description: "",
    icons: "/favicon.ico",
}

export default function Contato() {
    return (
        <div className="w-full md:flex-col md:pl-[290px]">
            <FormContact />
        </div>
    )
}