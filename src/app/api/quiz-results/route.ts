import { NextRequest, NextResponse } from 'next/server'
import { validateQuizEmail } from '@/lib/forms'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate email
    const validation = validateQuizEmail(body)

    if ('errors' in validation) {
      return NextResponse.json(
        { success: false, message: 'Email inválido', errors: validation.errors },
        { status: 400 }
      )
    }

    // TODO: Save quiz result to Supabase
    // const { data, error } = await supabase
    //   .from('quiz_results')
    //   .insert([{
    //     email: validation.email,
    //     risk_level: validation.riskLevel,
    //     created_at: new Date().toISOString(),
    //   }])
    // if (error) throw error

    // TODO: Send Zapier webhook for email automation
    // const webhookUrl = process.env.ZAPIER_WEBHOOK_URL
    // if (webhookUrl) {
    //   await fetch(webhookUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       type: 'quiz_result',
    //       ...validation,
    //       timestamp: new Date().toISOString(),
    //     }),
    //   })
    // }

    console.log('Quiz email submission:', validation)

    return NextResponse.json(
      {
        success: true,
        message: 'Email registrado! Verifique sua caixa de entrada.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Quiz email error:', error)
    return NextResponse.json(
      { success: false, message: 'Erro ao processar solicitação' },
      { status: 500 }
    )
  }
}
