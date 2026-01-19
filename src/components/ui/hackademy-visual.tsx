"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { GraduationCap, Users, Trophy, BookOpen, CheckCircle, Play, Lock } from "lucide-react";

interface Module {
  id: number;
  title: string;
  duration: string;
  status: "completed" | "in-progress" | "locked";
  progress?: number;
}

const modules: Module[] = [
  { id: 1, title: "Fondamentaux des AO", duration: "2h", status: "completed" },
  { id: 2, title: "Analyse du DCE", duration: "1h30", status: "completed" },
  { id: 3, title: "Rédaction technique", duration: "3h", status: "in-progress", progress: 65 },
  { id: 4, title: "Stratégie tarifaire", duration: "2h", status: "locked" },
  { id: 5, title: "Soutenance orale", duration: "1h30", status: "locked" },
];

const stats = [
  { icon: Users, value: "350+", label: "Formés" },
  { icon: BookOpen, value: "12", label: "Modules" },
  { icon: Trophy, value: "94%", label: "Réussite" },
];

export default function HackademyVisual() {
  const [activeModule, setActiveModule] = useState(2);
  const [animatedProgress, setAnimatedProgress] = useState(0);

  // Animate progress bar
  useEffect(() => {
    const currentModule = modules[activeModule];
    if (currentModule?.status === "in-progress" && currentModule.progress) {
      const timer = setTimeout(() => {
        setAnimatedProgress(currentModule.progress || 0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeModule]);

  // Auto-cycle through modules
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModule((prev) => (prev + 1) % 3); // Cycle through first 3 modules
      setAnimatedProgress(0);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-[480px] rounded-2xl border border-border bg-card overflow-hidden shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/5 border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">Hackademy</h3>
                <p className="text-xs text-muted-foreground">Parcours Réponse AO</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-primary">40%</div>
              <div className="text-[10px] text-muted-foreground">Progression</div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-2 p-3 bg-muted/30 border-b border-border">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-center gap-2 justify-center">
                <Icon className="w-3.5 h-3.5 text-primary" />
                <div>
                  <span className="text-xs font-semibold text-foreground">{stat.value}</span>
                  <span className="text-[10px] text-muted-foreground ml-1">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modules list */}
        <div className="p-3 space-y-2">
          {modules.map((module, idx) => {
            const isActive = idx === activeModule;
            const isCompleted = module.status === "completed";
            const isLocked = module.status === "locked";
            const isInProgress = module.status === "in-progress";

            return (
              <div
                key={module.id}
                className={cn(
                  "relative rounded-xl p-3 border transition-all duration-300",
                  isActive
                    ? "bg-primary/10 border-primary/30 scale-[1.02]"
                    : isLocked
                    ? "bg-muted/20 border-border/50 opacity-60"
                    : "bg-card border-border hover:border-primary/20"
                )}
              >
                <div className="flex items-center gap-3">
                  {/* Status icon */}
                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                      isCompleted
                        ? "bg-green-500/20"
                        : isInProgress
                        ? "bg-primary/20"
                        : "bg-muted"
                    )}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : isLocked ? (
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <Play className="w-4 h-4 text-primary" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4
                        className={cn(
                          "text-xs font-medium truncate",
                          isLocked ? "text-muted-foreground" : "text-foreground"
                        )}
                      >
                        {module.title}
                      </h4>
                      <span className="text-[10px] text-muted-foreground ml-2 flex-shrink-0">
                        {module.duration}
                      </span>
                    </div>

                    {/* Progress bar for in-progress modules */}
                    {isInProgress && (
                      <div className="mt-1.5 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: isActive ? `${animatedProgress}%` : `${module.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="p-3 border-t border-border bg-muted/20">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground">
              Prochain: Stratégie tarifaire
            </span>
            <div className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-[10px] font-medium">
              Continuer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
