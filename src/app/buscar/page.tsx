"use client";

import { locations, types } from "@/utils/Constants";
import React, { Suspense } from "react";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { fetchProperties } from "@/services/remax";
import Card from "./Card";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const locationsMap = locations.map((i) => ({
  label: i.description,
  value: i.id,
}));

const Buscar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const business = searchParams.get("business") || "";
  const typeParam = searchParams.get("type") || "[]";
  const type: string[] = JSON.parse(typeParam);
  const location: string = searchParams.get("location") || "1";

  const { data, isLoading } = useQuery({
    queryKey: [
      "properties",
      {
        business,
        type,
        location,
      },
    ],
    queryFn: fetchProperties,
  });

  const onBusinessChange = (business: string) => {
    const params = new URLSearchParams(searchParams);
    if (business) {
      params.set("business", business);
    } else {
      params.delete("business");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="pl-80">
      <div
        id="drawer-navigation"
        className="fixed top-0 left-0 h-screen p-4 pt-20 overflow-y-auto transition-transform  bg-white w-80 dark:bg-neutral-950"
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h5>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
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
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Acción</span>
              </div>
            </li>
            <li>
              <div className="inline-flex shadow-sm pl-4" role="group">
                <button
                  onClick={() => onBusinessChange("sale")}
                  type="button"
                  className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-s-full dark:border-gray-700 dark: dark:hover:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-blue-500 ${
                    business === "sale"
                      ? "bg-white z-10 text-gray-900 animate-jump"
                      : "text-gray-900 text-white"
                  }`}
                >
                  Comprar
                </button>
                <button
                  onClick={() => onBusinessChange("lease")}
                  type="button"
                  className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-e-full dark:border-gray-700 dark: dark:hover:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-blue-500 ${
                    business === "lease"
                      ? "bg-white z-10 text-gray-900 animate-jump"
                      : "text-gray-900 text-white"
                  }`}
                >
                  Alquilar
                </button>
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
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

                <span className="flex-1 ms-3 whitespace-nowrap">Inmueble</span>
              </div>
            </li>
            <li>
              <Select
                name="color"
                placeholder="Casa, Apartamento..."
                options={types}
                classNames={{
                  multiValue: () => "animate-jump",
                }}
                styles={{
                  menu: (base) => ({ ...base, position: "relative" }),
                  control: (base) => ({ ...base, background: "black" }),
                  multiValueRemove: (base) => ({ ...base, color: "black" }),
                  option: (base) => ({
                    ...base,
                    color: "#111827",
                    textTransform: "capitalize",
                  }),
                  multiValue: (base) => ({
                    ...base,
                    textTransform: "capitalize",
                  }),
                }}
                isMulti
                onChange={(v) => {
                  const params = new URLSearchParams(searchParams);
                  if (v && v.length) {
                    params.set(
                      "type",
                      JSON.stringify(v.map((item) => item.value))
                    );
                  } else {
                    params.delete("type");
                  }
                  replace(`${pathname}?${params.toString()}`);
                }}
                defaultValue={type
                  .map((i) => types.find((type) => type.value === i))
                  .filter((i) => !!i)}
              />
            </li>
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
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

                <span className="flex-1 ms-3 whitespace-nowrap">Ubicación</span>
              </div>
            </li>
            <li>
              <Select
                name="color"
                placeholder=""
                options={locationsMap}
                classNames={{
                  singleValue: () => "animate-jump",
                }}
                styles={{
                  menu: (base) => ({ ...base, position: "relative" }),
                  control: (base) => ({ ...base, background: "black" }),
                  multiValueRemove: (base) => ({ ...base, color: "black" }),
                  option: (base) => ({
                    ...base,
                    color: "#111827",
                    textTransform: "capitalize",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    textTransform: "capitalize",
                    color: "white",
                  }),
                }}
                onChange={(v) => {
                  const params = new URLSearchParams(searchParams);
                  if (v) {
                    params.set("location", v.value.toString());
                  } else {
                    params.delete("location");
                  }
                  replace(`${pathname}?${params.toString()}`);
                }}
                defaultValue={locationsMap.find(
                  (i) => i.value.toString() === location
                )}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full min-h-screen bg-white p-4 pt-20">
        {isLoading && <h3>Cargando...</h3>}
        {data && data.length && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {data.map((i, index) => (
              <Card key={index} property={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Buscar />
    </Suspense>
  );
}
