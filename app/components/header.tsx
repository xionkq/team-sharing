'use client'

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

const nav = [
  {
    name: '文章',
    href: '/article',
  },
  {
    name: '项目',
    href: '/article',
  },
  {
    name: '关于',
    href: '/article',
  },
  {
    name: '活动',
    href: '/article',
  },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <div className="h-20 flex justify-between items-center">
      <Image src="/logo.png" width={80} height={50} alt="welcome"/>
      <div className="flex items-center">
        {nav.map((item) => {
          const isActive = pathname === item.href
          return (
            <div className={`text-center p-2 border-b-2 mr-10 text-lg font-bold ${isActive ? 'border-black' : 'border-transparent'}`} key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}