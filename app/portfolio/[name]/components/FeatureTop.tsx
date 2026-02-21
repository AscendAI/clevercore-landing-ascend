'use client';
import React from "react";
import { motion } from "framer-motion";

const FeatureTop = ({
  features,
  featuresTitle,
  imageUrl,
}: {
  features: string[];
  featuresTitle: string[];
  imageUrl: string;
}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-start"
        >
          <h3 className="pb-4 text-4xl font-bold text-primary">{featuresTitle[0]}</h3>
          <p className="text-xl">{features[0]}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          <img
            src={imageUrl}
            alt="Feature Image"
            className="h-auto w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-end"
        >
          <h3 className="pb-4 text-4xl font-bold text-primary">{featuresTitle[1]}</h3>
          <p className="text-xl">{features[1]}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureTop;
