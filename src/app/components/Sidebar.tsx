"use client"

import ToolsConfig from "@/config/toolsConfig";
import { useRouter } from 'next/navigation'

export default function Sidebar() {
  const router = useRouter();

  const onSideBarClick = () => {
    router.push('/ImgTransfer');
  }
  return (
    <>
    <ul className="bg-white text-black p-2 w-1/6 min-w-16 h-screen">
      {
        ToolsConfig.map((config) => (
          <li className="bg-green-600" onClick={ onSideBarClick }>{ config.name }</li>
        ))
      }
    </ul>
    </>
  )
}
