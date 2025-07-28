import "./globals.scss";

export const metadata = {
  title: 'Vespas - Bike Gang',
  description: 'Qualquer mina, qualquer bike',
};

// const roboto = Roboto({
//   variable: "--font-roboto-sans",
//   subsets: ["latin"],
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <section className="min-h-screen">
          <main>{children}</main>
        </section>
      </body>
    </html>
  );
}
