import { QueryFunctionContext } from "@tanstack/react-query";

export type Property = {
  id: string;
  business_type: string;
  realstate_type: string;
  city: string;
  sector: string;
  price: string;
  project?: {
    maximum_price: string;
    minimum_price: string;
    separation_price: string;
  };
  currency: {
    iso: string;
    symbol: string;
  };
  main_picture: {
    big: string;
    small: string;
  };
};

export const fetchProperties = async ({
  queryKey,
}: QueryFunctionContext<
  [
    string,
    {
      business: string;
      type: string[];
      location: string;
    }
  ]
>): Promise<Property[]> => {
  const { business, type, location } = queryKey[1];
  const businessQuery = business ? "&business=" + business : "";
  const locationQuery = location ? "city=" + location : "";
  const typeQuery =
    type && type.length
      ? (!!locationQuery ? "&" : "") + "type=" + type.join() + "&"
      : "";
  const url = `https://api.remaxrd.com/v2/realestates?${locationQuery}${typeQuery}page=1${businessQuery}`;
  console.log("url", url);
  const response = await fetch(url);
  const { data } = await response.json();
  return data;
};
