"use client";
import useMediaQuery from "beautiful-react-hooks/useMediaQuery";
import { useEffect, useRef } from "react";

export function useHorizontalScroller(enabled: boolean) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;

    if (el && enabled) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;

        e.preventDefault();

        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
        });
      };

      el.addEventListener("wheel", onWheel);

      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [enabled]);

  return elRef;
}

export function HorizontalScroller({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLagre = useMediaQuery("(min-width: 1024px)");
  const scrollRef = useHorizontalScroller(isLagre);

  return (
    <div
      className="xl:fixed xl:inset-0 xl:overflow-x-auto xl:overflow-y-hidden xl:flex xl:items-stretch"
      ref={scrollRef}
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#333 transparent",
      }}
    >
      {children}
    </div>
  );
}
