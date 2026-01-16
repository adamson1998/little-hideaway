import { Users, Maximize, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";
import styles from "./RoomDetailLuxury.module.css";

interface Room {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  pricePerNight: number;
  maxGuests: number;
  size: string;
  amenities: string[];
  image: string;
}

interface RoomDetailModalProps {
  room: Room | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RoomDetailModal({ room, open, onOpenChange }: RoomDetailModalProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth <= 600);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);
  if (!room) return null;

  const handleBookNow = () => {
    window.open(siteConfig.bookingUrl, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {isMobile ? (
        <DialogContent className={styles.luxuryModal + ' ' + styles.luxuryModalSmall}>
          <div className={styles.luxuryModal__imageWrap}>
            <img
              src={room.image}
              alt={room.name}
              className={styles.luxuryModal__img}
            />
            <div className={styles.luxuryModal__priceBadge}>
              {room.pricePerNight} TZS/night
            </div>
          </div>
          <div className={styles.luxuryModal__content}>
            <div className={styles.luxuryModal__heading}>{room.name}</div>
            <div className={styles.luxuryModal__infoRow}>
              <span><Users size={18} style={{verticalAlign:'middle'}} /> Up to {room.maxGuests} guests</span>
              <span><Maximize size={18} style={{verticalAlign:'middle'}} /> {room.size}</span>
            </div>
            <div className={styles.luxuryModal__desc}>{room.fullDescription}</div>
            <div>
              <h4 className={styles.luxuryModal__amenitiesHeading}>Amenities</h4>
              <div className={styles.luxuryModal__amenities}>
                {room.amenities.map((amenity) => (
                  <span key={amenity} className={styles.luxuryModal__amenityBadge}>
                    <Check size={14} style={{verticalAlign:'middle',marginRight:4}} /> {amenity}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.luxuryModal__actions}>
              <button className={styles.luxuryModal__closeBtn} onClick={() => onOpenChange(false)}>
                Close
              </button>
              <button className={styles.luxuryModal__bookBtn} onClick={handleBookNow}>
                Book This Suite
              </button>
            </div>
          </div>
        </DialogContent>
      ) : (
        <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto p-2 rounded-2xl">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4">
              <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2 font-semibold">
                {room.pricePerNight} TZS/night
              </Badge>
            </div>
          </div>

          <div className="p-4 md:p-6 space-y-4">
            <DialogHeader className="space-y-2">
              <DialogTitle className="font-serif text-3xl font-semibold">
                {room.name}
              </DialogTitle>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Users size={18} />
                  <span>Up to {room.maxGuests} guests</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Maximize size={18} />
                  <span>{room.size}</span>
                </div>
              </div>
            </DialogHeader>

            <p className="text-foreground/80 leading-relaxed">
              {room.fullDescription}
            </p>

            <div className="space-y-3">
              <h4 className="font-serif text-lg font-semibold">Amenities</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {room.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check size={16} className="text-primary shrink-0" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
                Close
              </Button>
              <Button variant="hero" className="flex-1" onClick={handleBookNow}>
                Book This Suite
              </Button>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
