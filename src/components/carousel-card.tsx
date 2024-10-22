import Image from "next/image";
import React from "react";

export type PostCardProps = {
  description: string;
  image: string;
  alt: string;
  user: {
    name: string;
    info: string;
  };
};

export const PostCard: React.FC<PostCardProps> = ({ description, image, alt, user }) => {

  return (
    <div className="flex flex-col bg-white items-end justify-end p-8 rounded-md h-full">
      <blockquote className="flex flex-col text-center mt-16  ">
        <q className="text-left">
         {description}
        </q>
        <div className="flex items-center gap-4 mt-4">
          <Image src={image} width={64} height={64} alt={alt} className="rounded-full" />
          <p className="flex flex-col items-start">
            <span className="text-lg">{user.name}</span>
            <span className="text-lg leading-4 text-gray-400">{user.info}</span>
          </p>
        </div>
      </blockquote>
    </div>
  )

};