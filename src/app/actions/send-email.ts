"use server"
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail(form: FormState) {
  // basic server-side validation
  if (
    !form.name.trim() ||
    !form.email.trim() ||
    form.message.trim().length < 20
  ) {
    return { success: false, error: "Invalid form data" };
  }

  try {
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ifebuchechukwuomeje@gmail.com",
      replyTo: form.email,
      subject: `New message from ${form.name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${form.name}</p>
        <p><strong>Email:</strong> ${form.email}</p>
        <p><strong>Message:</strong></p>
        <p>${form.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error(error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Failed to send email" };
  }
}
