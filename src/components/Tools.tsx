import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// Import all logos
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
import CSharpLogo from "@/assets/logos/csharp-svgrepo-com.svg";
import UnityLogo from "@/assets/logos/unity-svgrepo-com.svg";
import AndroidStudioLogo from "@/assets/logos/androidstudio-svgrepo-com.svg";

interface IconItem {
  text: string;
  imgSrc: string;
  className?: string;
}

const Tools: React.FC = () => {
  // Combined icon arrays into a single data structure with row information
  const iconRows: { row: number; icons: IconItem[] }[] = [
    {
      row: 2,
      icons: [
        { text: "Vite", imgSrc: ViteLogo },
        { text: "React", imgSrc: ReactLogo },
        { text: "TailwindCSS", imgSrc: TailwindCSSLogo },
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
        { text: "Docker", imgSrc: DockerLogo },
        { text: "NodeJS", imgSrc: NodeJSLogo },
      ],
    },
    {
      row: 3,
      icons: [
        { text: "HTML5", imgSrc: HTML5Logo },
        { text: "CSS3", imgSrc: CSS3Logo },
        { text: "JavaScript", imgSrc: JavaScriptLogo },
        { text: "Python", imgSrc: PythonLogo },
        { text: "Java", imgSrc: JavaLogo },
        { text: "Git", imgSrc: GitLogo },
        { text: "PostgreSQL", imgSrc: PostgreSQLLogo },
      ],
    },
    {
      row: 4,
      icons: [
        { text: "TypeScript", imgSrc: TypeScriptLogo },
        { text: "C#", imgSrc: CSharpLogo },
        {
          text: "Unity",
          imgSrc: UnityLogo,
          className: "dark:invert-100 not-dark:invert-0",
        },
        {
          text: "RStudio",
          imgSrc: RStudioLogo,
          className: "dark:invert-100 not-dark:invert-0",
        },
        {
          text: "Android Studio",
          imgSrc: AndroidStudioLogo,
          className: "dark:invert-100 not-dark:invert-0",
        },
        {
          text: "Vercel",
          imgSrc: VercelLogo,
          className: "dark:invert-100 not-dark:invert-0",
        },
        { text: "Supabase", imgSrc: SupabaseLogo },
      ],
    },
  ];

  // Common row configurations
  const rowConfigs = [
    { rowIndex: 0, itemsCount: 14 },
    { rowIndex: 1, itemsCount: 15 },
    { rowIndex: 5, itemsCount: 15 },
  ];

  // Common class names
  const emptyBoxClasses =
    "m-4 border dark:border-muted not-dark:border-muted-foreground p-4 rounded-xl bg-accent-foreground/5 hover:bg-accent-foreground/10 transition-all duration-300 ease-in-out";
  const iconBoxClasses = cn(
    emptyBoxClasses,
    "dark:hover:drop-shadow-[0_0_50px_rgba(255,255,255,1)]",
    "not-dark:hover:drop-shadow-[0_0_50px_rgba(0,0,0,1)]",
    "shadow-none"
  );

  // Reusable empty box component
  const EmptyBox = () => (
    <div className={emptyBoxClasses}>
      <div className="w-16 h-16"></div>
    </div>
  );

  // Reusable icon with tooltip component
  const IconWithTooltip = ({
    icon,
    index,
  }: {
    icon: IconItem;
    index: number;
  }) => (
    <TooltipProvider key={`icon-${index}`} delayDuration={2000}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={iconBoxClasses}>
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
  );

  // Generate an empty row
  const renderEmptyRow = (count: number, rowIndex: number) => (
    <div key={`empty-row-${rowIndex}`} className="flex justify-center">
      {Array.from({ length: count }).map((_, index) => (
        <EmptyBox key={`empty-box-${rowIndex}-${index}`} />
      ))}
    </div>
  );

  // Generate an icon row with centered icons and empty spaces
  const renderIconRow = (rowData: { row: number; icons: IconItem[] }) => {
    const { row, icons } = rowData;
    const totalSlots = row === 3 ? 15 : 14; // Row 3 has 15 slots, others have 14
    const emptySlots = totalSlots - icons.length;
    const emptySlotsBefore = Math.floor(emptySlots / 2);
    const emptySlotsAfter = emptySlots - emptySlotsBefore;

    return (
      <div
        key={`icon-row-${row}`}
        className="flex flex-wrap justify-center items-center"
      >
        {Array.from({ length: emptySlotsBefore }).map((_, index) => (
          <EmptyBox key={`empty-before-${row}-${index}`} />
        ))}

        <div className="flex justify-center items-center">
          {icons.map((icon, index) => (
            <IconWithTooltip
              key={`icon-${row}-${index}`}
              icon={icon}
              index={index}
            />
          ))}
        </div>

        {Array.from({ length: emptySlotsAfter }).map((_, index) => (
          <EmptyBox key={`empty-after-${row}-${index}`} />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col flex-wrap">
      {/* Empty rows at top */}
      {renderEmptyRow(rowConfigs[0].itemsCount, rowConfigs[0].rowIndex)}
      {renderEmptyRow(rowConfigs[1].itemsCount, rowConfigs[1].rowIndex)}

      {/* Icon rows */}
      {iconRows.map(renderIconRow)}

      {/* Empty row at bottom */}
      {renderEmptyRow(rowConfigs[2].itemsCount, rowConfigs[2].rowIndex)}
    </div>
  );
};

export default Tools;
