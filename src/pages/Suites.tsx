import { Footer } from "@/components/layout/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Header } from "@/components/layout/Header";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import masterA from "@/assets/masterA.jpg";
import masterB from "@/assets/masterB.jpg";
import masterC from "@/assets/master C.jpg";
import single from "@/assets/single.jpg";
import singleB from "@/assets/singleB.jpg";
import singleC from "@/assets/singleC.jpg";
import back1 from "@/assets/back1.jpg";
import back2 from "@/assets/back2.jpg";
import back3 from "@/assets/back3.jpg";
import back4 from "@/assets/back4.jpg";
import sit from "@/assets/sit.jpg";
import sitKali from "@/assets/sit kali.jpg";
import viti from "@/assets/viti.jpg";
import vv from "@/assets/vv.jpg";
import _43A3661 from "@/assets/_43A3661.jpg";

// --- Room data ---
const masterRooms = [
  {
    id: 1,
    name: "Master Room ",
    image: masterA,
    features: ["King Bed", "Private Balcony", "Smart TV", "Mini Bar"],
    price: "130000 TZS",
  },
  {
    id: 2,
    name: "Master Room ",
    image: masterB,
    features: ["King Bed", "City View", "Mini Bar", "Workspace"],
    price: "130000 TZS",
  },
  {
    id: 3,
    name: "Master Room ",
    image: masterC,
    features: ["Queen Bed", "Smart TV", "Rain Shower"],
    price: "130000 TZS",
  },
];

const singleRooms = [
  {
    id: 4,
    name: "Single Room ",
    image: single,
    features: ["Single Bed", "Smart TV", "Rain Shower"],
    price: "80000 TZS",
  },
  {
    id: 5,
    name: "Single Room ",
    image: singleB,
    features: ["Single Bed", "Workspace", "Mini Bar"],
    price: "80000 TZS",
  },
  {
    id: 6,
    name: "Single Room ",
    image: singleC,
    features: ["Single Bed", "City View", "Smart TV"],
    price: "80000 TZS",
  },
];

const SuiteCard = ({ room, index, onViewDetails, onBookNow }: {
  room: typeof masterRooms[0] | typeof singleRooms[0];
  index: number;
  onViewDetails: () => void;
  onBookNow: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { margin: "-100px" });
  return (
    <motion.div
      ref={cardRef}
      className="room-card group"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={room.image}
          alt={room.name}
          className="room-card-image transform transition-transform duration-700 group-hover:scale-110 w-full h-64 object-cover"
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
        />
      </div>
      <motion.div
        className="p-6 pb-8 text-center relative overflow-visible"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
      >
        <h3 className="font-heading text-lg md:text-xl tracking-[0.15em] text-foreground mb-2 uppercase">
          {room.name}
        </h3>
        <div className="text-gold font-bold text-lg mb-2">{room.price}</div>
        {/* Features removed from card; only shown in modal */}
        <div className="flex justify-center gap-3">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-white px-4 py-2 text-sm uppercase cursor-pointer pointer-events-auto z-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewDetails();
                  }}
                >
                  View Details
                </Button>
                <Button
                  variant="default"
                  className="bg-gold text-white px-4 py-2 text-sm uppercase cursor-pointer pointer-events-auto z-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookNow();
                  }}
                >
                  Book Now
                </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SuitesSection = () => {
  const bookingUrl = "https://live.ipms247.com/booking/book-rooms-gobapeaks";
  const [selectedRoom, setSelectedRoom] = useState<null | typeof masterRooms[0] | typeof singleRooms[0]>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleBookNow = () => {
    window.open(bookingUrl, "_blank");
  };

  const handleViewDetails = (room: typeof masterRooms[0] | typeof singleRooms[0]) => {
    setSelectedRoom(room);
    setModalOpen(true);
  };

  return (
    <>
      <Header />
      <section id="suites" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-bold">Our Suites</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Experience Luxury</h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our range of suites, each designed for comfort and elegance.
            </p>
          </div>
          {/* First Row: Master Rooms */}
          <div className="relative max-w-5xl mx-auto mb-16">
            <Carousel
              opts={{ align: "center", loop: true }}
              plugins={[
                Autoplay({ delay: 3000, stopOnInteraction: true }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {masterRooms.map((room, index) => (
                  <CarouselItem
                    key={`master-room-${room.id}`}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <SuiteCard
                        room={room}
                        index={index}
                        onViewDetails={() => handleViewDetails(room)}
                        onBookNow={handleBookNow}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
          {/* Second Row: Single Rooms */}
          <div className="relative max-w-5xl mx-auto">
            <Carousel
              opts={{ align: "center", loop: true }}
              plugins={[
                Autoplay({ delay: 5000, stopOnInteraction: true }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {singleRooms.map((room, index) => (
                  <CarouselItem
                    key={`single-room-${room.id}`}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <SuiteCard
                        room={room}
                        index={index}
                        onViewDetails={() => handleViewDetails(room)}
                        onBookNow={handleBookNow}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
        </div>
      </section>
      <Footer />
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle>{selectedRoom?.name}</DialogTitle>
          </DialogHeader>
          <div className="mb-4">
            <img src={selectedRoom?.image} alt={selectedRoom?.name} className="w-full h-48 object-cover rounded-lg" />
          </div>
          <DialogDescription>
            <div className="mb-2 text-gold font-bold text-lg">Price: {selectedRoom?.price}</div>
            <ul className="flex flex-wrap justify-center gap-2 mb-4">
              {selectedRoom?.features.map((feature, i) => (
                <li key={i} className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-medium">
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant="default" className="bg-gold text-white px-4 py-2 text-sm uppercase" onClick={handleBookNow}>
              Book Now
            </Button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SuitesSection;