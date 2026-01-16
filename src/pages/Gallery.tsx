import amment1 from "@/assets/amment1.jpg";
import amment2 from "@/assets/amment2.jpg";
import amment3 from "@/assets/amment3.jpg";
import amment4 from "@/assets/amment4.jpg";
import amment5 from "@/assets/amment5.jpg";
import amment6 from "@/assets/amment6.jpg";
import amment7 from "@/assets/amment7.jpg";
import amment8 from "@/assets/amment8.jpg";
import single1 from "@/assets/single1.jpg";
import masterD from "@/assets/masterD.jpg";
// Advanced entrance effects for each image (from user sample)
import type { Variants } from "framer-motion";

const getItemVariants = (index: number): Variants => {
  const effects = [
    { x: -100, y: -50, rotate: -15, scale: 0.8 },
    { x: 100, y: -50, rotate: 15, scale: 0.8 },
    { x: 0, y: -100, rotate: 0, scale: 0.7 },
    { x: 0, y: 100, rotate: 0, scale: 0.9 },
    { x: 0, y: 0, rotate: 0, scale: 0.5 },
    { x: -80, y: -80, rotate: -10, scale: 0.85 },
    { x: 80, y: 80, rotate: 10, scale: 0.85 },
  ];
  const effectIndex = index % effects.length;
  const effect = effects[effectIndex];
  return {
    hidden: {
      opacity: 0,
      x: effect.x,
      y: effect.y,
      rotate: effect.rotate,
      scale: effect.scale,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };
};
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

import dinImage from "@/assets/din.jpg";
import masterA from "@/assets/masterA.jpg";
import masterB from "@/assets/masterB.jpg";
import masterC from "@/assets/master C.jpg";
import single from "@/assets/single.jpg";
import singleB from "@/assets/singleB.jpg";
import singleC from "@/assets/singleC.jpg";
// import roomSerene from "@/assets/room-serene.jpg";
// import roomHaven from "@/assets/room-haven.jpg";
// import roomPenthouse from "@/assets/room-penthouse.jpg";



const galleryImages = [
  { src: dinImage, alt: "Little Hide Away Apartment Exterior", category: "Exterior" },
  { src: masterD, alt: "Master Room A", category: "Master Room" },
  { src: masterB, alt: "Master Room B", category: "Master Room" },
  { src: masterC, alt: "Master Room C", category: "Master Room" },
  { src: single1, alt: "Single Room A", category: "Single Room" },
  { src: singleB, alt: "Single Room B", category: "Single Room" },
  { src: singleC, alt: "Single Room C", category: "Single Room" },
    { src: dinImage, alt: "Apartment View", category: "Views" },
    { src: amment1, alt: "Amenity 1", category: "Amenities" },
    { src: amment2, alt: "Amenity 2", category: "Amenities" },
    { src: amment3, alt: "Amenity 3", category: "Amenities" },
    { src: amment4, alt: "Amenity 4", category: "Amenities" },
    { src: amment5, alt: "Amenity 5", category: "Amenities" },
    { src: amment6, alt: "Amenity 6", category: "Amenities" },
    { src: amment7, alt: "Amenity 7", category: "Amenities" },
    { src: amment8, alt: "Amenity 8", category: "Amenities" },
  { src: amment1, alt: "Amenity 1", category: "Amenities" },
  { src: amment2, alt: "Amenity 2", category: "Amenities" },
  { src: amment3, alt: "Amenity 3", category: "Amenities" },
  { src: amment4, alt: "Amenity 4", category: "Amenities" },
  { src: amment5, alt: "Amenity 5", category: "Amenities" },
  { src: amment6, alt: "Amenity 6", category: "Amenities" },
  { src: amment7, alt: "Amenity 7", category: "Amenities" },
  { src: amment8, alt: "Amenity 8", category: "Amenities" },
];

const categories = ["All", "Single", "Master", "Amenities"];


export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Map category names for filtering
  const categoryMap: Record<string, string> = {
    "Single": "Single Room",
    "Master": "Master Room",
    "Amenities": "Amenities",
  };
  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === categoryMap[selectedCategory]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore the beauty and comfort of Little Hide Away Apartment
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background sticky top-16 md:top-20 z-40 border-b border-border/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Gallery Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            initial="hidden"
            animate="visible"
            variants={{}}
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.alt}-${index}`}
                variants={getItemVariants(index)}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-md"
                onClick={() => setSelectedImage(index)}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  <p className="font-medium text-sm">{image.alt}</p>
                  <p className="text-xs text-white/70">{image.category}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>
            
            <motion.img
              key={selectedImage}
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            
            <motion.div 
              className="absolute bottom-6 left-0 right-0 text-center text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-serif text-lg">{filteredImages[selectedImage].alt}</p>
              <p className="text-sm text-white/60">{filteredImages[selectedImage].category}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
