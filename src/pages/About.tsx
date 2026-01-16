
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Heart, Shield, Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/hero-apartment.jpg";
import decoration from "@/assets/decoration.jpg";
import styles from "./About.module.css";

const values = [
  {
    icon: Heart,
    title: "Heartfelt Hospitality",
    description: "We believe every guest deserves personalized attention and care that exceeds expectations.",
    gradient: "from-pink-400 to-orange-400"
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description: "Every element of your stay is meticulously planned to create unforgettable moments.",
    gradient: "from-purple-400 to-pink-400"
  },
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "Your comfort and security are our top priorities, backed by our satisfaction guarantee.",
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    icon: Star,
    title: "Excellence Always",
    description: "We never compromise on quality, from amenities to service to the overall experience.",
    gradient: "from-orange-400 to-amber-400"
  },
];


const About = () => {
  const handleBookNow = () => {
    window.open(siteConfig.bookingUrl, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{backgroundImage: `url(${decoration})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(219,39,119,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-white/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
                Our Legacy
              </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
            Redefining Intimate Luxury
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-bold">
          Crafted from a passion for exceptional hospitality, Little Hideaway offers discerning travelers luxury, comfort, and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Story Section with Gradient Border */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className={"absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 opacity-30 blur-lg " + styles.zIndex0} />
              <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-transparent">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                 Where Every Stay Feels Easy
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                  <p>
                   Little Hideaway is a private apartment designed for comfort, privacy, and a calm atmosphere. It offers a simple, welcoming space where guests can relax with ease..
                  </p>
                  <p>
                    With modern essentials and thoughtful design, every stay feels smooth and stress-free, whether for a short visit or a longer stay..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Values That Define Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const delayClass = styles[`fadeInUpDelay${index}`] || "";
              return (
                <div
                  key={value.title}
                  className={`${styles.valueCard} group fadeInUp ${delayClass}`}
                  tabIndex={0}
                >
                {/* Gradient background on hover */}
                <div className={`bg-gradient-to-br ${value.gradient} ${styles.gradientBg}`} />
                {/* Animated yellow border line that appears only on hover/focus */}
                <div className={styles.gradientBorder} />
                <div className={`relative bg-white rounded-2xl p-8 h-full flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-500 ${styles.valueCardContent}`}>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>


    </Layout>
  );
};

export default About;
