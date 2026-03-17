"use client";

import { useEffect } from "react";

/**
 * ServiceMarker — 서비스 페이지 전용 body 속성 마커 + 메뉴 alert 처리
 * 
 * page.tsx(서비스)에만 포함. page_full.tsx/page_original.tsx에는 미포함.
 * body[data-page="service"]를 설정하여 service-overrides.css 활성화.
 * 상단/하단 메뉴 클릭 시 "오픈 예정입니다." alert 표시.
 * 언마운트 시 속성/이벤트 제거 → 다른 페이지에 영향 없음.
 */
export default function ServiceMarker() {
  useEffect(() => {
    document.body.dataset.page = "service";

    // 상단/하단 메뉴 클릭 시 alert
    const handleNavClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;
      const inNav = link.closest(".main-menu, .header-btn, .xb-footer-nav, .xb-footer-bottom, .xb-header-nav");
      if (inNav) {
        e.preventDefault();
        e.stopPropagation();
        alert("오픈 예정입니다.");
      }
    };
    document.addEventListener("click", handleNavClick, true);

    return () => {
      delete document.body.dataset.page;
      document.removeEventListener("click", handleNavClick, true);
    };
  }, []);

  return null;
}
