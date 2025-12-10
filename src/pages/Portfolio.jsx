import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Filter, Sparkles, Heart, Camera, Tag } from "lucide-react";
import ImageWithFallback from "../components/ImageWithFallback.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";

export default function Portfolio() {
  const categories = [
    "All",
    "Bridal",
    "Engagement",
    "Reception",
    "Party",
    "Photoshoot",
  ];

  const items = [
    {
      id: 1,
      category: "Bridal",
      title: "Traditional South Indian Bridal Look",
      desc: "Full bridal look for morning muhurtham with classic temple jewelry.",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      category: "Engagement",
      title: "Soft Glam Engagement Look",
      desc: "Neutral tones with a soft glow and subtle smokey eye.",
      image:
        "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      category: "Reception",
      title: "Evening Reception Glam",
      desc: "Bold eyes, defined contour, and glossy lips for an elegant night event.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      category: "Bridal",
      title: "Minimal Bridal with Soft Bun",
      desc: "Fresh skin, soft eyes, and traditional bun with flowers.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      category: "Party",
      title: "Guest Party Makeup",
      desc: "Soft glam look for a wedding guest with shimmer eyes.",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 6,
      category: "Photoshoot",
      title: "Outdoor Pre-Wedding Shoot",
      desc: "Natural-looking base with defined eyes for outdoor lighting.",
      image:
        "https://images.unsplash.com/photo-1504199367641-aba8151af406?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 7,
      category: "Photoshoot",
      title: "Studio Portrait",
      desc: "Clean HD base with sharp details for studio photography.",
      image:
        "https://images.unsplash.com/photo-1512207842290-87277a7e075e?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 8,
      category: "Party",
      title: "Reception Guest Look",
      desc: "Classic liner, soft lips, and glowing skin.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 9,
      category: "Engagement",
      title: "Pastel Lehenga Engagement",
      desc: "Color-coordinated makeup to match pastel lehenga and jewelry.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-72 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.3 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1400&q=80"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </motion.div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <AnimatedSection>
            <Sparkles
              size={38}
              style={{ color: "var(--primary)" }}
              className="inline-block mb-3"
            />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
              Real Brides, Real Moments
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-200">
              A glimpse of the beautiful brides and clients who trusted Helan
              Makeup Artistry for their special days.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters + Gallery */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--off-white)" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-1">
                Portfolio Gallery
              </h2>
              <p
                className="text-xs md:text-sm"
                style={{ color: "var(--light-gray)" }}
              >
                Use the filters to view different event types and makeup styles.
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="inline-flex items-center gap-2 text-xs md:text-sm px-3 py-1.5 rounded-full bg-white shadow-sm">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter by category</span>
              </div>
              <div className="inline-flex items-center gap-2 text-xs md:text-sm px-3 py-1.5 rounded-full bg-white shadow-sm">
                <Camera className="w-3.5 h-3.5" />
                <span>{items.length} looks</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs md:text-sm border ${
                  activeCategory === cat
                    ? "text-white"
                    : "text-gray-600 bg-white hover:bg-gray-50"
                }`}
                style={
                  activeCategory === cat
                    ? {
                        backgroundColor: "var(--primary)",
                        borderColor: "var(--primary)",
                      }
                    : { borderColor: "var(--primary-light)" }
                }
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p
                className="text-sm md:text-base"
                style={{ color: "var(--light-gray)" }}
              >
                No items found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 3) * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-52 md:h-56 overflow-hidden">
                    <motion.div
                      className="h-full"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-white/90 text-gray-800">
                        <Tag className="w-3 h-3" />
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div>
                        <h3 className="text-sm md:text-base font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-white/90"
                      >
                        <Heart
                          className="w-4 h-4"
                          style={{ color: "var(--primary)" }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p
                      className="text-xs md:text-sm"
                      style={{ color: "var(--light-gray)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
