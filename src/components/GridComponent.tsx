"use client";
import React, { useEffect, useState } from "react";

export const GridComponent = ({ children }: { children: React.ReactNode }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const height = 1200;
    setHeight(height);
  }, []);

  return (
    <div
      style={{
        height: `${height}px`, // Dynamisk höjd för hela grid-behållaren
      }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
    >
      {React.Children.map(children, (child, index) => {
        return (
          <div
            className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ease-in-out 
              ${
                index === 1 || index === 4 ? "transform md:translate-y-1/3" : ""
              }`}
          >
            <div className="w-full h-full hover:scale-105 hover:brightness-75">
              {child}
            </div>
          </div>
        );
      })}
    </div>
  );
};
