import type { APIRoute } from 'astro'
import { Resend } from 'resend'

export const prerender = false

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null)

  if (!body || !body.name || !body.email || !body.message) {
    return new Response(JSON.stringify({ error: 'Champs manquants' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const { name, email, message } = body as { name: string; email: string; message: string }

  const { error } = await resend.emails.send({
    from: 'Portfolio <contact@yoanndexmier.dev>',
    to: 'yoanndexmier.pro@gmail.com',
    replyTo: email,
    subject: `[Portfolio] Message de ${name}`,
    text: `Nom : ${name}\nEmail : ${email}\n\n${message}`,
  })

  if (error) {
    return new Response(JSON.stringify({ error: 'Erreur envoi' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
