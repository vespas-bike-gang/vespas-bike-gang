import "./globals.scss";

import StoreProvider from "@/app/lib/store/store-provider";
import ClientDataLoader from "./lib/store/client-data-loader";

export const metadata = {
  title: 'Vespas - Bike Gang',
  description: 'Qualquer mina, qualquer bike',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StoreProvider>
          <ClientDataLoader/>
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
