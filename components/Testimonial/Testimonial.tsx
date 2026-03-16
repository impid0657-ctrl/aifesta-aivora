"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Image from "next/image";

// Images
import bgImage from "@/public/images/bg/testimonial-bg.png";

import newsImg1 from "@/public/images/about/aivora-news-01.jpg";
import newsImg2 from "@/public/images/about/aivora-news-02.jpg";
import newsImg3 from "@/public/images/about/aivora-news-03.jpg";
import newsImg4 from "@/public/images/about/aivora-news-04.jpg";
import newsImg5 from "@/public/images/about/aivora-news-05.jpg";
import newsImg6 from "@/public/images/about/aivora-news-06.jpg";

// News data
const newsItems = [
  {
    id: 1,
    title: "AI Festa 2026 멤버십 데이 부스 신청 안내",
    image: newsImg1,
    date: "2026.03.08",
    category: "공지사항",
    excerpt:
      "멤버십 데이 참가기업을 대상으로 우선 부스 신청이 시작됩니다. 일반기업 신청은 4월 중 오픈 예정입니다.",
  },
  {
    id: 2,
    title: "AI Week 2026 — 10월 코엑스 C홀 개최 확정",
    image: newsImg2,
    date: "2026.02.25",
    category: "보도자료",
    excerpt:
      "AI Week 2026 – AI Festa가 오는 10월 6일부터 8일까지 서울 코엑스 3층 C홀에서 개최됩니다.",
  },
  {
    id: 3,
    title: "AI Festa 2025 성료 — 참관객 6만명 돌파",
    image: newsImg3,
    date: "2025.10.15",
    category: "보도자료",
    excerpt:
      "AI Festa 2025가 성황리에 막을 내렸습니다. 3일간 6만명의 참관객이 방문하며 역대 최대 규모를 기록했습니다.",
  },
  {
    id: 4,
    title: "AI Festa 2025 사전등록 마감 임박 안내",
    image: newsImg4,
    date: "2025.09.20",
    category: "공지사항",
    excerpt:
      "AI Festa 2025 참관객 사전등록이 곧 마감됩니다. 사전등록 시 무료 입장 및 우선 입장 혜택이 제공됩니다.",
  },
  {
    id: 5,
    title: "글로벌 AI 컨퍼런스 연사 라인업 공개",
    image: newsImg5,
    date: "2025.08.10",
    category: "보도자료",
    excerpt:
      "OpenAI, Cohere, Perplexity 등 글로벌 AI 기업 리더들이 AI Festa 2025 컨퍼런스 연사로 참여합니다.",
  },
  {
    id: 6,
    title: "디지털 미래혁신대상 수상 기업 발표",
    image: newsImg6,
    date: "2025.07.05",
    category: "공지사항",
    excerpt:
      "AI Festa 2025 디지털 미래혁신대상 수상 기업이 발표되었습니다. 장관상 3점, 시장상 3점 등 총 18개 시상.",
  },
];

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "16px",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.08)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

const imgWrapStyle: React.CSSProperties = {
  width: "100%",
  height: "200px",
  overflow: "hidden",
  position: "relative",
};

const bodyStyle: React.CSSProperties = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  flex: 1,
};

const metaStyle: React.CSSProperties = {
  display: "flex",
  gap: "12px",
  fontSize: "13px",
  opacity: 0.6,
};

const titleStyle: React.CSSProperties = {
  fontSize: "17px",
  fontWeight: 600,
  lineHeight: 1.4,
  color: "#fff",
  margin: 0,
};

const excerptStyle: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: 1.6,
  opacity: 0.7,
  margin: 0,
  flex: 1,
};

const btnStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "14px",
  fontWeight: 600,
  color: "var(--thm-color, #09ff78)",
  textDecoration: "none",
  marginTop: "auto",
};

export default function TestimonialSection() {
  return (
    <section
      className="testimonial pb-150 bg_img"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="sec-title sec-title-center tes-sec-title text-center mb-50">
          <span className="sub-title mb-15">소식 · 정보</span>
          <h2 className="title">
            AI Festa의 최신 소식을 만나보세요
          </h2>
        </div>
      </div>

      <div className="xb-testimonial-slider">
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={700}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1600: { slidesPerView: 4 },
          }}
        >
          {newsItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div style={cardStyle}>
                <div style={imgWrapStyle}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={bodyStyle}>
                  <div style={metaStyle}>
                    <span>{item.date}</span>
                    <span>{item.category}</span>
                  </div>
                  <h3 style={titleStyle}>{item.title}</h3>
                  <p style={excerptStyle}>{item.excerpt}</p>
                  <a href="#" onClick={(e) => e.preventDefault()} style={btnStyle}>
                    자세히보기
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }}></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
