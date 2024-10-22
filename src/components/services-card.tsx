import React from "react";

export type ServicesCardProps = {
  title: string;
  description: string;
}

export const ServicesCard: React.FC<ServicesCardProps> =
  ({ title, description }) => {

  return (
    <div className="flex flex-col items-center gap-4 md:items-start">
      <h2 className="font-bold text-2xl text-center md:text-left">{title}</h2>
      <p className="text-md text-center md:text-left">
        {description}
      </p>
    </div>
  )
}