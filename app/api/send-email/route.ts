import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/email';

export async function POST(req: Request) {
  const { to, subject, text, html } = (await req.json()) as { to: string; subject: string; text?: string; html?: string };

  if (!to || !subject || (!text && !html)) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const info = await sendMail({ to, subject, text, html });
    return NextResponse.json({ message: 'Email sent', info });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
