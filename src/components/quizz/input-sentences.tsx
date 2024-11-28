import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "transition-colors w-full bg-transparent px-3 py-1 border-b border-slate-800 active:ring-primary file:text-foreground focus:outline-none focus:border-b-2 focus:border-primary focus:border-b-secondary file:border-0",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
