import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter ao menos 2 caracteres'),
  phone: z.string().min(10, 'Telefone deve ter ao menos 10 dígitos'),
  message: z.string().optional(),
  source: z.enum(['hero', 'diferencial', 'faq', 'final_cta']),
})

export const validateContactForm = (data: unknown) => {
  try {
    return contactFormSchema.parse(data)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { errors: error.flatten() }
    }
    throw error
  }
}
