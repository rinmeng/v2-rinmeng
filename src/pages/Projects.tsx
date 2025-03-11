import React from "react";
import ProjectsFragment from "@/pages/ProjectsFragment";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Projects: React.FC = () => {
  return (
    <>
      <Card className="animate-fade animate-duration-500 container mx-auto rounded-none py-26">
        <ProjectsFragment />
      </Card>

      <Footer />
    </>
  );
};

export default Projects;
