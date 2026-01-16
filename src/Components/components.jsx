"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // 1. Track mouse position directly (Used for the Ball)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 2. Create "Spring" physics (Used for the Ring)
  const springConfig = { damping: 40, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e) => {
      // simplified logic for JS
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference">
      {/* 1. The Ball: Stuck to the pointer (No Spring) */}
      <motion.div
        className="fixed top-0 left-0 bg-white rounded-full"
        style={{
          // We use the raw values here for instant tracking
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: 8,
          height: 8,
        }}
      />

      {/* 2. The Ring: Follows smoothly (With Spring) */}
      <motion.div
        className="fixed top-0 left-0 border border-white rounded-full"
        style={{
          // We use the spring values here for the "lag" effect
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 60 : isClicked ? 20 : 40,
          height: isHovered ? 60 : isClicked ? 20 : 40,
          opacity: isHovered ? 0.5 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.00001 }}
      />
    </div>
  );
};

export default Cursor;
