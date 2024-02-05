import { FaSearch } from "react-icons/fa";
import LogoLarge from "../assets/png/logo-large.png";
// import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ComicsComponent from "../Menus/ComicsComponent";
const MENUS = [
  {
    text: "news",
    href: "#",
    component: "",
  },
  {
    text: "comics",
    href: "/comics",
    component: ComicsComponent,
  },
  {
    text: "characters",
    href: "/characters",
    component: "",
  },
  {
    text: "movies",
    href: "/movies",
    component: "",
  },
  {
    text: "Tv show",
    href: "/tv",
    component: "",
  },
  {
    text: "games",
    href: "/games",
    component: "",
  },
  {
    text: "videos",
    href: "/videos",
    component: "",
  },
  {
    text: "more",
    href: "/more",
    component: "",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <>
      {/* 헤더 */}
      <section className=" w-full flex justify-center h-12 bg-main-dark">
        <div className="relative max-w-7xl w-full h-full flex text-white justify-between items-center">
          {/* 왼쪽: 회원정보 */}
          <div className="flex h-full items-center text-sm space-x-2 border-l border-r border-gray-700 px-4">
            <span className="inline-block bg-white w-5 h-5 rounded-full text-main-dark text-right italic pr-0.5">
              IN
            </span>
            <span>CHOI</span>
          </div>
          {/* 오른쪽: 검색 */}
          <div className="px-4 h-full flex items-center border-l border-r border-gray-700 space-x-4">
            {/* subscribe */}
            <div className="h-full flex items-center space-x-2">
              {/* 왼쪽이미지 */}
              <img
                className="h-[60%] inline-block"
                src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png"
                alt="image_marvel"
              />
              <div className=" inline-block uppercase text-center">
                <p className="text-sm">marvel unlimited</p>
                <p className="text-xs">subscribe</p>
              </div>
            </div>
            {/* 아이콘 */}
            <div className="h-full flex items-center border-l border-gray-700 pl-4">
              <FaSearch />
            </div>
          </div>
          {/* 중앙: 로고 */}
          <div className="absolute h-full top-0 left-[50%] -translate-x-[50%]">
            <img className="h-full" src={LogoLarge} alt="logo_large" />
          </div>
        </div>
      </section>
      <div className="relative">
        <section className=" w-full border border-gray-700 flex justify-center h-10 bg-main-dark text-white uppercase space-x-8 text-sm items-center ">
          {MENUS.map((item, index) => (
            <NavLink
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              key={index}
              href={item.href}
              component={item.component}
            >
              {item.text}
            </NavLink>
          ))}
        </section>
        {menuOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className=" absolute z-30 top-10 left-0 right-0 w-full h-80 bg-white"
            ></motion.div>
          </AnimatePresence>
        )}
      </div>
    </>
  );
}
