import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

// Remove the inline type declaration as it's now in src/types/google-analytics.d.ts

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  href: string;
  size?: "default" | "lg" | "xl";
  variant?: "primary" | "secondary";
  trackConversion?: boolean;
}

const CTAButton = forwardRef<HTMLAnchorElement, CTAButtonProps>(
  ({ className, children, href, size = "default", variant = "primary", trackConversion = false, ...props }, ref) => {
    const handleClick = () => {
      if (trackConversion && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-16871318720/ZOm5CP2e2K0aEMDJ7-w-',
          'value': 1.0,
          'currency': 'DKK',
          'transaction_id': ''
        });
      }
    };

    return (
      <div className="flex justify-center mb-2">
        <a
          ref={ref}
          href={href}
          onClick={handleClick}
          className={cn(
            "inline-flex items-center justify-center rounded-lg font-medium transition-all capitalize",
            "focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2",
            "shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0",
            {
              "bg-brand-blue text-white hover:bg-brand-blue/90": variant === "primary",
              "bg-white text-brand-blue border border-brand-blue hover:bg-gray-50": variant === "secondary",
              "px-6 py-3 text-base": size === "default",
              "px-8 py-4 text-lg": size === "lg",
              "px-10 py-5 text-xl": size === "xl",
            },
            className
          )}
          {...props}
        >
          {children}
        </a>
      </div>
    );
  }
);

CTAButton.displayName = "CTAButton";

export default CTAButton;
