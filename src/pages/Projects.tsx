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
      <div className="container py-16 mx-auto rounded-none shadow-none border-y-0 border-x"></div>
      <Card className="relative animate-fade animate-duration-500 py-0 border-none shadow-none gap-0">
        <div className="border-b w-full border-dashed"></div>
        <CardContent className="container mx-auto px-0 border-y-0 border-x rounded-none">
          <ProjectsFragment />
        </CardContent>
        <div className="border-t w-full border-dashed"></div>
      </Card>

      <Footer />
    </>
  );
};

export default Projects;
