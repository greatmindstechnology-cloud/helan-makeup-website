import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkles,
  Heart,
  Award,
  Users,
  Shield,
  Clock,
  Zap,
  Star,
  ArrowRight,
  Camera,
  Crown,
  Palette,
} from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback.jsx';
import { AnimatedSection, SlideInLeft, SlideInRight } from '../components/AnimatedSection.jsx';

export default function Home() {
  const stats = [
    { number: '1000+', label: 'Happy Brides', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '1000+', label: 'Sessions Completed', icon: Zap },
    { number: '100%', label: 'Satisfaction', icon: Shield },
  ];

  const services = [
    {
      icon: Crown,
      title: 'Bridal Makeup',
      desc: 'Signature bridal looks that enhance your natural beauty and match your outfit, jewelry, and personality.',
      image:
        'IMG_9118.JPG',
    },
    {
      icon: Camera,
      title: 'HD & Photo Shoot Makeup',
      desc: 'Camera-ready makeup that looks flawless in both real life and high-resolution photography.',
      image:
        'IMG_4051.jpg',
    },
    {
      icon: Palette,
      title: 'Party & Occasion Makeup',
      desc: 'Soft glam, bold looks, or something in between for receptions, parties, and special occasions.',
      image:
        'IMG_5157.JPEG',
    },
  ];

  const testimonials = [
    {
      name: 'Priya & Arun',
      text: 'My bridal look stayed flawless from the muhurtham to the reception. So many compliments from family and friends!',
      event: 'Traditional South Indian Wedding',
    },
    {
      name: 'Sneha',
      text: 'She understood exactly what I wanted – subtle, elegant, and camera-perfect. I felt so confident the entire day.',
      event: 'Engagement & Reception',
    },
    {
      name: 'Nithya',
      text: 'Very professional, on-time, and calm. Even in the rush of the wedding morning, she made everything feel easy.',
      event: 'Bridal & Bridesmaid Makeup',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80"
            alt="Bridal Makeup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-28 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <SlideInLeft className="text-white">
            <div className="inline-flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="p-2 rounded-full"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                <Sparkles size={24} />
              </motion.div>
              <span className="uppercase tracking-[0.2em] text-xs md:text-sm text-gray-200">
                Tirunelveli • Bridal Makeup Artist
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              <span style={{ color: 'var(--primary)' }}>Timeless Bridal Makeup</span>
              <br />
              <span style={{ color: 'var(--primary)' }}>That Feels Like You</span>
            </h1>

            <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl">
              Helan Makeup Artistry specializes in soft, elegant, and long-lasting bridal looks that
              enhance your natural beauty and photograph beautifully from muhurtham to reception.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to="/book-now"
      className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-sm md:text-base font-medium"
      style={{ backgroundColor: 'var(--primary)', color: 'var(--white)' }}
    >
      Book Your Date
      <ArrowRight className="ml-2 w-4 h-4" />
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to="/portfolio"
      className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-sm md:text-base font-medium border"
      style={{ borderColor: 'var(--primary)', color: 'var(--white)' }}
    >
      View Real Brides
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <a
      href="https://joy-helan-portfolio.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-sm md:text-base font-medium border"
      style={{ borderColor: 'var(--primary)', color: 'var(--white)' }}
    >
      View My Portfolio
    </a>
  </motion.div>
</div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-white/10 rounded-xl p-3 md:p-4 backdrop-blur-sm bg-white/5"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={18} className="text-gray-200" />
                      <span className="text-xs uppercase tracking-wide text-gray-300">
                        {stat.label}
                      </span>
                    </div>
                    <div className="text-lg md:text-xl font-semibold">{stat.number}</div>
                  </motion.div>
                );
              })}
            </div>
          </SlideInLeft>

          <SlideInRight>
            <div className="relative h-80 md:h-96 lg:h-[420px]">
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
              >
                <ImageWithFallback
                  src="award.JPG"
                  alt="Bride"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-2 md:-left-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  <Heart className="text-white w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-500">
                    Real Bride Review
                  </div>
                  <div className="text-sm font-medium text-gray-800">
                    &quot;I loved my look from start to finish!&quot;
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute top-4 -right-2 md:-right-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="text-xs text-gray-700">5.0 / 5.0 from brides</div>
              </motion.div>
            </div>
          </SlideInRight>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--off-white)' }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-3"
            >
              <Palette size={42} style={{ color: 'var(--primary)' }} />
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3">Signature Services</h2>
            <p
              className="max-w-2xl mx-auto text-sm md:text-base"
              style={{ color: 'var(--light-gray)' }}
            >
              From muhurtham to reception, we offer complete bridal and occasion makeup services
              tailored to your events.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
                >
                  <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: 'var(--primary)' }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white text-sm md:text-base font-medium">
                        {service.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <p
                      className="text-sm md:text-base mb-4 flex-1"
                      style={{ color: 'var(--gray)' }}
                    >
                      {service.desc}
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-sm font-medium mt-auto"
                      style={{ color: 'var(--primary)' }}
                    >
                      View details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-3"
            >
              <Star size={42} style={{ color: 'var(--primary)' }} />
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3">Loved by Brides</h2>
            <p
              className="max-w-2xl mx-auto text-sm md:text-base"
              style={{ color: 'var(--light-gray)' }}
            >
              Real stories from brides who trusted Helan Makeup Artistry for their most important
              day.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Heart
                    className="w-4 h-4"
                    style={{ color: 'var(--primary)' }}
                  />
                  <span className="text-xs uppercase tracking-wide text-gray-500">
                    {t.event}
                  </span>
                </div>
                <p className="text-sm md:text-base mb-4" style={{ color: 'var(--gray)' }}>
                  &quot;{t.text}&quot;
                </p>
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                      style={{ backgroundColor: 'var(--primary)', color: 'var(--white)' }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                      <div className="flex items-center text-xs text-yellow-500">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-[11px] text-gray-500">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/testimonials"
              className="inline-flex items-center text-sm md:text-base font-medium"
              style={{ color: 'var(--primary)' }}
            >
              Read more client stories
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-16 md:py-20 text-white relative overflow-hidden"
        style={{ backgroundColor: 'var(--black)' }}
      >
        <motion.div
          className="absolute -top-20 -left-10 w-72 h-72 rounded-full opacity-10"
          style={{ backgroundColor: 'var(--primary)' }}
          animate={{
            y: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: 'var(--primary)' }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">
              Your Wedding Date Is Precious.
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-300 mb-8">
              Bridal slots get booked quickly, especially during muhurtham seasons. Reserve your
              date in advance and let&apos;s start planning your dream look.
            </p>
          </AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/book-now"
                className="px-8 py-3 rounded-lg text-sm md:text-base font-medium"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--white)' }}
              >
                Check Availability
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg text-sm md:text-base font-medium border border-white/30 text-white"
              >
                Ask a Question
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
