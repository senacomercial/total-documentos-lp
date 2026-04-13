'use client'

import React, { useState, useEffect } from 'react'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'
import Form from '@/components/common/Form'
import {
  QUIZ_QUESTIONS,
  CONTACT_INFO,
} from '@/lib/constants'
import { calculateRiskScore, getRiskLevel, getQuizResults } from '@/lib/quiz'
import { trackContainerImpression, trackEvent, trackFormSubmission } from '@/lib/analytics'

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [riskLevel, setRiskLevel] = useState<'low' | 'medium' | 'high' | null>(null)

  useEffect(() => {
    trackContainerImpression('quiz')
    trackEvent('quiz_start')
  }, [])

  const handleAnswerSelect = (questionId: number, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }))
    trackEvent('quiz_question_answered', { label: `question_${questionId}` })
  }

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleFinish = () => {
    const score = calculateRiskScore(answers)
    const level = getRiskLevel(score)
    setRiskLevel(level)
    setShowResults(true)
    trackEvent('quiz_complete', { label: `risk_level_${level}` })
  }

  const question = QUIZ_QUESTIONS[currentQuestion]
  const isAnswered = answers[question.id]
  const results = riskLevel ? getQuizResults(riskLevel) : null
  const progress = Math.ceil(((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100)

  if (showResults && results) {
    return (
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-2xl">
          <SectionTitle
            title="Seu Resultado"
            align="center"
          />

          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-geom">
                {results.title}
              </h3>
              <p className="text-lg text-gray-700 mb-8">{results.description}</p>
              <div className="bg-gray-light rounded-lg p-6 mb-8">
                <p className="text-gray-700">{results.recommendation}</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-gray-900 mb-4">
                Receba Seu Plano de Ação Personalizado:
              </h4>
              <Form
                fields={[
                  {
                    name: 'email',
                    label: 'Seu Email',
                    type: 'email',
                    required: true,
                    placeholder: 'seu@email.com',
                  },
                ]}
                onSubmit={async (data) => {
                  try {
                    const response = await fetch('/api/quiz-results', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        email: data.email,
                        riskLevel,
                      }),
                    })

                    if (response.ok) {
                      trackFormSubmission('quiz')
                      trackEvent('quiz_email_capture')
                      return {
                        success: true,
                        message:
                          'Obrigado! Verifique seu email para seu plano personalizado.',
                      }
                    }
                    return {
                      success: false,
                      message: 'Erro ao enviar. Tente novamente.',
                    }
                  } catch (error) {
                    return {
                      success: false,
                      message: 'Erro ao enviar. Tente novamente.',
                    }
                  }
                }}
                buttonText="Receber Plano"
              />
            </div>

            <div className="text-center pt-8 border-t border-gray-300">
              <p className="text-gray-600 mb-4">
                Quer conversar diretamente com Vinicius?
              </p>
              <Button
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                onClick={() => trackEvent('cta_click', { label: 'quiz_whatsapp' })}
              >
                Falar com Vinicius no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-2xl">
        <SectionTitle
          title="Descubra o Risco da Sua Marca"
          subtitle="5 perguntas rápidas. Resultado imediato."
        />

        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Pergunta {currentQuestion + 1} de {QUIZ_QUESTIONS.length}
              </span>
              <span className="text-sm font-bold text-primary">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 font-geom">
            {question.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {question.options.map((option) => (
              <label
                key={option.id}
                className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-light transition-colors"
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.id}
                  checked={answers[question.id] === option.id}
                  onChange={() => handleAnswerSelect(question.id, option.id)}
                  className="mt-1"
                />
                <span className="text-gray-800">{option.label}</span>
              </label>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between gap-4">
            <Button
              variant="tertiary"
              size="md"
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className={currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}
            >
              ← Voltar
            </Button>

            {currentQuestion < QUIZ_QUESTIONS.length - 1 ? (
              <Button
                variant="primary"
                size="md"
                onClick={handleNext}
                disabled={!isAnswered}
                className={!isAnswered ? 'opacity-50 cursor-not-allowed' : ''}
              >
                Próxima →
              </Button>
            ) : (
              <Button
                variant="primary"
                size="md"
                onClick={handleFinish}
                disabled={!isAnswered}
                className={!isAnswered ? 'opacity-50 cursor-not-allowed' : ''}
              >
                Ver Resultado
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quiz
