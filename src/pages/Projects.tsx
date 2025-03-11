import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowBigRightIcon, Layers } from "lucide-react";
import React from "react";

// Import all logos
import ViteLogo from "@/assets/logos/vite-svgrepo-com.svg";
import ReactLogo from "@/assets/logos/react-svgrepo-com.svg";
import TailwindCSSLogo from "@/assets/logos/tailwindcss-icon-svgrepo-com.svg";
import ExpressLogo from "@/assets/logos/express-svgrepo-com.svg";
import ShadCNUILogo from "@/assets/logos/shadcnui-white.svg";
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
import VercelLogo from "@/assets/logos/vercel-fill-white.svg";
import SupabaseLogo from "@/assets/logos/supabase-seeklogo.svg";
import AndroidStudioLogo from "@/assets/logos/androidstudio-svgrepo-com.svg";
import FirebaseLogo from "@/assets/logos/firebase-svgrepo-com.svg";

// import images
import KDT from "@/assets/projects/KDT.png";

interface ProjectFragmentProps {
  title: string;
  stacks?: string[];
  imgSrc: string;
  description: string;
  link: string;
  github_link?: string;
}

const projects = [
  {
    title: "KPop Dance Team's Website",

    imgSrc: KDT,
    description:
      "I oversaw the Digital Producer role where I was in charge of their website development, maintenance.",
    link: "https://kdtsuo.vercel.app",
    github_link: "https://github.com/kdtsuo/v3",
    stacks: [
      NodeJSLogo,
      ViteLogo,
      ReactLogo,
      TypeScriptLogo,
      TailwindCSSLogo,
      ShadCNUILogo,
      VercelLogo,
      SupabaseLogo,
    ],
  },
  {
    title: "Project 2",
    imgSrc:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    link: "https://example.com",
  },
];

const ProjectFragment: React.FC<ProjectFragmentProps> = ({
  title,
  imgSrc,
  description,
  link,
  stacks,
  github_link,
}) => {
  return (
    <Card className="grid grid-cols-1 xl:grid-cols-3 gap-0">
      <Card className="border-l-0 border-none rounded-none shadow-none py-2">
        <CardContent className="p-2 md:p-6 ">
          <AspectRatio ratio={16 / 9}>
            <img
              className="h-full w-full object-cover"
              src={imgSrc}
              alt={title}
            />
          </AspectRatio>
        </CardContent>
      </Card>

      <Card className="w-full xl:col-span-2 border-none shadow-none py-2">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-extralight text-center xl:text-left">
            {title}
          </CardTitle>
          <CardDescription>
            {stacks && (
              <div className="flex items-center justify-center xl:justify-start flex-wrap gap-2 not-dark:invert-100 dark:invert-0">
                {stacks.map((stack) => (
                  <img
                    key={stack}
                    className="w-6 h-auto"
                    src={stack}
                    alt={stack}
                  />
                ))}
              </div>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-base md:text-lg">{description}</div>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-end gap-4">
          {github_link && (
            <Button
              variant={"secondary"}
              size="lg"
              className="w-full md:w-auto"
              onClick={() => window.open(github_link)}
            >
              View Repository
              <ArrowBigRightIcon />
            </Button>
          )}
          {link && (
            <Button
              size="lg"
              className="w-full md:w-auto"
              onClick={() => window.open(link)}
            >
              View Project
              <ArrowBigRightIcon />
            </Button>
          )}
        </CardFooter>
      </Card>
    </Card>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="container border-x border-y-0 mx-auto px-0 ">
      <div className="flex w-full flex-col items-center justify-start h-auto">
        <Card className="w-full border-t-0 border-x-0 border-b-0 rounded-none">
          <CardHeader className="border-t-0 border-x-0 border-b rounded-none border-dashed pb-6 md:pb-10">
            <CardTitle className="text-4xl md:text-6xl font-extralight">
              Projects
            </CardTitle>
            <CardDescription className="text-sm md:text-base">
              Here are some of the projects I've worked on.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 md:space-y-4">
            {projects.map((project) => (
              <ProjectFragment key={project.title} {...project} />
            ))}
          </CardContent>
          <CardFooter className="border-t-0 border-x-0 border-b rounded-none border-dashed mb-6 md:mb-10"></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
