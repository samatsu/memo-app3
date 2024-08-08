"use server";

import { EmailTemplate } from "@/components/EmailTemplate";
import { redirect } from "next/navigation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL_ADDRESS as string;

export type MessageState = {
  errors?: {
    name?: string[];
    email?: string[];
    comment?: string[];
  };
  message?: string | null;
  success?: boolean;
};
export async function sendMessage(prevState: MessageState, formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const comment = formData.get("comment")?.toString();

  if (!name || !email || !comment) {
    return {
      errors: {},
      message: "name/email/comment are required",
    };
  }
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [adminEmail],
    subject: "Got an email from a guest",
    react: EmailTemplate({ name: name, body: comment, contactEmail: email }),
  });
  if (error) {
    return {
      errors: {},
      message: error.message,
      success: false,
    };
  }
  return {
    errors: {},
    message: "Your message was posted successfully",
    success: true,
  };
}
