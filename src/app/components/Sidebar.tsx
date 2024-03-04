"use client"

import ToolsConfig from "@/config/toolsConfig";
import { useRouter } from 'next/navigation'

export default function Sidebar() {
  const router = useRouter();

  const onSideBarClick = () => {
    router.push('/ImageFormatConversion');
  };

  return (
    <>
    <ul className="p-2 w-1/5 h-screen border-2 border-cyan-400 overflow-y-scroll">
      {
        ToolsConfig.map((config) => (
          <li className="h-14 leading-[3.5rem] my-2 bg-cyan-400 rounded text-center text-lg" onClick={ onSideBarClick } key={ config.id }>{ config.name }</li>
        ))
      }
    </ul>
    </>
  )
}
