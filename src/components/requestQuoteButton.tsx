import { ArrowRight } from "lucide-react";
import React from "react";

type RequestQuoteButtonProps = {
  variant?: "primary" | "secondary";
} & React.HTMLAttributes<HTMLButtonElement>;

export const RequestQuoteButton: React.FC<RequestQuoteButtonProps> = ({
  className,
  variant = "primary", 
  ...props 
}) => {

  const buttonVariants = {
    primary: "bg-transparent border-2 border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-yellow-500",
    secondary: "bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-purple-900",
  }

  return (
    <button className={`flex h-fit justify-center items-center px-6 py-4 rounded-full border-2 border-purple-500 text-purple-500 font-bold 
    ${buttonVariants[variant]} ${className} transition`} {...props}>
      <p className="flex items-center justify-center text-2xl text-nowrap">
        Request a Quote
      </p>
      <ArrowRight size={24} className='ml-6 size-6' />
    </button>
  )
}