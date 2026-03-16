"use client";

import { useEffect } from "react";

/**
 * ServiceMarker — 서비스 페이지 전용 body 속성 마커
 * 
 * page.tsx(서비스)에만 포함. page_full.tsx/page_original.tsx에는 미포함.
 * body[data-page="service"]를 설정하여 service-overrides.css 활성화.
 * 언마운트 시 속성 제거 → 다른 페이지에 영향 없음.
 */
export default function ServiceMarker() {
  useEffect(() => {
    document.body.dataset.page = "service";
    return () => {
      delete document.body.dataset.page;
    };
  }, []);

  return null;
}
