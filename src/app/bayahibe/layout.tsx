import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bayahibe",
  description:
    "Explora propiedades exclusivas en Bayahibe. Encuentra casas de lujo, apartamentos junto al mar y oportunidades de inversión en uno de los destinos más atractivos de la República Dominicana.",
  keywords:
    "bienes raíces Bayahibe, propiedades en Bayahibe, comprar casa Bayahibe, inversión inmobiliaria Bayahibe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
