import { QUIZ_QUESTIONS, QUIZ_RESULTS } from '@/lib/constants'

export interface QuizState {
  currentQuestion: number
  answers: Record<number, string>
  showResults: boolean
  riskLevel: 'low' | 'medium' | 'high' | null
}

export const calculateRiskScore = (answers: Record<number, string>): number => {
  let totalRisk = 0

  Object.entries(answers).forEach(([questionId, optionId]) => {
    const qId = parseInt(questionId)
    const question = QUIZ_QUESTIONS.find((q) => q.id === qId)
    if (!question) return

    const option = question.options.find((o) => o.id === optionId)
    if (option) {
      totalRisk += option.risk
    }
  })

  return totalRisk
}

export const getRiskLevel = (
  score: number
): 'low' | 'medium' | 'high' => {
  if (score <= 15) return 'low'
  if (score <= 35) return 'medium'
  return 'high'
}

export const getQuizResults = (
  riskLevel: 'low' | 'medium' | 'high'
) => {
  return QUIZ_RESULTS[riskLevel]
}

export const calculateProgress = (
  currentQuestion: number,
  totalQuestions: number
): number => {
  return Math.ceil(((currentQuestion + 1) / totalQuestions) * 100)
}
