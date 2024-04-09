import React from "react"
import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"


const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relate z-30 py-5">
        <Link href={'/'}>
        <Image className={"float-left"} src={"/camp.svg"} alt="logo" width={35} height={35} /><p className={'font-light float-left p-2 text-xl'}>App</p>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">{link.label}</Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button 
            type="button" 
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green" 
          />
        </div>
        <Image
          src={"menu.svg"}
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
    </nav>
    
  )
}

export default Navbar