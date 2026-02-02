import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = "up",
  delay = 0,
}) => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case "up":
      y = 20;
      break;
    case "down":
      y = -20;
      break;
    case "left":
      x = 20;
      break;
    case "right":
      x = -20;
      break;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};
