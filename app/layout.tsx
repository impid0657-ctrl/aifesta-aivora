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
import "../styles/service-overrides.css";

export const metadata: Metadata = {
  title: "인공지능 페스타(AI FESTA) 2026",
  description: "AI Festa는 과학기술정보통신부가 지정한 국가 공식 '인공지능주간(AI Week)'의 대표 행사로, 대한민국 AI 산업 생태계를 이끄는 글로벌 비즈니스 플랫폼입니다.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
  openGraph: {
    title: "인공지능 페스타(AI FESTA) 2026",
    description: "AI Festa는 과학기술정보통신부가 지정한 국가 공식 '인공지능주간(AI Week)'의 대표 행사로, 대한민국 AI 산업 생태계를 이끄는 글로벌 비즈니스 플랫폼입니다.",
    type: "website",
    url: "https://aifesta.kr",
  },
  twitter: {
    card: "summary_large_image",
    title: "인공지능 페스타(AI FESTA) 2026",
    description: "AI Festa는 과학기술정보통신부가 지정한 국가 공식 '인공지능주간(AI Week)'의 대표 행사로, 대한민국 AI 산업 생태계를 이끄는 글로벌 비즈니스 플랫폼입니다.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
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
