import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  if (!body?.name || !body?.email || !body?.phone || !body?.subject || !body?.message) {
    return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 })
  }

  console.log('Contact submission received:', body)

  // TODO: integrate with email service, CRM, or database
  return NextResponse.json({ ok: true })
}
