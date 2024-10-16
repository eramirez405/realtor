"use client";

import {
  business,
  locations,
  Region,
  regions,
  types,
  Location,
} from "@/utils/Constants";
import React, { useCallback, useEffect, useState } from "react";
import OptionButton from "./OptionButton";

const Form = () => {
  const [businessSelection, setBusinessSelection] = useState("");
  const [typeSelection, setTypeSelection] = useState("");
  const [region, setRegion] = useState<Region>();
  const [locationSelection, setLocationSelection] = useState<Location>();
  const [preFormStep, setPreFormStep] = useState(0);
  const [formStep, setFormStep] = useState(0);

  const openNewTabWithParams = useCallback(() => {
    const url = `/buscar?business=${businessSelection}&type=["${typeSelection}"]&location=${locationSelection?.id}`;
    window.open(url, "_blank");
  }, [businessSelection, typeSelection, locationSelection]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (preFormStep) setFormStep(preFormStep);
      if (preFormStep === 4) {
        setBusinessSelection("");
        setTypeSelection("");
        setRegion(undefined);
        setLocationSelection(undefined);
        setPreFormStep(0);
        setFormStep(0);
        openNewTabWithParams();
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [preFormStep, openNewTabWithParams]);

  return (
    <div className="mx-auto px-2 pt-4 pb-12 text-gray-800 max-w-4xl">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        ¿Qué buscas?
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <div className="w-full mx-auto flex flex-row justify-around px-4">
        <div className="basis-1/2 p-4">
          <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 pb-1">
            <li className="mb-10 ms-6">
              <span
                className={`absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 ${
                  formStep > 0
                    ? "bg-green-200 dark:bg-green-900"
                    : "bg-gray-100 dark:bg-gray-700"
                }`}
              >
                {formStep > 0 ? (
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                )}
              </span>
              <h3
                className={`font-medium leading-tight ${
                  formStep === 0 && "text-gray-700"
                }`}
              >
                Quiero
              </h3>
              <p className="font-medium leading-tight capitalize min-h-5">
                {business.find((item) => item.value === businessSelection)
                  ?.label || ""}
              </p>
            </li>
            <li className="mb-10 ms-6">
              <span
                className={`absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 ${
                  formStep > 1
                    ? "bg-green-200 dark:bg-green-900"
                    : "bg-gray-100 dark:bg-gray-700"
                }`}
              >
                {formStep > 1 ? (
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                )}
              </span>
              <h3
                className={`font-medium leading-tight ${
                  formStep === 1 && "text-gray-700"
                }`}
              >
                Que sea un@
              </h3>
              <p className="font-medium leading-tight capitalize min-h-5">
                {types.find((item) => item.value === typeSelection)?.label ||
                  ""}
              </p>
            </li>
            <li className="mb-10 ms-6">
              <span
                className={`absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 ${
                  !!locationSelection
                    ? "bg-green-200 dark:bg-green-900"
                    : "bg-gray-100 dark:bg-gray-700"
                }`}
              >
                {!!locationSelection ? (
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
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
                )}
              </span>
              <h3
                className={`font-medium leading-tight ${
                  formStep === 2 && "text-gray-700"
                }`}
              >
                Ubicado en
              </h3>
              <p className="font-medium leading-tight capitalize min-h-5">
                {(region?.label && region?.label + ", ") || ""}
                <span className="capitalize">
                  {locationSelection?.description}
                </span>
              </p>
            </li>
          </ol>
        </div>
        <div className="basis-1/2 self-center max-h-72 overflow-y-auto p-6 sm:p-10">
          <ol className="space-y-4">
            {formStep === 0 &&
              business.map((item) => {
                const selected = item.value === businessSelection;

                return (
                  <div key={item.value} className="animate-fade">
                    <OptionButton
                      onClick={() => {
                        setBusinessSelection(item.value);
                        setPreFormStep(1);
                      }}
                      selected={selected}
                      item={item}
                    />
                  </div>
                );
              })}

            {formStep === 1 &&
              types.map((item) => {
                const selected = item.value === typeSelection;

                return (
                  <div key={item.value} className="animate-fade">
                    <OptionButton
                      onClick={() => {
                        setTypeSelection(item.value);
                        setPreFormStep(2);
                      }}
                      selected={selected}
                      item={item}
                    />
                  </div>
                );
              })}

            {formStep === 2 &&
              regions.map((item) => {
                const selected = item === region;

                return (
                  <div key={item.value} className="animate-fade">
                    <OptionButton
                      onClick={() => {
                        setRegion(item);
                        setPreFormStep(3);
                      }}
                      selected={selected}
                      item={item}
                    />
                  </div>
                );
              })}

            {formStep === 3 &&
              region?.locationIds.map((item) => {
                const location = locations.find(
                  (location) => location.id === item
                );
                const selected = location?.id === locationSelection?.id;

                return (
                  <div key={item} className="animate-fade">
                    <OptionButton
                      onClick={() => {
                        setLocationSelection(location);
                        setPreFormStep(4);
                      }}
                      selected={selected}
                      item={{
                        value: location?.id || "",
                        label: location?.description || "",
                      }}
                    />
                  </div>
                );
              })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Form;
