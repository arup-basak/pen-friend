import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const GridSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid grid-cols-2 gap-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <Card 
          key={index}
          className={cn(
            "cursor-pointer transition-all",
            activeIndex === index 
              ? "border-2 border-primary shadow-lg" 
              : "hover:border-primary/50"
          )}
          onClick={() => setActiveIndex(index)}
        >
          <CardContent className="flex items-center justify-center p-6">
            <span className={cn(
              "text-lg font-medium",
              activeIndex === index ? "text-primary" : "text-muted-foreground"
            )}>
              Person {index + 1}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GridSelector;