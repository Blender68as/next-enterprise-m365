import { sendMail } from '@/lib/email';
import nodemailer from 'nodemailer';

jest.mock('nodemailer');

describe('sendMail', () => {
  it('sends an email successfully', async () => {
    const sendMailMock = jest.fn().mockResolvedValue({ messageId: '12345' });
    (nodemailer.createTransport as jest.Mock).mockReturnValue({ sendMail: sendMailMock });

    const info = await sendMail({
      to: 'test@example.com',
      subject: 'Test',
      text: 'Hallo Welt',
    });

    expect(sendMailMock).toHaveBeenCalled();
    expect(info).toBe('12345');
  });
});
