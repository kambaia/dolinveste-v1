import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { fullName, email, subject, message } = await req.json();

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || "587"),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
        })

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_TO,
            subject: subject,
            text: message,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        return NextResponse.json({ error: "Erro ao enviar e-mail." }, { status: 500 });
    }
}
