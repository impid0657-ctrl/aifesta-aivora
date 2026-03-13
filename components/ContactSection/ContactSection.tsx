"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import contactBg from "@/public/images/bg/contact-bg.png";
import gifShape from "@/public/images/icon/b10c3e43e836d32554bf.gif";
import shape1 from "@/public/images/shape/contact-shape01.png";
import shape2 from "@/public/images/shape/contact-shape02.png";
import ContactForm from "../ContactFrom/ContactForm";


export default function ContactSection() {
  const [projectCount, setProjectCount] = useState(0);
  const [clientSatisfaction, setClientSatisfaction] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Animate numbers on view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          let project = 0;
          let client = 0;

          const projectInterval = setInterval(() => {
            project += 1;
            setProjectCount(project);
            if (project >= 60) clearInterval(projectInterval);
          }, 200);

          const clientInterval = setInterval(() => {
            client += 25;
            setClientSatisfaction(client);
            if (client >= 466) clearInterval(clientInterval);
          }, 50);

          observer.disconnect();
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="contact-section pt-150 pb-140 bg_img"
      style={{ backgroundImage: `url(${contactBg.src})` }}
    >
      <div className="container">
        <div className="row mt-none-50 justify-content-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 mt-50">
            <div className="xb-content-wrap">
              <div className="sec-title contact-sec-title">
                <span className="sub-title mb-15">AI Festa 2025 실적</span>
                <h2 className="title horizontal-shape">
                  AI Festa는 검증된{" "}
                  <Image src={gifShape} alt="animated shape" /> AI 행사입니다
                </h2>
              </div>

              <div className="xb-contact-conent">
                <div className="xb-contact-inner ul_li_between">

                  <div className="xb-contact-item">
                    <h3 className="xb-item--number">
                      <span className="xbo">{projectCount}</span>
                      <span className="suffix">K+</span>
                    </h3>
                    <p className="xb-item--content">
                      참관객 (2025 실적)
                    </p>
                  </div>

                  <div className="xb-contact-item">
                    <h3 className="xb-item--number">
                      <span className="xbo">{clientSatisfaction}</span>
                      <span className="suffix">부스+</span>
                    </h3>
                    <p className="xb-item--content">
                      부스 규모 (2025 실적)
                    </p>
                  </div>

                </div>

                {/* SHAPES */}
                <div className="shape shape--1">
                  <Image src={shape1} alt="shape" />
                </div>
                <div className="shape shape--2">
                  <Image src={shape2} alt="shape" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-6 mt-50">
            <div className="xb-contact-form xb-border">
              <div className="form-heading text-center mb-30">
                <h3 className="title">AI Festa 2026 참가 문의</h3>
                <p className="sub-title">
                  전시 참가, 컨퍼런스, 비즈매칭 관련 문의를 남겨주세요.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
