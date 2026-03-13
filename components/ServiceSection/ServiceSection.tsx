"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import aboutBg from "@/public/images/bg/service-bg.png";
import gif from "@/public/images/icon/b10c3e43e836d32554bf.gif";
import arrowIcon from "@/public/images/icon/rotate-arrow-black.svg";

// Service images
import img01 from "@/public/images/service/img01.jpg";
import img02 from "@/public/images/service/img02.jpg";
import img03 from "@/public/images/service/img03.jpg";
import img04 from "@/public/images/service/img04.jpg";
import img05 from "@/public/images/service/img05.jpg";
import img06 from "@/public/images/service/img06.jpg";

interface ServiceItem {
  id: number;
  title: string;
  desc: string;
  img: StaticImageData;
  link: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "초거대 AI Summit",
    desc: "OpenAI, Cohere, Perplexity 등 글로벌 AI 기업과 국내 주요 기업이 참여하는 초거대 AI 전략 컨퍼런스.",
    img: img01,
    link: "#",
  },
  {
    id: 2,
    title: "Future Tech Conference",
    desc: "GitHub, 더존비즈온, 포스코DX 등이 참여하여 미래 기술의 본질을 가장 먼저 마주하는 기술 컨퍼런스.",
    img: img02,
    link: "#",
  },
  {
    id: 3,
    title: "Digital Healthcare Forum",
    desc: "AI 기반 헬스케어·바이오 혁신 사례를 공유하고, 의료 분야의 디지털 전환을 논의합니다.",
    img: img03,
    link: "#",
  },
  {
    id: 4,
    title: "Quantum Forum",
    desc: "양자컴퓨팅과 AI의 결합, 양자 보안, 양자 통신 등 차세대 양자 기술의 산업 적용 사례를 논의합니다.",
    img: img04,
    link: "#",
  },
  {
    id: 5,
    title: "비즈니스 매칭",
    desc: "참여 기업의 파트너십과 투자를 연결하는 맞춤형 B2B 비즈니스 매칭 프로그램입니다.",
    img: img05,
    link: "#",
  },
  {
    id: 6,
    title: "디지털 미래혁신대상",
    desc: "장관상 3점, 서울시장상 3점 등 총 18개 시상. 차세대 AI 혁신 기업 발굴 및 브랜드 홍보를 지원합니다.",
    img: img06,
    link: "#",
  },
];

const ArrowIcon = () => (
  <>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5.066" y="19.978" width="20.571" height="2.612" transform="rotate(-40.28 5.066 19.978)" fill="white" />
      <rect x="7.971" y="7.244" width="2.612" height="2.612" transform="rotate(-40.28 7.971 7.244)" fill="white" />
      <rect x="11.652" y="7.548" width="2.612" height="2.612" transform="rotate(-40.28 11.652 7.548)" fill="white" />
      <rect x="15.334" y="7.852" width="2.612" height="2.612" transform="rotate(-40.28 15.334 7.852)" fill="white" />
      <rect x="18.712" y="11.837" width="2.612" height="2.612" transform="rotate(-40.28 18.712 11.837)" fill="white" />
      <rect x="18.408" y="15.52" width="2.612" height="2.612" transform="rotate(-40.28 18.408 15.52)" fill="white" />
      <rect x="18.104" y="19.201" width="2.612" height="2.612" transform="rotate(-40.28 18.104 19.201)" fill="white" />
    </svg>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5.066" y="19.978" width="20.571" height="2.612" transform="rotate(-40.28 5.066 19.978)" fill="white" />
      <rect x="7.971" y="7.244" width="2.612" height="2.612" transform="rotate(-40.28 7.971 7.244)" fill="white" />
      <rect x="11.652" y="7.548" width="2.612" height="2.612" transform="rotate(-40.28 11.652 7.548)" fill="white" />
      <rect x="15.334" y="7.852" width="2.612" height="2.612" transform="rotate(-40.28 15.334 7.852)" fill="white" />
      <rect x="18.712" y="11.837" width="2.612" height="2.612" transform="rotate(-40.28 18.712 11.837)" fill="white" />
      <rect x="18.408" y="15.52" width="2.612" height="2.612" transform="rotate(-40.28 18.408 15.52)" fill="white" />
      <rect x="18.104" y="19.201" width="2.612" height="2.612" transform="rotate(-40.28 18.104 19.201)" fill="white" />
    </svg>
  </>
);

export default function ServiceSection() {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <section className="service pt-135">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="sec-title custom-sec-title xb-sec-padding text-center">
              <span className="sub-title">주요 프로그램</span>

              <h2 className="title">
                <span className="round-img">
                  <Image src={gif} alt="animated gif" />
                </span>{" "}
                AI Festa 2026에서 만나는 핵심 프로그램
              </h2>

              <div className="xb-heading-btn d-inline">
                <Link className="thm-btn agency-btn" href="#">
                  <span className="text">전체 프로그램 보기</span>
                  <span className="arrow">
                    <span className="arrow-icon" aria-hidden="true">
                      <ArrowIcon />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Grid */}
      <div
        className="xb-service-wrap bg_img"
        style={{
          backgroundImage: `url(${aboutBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className={`xb-service-item xb-border xb-mouseenter ${
              activeId === service.id ? "active" : ""
            }`}
            onMouseEnter={() => setActiveId(service.id)}
          >
            <div className="xb-item--inner">
              <div className="xb-item--item">
                <div className="xb-item--head-item">
                  <h3 className="xb-item--title border-effect">
                    <Link href={service.link}>{service.title}</Link>
                  </h3>

                  <Link className="xb-item--icon" href={service.link}>
                    <Image src={arrowIcon} alt="arrow icon" />
                  </Link>
                </div>

                <p className="xb-item--content">{service.desc}</p>

                <div className="img-hove-effect">
                  <div className="xb-item--img xb-img">
                    {[1, 2, 3].map((i) => (
                      <Link href={service.link} key={i}>
                        <Image src={service.img} alt={service.title} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="service-vertical-text">
                <h3 className="xb-item--title">
                  <Link href={service.link}>{service.title}</Link>
                </h3>

                <Link className="xb-icon" href={service.link}>
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none">
                    <rect x="6.289" y="21.411" width="22.36" height="2.839" transform="rotate(-40.28 6.289 21.411)" fill="white" />
                    <rect x="9.447" y="7.570" width="2.839" height="2.839" transform="rotate(-40.28 9.447 7.570)" fill="white" />
                    <rect x="13.449" y="7.900" width="2.839" height="2.839" transform="rotate(-40.28 13.449 7.900)" fill="white" />
                    <rect x="17.450" y="8.230" width="2.839" height="2.839" transform="rotate(-40.28 17.450 8.230)" fill="white" />
                    <rect x="21.122" y="12.562" width="2.839" height="2.839" transform="rotate(-40.28 21.122 12.562)" fill="white" />
                    <rect x="20.792" y="16.564" width="2.839" height="2.839" transform="rotate(-40.28 20.792 16.564)" fill="white" />
                    <rect x="20.461" y="20.566" width="2.839" height="2.839" transform="rotate(-40.28 20.461 20.566)" fill="white" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
