'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data.message || 'Failed to send message.')
        setStatus('error')
        return
      }

      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setError('Unable to send message. Please try again later.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <div>
        <h2 className="text-3xl font-playfair text-[#8B1538] font-semibold">Send Us a Message</h2>
        <p className="mt-2 text-gray-600">Fill out the form below and our team will contact you shortly.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-gray-700">Full Name</span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20"
            placeholder="Your full name"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-gray-700">Email Address</span>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20"
            placeholder="you@example.com"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-gray-700">Phone Number</span>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20"
            placeholder="+880 1711 113 126"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-gray-700">Subject</span>
          <input
            type="text"
            required
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20"
            placeholder="Subject of your message"
          />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-semibold text-gray-700">Message</span>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full min-h-[160px] rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20"
          placeholder="Write your message here..."
        />
      </label>

      {status === 'success' && (
        <p className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-700">Your message has been sent successfully.</p>
      )}
      {status === 'error' && <p className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">{error}</p>}

      <button
        type="submit"
        className="w-full rounded-3xl bg-[#8B1538] px-6 py-4 text-sm font-semibold text-white shadow hover:bg-[#6c1130] transition disabled:cursor-not-allowed disabled:opacity-50"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
