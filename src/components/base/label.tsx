import * as React from "react"
import { cn } from "@/utils/styles"

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor: string
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  function Label_(props, ref) {
    const { className, ...rest } = props

    return (
      <label
        ref={ref}
        className={cn(
          "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
          className
        )}
        {...rest}
      />
    )
  }
)
