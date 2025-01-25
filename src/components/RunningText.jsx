import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const letterAnimation = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.42, 0, 0.58, 1],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [isMarqueeActive, setMarqueeActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMarqueeActive(true), 2000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <motion.div className='banner' variants={containerVariants}>
      <BannerSectionTop title={"brand"} />
      <BannerSectionCenter title={"experience"} isMarqueeActive={isMarqueeActive} />
      <BannerSectionBottom title={"studio"} />
    </motion.div>
  );
};

const AnimatedText = ({ text, isDisabled }) => (
  <motion.span
    className='row-title'
    variants={isDisabled ? null : containerVariants}
    initial='initial'
    animate='animate'>
    {[...text].map((char, idx) => (
      <motion.span key={idx} className='row-letter' variants={isDisabled ? null : letterAnimation}>
        {char}
      </motion.span>
    ))}
  </motion.span>
);

const BannerSectionTop = ({ title }) => {
  return (
    <div className='banner-row'>
      <div className='row-column'>
        <AnimatedText text={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className='row-column'>
        <span className='row-message'>
          We specialize in laying the foundation for your brand's success.
        </span>
      </motion.div>
    </div>
  );
};

const BannerSectionBottom = ({ title }) => {
};

const BannerSectionCenter = ({ title, isMarqueeActive }) => {
  return (
    <div className={`banner-row marquee ${isMarqueeActive ? "animate" : ""}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.42, 0, 0.58, 1], duration: 1 }}
        className='marquee__inner'>
        <AnimatedText text={title} isDisabled />
        <AnimatedText text={title} />
        <AnimatedText text={title} isDisabled />
        <AnimatedText text={title} isDisabled />
      </motion.div>
    </div>
  );
};

export default Banner;
