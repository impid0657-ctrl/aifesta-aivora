import Header from "@/components/Header/Header";
import HeroSection from "@/components/hero/Hero";
import AboutSection from "@/components/about/about";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import IndustriesMarqueeSection from "@/components/IndustriesMarqueeSection/IndustriesMarqueeSection";
import IndustriesSection from "@/components/Industries/Industries";
import ContactSection from "@/components/ContactSection/ContactSection";
import TestimonialSection from "@/components/Testimonial/Testimonial";
import BlogSection from "@/components/BlogSection/BlogSection";
import Footer from "@/components/footer/Footer";
import Scrollbar from "@/components/scrollbar/scrollbar";
import ServiceMarker from "@/components/ServiceMarker/ServiceMarker";

export const metadata = {
  title: "AI FESTA 2026 | AI Week 2026 공식 페스티벌",
  description:
    "AI Week 2026 공식 페스티벌 AI Festa. 2026.10.6(화)~10.8(목) 코엑스 3층 C홀. 글로벌 AI 컨퍼런스, 전시, 비즈매칭이 한 자리에.",
};

export default function HomePage() {
  return (
    <>
      <ServiceMarker />
      <div className="ai-agency">
        <div className="body_wrap o-clip">
          <Header />

          <main>
            <HeroSection hideFeatures hideButtons />
            <AboutSection hideMarquee />
            {/* 비활성화: ServiceSection (주요 프로그램 아코디언) — 아이보라 서비스 */}
            {/* <ServiceSection /> */}
            <FeatureSection hideTitle compactMode />
            {/* 비활성화: ProjectSection (4개 존 배너) — 아이보라 서비스 */}
            {/* <ProjectSection /> */}
            {/* 비활성화: IndustriesMarquee ~ Contact — 아이보라 서비스 */}
            {/* <IndustriesMarqueeSection /> */}
            {/* <IndustriesSection /> */}
            {/* <ContactSection /> */}
            <div style={{ marginTop: '100px' }}>
              <TestimonialSection />
            </div>
            {/* 비활성화: BlogSection (AI Festa 소식) — 아이보라 서비스 */}
            {/* <BlogSection /> */}
          </main>

          <Footer />
          <Scrollbar />
        </div>
      </div>
    </>
  );
}
