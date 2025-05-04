'use client'

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {

    const router = useRouter();
    const pathname = usePathname();

  return (
      <div className={`absolute ${pathname === "/" && "hidden"} top-[15px] left-[15px]`}>
          
          {/* Button */}
      <button className="cursor-pointer flex justify-center items-center rounded-md text-white bg-blue-600 hover:bg-blue-600/95 font-medium text-lg px-2 py-1" onClick={()=> router.back()}>← Back</button>
    </div>
  );
}

export default Header