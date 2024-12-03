import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  imageUrl?: string;
};

const ImageCard = ({ title, description, imageUrl }: Props) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-950 dark:border-gray-700 h-full">
      {imageUrl && (
        <Image
          alt={title}
          className="rounded-t-lg"
          src={imageUrl}
          width={574}
          height={859}
        />
      )}
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
