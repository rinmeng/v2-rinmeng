import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="container border-x border-y-0 mx-auto">
      <div className="flex w-full flex-col items-center justify-start h-screen ">
        <Card className="w-full border-t-0 border-x-0 border-b rounded-none border-dashed ">
          <CardHeader>
            <CardTitle className="text-6xl font-extralight">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg">
              Here are some of the projects I've worked on.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
