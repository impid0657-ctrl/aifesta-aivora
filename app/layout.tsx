import type { Metadata } from "next";
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/fontawesome.css";
import "../styles/themify-icons.css";
import "../styles/animate.css";
import "../styles/mousecursor.css";
import "../styles/imageRevealHover.css";
import "../styles/custom-fonts.css";
import "../styles/main.css";

export const metadata: Metadata = {
  title: "AI FESTA 2026",
  description: "AI Week 2026 공식 페스티벌 AI Festa. 2026.10.6(화)~10.8(목) 코엑스 3층 C홀.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>

      <body id="scrool">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
