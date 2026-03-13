"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Image from "next/image";

// Images
import bgImage from "@/public/images/bg/testimonial-bg.png";
import gifShape from "@/public/images/icon/animated-gif03.gif";

import avatar1 from "@/public/images/avatar/img01.jpg";
import avatar2 from "@/public/images/avatar/img02.jpg";
import avatar3 from "@/public/images/avatar/img03.jpg";
import avatar4 from "@/public/images/avatar/img04.jpg";
import avatar5 from "@/public/images/avatar/img05.jpg";

// Testimonial data
const testimonials = [
  {
    id: 1,
    source: "참가기업",
    rating: "5.0",
    content:
      "\u201CAI Festa 비즈매칭을 통해 3건의 실제 계약으로 이어졌습니다. 기대 이상의 네트워킹 기회였습니다.\u201D",
    name: "김지현",
    designation: "AI 스타트업 대표",
    avatar: avatar1,
  },
  {
    id: 2,
    source: "참가기업",
    rating: "4.9",
    content:
      "\u201C초거대 AI Summit에서 글로벌 AI 트렌드를 한눈에 파악할 수 있었습니다. 국내 유일한 수준의 컨퍼런스입니다.\u201D",
    name: "박성호",
    designation: "AI 연구소장",
    avatar: avatar2,
  },
  {
    id: 3,
    source: "참가기업",
    rating: "5.0",
    content:
      "\u201C전시 참가를 통해 20개 이상의 신규 리드를 확보했습니다. B2B 행사로는 최고의 ROI였습니다.\u201D",
    name: "이준혁",
    designation: "SaaS 기업 사업개발 팀장",
    avatar: avatar3,
  },
  {
    id: 4,
    source: "참가기업",
    rating: "5.0",
    content:
      "\u201C디지털 미래혁신대상 수상 이후 브랜드 인지도가 크게 올랐습니다. 후속 투자 유치에도 큰 도움이 되었습니다.\u201D",
    name: "최수영",
    designation: "AI 솔루션 기업 CEO",
    avatar: avatar4,
  },
  {
    id: 5,
    source: "참가기업",
    rating: "4.7",
    content:
      "\u201CFuture Tech Conference 연사로 참여한 경험이 매우 좋았습니다. 참관객 수준이 높아 질의응답이 풍부했습니다.\u201D",
    name: "정민우",
    designation: "AI 플랫폼 기업 CTO",
    avatar: avatar5,
  },
  {
    id: 6,
    source: "참가기업",
    rating: "5.0",
    content:
      "\u201CQuantum Forum에서 양자컴퓨팅과 AI 결합 인사이트를 얻었습니다. 차세대 기술 트렌드를 미리 파악할 수 있는 자리였습니다.\u201D",
    name: "한소희",
    designation: "양자 기술 기업 팀장",
    avatar: avatar3,
  },
];


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
          <span className="sub-title mb-15">참가기업 후기</span>
          <h2 className="title">
            참가기업이 전하는 AI Festa
          </h2>
        </div>
      </div>

      <div className="xb-testimonial-slider">
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={700}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1600: { slidesPerView: 5 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="xb-testimonial-item">
                <div className="xb-item--inner xb-border">
                  <ul className="xb-item--rating list-unstyled ul_li">
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>{item.source}</li>
                    <li>{item.rating}</li>
                  </ul>

                  <p className="xb-item--content">{item.content}</p>

                  <div className="xb-item--author ul_li">
                    <div className="xb-item--avatar">
                      <Image src={item.avatar} alt={item.name} />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--name">{item.name}</h3>
                      <span className="xb-item--desig">
                        {item.designation}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
