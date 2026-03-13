"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Collapse from "@mui/material/Collapse";
import "./style.css";

interface MenuItem {
  id: number;
  title: string;
  link: string;
  submenu?: MenuItem[];
}

const menus: MenuItem[] = [
  {
    id: 1,
    title: "홈",
    link: "/",
    submenu: [
      { id: 11, title: "AI Festa 메인", link: "/" },
      { id: 12, title: "AI Marketing", link: "#" },
      { id: 13, title: "AI Chatbot", link: "#" },
    ],
  },
  {
    id: 2,
    title: "행사소개",
    link: "#",
  },
  {
    id: 3,
    title: "프로그램",
    link: "#",
    submenu: [
      { id: 31, title: "컨퍼런스", link: "#" },
      { id: 32, title: "일정표", link: "#" },
      { id: 33, title: "어워즈", link: "#" },
      { id: 34, title: "연사 소개", link: "#" },
      { id: 35, title: "행사존", link: "#" },
      { id: 36, title: "행사장 배치도", link: "#" },
      { id: 37, title: "오시는 길", link: "#" },
    ],
  },
  {
    id: 4,
    title: "참가안내", link: "#", submenu: [
      { id: 41, title: "전시 참가 안내", link: "#" },
      { id: 42, title: "참관 안내", link: "#" },
      { id: 43, title: "비즈매칭 안내", link: "#" },
      { id: 44, title: "컨퍼런스 신청", link: "#" },
    ],
  },
  {
    id: 5,
    title: "미디어", link: "#", submenu: [
      { id: 51, title: "보도자료", link: "#" },
      { id: 52, title: "공지사항", link: "#" },
    ],
  },
  {
    id: 6,
    title: "문의",
    link: "#",
  },
];

export default function MobileMenu() {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleClick = (e: React.MouseEvent, link: string) => {
    if (link === "#") {
      e.preventDefault();
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ul className="responsivemenu">
      {menus.map((menu) => (
        <li key={menu.id} className={openId === menu.id ? "active" : ""}>
          {menu.submenu ? (
            <Fragment>
              <p onClick={() => handleToggle(menu.id)}>
                {menu.title}
                <i
                  className={
                    openId === menu.id ? "fa fa-angle-up" : "fa fa-angle-down"
                  }
                ></i>
              </p>

              {/* MUI Collapse */}
              <Collapse in={openId === menu.id} timeout="auto" unmountOnExit>
                <ul className="subMenu">
                  {menu.submenu.map((sub) => (
                    <li key={sub.id}>
                      <Link href={sub.link} onClick={(e) => handleClick(e, sub.link)}>
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Collapse>
            </Fragment>
          ) : (
            <Link href={menu.link} onClick={(e) => handleClick(e, menu.link)}>
              {menu.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
