import * as React from "react"
import { cn } from "../../utils/cn"

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'error' | 'info';
}

const variantStyles = {
  success: 'bg-green-100 border-green-400 text-green-900',
  error: 'bg-red-100 border-red-400 text-red-900',
  info: 'bg-blue-100 border-blue-400 text-blue-900',
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ className, variant = 'info', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'border rounded-xl px-4 py-3 font-mono text-base shadow-sm',
      variantStyles[variant],
      className
    )}
    {...props}
  />
))
Alert.displayName = "Alert"

export { Alert } 