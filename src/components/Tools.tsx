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

interface IconItem {
  text: string;
  imgSrc: string;
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
  ];

  return (
    <div className="flex flex-col flex-wrap">
      <div className="flex justify-center">
        {Array.from({ length: 14 }).map((_, index) => (
          <div
            key={index}
            className="m-4 border border-muted p-4 rounded-xl bg-accent-foreground/5
           hover:bg-accent-foreground/10 transition-all duration-300 ease-in-out"
          >
            <div className="w-16 h-16"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="m-4 border border-muted p-4 rounded-xl bg-accent-foreground/5
           hover:bg-accent-foreground/10 transition-all duration-300 ease-in-out"
          >
            <div className="w-16 h-16"></div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center">
        {icons.map((icon: IconItem, index: number) => (
          <TooltipProvider key={index} delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="m-4 border border-muted p-4 rounded-xl bg-accent-foreground/5
                hover:bg-accent-foreground/10 transition-all duration-300 ease-in-out"
                >
                  <img
                    src={icon.imgSrc}
                    alt={icon.text}
                    className="w-16 h-16"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom">{icon.text}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default Tools;
