import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      default: "bg-neutral-900 text-white hover:bg-neutral-800",
      outline: "border border-neutral-200 bg-white hover:bg-neutral-100",
      ghost: "hover:bg-neutral-100",
    }

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3",
      lg: "h-11 px-8",
      icon: "h-10 w-10",
    }

    return <button className={cn(baseStyles, variants[variant], sizes[size], className)} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button }
