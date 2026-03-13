"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

// Images
import bgImg from "@/public/images/bg/industries-bg02.png";
import icon01 from "@/public/images/icon/service-icon01.svg";
import icon02 from "@/public/images/icon/service-icon02.svg";
import icon03 from "@/public/images/icon/service-icon03.svg";
import icon04 from "@/public/images/icon/service-icon04.svg";
import icon05 from "@/public/images/icon/service-icon05.svg";
import icon06 from "@/public/images/icon/service-icon06.svg";
import icon07 from "@/public/images/icon/service-icon07.svg";

export default function IndustriesSection() {
  const industries = [
    { icon: icon01, title: "AI 코어 기술" },
    { icon: icon02, title: "헬스케어·바이오" },
    { icon: icon03, title: "금융·블록체인" },
    { icon: icon04, title: "제조·로보틱스" },
    { icon: icon05, title: "메타버스·XR" },
    { icon: icon06, title: "ESG·에너지" },
    { icon: icon07, title: "HR·JobTech" },
  ];

  return (
    <section
      className="industries pb-165 bg_img bg-wrap"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="container">
        <div className="sec-title sec-title-center text-center mb-50">
          <span className="sub-title mb-15">참여 분야</span>
          <h2 className="title">AI Festa가 다루는 산업 분야</h2>
        </div>
      </div>

      <div className="xb-industries-wrapper d-inline-block">
        <Marquee
          direction="right"
          speed={40}
          gradient={false}
          pauseOnHover
          className="marquee-right"
        >
          <div className="xb-industries-inner ul_li">
            {industries.map((item, index) => (
              <div className="xb-industries-item xb-border" key={index}>
                <div className="xb-icon">
                  <Image src={item.icon} alt={item.title} />
                </div>
                <h3 className="xb-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
