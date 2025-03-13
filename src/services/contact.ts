export async function sendContactForm(data: { name: string; number: string; email: string; description: string }) {
    try {
        const response = await fetch("https://contacts-api-lqae.onrender.com/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error("Erro ao enviar formulário");

        return { success: true, message: "Mensagem enviada com sucesso!" };
    } catch (error) {
        console.error("Erro ao enviar formulário:", error);
        return { success: false, message: "Falha ao enviar mensagem. Tente novamente." };
    }
}