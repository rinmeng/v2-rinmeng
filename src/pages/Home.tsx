import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import cal from "@/assets/cal.jpeg";

const Home: React.FC = () => {
  return (
    <>
      <div id="landing" className=" w-screen h-screen relative overflow-hidden">
        <img
          className="absolute inset-0 object-cover w-full h-full brightness-75"
          src={cal}
          alt="cover"
        />
        <div className="relative flex flex-col justify-center items-center h-full p-4">
          <Button>
            <Link to="/projects">View Projects</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
