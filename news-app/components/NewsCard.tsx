"use client";

import { motion } from "framer-motion";

type NewsCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function NewsCard({
  title,
  description,
  image,
  link,
}: NewsCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full flex flex-col bg-white/90 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer"
      >
        <div className="overflow-hidden h-48 sm:h-52 md:h-56 flex-shrink-0">
          <motion.img
            src={image || "/noimage.png"}
            alt={title || "News image"}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <div className="p-4 md:p-5 flex flex-col flex-1">
          <h2 className="text-lg md:text-xl font-bold mb-3 text-black line-clamp-2">
            {title || "No title available"}
          </h2>

          <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed line-clamp-3">
            {description || "No description available"}
          </p>

          <div className="mt-4 flex justify-center">
            <button className="px-5 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300">
              Read More →
            </button>
          </div>
        </div>
      </motion.div>
    </a>
  );
}