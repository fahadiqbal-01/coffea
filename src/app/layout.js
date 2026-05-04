import NavBar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "Coffea",
  description: "Best Coffee shop in town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" overflow-x-hidden " >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
