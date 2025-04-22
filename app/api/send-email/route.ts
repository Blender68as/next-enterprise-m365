import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/email';

export async function POST(req: Request) {
  const body = await req.json();
  console.log('📩 Incoming request body:', body);

  const { name, email, telefon, institution, message } = body as { name: string, email: string, telefon?: string, institution?: string, message: string };

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const to = process.env.CONTACT_RECEIVER_EMAIL!;
  const subject = `Neue Kontaktanfrage von ${name}`;
  const text = `
    Name: ${name}
    E-Mail: ${email}
    Telefon: ${telefon || 'nicht angegeben'}
    Institution: ${institution || 'nicht angegeben'}
    Nachricht:
    ${message}
  `;

  console.log('📩 Sending email to:', to);
  console.log(process.env.SMTP_HOST, process.env.SMTP_PORT, process.env.SMTP_USER);

  try {
    const info = await sendMail({ to, subject, text });
    return NextResponse.json({ message: 'Email sent', info });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
