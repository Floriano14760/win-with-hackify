"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles, Minus, Square, X } from "lucide-react";

interface PowerPointFrameProps {
  type: "before" | "after";
  className?: string;
}

function PowerPointFrame({ type, className }: PowerPointFrameProps) {
  const isBefore = type === "before";

  return (
    <div
      className={cn(
        "relative w-full rounded-lg overflow-hidden border shadow-xl transition-all duration-300",
        isBefore ? "border-gray-400 bg-gray-200" : "border-primary/30 bg-slate-800",
        className
      )}
    >
      {/* PowerPoint title bar */}
      <div
        className={cn(
          "flex items-center justify-between px-2 py-1 border-b",
          isBefore ? "bg-gray-300 border-gray-400" : "bg-slate-700 border-slate-600"
        )}
      >
        <div className="flex items-center gap-1.5">
          <div className={cn("w-3 h-3 rounded-sm flex items-center justify-center text-[6px] font-bold", isBefore ? "bg-orange-500 text-white" : "bg-primary text-primary-foreground")}>
            P
          </div>
          <span className={cn("text-[8px] sm:text-[10px] truncate max-w-[80px] sm:max-w-[120px]", isBefore ? "text-gray-600" : "text-slate-300")}>
            {isBefore ? "proposition_v12_final_FINAL.pptx" : "Proposition_HACKIFY.pptx"}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Minus className={cn("w-2.5 h-2.5", isBefore ? "text-gray-500" : "text-slate-400")} />
          <Square className={cn("w-2 h-2", isBefore ? "text-gray-500" : "text-slate-400")} />
          <X className={cn("w-2.5 h-2.5", isBefore ? "text-gray-500" : "text-slate-400")} />
        </div>
      </div>

      {/* PowerPoint ribbon (simplified) */}
      <div
        className={cn(
          "flex items-center gap-2 px-2 py-0.5 border-b",
          isBefore ? "bg-gray-100 border-gray-300" : "bg-slate-700/50 border-slate-600"
        )}
      >
        {["Fichier", "Accueil", "Insertion"].map((tab) => (
          <span
            key={tab}
            className={cn(
              "text-[6px] sm:text-[8px]",
              isBefore ? "text-gray-500" : "text-slate-400"
            )}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Main content area with slide */}
      <div
        className={cn(
          "flex",
          isBefore ? "bg-gray-300" : "bg-slate-900"
        )}
      >
        {/* Slide thumbnails panel */}
        <div
          className={cn(
            "w-8 sm:w-12 p-1 space-y-1 border-r",
            isBefore ? "bg-gray-200 border-gray-300" : "bg-slate-800 border-slate-700"
          )}
        >
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={cn(
                "aspect-[16/9] rounded-sm flex items-center justify-center text-[5px] sm:text-[6px]",
                num === 1
                  ? isBefore
                    ? "bg-white border-2 border-blue-400"
                    : "bg-slate-700 border-2 border-primary"
                  : isBefore
                  ? "bg-white border border-gray-300"
                  : "bg-slate-700/50 border border-slate-600"
              )}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Main slide view */}
        <div className="flex-1 p-2 sm:p-3 flex items-center justify-center">
          <div
            className={cn(
              "w-full aspect-[16/9] rounded shadow-lg",
              isBefore ? "bg-white" : "bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700"
            )}
          >
            {isBefore ? (
              // Ugly slide content
              <div className="p-2 sm:p-3 h-full flex flex-col">
                <div className="bg-blue-600 text-white px-1.5 py-0.5 text-[6px] sm:text-[8px] font-bold mb-1.5 sm:mb-2 w-fit">
                  NOTRE PROPOSITION COMMERCIALE
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-red-500 rounded-sm flex-shrink-0" />
                    <div className="h-1 sm:h-1.5 bg-gray-700 w-16 sm:w-24" />
                  </div>
                  <div className="flex gap-1.5 items-center ml-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0" />
                    <div className="h-1 sm:h-1.5 bg-gray-500 w-12 sm:w-20" />
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <div className="w-3 h-2.5 sm:w-5 sm:h-4 bg-yellow-400 flex-shrink-0" />
                    <div className="h-1 sm:h-1.5 bg-gray-700 w-10 sm:w-16" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 w-5 h-5 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-40" />
              </div>
            ) : (
              // Beautiful slide content
              <div className="p-2 sm:p-3 h-full flex flex-col">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-0.5 h-3 sm:h-4 bg-primary rounded-full" />
                  <span className="text-white text-[6px] sm:text-[9px] font-medium">Proposition Commerciale</span>
                  <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 text-primary ml-auto" />
                </div>
                <div className="flex-1 grid grid-cols-2 gap-1.5 sm:gap-2">
                  <div className="bg-white/5 rounded p-1.5 border border-white/10">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-primary/20 mb-1 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-sm" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="h-0.5 sm:h-1 bg-white/50 w-full rounded-full" />
                      <div className="h-0.5 sm:h-1 bg-white/25 w-3/4 rounded-full" />
                    </div>
                  </div>
                  <div className="bg-white/5 rounded p-1.5 border border-white/10">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-primary/20 mb-1 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="h-0.5 sm:h-1 bg-white/50 w-full rounded-full" />
                      <div className="h-0.5 sm:h-1 bg-white/25 w-2/3 rounded-full" />
                    </div>
                  </div>
                  <div className="col-span-2 bg-gradient-to-r from-primary/15 to-primary/5 rounded p-1.5 border border-primary/20">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 sm:w-7 sm:h-7 rounded bg-primary/30 flex items-center justify-center">
                        <span className="text-primary text-[6px] sm:text-[9px] font-bold">+42%</span>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="h-0.5 sm:h-1 bg-white/50 w-3/4 rounded-full" />
                        <div className="h-0.5 sm:h-1 bg-white/25 w-1/2 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Label badge */}
      <div
        className={cn(
          "absolute bottom-2 left-2 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[6px] sm:text-[9px] font-semibold shadow-lg",
          isBefore
            ? "bg-red-500 text-white"
            : "bg-primary text-primary-foreground"
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
      className="w-full h-full flex items-center justify-center p-3 sm:p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center gap-2 sm:gap-3 max-w-full">
        {/* Before slide */}
        <div
          className={cn(
            "w-[140px] sm:w-[200px] transition-all duration-500 transform",
            isHovered ? "scale-95 -rotate-2 opacity-80" : "scale-100 rotate-0"
          )}
        >
          <PowerPointFrame type="before" />
        </div>

        {/* Arrow */}
        <div
          className={cn(
            "flex-shrink-0 w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-500",
            isHovered ? "bg-primary scale-110" : "bg-primary/20"
          )}
        >
          <ArrowRight
            className={cn(
              "w-3.5 h-3.5 sm:w-5 sm:h-5 transition-colors duration-300",
              isHovered ? "text-primary-foreground" : "text-primary"
            )}
          />
        </div>

        {/* After slide */}
        <div
          className={cn(
            "w-[140px] sm:w-[200px] transition-all duration-500 transform",
            isHovered ? "scale-105 rotate-1" : "scale-100 rotate-0"
          )}
        >
          <PowerPointFrame type="after" />
        </div>
      </div>
    </div>
  );
}
