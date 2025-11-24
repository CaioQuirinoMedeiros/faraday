"use client"

import * as React from "react"
import { cn } from "@/utils/styles"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeValue?(value: string): void
  maskFunction?: (value: string) => string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input_(props, ref) {
    const {
      className,
      type = "text",
      onChange,
      onChangeValue,
      maskFunction = (v) => v,
      ...rest
    } = props

    return (
      <input
        type={type}
        className={cn(
          "file:text-foreground placeholder:text-black/25 selection:bg-primary/35 selection:text-primary-foreground w-full min-w-0 rounded-md border border-[rgba(0,0,0,0.2)] bg-[rgba(0,0,0,0.05)] px-3 py-1 text-base md:text-base transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-accent-dark focus-visible:ring-[3px] min-h-12",
          className
        )}
        ref={ref}
        onChange={(e) => {
          const transformedValue = maskFunction(e.target.value)
          e.target.value = transformedValue
          onChange?.(e)
          onChangeValue?.(transformedValue)
        }}
        {...rest}
      />
    )
  }
)
