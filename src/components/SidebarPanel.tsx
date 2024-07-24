import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GridSelector from "./GridSelector";

const SidebarPanel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const handleGenerate = () => {
    // Add your generation logic here
    console.log("Generate button clicked");
  };

  return (
    <Card className="w-80 h-full border-none shadow-none !bg-transparent float-left">
      <CardContent className="flex flex-col h-full">
        <Textarea
          placeholder="Enter your text here..."
          className="flex-grow resize-none mb-4 min-h-[200px]"
        />
        <GridSelector />
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleGenerate}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Generate
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SidebarPanel;
