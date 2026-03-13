"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Images
import projectBg from "@/public/images/bg/project-bg.png";
import gifRound from "@/public/images/icon/b10c3e43e836d32554bf.gif";

import projectImg01 from "@/public/images/project/project-img01.jpg";
import projectImg02 from "@/public/images/project/project-img02.jpg";
import projectImg03 from "@/public/images/project/project-img03.jpg";
import projectImg04 from "@/public/images/project/project-img04.jpg";

// Icons
import icon01 from "@/public/images/icon/project-icon01.svg";
import icon02 from "@/public/images/icon/project-icon02.svg";
import icon03 from "@/public/images/icon/project-icon03.svg";
import icon08 from "@/public/images/icon/project-icon08.svg";
import icon09 from "@/public/images/icon/project-icon09.svg";
import icon10 from "@/public/images/icon/project-icon10.svg";
import icon11 from "@/public/images/icon/project-icon11.svg";
import icon12 from "@/public/images/icon/project-icon12.svg";
import icon13 from "@/public/images/icon/project-icon13.svg";

export default function ProjectSection() {
  useEffect(() => {
    const bgElement = document.querySelector<HTMLElement>(".project.bg_img");
    if (bgElement) {
      bgElement.style.backgroundImage = `url(${projectBg.src})`;
    }

    const items = document.querySelectorAll<HTMLElement>(".xb-project-item");
    const paginations = document.querySelectorAll<HTMLElement>(".xb-project-pagination li");
    if (!items.length || !paginations.length) return;

    const updateActive = () => {
      let activeIndex = 0;
      const triggerLine = window.innerHeight * 0.3;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          activeIndex = index;
        }
      });

      paginations.forEach((dot) => dot.classList.remove("active"));
      paginations[activeIndex]?.classList.add("active");

      items.forEach((item, i) => {
        item.style.opacity = i === activeIndex ? "1" : i < activeIndex ? "0.3" : "1";
      });
    };

    window.addEventListener("scroll", updateActive);
    updateActive();

    return () => window.removeEventListener("scroll", updateActive);
  }, []);

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

  const projects = [
    {
      img: projectImg01,
      title: "모두의 AI Zone",
      desc: "AI 기반 산업 융합과 최신 트렌드, 전략을 공유하는 오픈 이노베이션 허브. 글로벌 AI 정책·기술 컨퍼런스와 Live Tech Show가 열립니다.",
      industry: "AI 산업 융합",
      country: "대한민국, 코엑스",
      techs: [icon01, icon02, icon03],
    },
    {
      img: projectImg02,
      title: "AI 코어 Zone",
      desc: "초거대 AI, 머신러닝, 자연어처리 등 AI 핵심 기술 기업들이 모여 최신 솔루션을 선보이는 전시 공간입니다.",
      industry: "AI 코어 기술",
      country: "대한민국, 코엑스",
      techs: [icon01, icon08, icon09],
    },
    {
      img: projectImg03,
      title: "AI 융합 Zone",
      desc: "헬스케어, 금융, 제조, 물류 등 산업별 AI 적용 사례와 솔루션을 집중 조명하는 융합 전시 공간입니다.",
      industry: "산업 AI 융합",
      country: "대한민국, 코엑스",
      techs: [icon10, icon11, icon01],
    },
    {
      img: projectImg04,
      title: "AI 트렌드 Zone",
      desc: "메타버스, XR, 디지털콘텐츠, 블록체인 등 차세대 AI 트렌드 기술을 체험하고 비즈니스 기회를 탐색합니다.",
      industry: "AI 트렌드",
      country: "대한민국, 코엑스",
      techs: [icon08, icon12, icon13],
    },
  ];

  return (
    <section className="project bg_img pt-135 pb-150">
      <div className="container">
        <div className="sec-title custom-sec-title xb-sec-padding text-center">
          <span className="sub-title">행사존 안내</span>

          <h2 className="title">
            <span className="round-img">
              <Image src={gifRound} alt="animation" />
            </span>{" "}
            AI Festa 2026 전시 공간을 만나보세요
          </h2>

          <div className="xb-heading-btn d-inline">
            <Link className="thm-btn agency-btn" href="#">
              <span className="text">전체 행사존 보기</span>
              <span className="arrow">
                <span className="arrow-icon">
                  <ArrowIcon />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mxw-1800">
        <div className="xb-project-wrap">

          <div className="xb-project-pagination-wrap">
            <ul className="xb-project-pagination">
              {projects.map((_, i) => (
                <li key={i} className={i === 1 ? "active" : ""}>
                  {i + 1}
                </li>
              ))}
            </ul>
          </div>

          <div className="xb-project-inner">
            {projects.map((project, index) => (
              <div
                key={index}
                className="xb-project-item bg_img"
                style={{ backgroundImage: `url(${project.img.src})` }}
              >
                <div className="xb-project-content">
                  <div className="xb-item--inner xb-border">
                    <h2 className="xb-item--title">{project.title}</h2>
                    <p className="xb-item--content">{project.desc}</p>

                    <ul className="xb-item--list ul_li">
                      <li>분야: <span>{project.industry}</span></li>
                      <li>장소: <span>{project.country}</span></li>
                    </ul>

                    <div className="xb-item--technologie ul_li">
                      <span>주요 기술:</span>
                      <ul className="list-unstyled ul_li">
                        {project.techs.map((icon, i) => (
                          <li key={i}>
                            <Image src={icon} alt="tech icon" />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="xb-item---btn mt-70">
                      <Link className="thm-btn agency-btn" href="#">
                        <span className="text">자세히 보기</span>
                        <span className="arrow">
                          <span className="arrow-icon">
                            <ArrowIcon />
                          </span>
                        </span>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
