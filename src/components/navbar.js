"use client";
import Container from "./container";
import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <nav className={`  z-50 ${isHome ? " bg-transparent " : " bg-void "} `}>
      <Container className=" flex flex-col md:flex-row justify-between items-center py-4 md:py-6 gap-4 ">
        <Link href="/">
          <img src="images/logo.png" className=" select-none cursor-pointer " />
        </Link>
        <ul className=" flex flex-wrap justify-center items-center gap-4 md:gap-8 ">
          <li className=" uppercase font-clashSec text-[14px] md:text-[18px] text-white select-none cursor-pointer ">
            <Link href="/coffee">coffee</Link>
          </li>
          <li className=" uppercase font-clashSec text-[14px] md:text-[18px] text-white select-none cursor-pointer ">
            <Link href="/bakery">bakery</Link>
          </li>
          <li className=" uppercase font-clashSec text-[14px] md:text-[18px] text-white select-none cursor-pointer ">
            <Link href="/shop">shop</Link>
          </li>
          <li className=" uppercase font-clashSec text-[14px] md:text-[18px] text-white select-none cursor-pointer ">
            <Link href="/menu">menu</Link>
          </li>
        </ul>
        <button className=" bg-white p-3 rounded-full select-none cursor-pointer ">
          <IoSearchSharp size={25} />
        </button>
      </Container>
    </nav>
  );
}
