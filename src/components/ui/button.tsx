import React from 'react';
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90": variant === 'default',
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === 'outline',
            "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === 'secondary',
            "hover:bg-accent hover:text-accent-foreground": variant === 'ghost',
          },
          {
            "h-9 px-4 py-2": size === 'default',
            "h-8 px-3 text-xs": size === 'sm',
            "h-10 px-5": size === 'lg',
            "h-9 w-9": size === 'icon',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
