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
import { ArrowBigRightIcon } from "lucide-react";
import React from "react";

interface ProjectFragmentProps {
  title: string;
  imgSrc: string;
  description: string;
  link: string;
}

const ProjectFragment: React.FC<ProjectFragmentProps> = ({
  title,
  imgSrc,
  description,
  link,
}) => {
  return (
    <Card className="grid grid-cols-1 md:grid-cols-3">
      <Card className="border-l-0 border-none rounded-none shadow-none">
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

      <Card className="w-full md:col-span-2 border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl md:text-4xl font-extralight">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-base md:text-lg">{description}</div>
        </CardContent>
        <CardFooter>
          <Button
            size="lg"
            className="w-full md:w-auto"
            onClick={() => window.open(link)}
          >
            View Project
            <ArrowBigRightIcon className="ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </Card>
  );
};

const projects = [
  {
    title: "Project 1",
    imgSrc:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    description: "This is project 1.",
    link: "https://example.com",
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

const Projects: React.FC = () => {
  return (
    <div className="container border-x border-y-0 mx-auto px-2 md:px-6">
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
