import "./globals.css";
import Header from "@/components/Header/Header";
import { fetchHeaderData } from "@/services/header.service";
import _get from "lodash/get";
import Footer from "@/components/Footer/Footer";
import { fetchFooterData } from "@/services/footer.service";
import { Anek_Latin } from "next/font/google";

const anekLatin = Anek_Latin({ subsets: ["latin"] });

export const metadata = {
  title: "Aditya Birla capital",
  description:
    "Aditya Birla Group is an Indian conglomerate in the textile, metal, cement, finance, telecom, and many more industries. Explore our businesses, sustainability initiatives, and global impact.",
};

export default async function RootLayout({ children }) {
  const fetchedheaderData = await fetchHeaderData();
  const fetchedfooterData = await fetchFooterData();

  const headerData = _get(fetchedheaderData, "header", {});
  const footerData = _get(fetchedfooterData, "footer", {});
  const footerNote = _get(fetchedfooterData, "footernote", {});
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpeg" />
      </head>
      <body
        suppressHydrationWarning
        className={`${anekLatin.className} antialiased`}
      >
        <Header headerData={headerData} />
        {children}
        <Footer
          footerData={footerData ?? footerData}
          footerNote={footerNote ?? footerNote}
        />
      </body>
    </html>
  );
}
