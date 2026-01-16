import masterD from "@/assets/masterD.jpg";
import gatewayBg from "@/assets/back2.jpg";
import { Link } from "react-router-dom";
import { Wifi, Wind, Film, TreePine, ArrowRight, Star, Coffee, RefreshCw } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HighlightCard } from "@/components/HighlightCard";
import { RoomCard } from "@/components/RoomCard";
import { RoomDetailModal } from "@/components/RoomDetailModal";
import { BookingSearchBar } from "@/components/BookingSearchBar";
import { siteConfig, rooms } from "@/config/site";
import styles from "./Index.module.css";
import LocationSection from "./LocationSection";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Images
import dinImage from "@/assets/din.jpg";
import vitiImage from "@/assets/viti.jpg";
import sitImage from "@/assets/sit.jpg";


import masterB from "@/assets/masterB.jpg";

import single from "@/assets/single.jpg";
import singleB from "@/assets/singleB.jpg";
import singleC from "@/assets/singleC.jpg";
import masterG from "@/assets/masterg.jpg"; // new luxury suite image

import singleF from "@/assets/singlef.jpg"; // new penthouse image
import roomSerene from "@/assets/din.jpg";

// Room images mapping
const roomImages: Record<string, string[]> = {
  "master-room-1": [masterB],
  "master-room-2": [masterB],
  "shared-room-1": [singleC],
  "shared-room-2": [singleB],

  // Updated rooms
  "master room": [masterG],
  "penthouse-1": [singleF],
};

// Highlights
const highlights = [
  { icon: Wifi, title: "Free Wi-Fi", description: "High-speed internet throughout the property" },
  { icon: Wind, title: "Air Conditioning", description: "Climate control in all rooms for your comfort" },
  { icon: Film, title: "Netflix", description: "Enjoy complimentary Netflix streaming on a smart TV in each suite" },
  { icon: Coffee, title: "Fully Equipped Kitchen", description: "Cook like at home — our suites include a full kitchen with cookware, utensils and a coffee maker" },
  { icon: RefreshCw, title: "Washing Machine", description: "In-suite washing machine available so you can travel light and keep clothes fresh" },
  { icon: TreePine, title: "Quiet & Peaceful", description: "Serene location away from the city noise" },
];

// Testimonials
const TESTIMONIALS = [
  { name: "Wellngton", text: "Absolutely incredible experience! The apartment was spotless, modern, and had everything we needed. The location was perfect and the service was top-notch. Will definitely be returning!", rating: 5, date: "5 days ago" },
  { name: "Aisha M.", text: "We loved our stay — cozy, clean and perfectly located.", rating: 5, date: "1 week ago" },
  { name: "Liam R.", text: "Excellent host and beautiful apartment. Will return!", rating: 5, date: "3 weeks ago" },
  { name: "Sofia G.", text: "Quiet and comfortable — highly recommend for a peaceful getaway.", rating: 4, date: "1 day ago" },
  { name: "Maya T.", text: "Fantastic stay with thoughtful touches throughout — highly recommended!", rating: 5, date: "1 month ago" },
  { name: "Noah P.", text: "Central location and lovely host. Great communication and speedy check-in.", rating: 5, date: "Today" },
  { name: "Zara K.", text: "Lovely apartment, very stylish and clean. Perfect for a weekend getaway.", rating: 5, date: "2 weeks ago" },
  { name: "Daniel S.", text: "Amazing stay! Comfortable beds, great amenities, and a super helpful host.", rating: 5, date: "4 days ago" },
  { name: "Fatima L.", text: "The apartment exceeded our expectations. Cozy, quiet, and conveniently located.", rating: 4, date: "1 month ago" },
  { name: "Kevin M.", text: "Highly recommended! Fantastic experience, perfect for families or couples.", rating: 5, date: "6 days ago" },
];


function TestimonialsCarousel() {
  const testimonials = TESTIMONIALS;
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(() => (typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1));
  const [isPaused, setIsPaused] = useState(false);
  const totalPages = Math.max(1, Math.ceil(testimonials.length / perPage));

  useEffect(() => {
    const onResize = () => {
      const next = window.innerWidth >= 768 ? 3 : 1;
      setPerPage((prev) => (prev !== next ? next : prev));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => setPage((p) => Math.min(p, totalPages - 1)), [perPage, totalPages]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => setPage((p) => (p + 1) % totalPages), 5000);
    return () => clearInterval(id);
  }, [isPaused, totalPages]);

  const handlePrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const handleNext = () => setPage((p) => (p + 1) % totalPages);

  const start = page * perPage;
  const visible = testimonials.slice(start, start + perPage);

  return (
    <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-3">
          <div className="flex justify-center items-stretch">
            <div className="w-full flex gap-6 justify-center items-stretch">
              {visible.map((t, idx) => (
                <div key={`${t.name}-${start + idx}`} className="flex-1 p-6 rounded-lg bg-white/6 backdrop-blur-md shadow-lg hover:scale-105 transform transition-all duration-300 text-white">
                  <div className="flex items-center gap-4 mb-3">
                    <Avatar><AvatarFallback>{t.name.split(" ")[0].charAt(0)}</AvatarFallback></Avatar>
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-white/80">{t.date}</div>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={16} color="#eab308" />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/90">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={handlePrev} title="Previous testimonials" className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/45">
        <ChevronLeft />
      </button>
      <button onClick={handleNext} title="Next testimonials" className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/45">
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button key={i} onClick={() => setPage(i)} title={`Go to testimonials page ${i+1}`} className={`w-3 h-3 rounded-full ${i === page ? "bg-white" : "bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
}

const Index = () => {
  const [selectedRoom, setSelectedRoom] = useState<(typeof rooms)[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isBookingSticky, setIsBookingSticky] = useState(false);
  const bookingRef = useRef<HTMLDivElement>(null);
  const bookingPlaceholderRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement | null>(null);

  // Sticky booking logic
  useEffect(() => {
    const headerHeight = window.innerWidth >= 768 ? 80 : 64;
    const observer = new IntersectionObserver(
      ([entry]) => setIsBookingSticky(!entry.isIntersecting),
      { rootMargin: `-${headerHeight}px 0px 0px 0px`, threshold: 0 }
    );
    if (bookingPlaceholderRef.current) observer.observe(bookingPlaceholderRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (spacerRef.current && bookingRef.current && isBookingSticky) {
      spacerRef.current.style.height = `${bookingRef.current.offsetHeight}px`;
    } else if (spacerRef.current) {
      spacerRef.current.style.height = `0px`;
    }
  }, [isBookingSticky]);

  // Hero slideshow
  const heroImages = [dinImage, vitiImage, sitImage, masterB];
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setHeroIndex((prev) => (prev + 1) % heroImages.length), 4000);
    return () => clearInterval(interval);
  }, []);

  const handleBookNow = () => window.open(siteConfig.bookingUrl, "_blank");
  const handleViewDetails = (room: (typeof rooms)[0]) => {
    setSelectedRoom(room);
    setModalOpen(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((img, idx) => (
            <img key={idx} src={img} alt="Little Hide Away Apartment" className={`w-full h-full object-cover absolute inset-0 ${styles.heroImage} ${heroIndex === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'}`} />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground text-shadow">{siteConfig.name}</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-bold">{siteConfig.tagline}</p>
            <p className="text-primary-foreground/80 max-w-xl mx-auto font-bold">{siteConfig.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="xl" onClick={handleBookNow}>Book Your Stay</Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/suites">Explore Suites<ArrowRight size={20} /></Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/70" />
          </div>
        </div>
      </section>

      {/* Booking Search Bar */}
      <section className="relative z-20 -mt-12 md:-mt-16 pb-8">
        <div ref={bookingPlaceholderRef} className="absolute top-0 left-0 w-full h-1" />
        {isBookingSticky && bookingRef.current && <div ref={spacerRef} />}
        <div ref={bookingRef} className={`container mx-auto px-4 transition-all duration-300 ${isBookingSticky ? "fixed top-16 md:top-20 left-0 right-0 z-50 animate-fade-in" : ""}`}>
          <BookingSearchBar />
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">Our Suites</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Discover our carefully designed suites, each offering a unique experience with all the comforts of home.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, idx) => (
              <RoomCard
                key={room.id}
                room={{
                  ...room,
                  image: room.name === "Luxury Suite" ? masterD : (roomImages[room.id] && roomImages[room.id][0]) || roomSerene,
                  pricePerNight: room.pricePerNight,
                  shortDescription: room.shortDescription || ''
                }}
                onViewDetails={() => handleViewDetails(room)}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/suites">View All Suites<ArrowRight size={18} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Experience the perfect blend of comfort, convenience, and tranquility at our boutique apartment.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight) => <HighlightCard key={highlight.title} {...highlight} />)}
          </div>
        </div>
      </section>

      {/* Testimonials + Trusted Guests */}
      <div className="relative overflow-hidden">
        <div aria-hidden className={`absolute inset-0 -z-10 ${styles.guestReviewBg}`} />
        <div className="absolute inset-0 bg-black/40 -z-5 pointer-events-none" />
        <div className="relative z-10">
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-6">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-2">Guest Reviews</h2>
                <p className="text-white/90 max-w-2xl mx-auto">What our guests are saying about their stay.</p>
              </div>
              <TestimonialsCarousel />
              <div className="mt-12 bg-white/5 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-center mb-8">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-2">Trusted Guests rates</h3>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 md:gap-8 max-w-5xl mx-auto">
                  <StatCard label="Average Rating" end={4.9} duration={1200} suffix="" formatThousands={false} floatDisplay={true} />
                  <StatCard label="Happy Guests" end={2500} duration={1400} suffix="+" formatThousands={true} />
                  <StatCard label="Satisfaction" end={98} duration={1200} suffix="%" formatThousands={false} />
                  <StatCard label="Countries" end={45} duration={1200} suffix="+" formatThousands={false} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Location Section */}
      <LocationSection />

      {/* CTA */}
      <section className={styles.gatewayCtaBg}>
        <div className={styles.gatewayCtaOverlay}>
          <div className={styles.gatewayCtaContent}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Ready for Your Perfect Getaway?</h2>
            <p className="mb-6 text-lg md:text-2xl">Book your stay today and experience the peace and comfort of Little Hide Away Apartment.</p>
            <Button variant="heroOutline" size="xl" onClick={handleBookNow}>Book Now</Button>
          </div>
        </div>
      </section>

      {/* Room Modal */}
      <RoomDetailModal
        room={selectedRoom ? { ...selectedRoom, image: (roomImages[selectedRoom.id] && roomImages[selectedRoom.id][0]) || roomSerene } : null}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </Layout>
  );
};

// StatCard component
function StatCard({ label, end, suffix = "", duration = 1000, formatThousands = false, floatDisplay = false }: { label: string; end: number; suffix?: string; duration?: number; formatThousands?: boolean; floatDisplay?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  const animateTo = React.useCallback((target: number) => {
    const start = performance.now();
    const from = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const current = Math.floor(from + (target - from) * progress);
      setValue(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      else rafRef.current = null;
    };
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, [duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) animateTo(end);
        else { if (rafRef.current) cancelAnimationFrame(rafRef.current); setValue(0); }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => { obs.disconnect(); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [animateTo, end]);

  const display = floatDisplay ? value.toFixed(1) : (formatThousands ? value.toLocaleString() : value);

  return (
    <div ref={ref} className="p-6 bg-transparent rounded-lg text-center">
      <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">{display}{suffix}</div>
      <div className="text-sm text-white/90 mt-2">{label}</div>
    </div>
  );
}

export default Index;
