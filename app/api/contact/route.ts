import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { fullName, email, subject, message } = await req.json();

    try {
        const transporter = nodemailer.createTransport({
            host: "dolinveste.co.ao",
            port: 465,
            secure: true,
            auth: {
                user: "office@dolinveste.co.ao",
                pass: "GBV!d@2024#"
            },
        })

        await transporter.sendMail({
            from: `"${fullName}" <${email}>`,
            to: process.env.EMAIL_TO,
            subject: subject,
            text: message,
            html: `
        <p><strong>Nome:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        return NextResponse.json({ error: "Erro ao enviar e-mail." }, { status: 500 });
    }
}
