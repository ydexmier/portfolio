"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus-visible:outline-2 focus-visible:outline-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus-visible:outline-2 focus-visible:outline-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus-visible:outline-2 focus-visible:outline-accent"
        />
      </div>

      <div role="status" aria-live="polite">
        {state.status !== "idle" && state.message ? (
          <p
            className={state.status === "success" ? "text-sm text-accent" : "text-sm text-red-500"}
          >
            {state.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Envoi en cours…" : "Envoyer le message"}
      </Button>
    </form>
  );
}
