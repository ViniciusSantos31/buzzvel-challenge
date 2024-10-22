"use client";

import { services } from "@/mocks/services";
import { motion } from "framer-motion";
import { ServicesCard } from "./services-card";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    once: true
  }
};

export const GridServices: React.FC = () => {
  return (
    <motion.ul variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="container grid grid-cols-2 md:grid-cols-2 gap-6 mt-16 md:gap-14">
      {services.map((service, index) => (
        <motion.li className="item" variants={item} key={index}>
          <ServicesCard
            key={index}
              title={service.title}
              description={service.description}
            />
        </motion.li>
      ))}
    </motion.ul>
  )
}