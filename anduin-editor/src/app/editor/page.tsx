"use client"

import Simulator from '@/simulator';
import Forms from '@/forms';
import Navs from '@/navs';

export default function Editor(){
  return (
    <main className="w-full bg-white flex flex-row flex-nowrap h-screen">
      <header className="w-full fixed h-10 border-b border-gray-200 bg-white">Actions</header>
      <div className="w-60 border-r border-gray-200 pt-10">
        <div className="p-2.5">
          <Navs/>
        </div>
      </div>
      <div className="flex-1 w-full pt-10">
        <Simulator target="simple-750"/>
      </div>
      <div className="w-96 border-l border-gray-200 pt-10">
        <div className="p-2.5">
          <Forms />
        </div>
      </div>
    </main>
  )
}