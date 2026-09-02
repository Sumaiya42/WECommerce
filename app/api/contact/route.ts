import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { name, email, phone, subject, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const data = await resend.emails.send({
      from: 'BWCCI Contact <onboarding@resend.dev>',
      to: ['nazmalize@gmail.com'],
      replyTo: email, // 👈 Updated from reply_to to replyTo
      subject: `Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #8B1538; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #8B1538; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
              <p>BWCCI Bogura</p>
            </div>
            <div class="content">
              <div class="field">
                <p class="label">Name:</p>
                <p>${name}</p>
              </div>
              <div class="field">
                <p class="label">Email:</p>
                <p>${email}</p>
              </div>
              <div class="field">
                <p class="label">Phone:</p>
                <p>${phone || 'Not provided'}</p>
              </div>
              <div class="field">
                <p class="label">Subject:</p>
                <p>${subject}</p>
              </div>
              <div class="field">
                <p class="label">Message:</p>
                <p>${message}</p>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from the BWCCI Bogura contact form.</p>
              <p>© ${new Date().getFullYear()} BWCCI Bogura</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Subject: ${subject}
        Message: ${message}
        
        ---
        This message was sent from the BWCCI Bogura contact form.
      `,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}