import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // you can change this
      to: "srashwan742000@gmail.com", // your personal or business email
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
