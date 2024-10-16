import React, { useState } from "react";

type Props = {
  onClick: () => void;
  item: {
    label: string;
    value: string | number;
  };
  selected: boolean;
};

const OptionButton = ({ onClick, item, selected }: Props) => {
  const [effect, setEffect] = useState(false);

  return (
    <li
      key={item.value}
      className={`flex justify-end ${effect && "animate-jump"}`}
      onClick={() => {
        setEffect(true);
        onClick();
      }}
      onAnimationEnd={() => setEffect(false)}
    >
      <div
        className={`w-full p-4 border rounded-lg bg-gray-800 ${
          selected
            ? "text-green-700 border-green-300 dark:border-green-800 dark:text-green-400"
            : "text-gray-900 border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        }`}
        role="alert"
      >
        <div className="flex items-center justify-between">
          <span className="sr-only">{item.label}</span>
          <h3 className="font-medium capitalize">{item.label}</h3>
          {selected && (
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          )}
        </div>
      </div>
    </li>
  );
};

export default OptionButton;
