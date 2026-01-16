import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Plane,
  Building2,
  Clock,
  Car,
  Palmtree,
  ShoppingBag,
  Waves,
  Mountain,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

interface Attraction {
  icon: React.ReactNode;
  name: string;
  distance: string;
  description: string;
}

interface Direction {
  icon: React.ReactNode;
  from: string;
  duration: string;
  details: string;
}

const attractions: Attraction[] = [
  {
    icon: <Waves className="w-6 h-6" />,
    name: "Gym & Fitness Center",
    distance: "30 M",
    description: "Gym available within the building.",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    name: "Kariakoo Market",
    distance: "30 M",
    description: "Kariakoo Market is Dar es Salaam’s vibrant center for trade",
  },
  {
    icon: <Palmtree className="w-6 h-6" />,
    name: "Supermarket & Shops",
    distance: "0.5 M",
    description: "Conveniently located near ground floor of little hideaway, offering easy access to daily essentials and nearby shops.",
  },
  {
    icon: <Mountain className="w-6 h-6" />,
    name: "Restaurant & Cafe",
    distance: "20 M",
    description: "Located in front of the building, offering food and drinks ",
  },
];

const directions: Direction[] = [
  {
    icon: <Plane className="w-6 h-6" />,
    from: "Dar es Salaam Julius Nyerere International Airport (DAR)",
    duration: "40 minutes",
    details: "Taxi or ride-hailing services available for convenience",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    from: "Downtown Dar es Salaam / City Center",
    duration: "25 minutes",
    details: "Morogoro Road for the most direct route",
  },
  {
    icon: <Car className="w-6 h-6" />,
    from: "Mbezi Beach",
    duration: "15 minutes",
    details: "Take Bagamoyo Road, then Mbezi Beach Road",
  },
];

const LocationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="location" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Animated Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p
  className="text-sm uppercase tracking-widest text-muted-foreground mb-2 font-bold"
  variants={itemVariants}
>
  Find Us
</motion.p>
          <motion.h2
            className="font-serif text-4xl md:text-5xl text-foreground mb-6"
            variants={itemVariants}
          >
            Our Location
          </motion.h2>
          <motion.div
            className="w-24 h-0.5 bg-gold mx-auto mb-6"
            variants={itemVariants}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Located on Uhuru Street in the Kisutu area, Dar es Salaam, Little Hide Away Apartment offers the perfect blend of urban accessibility and serene seclusion.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Animated Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
          >
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              {/* Animated Map */}
              <motion.div
                className="aspect-[4/3] bg-muted"
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : { scale: 1.1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=39.277,-6.818,39.297,-6.798&layer=mapnik&marker=-6.807,39.287"
                  className="w-full h-full border-0"
                  title="Uhuru Street, Kisutu, Dar es Salaam Location"
                  loading="lazy"
                />
              </motion.div>
              {/* Animated Map Overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 to-transparent p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: "spring", delay: 1, stiffness: 200 }}
                  >
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                  </motion.div>
                  <div>
                    <p className="text-ivory font-medium">Uhuru Street, Kisutu</p>
                    <p className="text-ivory/70 text-sm">
                      Dar es Salaam, Tanzania
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Animated Directions */}
            <motion.div
              className="mt-8 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.h3
                className="font-serif text-xl text-foreground flex items-center gap-2"
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Clock className="w-5 h-5 text-gold" />
                Getting Here
              </motion.h3>
              <div className="space-y-3">
                {directions.map((direction, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border/50 hover:border-gold/30 hover:shadow-soft"
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover="hover"
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--gold))" }}
                      transition={{ duration: 0.2 }}
                    >
                      {direction.icon}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-foreground font-medium text-sm">
                          {direction.from}
                        </p>
                        <span className="text-gold text-sm font-medium">
                          {direction.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-xs">
                        {direction.details}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Animated Nearby Attractions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h3
              className="font-serif text-xl text-foreground mb-6 flex items-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <MapPin className="w-5 h-5 text-gold" />
              Nearby Attractions
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {attractions.map((attraction, index) => (
                <motion.div
                  key={index}
                  className="group p-6 bg-card rounded-lg border border-border/50 hover:border-gold/30 hover:shadow-elegant"
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover="hover"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-gold group-hover:text-primary-foreground"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {attraction.icon}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">
                          {attraction.name}
                        </h4>
                        <motion.span
                          className="text-xs text-gold bg-gold/10 px-2 py-1 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {attraction.distance}
                        </motion.span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {attraction.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Animated Concierge Services Card */}
            <motion.div
              className="mt-6 p-6 bg-charcoal rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h4
                className="font-serif text-lg text-ivory mb-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                Concierge Services
              </motion.h4>
              <motion.p
                className="text-ivory/70 text-sm mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                Our team is happy to help you plan transportation, tours, and unique experiences in Dar es Salaam via reliable local partners..
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                {[
                  "Airport Transfers",
                  "Private Tours",
                  "Car Rentals",
                  "Yacht Charters",
                ].map((service, index) => (
                  <motion.span
                    key={service}
                    className="text-xs text-gold bg-gold/10 px-3 py-1.5 rounded-full font-bold"
                    whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--gold))", transition: { duration: 0.2 } }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 1.7 + index * 0.1 }}
                  >
                    {service}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
