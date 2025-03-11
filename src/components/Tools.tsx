import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import ViteLogo from "@/assets/logos/vite-svgrepo-com.svg";
import ReactLogo from "@/assets/logos/react-svgrepo-com.svg";
import TailwindCSSLogo from "@/assets/logos/tailwindcss-icon-svgrepo-com.svg";
import GitHubLogo from "@/assets/logos/github-svgrepo-com.svg";
import ExpressLogo from "@/assets/logos/express-svgrepo-com.svg";
import ShadCNUILogo from "@/assets/logos/shadcn-ui-seeklogo.svg";
import DockerLogo from "@/assets/logos/docker-svgrepo-com.svg";
import NodeJSLogo from "@/assets/logos/node-js-svgrepo-com.svg";
import PythonLogo from "@/assets/logos/python-svgrepo-com.svg";
import JavaLogo from "@/assets/logos/java-svgrepo-com.svg";
import HTML5Logo from "@/assets/logos/html-5-svgrepo-com.svg";
import CSS3Logo from "@/assets/logos/css-svgrepo-com.svg";
import GitLogo from "@/assets/logos/git-svgrepo-com.svg";
import PostgreSQLLogo from "@/assets/logos/postgresql-svgrepo-com.svg";
import JavaScriptLogo from "@/assets/logos/javascript-svgrepo-com.svg";
import TypeScriptLogo from "@/assets/logos/typescript-svgrepo-com.svg";
import RStudioLogo from "@/assets/logos/rstudio-svgrepo-com.svg";
import VercelLogo from "@/assets/logos/vercel-fill-svgrepo-com.svg";
import SupabaseLogo from "@/assets/logos/supabase-seeklogo.svg";

import { cn } from "@/lib/utils";

interface IconItem {
  text: string;
  imgSrc: string;
  className?: string;
}

const Tools: React.FC = () => {
  const icons: IconItem[] = [
    {
      text: "Vite",
      imgSrc: ViteLogo,
    },
    {
      text: "React",
      imgSrc: ReactLogo,
    },
    {
      text: "TailwindCSS",
      imgSrc: TailwindCSSLogo,
    },
    {
      text: "shadcn/ui",
      imgSrc: ShadCNUILogo,
      className: "dark:invert-100 not-dark:invert-0",
    },
    {
      text: "GitHub",
      imgSrc: GitHubLogo,
      className: "dark:invert-100 not-dark:invert-0",
    },
    {
      text: "ExpressJS",
      imgSrc: ExpressLogo,
      className: "dark:invert-100 not-dark:invert-0",
    },
    {
      text: "Docker",
      imgSrc: DockerLogo,
    },
    {
      text: "NodeJS",
      imgSrc: NodeJSLogo,
    },
  ];

  const icons2: IconItem[] = [
    {
      text: "HTML5",
      imgSrc: HTML5Logo,
    },
    {
      text: "CSS3",
      imgSrc: CSS3Logo,
    },
    {
      text: "JavaScript",
      imgSrc: JavaScriptLogo,
    },
    {
      text: "Python",
      imgSrc: PythonLogo,
    },
    {
      text: "Java",
      imgSrc: JavaLogo,
    },
    {
      text: "Git",
      imgSrc: GitLogo,
    },
    {
      text: "PostgreSQL",
      imgSrc: PostgreSQLLogo,
    },
  ];

  const icons3: IconItem[] = [
    {
      text: "TypeScript",
      imgSrc: TypeScriptLogo,
    },
    {
      text: "RStudio",
      imgSrc: RStudioLogo,
      className: "dark:invert-100 not-dark:invert-0",
    },
    {
      text: "Vercel",
      imgSrc: VercelLogo,
      className: "dark:invert-100 not-dark:invert-0",
    },
    {
      text: "Supabase",
      imgSrc: SupabaseLogo,
    },
  ];

  // Calculate how many blank divs to add to reach a total of 14 items
  const emptyIconsNeeded = Math.max(0, 14 - icons.length);
  const emptyIconsNeeded2 = Math.max(0, 15 - icons2.length);
  const emptyIconsNeeded3 = Math.max(0, 14 - icons3.length);
  // Calculate how many blank divs to add before and after the actual icons
  const emptyIconsBefore = Math.floor(emptyIconsNeeded / 2);
  const emptyIconsBefore2 = Math.floor(emptyIconsNeeded2 / 2);
  const emptyIconsBefore3 = Math.floor(emptyIconsNeeded3 / 2);

  const emptyIconsAfter = emptyIconsNeeded - emptyIconsBefore;
  const emptyIconsAfter2 = emptyIconsNeeded2 - emptyIconsBefore2;
  const emptyIconsAfter3 = emptyIconsNeeded3 - emptyIconsBefore3;

  return (
    <div className="flex flex-col flex-wrap">
      <div className="flex justify-center">
        {Array.from({ length: 14 }).map((_, index) => (
          <div
            key={index}
            className="m-4 border dark:border-muted not-dark:border-muted-foreground p-4 
            rounded-xl bg-accent-foreground/5 hover:bg-accent-foreground/10 
            transition-all duration-300 ease-in-out"
          >
            <div className="w-16 h-16"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="m-4 border dark:border-muted not-dark:border-muted-foreground p-4 
            rounded-xl bg-accent-foreground/5 hover:bg-accent-foreground/10 
            transition-all duration-300 ease-in-out"
          >
            <div className="w-16 h-16"></div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center">
        {/* Empty placeholders before the actual icons */}
        {Array.from({ length: emptyIconsBefore }).map((_, index) => (
          <div
            key={`empty-before-${index}`}
            className="m-4 border dark:border-muted not-dark:border-muted-foreground p-4 
                     rounded-xl bg-accent-foreground/5 hover:bg-accent-foreground/10 
                     transition-all duration-300 ease-in-out"
          >
            <div className="w-16 h-16"></div>
          </div>
        ))}

        {/* Actual icons with tooltips */}
        {icons.map((icon: IconItem, index: number) => (
          <TooltipProvider key={`icon-${index}`} delayDuration={2000}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "m-4 border dark:border-muted not-dark:border-muted-foreground p-4",
                    "rounded-xl bg-accent-foreground/5 hover:bg-accent-foreground/10",
                    "transition-all duration-300 ease-in-out",
                    "dark:hover:drop-shadow-[0_0_50px_rgba(255,255,255,1)]",
                    "not-dark:hover:drop-shadow-[0_0_50px_rgba(0,0,0,1)]",
                    "shadow-none"
                  )}
                >
                  <img
                    src={icon.imgSrc}
                    alt={icon.text}
                    className={cn("w-16", "h-16", icon.className)}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent side="top">{icon.text}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}

        {/* Empty placeholders after the actual icons */}
        {Array.from({ length: emptyIconsAfter }).map((_, index) => (
          <div
            key={`empty-after-${index}`}
            className="m-4 border dark:border-muted not-dark:border-muted-foreground p-4 
                     rounded-xl bg-accent-foreground/5 hover:bg-accent-foreground/10 
                     transition-all duration-300 ease-in-out"
          >
            <div className="w-16 h-16"></div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center">
        {/* Empty placeholders before the actual icons */}
        {Array.from({ length: emptyIconsBefore2 }).map((_, index) => (
          <div
            key={`empty-before-${index}`}
            className="m-4 border dark:border-muted not-dark:border-muted-foreground p-4 
                     rounded-xl bg-accent-foreground/5 hover:bg-accent-foreground/10 
                     transition-all duration-300 ease-in-out"
          >
            <div className="w-16 h-16"></div>
          </div>
        ))}

        {/* Actual icons with tooltips */}
        {icons2.map((icon: IconItem, index: number) => (
          <TooltipProvider key={`icon-${index}`} delayDuration={2000}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "m-4 border dark:border-muted not-dark:border-muted-foreground p-4",
                    "rounded-xl bg-accent-foreground/5 hover:bg-accent-foreground/10",
                    "transition-all duration-300 ease-in-out",
                    "dark:hover:drop-shadow-[0_0_50px_rgba(255,255,255,1)]",
                    "not-dark:hover:drop-shadow-[0_0_50px_rgba(0,0,0,1)]",
                    "shadow-none"
                  )}
                >
                  <img
                    src={icon.imgSrc}
                    alt={icon.text}
                    className={cn("w-16", "h-16", icon.className)}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent side="top">{icon.text}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}

        {/* Empty placeholders after the actual icons */}
        {Array.from({ length: emptyIconsAfter2 }).map((_, index) => (
          <div
            key={`empty-after-${index}`}
            className="m-4 border dark:border-muted not-dark:border-muted-foreground p-4 
                     rounded-xl bg-accent-foreground/5 hover:bg-accent-foreground/10 
                     transition-all duration-300 ease-in-out"
          >
            <div className="w-16 h-16"></div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center">
        {/* Empty placeholders before the actual icons */}
        {Array.from({ length: emptyIconsBefore3 }).map((_, index) => (
          <div
            key={`empty-before-${index}`}
            className="m-4 border dark:border-muted not-dark:border-muted-foreground p-4 
                     rounded-xl bg-accent-foreground/5 hover:bg-accent-foreground/10 
                     transition-all duration-300 ease-in-out"
          >
            <div className="w-16 h-16"></div>
          </div>
        ))}

        {/* Actual icons with tooltips */}
        {icons3.map((icon: IconItem, index: number) => (
          <TooltipProvider key={`icon-${index}`} delayDuration={2000}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "m-4 border dark:border-muted not-dark:border-muted-foreground p-4",
                    "rounded-xl bg-accent-foreground/5 hover:bg-accent-foreground/10",
                    "transition-all duration-300 ease-in-out",
                    "dark:hover:drop-shadow-[0_0_50px_rgba(255,255,255,1)]",
                    "not-dark:hover:drop-shadow-[0_0_50px_rgba(0,0,0,1)]",
                    "shadow-none"
                  )}
                >
                  <img
                    src={icon.imgSrc}
                    alt={icon.text}
                    className={cn("w-16", "h-16", icon.className)}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent side="top">{icon.text}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}

        {/* Empty placeholders after the actual icons */}
        {Array.from({ length: emptyIconsAfter3 }).map((_, index) => (
          <div
            key={`empty-after-${index}`}
            className="m-4 border dark:border-muted not-dark:border-muted-foreground p-4 
                     rounded-xl bg-accent-foreground/5 hover:bg-accent-foreground/10 
                     transition-all duration-300 ease-in-out"
          >
            <div className="w-16 h-16"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="m-4 border dark:border-muted not-dark:border-muted-foreground p-4 
            rounded-xl bg-accent-foreground/5 hover:bg-accent-foreground/10 
            transition-all duration-300 ease-in-out"
          >
            <div className="w-16 h-16"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
