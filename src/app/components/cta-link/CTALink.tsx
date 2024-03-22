import Link from "next/link";
import { ComponentProps } from "react";

import { VariantProps, tv } from "tailwind-variants";

const ctaLink = tv({
  base: [
    "font-semibold text-center px-6 py-2.5 rounded-lg shadow-sm outline-none lg:px-6 lg:py-3",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500",
    "active:opacity-80 transition",
    "shadow-lg shadow-indigo-200"
  ],
  variants: {
    variant: {
      primary:
        "bg-indigo-600 text-white hover:bg-indigo-700",
      outline:
        "text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-100",
      ghost:
        "text-zinc-500 hover:bg-zinc-50 rounded-md px-2",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

type CTALinkProps = ComponentProps<"a"> & VariantProps<typeof ctaLink>;

export function CTALink({
  variant,
  className,
  href = "/",
  ...props
}: CTALinkProps) {
  return (
    <Link href={href} className={ctaLink({ variant, className })} {...props} />
  );
}
