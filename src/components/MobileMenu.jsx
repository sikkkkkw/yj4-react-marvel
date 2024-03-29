import { IoMdMenu } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MENUS } from "./Header";
import { FaAngleRight } from "react-icons/fa";

const MobileMenuLink = ({ menu }) => (
  <div className=" relative w-full flex  justify-between px-2 py-3 cursor-pointer group">
    {/* 왼쪽 */}
    <div>{menu.text}</div>
    {/* 오른쪽 */}
    <div>
      <FaAngleRight />
    </div>
    <div className=" absolute left-1 right-1 origin-left h-[1px]  bg-neutral-600  bottom-0 group scale-x-0 duration-300 group-hover:scale-x-100" />
  </div>
);

export default function MobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className=" block md:hidden">
      {/* 모바일일때 보여지는 메뉴 */}
      <div
        onClick={() => setMobileOpen(true)}
        className="block md:hidden text-2xl px-4 cursor-pointer"
      >
        <IoMdMenu />
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className=" z-50 fixed left-0 top-0 bottom-0 flex w-full h-screen bg-main-dark"
          >
            <div className="w-full h-full">
              {/* 모바일 헤더영역 */}
              <div className="flex justify-between w-full text-2xl p-4">
                <button onClick={() => setMobileOpen(false)}>
                  <IoClose />
                </button>
                <button className="text-[16px]">
                  <FaSearch />
                </button>
              </div>
              {/* 모바일 메뉴영역 */}
              <div>
                {MENUS.map((item, index) => (
                  <MobileMenuLink key={index} menu={item} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
