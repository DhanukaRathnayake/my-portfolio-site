import { useRef, useEffect } from "react";
import { cn } from "@/utils/shadcn";

export const FollowMouseCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const refElement = useRef<HTMLDivElement>(null);
  const state = useRef({
    rotate: {
      x: 0,
      y: 0,
    },
  });

  const containerStyle = {
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--duration": "300ms",
    "--easing": "ease",
    "--transition": "var(--duration) var(--easing)",
  } as any;

  const updateStyles = () => {
    if (refElement.current) {
      const { rotate } = state.current;
      refElement.current?.style.setProperty("--r-x", `${rotate.x}deg`);
      refElement.current?.style.setProperty("--r-y", `${rotate.y}deg`);
    }
  };

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const rotateFactor = 0.1;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const deltaX = (event.clientX - centerX) / centerX;
      const deltaY = (event.clientY - centerY) / centerY;

      const { rotate } = state.current;
      rotate.x = -(deltaX * 30) * rotateFactor; // Adjust rotation based on mouse X position
      rotate.y = deltaY * 30 * rotateFactor; // Adjust rotation based on mouse Y position

      updateStyles();
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      style={containerStyle}
      className="relative isolate [contain:layout_style] [perspective:600px] transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-transform"
      ref={refElement}
    >
      <div className="h-full grid will-change-transform origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] overflow-hidden">
        <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_0_0_round_var(--radius))]">
          <div className={cn("h-full w-full", className)}>{children}</div>
        </div>
      </div>
    </div>
  );
};
