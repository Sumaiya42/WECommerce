"use client"

import { useState } from 'react'

export default function MembershipForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    category: 'general',
    description: '',
  })
  const [status, setStatus] = useState<'idle'|'pending'|'success'|'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('pending')
    try {
      const res = await fetch('/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('success')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name *</label>
        <input name="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Business / Company Name</label>
        <input name="company" value={form.company} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
        <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email Address *</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Select Category *</label>
        <select name="category" value={form.category} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded px-3 py-2">
          <option value="general">General Member</option>
          <option value="associate">Associate Member</option>
          <option value="donor">Donor / Corporate Life Member</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Describe Your Business *</label>
        <textarea name="description" value={form.description} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" rows={4} />
      </div>

      <div className="flex items-center gap-4">
        <button type="submit" disabled={status==='pending'} className="bg-[#8B1538] text-white px-6 py-2 rounded font-semibold hover:bg-[#6B0F2B] transition">
          {status === 'pending' ? 'Submitting...' : 'Submit Inquiry'}
        </button>
        {status === 'success' && <span className="text-green-600">Inquiry submitted — we'll contact you soon.</span>}
        {status === 'error' && <span className="text-red-600">Submission failed. Try again later.</span>}
      </div>
    </form>
  )
}
