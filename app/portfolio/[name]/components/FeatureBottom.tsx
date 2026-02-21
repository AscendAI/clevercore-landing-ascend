'use client'
import React from "react";
import { motion } from "framer-motion";

const FeatureBottom = ({
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          <img
            src={imageUrl}
            alt="Feature Image"
            className="h-auto max-h-[60vh] w-auto"
          />
        </motion.div>

        <div className="flex flex-col justify-around">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h3 className="pb-4 text-4xl font-bold text-primary">{featuresTitle[2]}</h3>
            <p className="text-xl">{features[2]}</p>
          </motion.div>

          {/* Bottom Row: Feature 4 */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="pb-4 text-4xl font-bold text-primary">{featuresTitle[3]}</h3>
            <p className="text-xl">{features[3]}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBottom;
