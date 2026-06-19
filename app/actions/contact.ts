"use server";

import { Resend } from "resend";
import { profile } from "@/content/profile";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Merci de remplir tous les champs." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { status: "error", message: "Merci de saisir une adresse email valide." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message: `Le formulaire n'est pas encore configuré. Écrivez-moi directement à ${profile.email}.`,
    };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: profile.email,
      replyTo: email,
      subject: `Nouveau message de ${name} via le portfolio`,
      text: `${message}\n\n— ${name} (${email})`,
    });

    return { status: "success", message: "Message envoyé. Je vous réponds sous 24h." };
  } catch {
    return {
      status: "error",
      message: `Une erreur est survenue. Écrivez-moi directement à ${profile.email}.`,
    };
  }
}
