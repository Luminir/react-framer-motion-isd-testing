import React from "react";
import { motion } from "framer-motion";

// Import images statically (Webpack handles optimization)
import image1 from "../assets/images/image-1.png";
import image2 from "../assets/images/image-2.png";
import image3 from "../assets/images/image-3.png";
import loaderImage from "../assets/images/loader-image-1.png";
import mainImage from "../assets/images/loader-image-2.png";

// Animation variants
const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.42, 0, 0.58, 1], 
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={containerVariants}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageItem variants={itemVariants} src={loaderImage} alt="Loader Image" />
        <motion.div variants={itemVariants} className="transition-image">
          <motion.img layoutId="main-image-1" src={mainImage} alt="Main Loader Image" />
        </motion.div>
        <ImageItem variants={itemVariants} src={image1} alt="Image 1" />
        <ImageItem variants={itemVariants} src={image2} alt="Image 2" />
        <ImageItem variants={itemVariants} src={image3} alt="Image 3" />
      </motion.div>
    </motion.div>
  );
};

const ImageItem = ({ variants, src, alt }) => {
  return (
    <motion.div variants={variants} className="image-item">
      <img src={src} alt={alt} />
    </motion.div>
  );
};

export default Loader;
