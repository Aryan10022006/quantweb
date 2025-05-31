import * as React from "react"
import { cn } from "../../utils/cn"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-mono font-semibold text-white shadow",
      className
    )}
    {...props}
  />
))
Badge.displayName = "Badge"

export { Badge } 