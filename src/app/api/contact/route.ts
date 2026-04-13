import { NextRequest, NextResponse } from 'next/server'
import { validateContactForm } from '@/lib/forms'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate form data
    const validation = validateContactForm({
      ...body,
      source: body.source || 'final_cta',
    })

    if ('errors' in validation) {
      return NextResponse.json(
        { success: false, message: 'Dados inválidos', errors: validation.errors },
        { status: 400 }
      )
    }

    // TODO: Save to Supabase (phone/name)
    // TODO: Send Zapier webhook notification

    console.log('Contact form submission (no email):', validation)

    return NextResponse.json(
      {
        success: true,
        message: 'Mensagem recebida! Retornaremos em breve.',
        leadId: `LEAD_${Date.now()}`,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Erro ao processar solicitação' },
      { status: 500 }
    )
  }
}
