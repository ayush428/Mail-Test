import { Resend } from 'resend';
const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey); 

export async function sendEmail() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['ayushmangupta8506@gmail.com'],
      subject: 'Hello World',
      text: '<strong>It works!</strong>',
    });

    if (error) {
      console.error({ error });
      return;
    }

    console.log({ data });
  } catch (err) {
    console.error('An unexpected error occurred:', err);
  }
}

