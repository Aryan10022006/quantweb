import * as React from "react"

import { cn } from "../../utils/cn"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border bg-white text-gray-900 shadow-xl p-6 md:p-8 transition-all",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card } 