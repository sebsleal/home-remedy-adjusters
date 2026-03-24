import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  address: z.string().min(5),
  damageType: z.enum(['storm', 'water', 'roof', 'fire', 'other']),
  message: z.string().optional(),
  preferredContact: z.enum(['phone', 'email', 'either']),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const d = parsed.data

    const damageLabels: Record<string, string> = {
      storm: 'Storm / Hurricane',
      water: 'Water Damage',
      roof: 'Roof Damage',
      fire: 'Fire Damage',
      other: 'Other',
    }

    await resend.emails.send({
      from: 'Claim Remedy Website <noreply@claimremedyadjusters.com>',
      to: 'craadmin@gmail.com',
      replyTo: d.email,
      subject: `New ${damageLabels[d.damageType]} inquiry from ${d.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #05191a; color: #f4f1e8;">
          <h1 style="color: #d8b779; font-size: 24px; margin-bottom: 20px;">New Claim Inquiry</h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #d9d1c1; font-size: 13px; width: 160px;">Name</td><td style="padding: 8px 0; font-size: 14px;">${d.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #d9d1c1; font-size: 13px;">Phone</td><td style="padding: 8px 0; font-size: 14px;"><a href="tel:${d.phone}" style="color: #d8b779;">${d.phone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #d9d1c1; font-size: 13px;">Email</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${d.email}" style="color: #d8b779;">${d.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #d9d1c1; font-size: 13px;">Property Address</td><td style="padding: 8px 0; font-size: 14px;">${d.address}</td></tr>
            <tr><td style="padding: 8px 0; color: #d9d1c1; font-size: 13px;">Damage Type</td><td style="padding: 8px 0; font-size: 14px;">${damageLabels[d.damageType]}</td></tr>
            <tr><td style="padding: 8px 0; color: #d9d1c1; font-size: 13px;">Preferred Contact</td><td style="padding: 8px 0; font-size: 14px;">${d.preferredContact}</td></tr>
            ${d.message ? `<tr><td style="padding: 8px 0; color: #d9d1c1; font-size: 13px; vertical-align: top;">Message</td><td style="padding: 8px 0; font-size: 14px;">${d.message}</td></tr>` : ''}
          </table>
          <hr style="border: none; border-top: 1px solid #11383d; margin: 20px 0;" />
          <p style="font-size: 12px; color: #d9d1c1; opacity: 0.5;">Submitted via claimremedyadjusters.com</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
