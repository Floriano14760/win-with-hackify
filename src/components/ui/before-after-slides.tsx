"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";

interface SlidePreviewProps {
  type: "before" | "after";
  className?: string;
}

function SlidePreview({ type, className }: SlidePreviewProps) {
  const isBefore = type === "before";

  return (
    <div
      className={cn(
        "relative w-full aspect-[16/9] rounded-lg overflow-hidden border transition-all duration-300",
        isBefore
          ? "bg-white border-gray-300"
          : "bg-gradient-to-br from-slate-900 to-slate-800 border-primary/30",
        className
      )}
    >
      {isBefore ? (
        // Ugly PowerPoint slide
        <div className="p-3 sm:p-4 h-full flex flex-col">
          {/* Header with ugly colors */}
          <div className="bg-blue-600 text-white px-2 py-1 text-[8px] sm:text-xs font-bold mb-2 sm:mb-3">
            NOTRE PROPOSITION COMMERCIALE
          </div>
          
          {/* Ugly content with misaligned elements */}
          <div className="flex-1 space-y-1 sm:space-y-2">
            <div className="flex gap-2 items-start">
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-red-500 rounded-sm flex-shrink-0" />
              <div className="space-y-0.5 sm:space-y-1">
                <div className="h-1.5 sm:h-2 bg-gray-800 w-20 sm:w-32" />
                <div className="h-1.5 sm:h-2 bg-gray-400 w-16 sm:w-24" />
              </div>
            </div>
            
            <div className="flex gap-2 items-start ml-4 sm:ml-6">
              <div className="w-3 h-3 sm:w-5 sm:h-5 bg-green-500 rounded-full flex-shrink-0" />
              <div className="space-y-0.5 sm:space-y-1">
                <div className="h-1.5 sm:h-2 bg-gray-800 w-24 sm:w-36" />
                <div className="h-1.5 sm:h-2 bg-gray-400 w-14 sm:w-20" />
              </div>
            </div>
            
            <div className="flex gap-2 items-start">
              <div className="w-5 h-4 sm:w-8 sm:h-6 bg-yellow-400 flex-shrink-0" />
              <div className="space-y-0.5 sm:space-y-1">
                <div className="h-1.5 sm:h-2 bg-gray-800 w-16 sm:w-28" />
              </div>
            </div>
          </div>
          
          {/* Ugly clipart-style icon */}
          <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-50" />
          
          {/* Random shapes */}
          <div className="absolute top-6 right-2 sm:top-8 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rotate-45" />
        </div>
      ) : (
        // Beautiful designed slide
        <div className="p-3 sm:p-4 h-full flex flex-col">
          {/* Elegant header */}
          <div className="flex items-center justify-between mb-2 sm:mb-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1 h-4 sm:h-6 bg-primary rounded-full" />
              <span className="text-white text-[8px] sm:text-xs font-medium tracking-wide">
                Proposition Commerciale
              </span>
            </div>
            <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <Sparkles className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-primary" />
            </div>
          </div>
          
          {/* Clean content blocks */}
          <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-3">
            <div className="bg-white/5 rounded-lg p-1.5 sm:p-2 border border-white/10">
              <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-md bg-primary/20 mb-1 sm:mb-2 flex items-center justify-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-sm" />
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <div className="h-1 sm:h-1.5 bg-white/60 w-full rounded-full" />
                <div className="h-1 sm:h-1.5 bg-white/30 w-3/4 rounded-full" />
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-1.5 sm:p-2 border border-white/10">
              <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-md bg-primary/20 mb-1 sm:mb-2 flex items-center justify-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full" />
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <div className="h-1 sm:h-1.5 bg-white/60 w-full rounded-full" />
                <div className="h-1 sm:h-1.5 bg-white/30 w-2/3 rounded-full" />
              </div>
            </div>
            
            <div className="col-span-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-1.5 sm:p-2 border border-primary/20">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg bg-primary/30 flex items-center justify-center">
                  <span className="text-primary text-[8px] sm:text-sm font-bold">+42%</span>
                </div>
                <div className="flex-1 space-y-0.5 sm:space-y-1">
                  <div className="h-1 sm:h-1.5 bg-white/60 w-3/4 rounded-full" />
                  <div className="h-1 sm:h-1.5 bg-white/30 w-1/2 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Label */}
      <div
        className={cn(
          "absolute bottom-1 left-1 sm:bottom-2 sm:left-2 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[6px] sm:text-[10px] font-medium",
          isBefore
            ? "bg-red-100 text-red-600"
            : "bg-primary/20 text-primary"
        )}
      >
        {isBefore ? "AVANT" : "APRÈS"}
      </div>
    </div>
  );
}

export default function BeforeAfterSlides() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-full flex items-center justify-center p-4 sm:p-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center gap-2 sm:gap-4 max-w-full">
        {/* Before slide */}
        <div
          className={cn(
            "w-[120px] sm:w-[180px] transition-all duration-500 transform",
            isHovered ? "scale-95 -rotate-3 opacity-70" : "scale-100 rotate-0"
          )}
        >
          <SlidePreview type="before" />
        </div>

        {/* Arrow */}
        <div
          className={cn(
            "flex-shrink-0 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center transition-all duration-500",
            isHovered ? "bg-primary scale-110" : ""
          )}
        >
          <ArrowRight
            className={cn(
              "w-3 h-3 sm:w-5 sm:h-5 transition-colors duration-300",
              isHovered ? "text-primary-foreground" : "text-primary"
            )}
          />
        </div>

        {/* After slide */}
        <div
          className={cn(
            "w-[120px] sm:w-[180px] transition-all duration-500 transform",
            isHovered ? "scale-105 rotate-1" : "scale-100 rotate-0"
          )}
        >
          <SlidePreview type="after" />
        </div>
      </div>
    </div>
  );
}
