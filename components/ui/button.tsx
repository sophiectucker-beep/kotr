"use client"

import { cloneElement, isValidElement, type ReactElement } from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center border border-transparent bg-clip-padding font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[#f19b9a] hover:text-white",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[#445168] hover:text-secondary-foreground",
        outline:
          "border-secondary bg-white text-secondary hover:border-secondary hover:bg-secondary hover:text-secondary-foreground",
        ghost:
          "hover:bg-white hover:text-secondary",
        link: "text-primary underline-offset-4 hover:text-secondary hover:underline",
      },
      size: {
        default: "h-14 gap-2 rounded-2xl px-8 text-lg",
        sm: "h-10 gap-1.5 rounded-xl px-4 text-sm",
        lg: "h-16 gap-3 rounded-2xl px-10 text-xl",
        icon: "size-14 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  if (asChild && isValidElement(props.children)) {
    const child = props.children as ReactElement<{ className?: string }>

    return cloneElement(child, {
      ...child.props,
      className: cn(
        buttonVariants({ variant, size, className }),
        child.props.className
      ),
    })
  }

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
