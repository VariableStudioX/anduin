"use client"

import Simulator from '@/simulator';
import Forms from '@/forms';
import Navs from '@/navs';

export default function Editor(){
  return (
    <div className="w-full h-screen flex flex-row flex-nowrap">
      <div className="w-60">
        <div className="p-2.5">
          <Navs/>
        </div>
      </div>
      <div className="flex-1 w-full">
        <Simulator target="simple-750"/>
      </div>
      <div className="w-80">
        <div className="p-2.5">
          <Forms />
        </div>
      </div>
    </div>
  )
}