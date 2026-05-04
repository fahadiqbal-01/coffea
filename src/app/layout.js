import "./globals.css";

export const metadata = {
  title: "Coffea",
  description: "Best Coffee shop in town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
