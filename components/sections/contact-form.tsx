"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";

const initialState: ContactState = { status: "idle" };

const fieldStyles =
  "mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-2.5 text-sm outline-none focus-visible:border-accent";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);

  return (
    <form action={formAction} className="space-y-7">
      <div>
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted">
          Nom
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={fieldStyles} />
      </div>
      <div>
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldStyles}
        />
      </div>
      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} className={fieldStyles} />
      </div>

      <div role="status" aria-live="polite">
        {state.status !== "idle" && state.message ? (
          <p className={state.status === "success" ? "text-sm text-accent" : "text-sm text-red-500"}>
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
