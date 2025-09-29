import "./globals.scss";

import StoreProvider from "@/lib/store/store-provider";

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
            {children}
        </StoreProvider>
      </body>
    </html>
  );
}
