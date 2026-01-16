import { siteConfig } from "@/config/site";
import styles from "./RoomCardLuxury.module.css";

interface RoomCardProps {
  room: {
    id: string;
    name: string;
    shortDescription: string;
    pricePerNight: number;
    maxGuests: number;
    size: string;
    amenities: string[];
    image: string;
  };
  onViewDetails: () => void;
}

export function RoomCard({ room, onViewDetails }: RoomCardProps) {
  const handleBookNow = () => {
    window.open(siteConfig.bookingUrl, "_blank");
  };

  return (
    <div className={styles.luxuryRoomCard}>
      <div className={styles.luxuryRoomCard__imgWrapper}>
        <img
          src={room.image}
          alt={room.name}
          className={`${styles.luxuryRoomCard__bg} ${styles.roomCardImg}`}
        />
      </div>
      <div className={styles.luxuryRoomCard__gradient} />
      <div className={styles.luxuryRoomCard__priceBadge}>
        {room.pricePerNight.toLocaleString()} TZS/night
      </div>
      <div className={styles.luxuryRoomCard__content}>
        <div>
          <h3 className={styles.luxuryRoomCard__heading}>{room.name}</h3>
          <p className={styles.luxuryRoomCard__desc}>{room.shortDescription}</p>
        </div>
        <div className={styles.luxuryRoomCard__amenities}>
          {room.amenities.map((amenity) => (
            <span key={amenity} className={styles.luxuryRoomCard__amenityBadge}>{amenity}</span>
          ))}
        </div>
        <div className={styles.luxuryRoomCard__bottomBar}>
          <button className={styles.luxuryRoomCard__viewDetails} onClick={onViewDetails}>
            View Details
          </button>
          <button className={styles.luxuryRoomCard__bookNow} onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
