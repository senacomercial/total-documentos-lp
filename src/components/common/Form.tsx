'use client'

import React, { useState } from 'react'
import { validateContactForm } from '@/lib/forms'
import Button from './Button'

interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea'
  required?: boolean
  placeholder?: string
}

interface FormProps {
  fields: FormField[]
  onSubmit: (data: Record<string, string>) => Promise<{ success: boolean; message: string }>
  buttonText?: string
  loadingText?: string
}

const Form: React.FC<FormProps> = ({
  fields,
  onSubmit,
  buttonText = 'Enviar',
  loadingText = 'Enviando...',
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrors({})

    try {
      const result = await onSubmit(formData)

      if (result.success) {
        setSuccess(true)
        setMessage(result.message)
        setFormData({})
      } else {
        setMessage(result.message)
      }
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : 'Erro ao enviar formulário'
      )
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="p-6 bg-green-50 border-l-4 border-green-500 rounded">
        <p className="text-green-800 font-medium">{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {field.label}
            {field.required && <span className="text-red-500">*</span>}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              rows={4}
            />
          ) : (
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          )}
          {errors[field.name] && (
            <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
          )}
        </div>
      ))}

      {message && !success && (
        <div className="p-3 bg-amber-50 border border-amber-200 text-amber-800 text-sm rounded">
          {message}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={loading}
      >
        {loading ? loadingText : buttonText}
      </Button>
    </form>
  )
}

export default Form
