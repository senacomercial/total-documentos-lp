import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  target?: string
  rel?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      className,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'font-medium transition-all duration-200 rounded-md uppercase tracking-wider flex items-center justify-center gap-2'

    const variantStyles: Record<string, string> = {
      primary:
        'bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg hover:scale-105',
      secondary:
        'border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent',
      tertiary: 'text-primary hover:text-primary-dark bg-transparent underline',
    }

    const sizeStyles: Record<string, string> = {
      sm: 'px-4 py-2 text-sm h-10',
      md: 'px-6 py-3 text-base h-12',
      lg: 'px-8 py-4 text-lg h-12 md:h-16 w-full md:w-auto',
    }

    const buttonClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    )

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={buttonClassName}
          onClick={(e) => {
            if (props.onClick) {
              props.onClick(e as unknown as React.MouseEvent<HTMLButtonElement>)
            }
          }}
        >
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={buttonClassName} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
