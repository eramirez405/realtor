import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bayahibe",
  description:
    "Explore exclusive properties in Bayahibe. Find luxury homes, beachfront apartments and investment opportunities in one of the most attractive destinations in the Dominican Republic.",
  keywords:
    "Bayahibe real estate, properties in Bayahibe, buy house Bayahibe, Bayahibe real estate investment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
