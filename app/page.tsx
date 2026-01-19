"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { Calendar, Settings, Save } from "lucide-react"

export default function VisualNovelPage() {
  const [ssnValue, setSsnValue] = useState("021-83-9566")

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-zinc-900 via-slate-900 to-neutral-950">
      {/* Background industrial/warehouse image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=dark+industrial+warehouse+interior+with+metal+pipes+and+fences)",
        }}
      />
      
      {/* Dark overlay for atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Top Left Stats */}
      <div className="absolute top-6 left-6 flex items-start gap-4 z-20">
        <Avatar className="h-20 w-20 border-4 border-zinc-700 shadow-xl ring-2 ring-red-900/50">
          <img src="/anime-pink-hair-girl-avatar.jpg" alt="Character avatar" className="object-cover" />
        </Avatar>
        <div className="flex flex-col gap-2">
          <div className="bg-gradient-to-r from-red-900 to-red-800 text-zinc-100 px-4 py-1.5 rounded font-bold text-sm shadow-lg flex items-center justify-between min-w-[120px] border border-red-700/50">
            <span className="text-xs opacity-80">MISSIONS</span>
            <span className="ml-3">3/5</span>
          </div>
          <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-zinc-100 px-4 py-1.5 rounded font-bold text-sm shadow-lg flex items-center justify-between min-w-[120px] border border-amber-600/50">
            <span className="text-xs opacity-80">BOUNTY</span>
            <span className="ml-3">${"423"}</span>
          </div>
        </div>
      </div>

      {/* Top Right Calendar */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-zinc-900/90 backdrop-blur-sm rounded border border-zinc-700 shadow-xl p-4 min-w-[240px]">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-5 w-5 text-red-500" />
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Deadline:</span>
          </div>
          <div className="text-sm font-bold text-zinc-100">April 18th, 2023</div>
          <div className="mt-3 grid grid-cols-7 gap-1">
            {[...Array(31)].map((_, i) => (
              <div key={i} className="h-6 w-6 flex items-center justify-center text-[10px] text-zinc-500">
                {i < 28 ? i + 1 : ""}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center Character */}
      <div className="absolute inset-0 flex items-end justify-center z-10">
        <img 
          src="/anime-girl-pink-hair-blue-jacket-standing.jpg" 
          alt="Character" 
          className="h-[90%] object-contain drop-shadow-2xl" 
        />
      </div>

      {/* SSN Input Box */}
      <div className="absolute top-[20%] right-[10%] z-20">
        <div className="bg-zinc-900/95 backdrop-blur-sm rounded-lg shadow-2xl p-6 min-w-[280px] border border-zinc-700">
          <label className="block text-sm font-semibold text-zinc-100 mb-3 bg-red-900/80 px-4 py-2 rounded text-center uppercase tracking-wider border border-red-700/50">
            Security Code
          </label>
          <Input
            value={ssnValue}
            onChange={(e) => setSsnValue(e.target.value)}
            className="text-center text-lg font-mono border border-zinc-600 focus:border-red-500 bg-zinc-800 text-zinc-100 placeholder:text-zinc-500"
            placeholder="XXX-XX-XXXX"
          />
        </div>
      </div>

      {/* Bottom Dialog Box */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-30">
        <div className="bg-gradient-to-br from-zinc-900/95 via-zinc-800/95 to-zinc-900/95 backdrop-blur-sm rounded-lg shadow-2xl border border-zinc-700 overflow-hidden">
          {/* Character name tab */}
          <div className="flex items-start">
            <div className="bg-gradient-to-r from-red-900 to-red-800 text-zinc-100 px-8 py-3 rounded-br-lg font-bold text-lg shadow-lg uppercase tracking-wider border-r border-b border-red-700/50">
              Revy
            </div>
            <div className="flex-1" />
            <div className="flex gap-3 px-6 py-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 font-semibold uppercase text-xs tracking-wider"
              >
                <Save className="h-4 w-4 mr-2" />
                SAVE
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 font-semibold uppercase text-xs tracking-wider"
              >
                <Settings className="h-4 w-4 mr-2" />
                SETTINGS
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 font-semibold uppercase text-xs tracking-wider"
              >
                AUTOPLAY: OFF
              </Button>
            </div>
          </div>

          {/* Dialog content */}
          <div className="px-8 py-6 space-y-4">
            <p className="text-zinc-200 text-lg leading-relaxed">
              {"Listen up... you better make sure those numbers are right, or we're both gonna have a real bad day."}
            </p>
            <p className="text-zinc-100 text-lg leading-relaxed font-semibold">{"Is this code correct?"}</p>
          </div>

          {/* Next button */}
          <div className="flex justify-end px-8 pb-6">
            <Button className="bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-zinc-100 font-bold px-8 py-3 text-lg rounded shadow-lg uppercase tracking-wider border border-red-600/50">
              NEXT
              <span className="ml-2">{">"}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
