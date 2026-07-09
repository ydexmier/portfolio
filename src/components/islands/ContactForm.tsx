import { useState } from 'react'

declare global {
  interface Window {
    gtag?: (...args: [string, ...unknown[]]) => void
  }
}

interface Labels {
  name: string
  email: string
  message: string
  send: string
  sending: string
  success: string
  error: string
}

interface Props {
  labels: Labels
  apiPath: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm({ labels, apiPath }: Props) {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch(apiPath, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        window.gtag?.('event', 'contact_form_submit', { event_category: 'contact' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className="text-center font-mono text-sm text-ink py-8 border border-border px-6">
        ♠ {labels.success}
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label
          htmlFor="name"
          className="block font-mono text-xs text-ink-muted uppercase tracking-wider mb-1"
        >
          {labels.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border border-border bg-card-bg px-4 py-3 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-mono text-xs text-ink-muted uppercase tracking-wider mb-1"
        >
          {labels.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-border bg-card-bg px-4 py-3 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-xs text-ink-muted uppercase tracking-wider mb-1"
        >
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-border bg-card-bg px-4 py-3 text-sm text-ink focus:outline-none focus:border-ink transition-colors resize-none"
        />
      </div>

      {status === 'error' && <p className="font-mono text-xs text-red">{labels.error}</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-ink text-paper font-sans text-sm py-4 hover:bg-red transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? labels.sending : labels.send}
      </button>
    </form>
  )
}
