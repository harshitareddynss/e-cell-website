"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type CinematicHeadingProps = {
  first: string;
  second: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  inline?: boolean;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const headingVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: smoothEase,
    },
  },
};

export default function CinematicHeading({
  first,
  second,
  as = "h2",
  className,
  inline = false,
}: CinematicHeadingProps) {
  const Heading = motion[as];
  const headingClassName = `${className ?? ""} ${inline ? "inline-flex items-center justify-center flex-wrap gap-x-3 tracking-tight" : ""}`.trim();

  return (
    <Heading
      className={headingClassName}
      variants={headingVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.65 }}
    >
      <motion.span className="text-inherit" variants={lineVariants}>
        {first}
      </motion.span>{" "}
      <motion.span className="heading-accent-line text-orange-400 text-inherit" variants={lineVariants}>
        {second}
      </motion.span>
    </Heading>
  );
}
