// Site Configuration - Edit these values to customize your site
export const siteConfig = {
  name: "Little Hide Away Apartment",
  tagline: "Your Perfect Little Hide Away",
  description: "A peaceful, comfortable, and private apartment stay for tourists and travelers seeking tranquility.",
  
  // Booking Configuration
  bookingUrl: "https://live.ipms247.com/booking/book-rooms-gobapeaks", // Updated booking URL
  
  // Contact Information
  phone: "+255716324929",
  email: "littlehideaway55@gmail.com",

  address: "Uhuru street, kisutu - Dar es salaam",
  social: {
    instagram: "https://www.instagram.com/littlehideaway_apartment?igsh=MXZyNm90eGF2b2lnNg==",
    facebook: "https://facebook.com/littlehideaway",
  },
};

export const rooms = [
  {
    id: "master-room-1",
    name: "Master Room",
    shortDescription: "Spacious master room with premium bedding and en-suite facilities.",
    fullDescription: "Comfortable master room featuring a king-size bed, en-suite amenities, and luxurious finishes.",
    pricePerNight: 130000, // TZS
    maxGuests: 2,
    size: "30 sqm",
    amenities: ["King Bed", "Private Bathroom", "Smart TV", ],
    images: ["/placeholder.svg"],
  },
  {
    id: "master-room-2",
    name: "Master Room",
    shortDescription: "Another premium master room with elegant decor and comfort.",
    fullDescription: "Comfortable master room featuring a king-size bed, en-suite amenities, and luxurious finishes.",
    pricePerNight: 130000, // TZS
    maxGuests: 2,
    size: "30 sqm",
    amenities: ["King Bed", "Private Bathroom", "Smart TV",],
    images: ["/placeholder.svg"],
  },
  {
    id: "shared-room-1",
    name: "Single Room",
    shortDescription: "Cozy single room with shared bathroom facilities; comfortable and clean.",
    fullDescription: "A comfortable single room with a plush bed, smart TV, and access to a shared bathroom. Perfect for solo travelers or those seeking privacy at a great value.",
    pricePerNight: 80000, // TZS
    maxGuests: 1,
    size: "18 sqm",
    amenities: ["Single Bed", "Shared Bathroom", "Smart TV"],
    images: ["/placeholder.svg"],
  },
  {
    id: "shared-room-2",
    name: "Single Room",
    shortDescription: "Cozy single room with shared bathroom facilities; comfortable and clean.",
    fullDescription: "A comfortable single room with a plush bed, smart TV, and access to a shared bathroom. Perfect for solo travelers or those seeking privacy at a great value.",
    pricePerNight: 80000, // TZS
    maxGuests: 1,
    size: "18 sqm",
    amenities: ["Single Bed", "Shared Bathroom", "Smart TV"],
    images: ["/placeholder.svg"],
  },
  {
    id: "luxury-room-1",
    name: "Sharerd Dining",
    shortDescription: "Elegant suite with premium amenities and a stunning view.",
    fullDescription: "A luxury suite featuring a king-size bed, private balcony, and high-end finishes. Perfect for couples or business travelers seeking extra comfort.",
    pricePerNight: 0, // TZS
    maxGuests: 2,
    size: "35 sqm",
    amenities: [, "shared kitchen", "Smart TV" ,"shared sitting room", ],
    images: ["/placeholder.svg"],
  },
  {
    id: "penthouse-1",
    name: "Single Room",
    shortDescription: "Spacious penthouse with panoramic city views.",
    fullDescription: "Our penthouse offers the ultimate in luxury and privacy, with a large living area, private terrace, and exclusive amenities.",
    pricePerNight: 80000, // TZS
    maxGuests: 4,
    size: "60 sqm",
    amenities: ["single Bed", , "Smart TV", "shared bathroom"],
    images: ["/placeholder.svg"],
  },
];
