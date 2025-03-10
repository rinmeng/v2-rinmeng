import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import cal from "@/assets/cal.jpeg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowBigRightIcon } from "lucide-react";

// Animation configuration - adjust these to control timing
const CONFIG = {
  displayDuration: 3000, // How long each phrase stays visible (ms)
  wordStaggerDelay: 0.1, // Delay between words starting to animate (seconds)
  maxStaggerDelay: 0.7, // Maximum total stagger time to ensure all words animate properly (seconds)
};

const textArray: string[] = [
  "Creating Beautiful Websites",
  "Exploring New UI/UX Designs",
  "Expanding Web Development Skills",
  "Learning New Frameworks",
  // You can add more items here and they'll work automatically
];

const AnimatedText: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
      setKey((prev) => prev + 1);
    }, CONFIG.displayDuration);

    return () => clearInterval(interval);
  }, []);

  const currentText = textArray[currentTextIndex];
  const words = currentText.split(" ");

  // Calculate appropriate stagger delay based on word count
  // This ensures that all words will begin animating within the maxStaggerDelay time
  const wordCount = words.length;
  const actualStaggerDelay = Math.min(
    CONFIG.wordStaggerDelay,
    CONFIG.maxStaggerDelay / Math.max(1, wordCount - 1)
  );

  return (
    <div className="w-full px-6 h-20 flex items-center overflow-hidden">
      <div className="relative w-full" key={key}>
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="inline-block"
            style={{
              animation: `swipe-in-out 3s ease-out forwards`,
              animationDelay: `${wordIndex * actualStaggerDelay}s`,
              opacity: 0,
              position: "relative",
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <div
        id="landing"
        className="w-screen h-screen relative overflow-hidden animate-fade animate-duration-500"
      >
        <img
          className="absolute inset-0 object-cover w-full h-full brightness-50"
          src={cal}
          alt="cover"
        />

        <div className="relative grid grid-cols-1 md:grid-cols-4 items-center h-full p-4">
          <Card
            className="flex flex-col justify-center backdrop-blur-md 
          bg-white/30 dark:bg-black/30 border border-white/20
           dark:border-white/10 shadow-lg col-span-3"
          >
            <CardHeader>
              <div className="text-6xl font-bold">
                hi! i'm <span>rin</span> and i like{" "}
                <span>
                  <AnimatedText />
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-lg">
                hey there. i'm a ubco student majoring in cs and ds. i'm
                passionate about building websites with modern technologies.
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link to="/projects">
                <Button size="lg" className="w-full">
                  View Projects
                  <ArrowBigRightIcon />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
