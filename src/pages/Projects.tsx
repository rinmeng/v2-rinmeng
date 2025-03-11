import React from "react";
import ProjectsFragment from "@/pages/ProjectsFragment";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Footer from "@/components/Footer";

const Projects: React.FC = () => {
  return (
    <>
      <Card className="container py-16 mx-auto rounded-none shadow-none border-y-0 border-x"></Card>
      <Card className="relative animate-fade animate-duration-500 py-0 border-none shadow-none gap-0">
        <CardHeader className="border-b w-full border-dashed"></CardHeader>
        <CardContent className="container mx-auto px-0 border-y-0 border-x rounded-none">
          <ProjectsFragment />
        </CardContent>
        <CardFooter className="border-t w-full border-dashed"></CardFooter>
      </Card>

      <Footer />
    </>
  );
};

export default Projects;
