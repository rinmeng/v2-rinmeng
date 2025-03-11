import React from "react";
import ProjectsFragment from "@/pages/ProjectsFragment";
import { Card } from "@/components/ui/card";

const Projects: React.FC = () => {
  return (
    <Card className="container mx-auto rounded-none py-26">
      <ProjectsFragment />
    </Card>
  );
};

export default Projects;
