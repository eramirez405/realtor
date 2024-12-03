import { Property } from "@/services/remax";
import { formatPrice } from "@/utils/utils";
import Image from "next/image";
import React from "react";

type Props = {
  property: Property;
};

const Card = ({
  property: {
    id,
    business_type,
    realstate_type,
    sector,
    city,
    main_picture: { big },
    price,
    project,
    currency: { symbol },
  },
}: Props) => {
  const priceToDisplay = project
    ? `${symbol}$${formatPrice(
        project.minimum_price
      )} - ${symbol}$${formatPrice(project.maximum_price)}`
    : symbol + "$" + formatPrice(price);

  return (
    <div className="border border-gray-200 rounded-lg shadow-md">
      <div className="flex-1 rounded-t rounded-b-none overflow-hidden">
        <a
          href={`https://remaxrd.com/propiedad/Proyecto/${id}?referer=16987`}
          className="flex flex-wrap no-underline hover:no-underline"
        >
          <div className="w-full h-64 overflow-hidden flex items-center justify-center mb-2">
            <Image
              alt="hero"
              className="w-full h-full object-cover object-center"
              src={big}
              width={574}
              height={859}
            />
          </div>

          <div className="w-full font-bold text-xl text-gray-800 px-6">
            {realstate_type}
          </div>

          <div className="w-full flex flex-row pl-5 pr-6 justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>

            <p className="w-full text-gray-600 text-xs md:text-sm capitalize">
              {business_type}
            </p>
          </div>
          <div className="w-full flex flex-row pl-5 pr-6 justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-gray-600 self-start"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p className="w-full text-gray-600 text-xs md:text-sm capitalize">
              {sector}, {city}
            </p>
          </div>
          <div className="w-full flex flex-row pl-5 pr-6 justify-start pb-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div className="flex flex-row justify-between w-full items-center">
              <div className="text-gray-600 text-xs md:text-sm capitalize">
                {priceToDisplay}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
