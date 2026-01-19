"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar, Clock, Users, CheckCircle2, Circle, AlertCircle } from "lucide-react";

interface TimelineTask {
  id: number;
  title: string;
  owner: string;
  startWeek: number;
  duration: number;
  status: "done" | "in-progress" | "pending" | "alert";
  priority?: "high" | "medium" | "low";
}

const tasks: TimelineTask[] = [
  {
    id: 1,
    title: "Analyse du DCE",
    owner: "Chef de projet",
    startWeek: 0,
    duration: 1,
    status: "done",
  },
  {
    id: 2,
    title: "Cadrage commercial",
    owner: "Commercial",
    startWeek: 0.5,
    duration: 1.5,
    status: "done",
  },
  {
    id: 3,
    title: "Rédaction technique",
    owner: "Expert métier",
    startWeek: 1,
    duration: 2.5,
    status: "in-progress",
    priority: "high",
  },
  {
    id: 4,
    title: "Chiffrage & pricing",
    owner: "Finance",
    startWeek: 2,
    duration: 1.5,
    status: "in-progress",
  },
  {
    id: 5,
    title: "Design & mise en page",
    owner: "Graphiste",
    startWeek: 3,
    duration: 1,
    status: "pending",
  },
  {
    id: 6,
    title: "Revue & validation",
    owner: "Direction",
    startWeek: 3.5,
    duration: 0.5,
    status: "alert",
    priority: "high",
  },
];

const weeks = ["S1", "S2", "S3", "S4"];

function StatusIcon({ status }: { status: TimelineTask["status"] }) {
  switch (status) {
    case "done":
      return <CheckCircle2 className="w-3 h-3 text-green-500" />;
    case "in-progress":
      return <Circle className="w-3 h-3 text-primary fill-primary/30" />;
    case "alert":
      return <AlertCircle className="w-3 h-3 text-red-500" />;
    default:
      return <Circle className="w-3 h-3 text-muted-foreground/50" />;
  }
}

function getBarColor(status: TimelineTask["status"]) {
  switch (status) {
    case "done":
      return "bg-green-500/80";
    case "in-progress":
      return "bg-primary";
    case "alert":
      return "bg-red-500/80";
    default:
      return "bg-muted-foreground/30";
  }
}

interface TimelineCardProps {
  className?: string;
  isActive?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
  onTap?: () => void;
}

function TimelineCard({
  className,
  isActive,
  onHover,
  onLeave,
  onTap,
}: TimelineCardProps) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onTap}
      className={cn(
        "relative flex flex-col w-[280px] sm:w-[380px] rounded-2xl border border-border bg-card/90 backdrop-blur-sm p-3 sm:p-4 transition-all duration-500 hover:border-primary/30 hover:bg-card cursor-pointer select-none",
        isActive && "ring-2 ring-primary/50",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-primary/20 flex items-center justify-center">
            <Calendar className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-foreground">Rétroplanning AO</h4>
            <p className="text-[10px] sm:text-xs text-muted-foreground">Mairie de Lyon - IT</p>
          </div>
        </div>
        <div className="flex items-center gap-1 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full bg-primary/10 border border-primary/20">
          <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
          <span className="text-[9px] sm:text-[10px] text-primary font-medium">J-12</span>
        </div>
      </div>

      {/* Timeline Grid */}
      <div className="relative">
        {/* Week headers */}
        <div className="flex mb-2 ml-[90px] sm:ml-[120px]">
          {weeks.map((week) => (
            <div
              key={week}
              className="flex-1 text-center text-[8px] sm:text-[10px] text-muted-foreground font-medium"
            >
              {week}
            </div>
          ))}
        </div>

        {/* Tasks */}
        <div className="space-y-1.5 sm:space-y-2">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-1.5 sm:gap-2">
              {/* Task info */}
              <div className="w-[85px] sm:w-[115px] flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
                <StatusIcon status={task.status} />
                <div className="min-w-0 flex-1">
                  <p className="text-[8px] sm:text-[10px] font-medium text-foreground truncate">
                    {task.title}
                  </p>
                  <p className="text-[7px] sm:text-[9px] text-muted-foreground truncate">
                    {task.owner}
                  </p>
                </div>
              </div>

              {/* Gantt bar */}
              <div className="flex-1 relative h-4 sm:h-5 bg-muted/30 rounded">
                <div
                  className={cn(
                    "absolute top-1 bottom-1 rounded transition-all duration-300",
                    getBarColor(task.status),
                    task.priority === "high" && task.status !== "done" && "animate-pulse"
                  )}
                  style={{
                    left: `${(task.startWeek / 4) * 100}%`,
                    width: `${(task.duration / 4) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Today marker */}
        <div
          className="absolute top-6 bottom-0 w-0.5 bg-primary/60 z-10"
          style={{ left: `calc(${(2.2 / 4) * 100}% + 90px)` }}
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
        </div>
      </div>

      {/* Footer stats */}
      <div className="flex items-center justify-between mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-border">
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-muted-foreground" />
          <span className="text-[9px] sm:text-[10px] text-muted-foreground">6 intervenants</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
            <span className="text-[9px] sm:text-[10px] text-muted-foreground">2 terminées</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
            <span className="text-[9px] sm:text-[10px] text-muted-foreground">2 en cours</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BidTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getCardClassName = (index: number, baseClassName: string) => {
    const focusedIndex = hoveredIndex ?? activeIndex;

    if (focusedIndex === 0 && index === 1) {
      return baseClassName + " !translate-y-16 sm:!translate-y-24 !translate-x-10 sm:!translate-x-16";
    }
    if (focusedIndex === 0 && index === 2) {
      return baseClassName + " !translate-y-24 sm:!translate-y-36 !translate-x-16 sm:!translate-x-28";
    }
    if (focusedIndex === 1 && index === 2) {
      return baseClassName + " !translate-y-20 sm:!translate-y-32 !translate-x-16 sm:!translate-x-28";
    }
    return baseClassName;
  };

  const handleTap = (index: number) => {
    if (activeIndex === index) return;
    setActiveIndex(index);
  };

  const cards = [
    {
      className:
        "[grid-area:stack] -skew-y-[6deg] hover:-translate-y-8 before:absolute before:w-full before:rounded-2xl before:outline-1 before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[80%] hover:before:opacity-0 before:transition-opacity before:duration-500 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className:
        "[grid-area:stack] -skew-y-[6deg] translate-x-6 sm:translate-x-12 translate-y-8 sm:translate-y-14 hover:-translate-y-2 before:absolute before:w-full before:rounded-2xl before:outline-1 before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[60%] hover:before:opacity-0 before:transition-opacity before:duration-500 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className:
        "[grid-area:stack] -skew-y-[6deg] translate-x-12 sm:translate-x-24 translate-y-16 sm:translate-y-28 hover:translate-y-10 sm:hover:translate-y-20",
    },
  ];

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 py-4">
      {cards.map((cardProps, index) => (
        <TimelineCard
          key={index}
          className={getCardClassName(index, cardProps.className)}
          onHover={() => setHoveredIndex(index)}
          onLeave={() => setHoveredIndex(null)}
          isActive={activeIndex === index}
          onTap={() => handleTap(index)}
        />
      ))}
    </div>
  );
}
