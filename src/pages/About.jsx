import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Sparkles, 
  Heart, 
  CheckCircle, 
  Star, 
  Trophy, 
  Target,
  TrendingUp,
  Zap,
  Crown,
  Palette,
  Camera,
  Shield,
  Clock,
  ThumbsUp,
  Smile,
  Gift
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { AnimatedSection, SlideInLeft, SlideInRight } from '../components/AnimatedSection';

export default function About() {

  const achievements = [
    {
      icon: Award,
      title: 'Certified Professional',
      description: 'Certified in advanced bridal makeup and hairstyling techniques',
      color: '#FFD700',
    },
    {
      icon: Users,
      title: '500+ Happy Brides',
      description: 'Trusted by hundreds of brides across Tirunelveli and beyond',
      color: '#AE9BD3',
    },
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Using only top-tier, internationally acclaimed makeup brands',
      color: '#FF6B9D',
    },
    {
      icon: Trophy,
      title: 'Award Winning',
      description: 'Recognized for excellence in bridal makeup artistry',
      color: '#4CAF50',
    },
  ];

  const skills = [
    { name: 'Bridal Makeup', level: 98, icon: Crown },
    { name: 'HD Makeup', level: 95, icon: Camera },
    { name: 'Hair Styling', level: 92, icon: Sparkles },
    { name: 'Airbrush Makeup', level: 90, icon: Zap },
    { name: 'Party Makeup', level: 96, icon: Star },
    { name: 'Traditional Looks', level: 94, icon: Palette },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every client receives personalized attention and care.',
      color: '#FF1493',
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for perfection in every look.',
      color: '#FFD700',
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through professionalism.',
      color: '#4CAF50',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Always updated with the latest trends and techniques.',
      color: '#AE9BD3',
    },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started professional makeup journey with specialized bridal training.',
      icon: Sparkles,
    },
    {
      year: '2021',
      title: 'Growing Recognition',
      description: 'Served 100+ brides and established reputation in Tirunelveli.',
      icon: TrendingUp,
    },
    {
      year: '2023',
      title: 'Expansion',
      description: 'Expanded services and introduced HD & airbrush makeup.',
      icon: Award,
    },
    {
      year: '2024',
      title: 'Excellence Achieved',
      description: 'Reached milestone of 500+ happy brides.',
      icon: Trophy,
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Brides', icon: Smile },
    { number: '5+', label: 'Years Experience', icon: Clock },
    { number: '1000+', label: 'Makeup Sessions', icon: Sparkles },
    { number: '100%', label: 'Satisfaction', icon: ThumbsUp },
  ];

  const whyChoose = [
    { icon: Award, title: 'Certified Expert', description: 'Professional training & certification' },
    { icon: Palette, title: 'Premium Brands', description: 'Only top-quality products' },
    { icon: Clock, title: 'Punctual Service', description: 'Always on time' },
    { icon: Heart, title: 'Personalized Care', description: 'Customized to your needs' },
    { icon: Shield, title: 'Trusted Service', description: '500+ satisfied clients' },
    { icon: Gift, title: 'Value Packages', description: 'Affordable premium quality' },
  ];

  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />

          <ImageWithFallback
            src="https://images.unsplash.com/photo-1576756373655-ce09d738c78c?auto=format&w=1080"
            alt="About Us"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto text-center text-white relative z-20 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles size={48} style={{ color: 'var(--primary)' }} className="mx-auto mb-4" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Helan Makeup Artistry
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Passion, Skill, and Dedication to Making You Look Beautiful
          </motion.p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-[var(--primary)] text-white">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <Icon size={40} className="mx-auto mb-2" />
                <h3 className="text-3xl font-bold">{s.number}</h3>
                <p>{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <SlideInLeft>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&w=1080"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6 bg-white p-4 rounded-full shadow-lg">
                <Award size={32} style={{ color: 'var(--primary)' }} />
              </div>
            </div>
          </SlideInLeft>

          <SlideInRight>
            <div>
              <Heart size={40} style={{ color: 'var(--primary)' }} className="mb-4" />

              <h2 className="text-3xl md:text-4xl font-semibold mb-5">
                My Journey
              </h2>

              <p className="mb-4 text-gray-700">
                I am Helan, a passionate bridal makeup artist based in Tirunelveli. What started as a dream has now become a journey of transforming brides into their most confident selves.
              </p>

              <p className="mb-4 text-gray-700">
                With 5+ years of experience and 500+ bridal makeovers, I ensure every bride receives a personalized, flawless look.
              </p>

              <p className="mb-4 text-gray-700">
                I specialize in HD Makeup, Airbrush Makeup, Traditional Looks, and more — using only premium international products.
              </p>

              <Link
                to="/portfolio"
                className="inline-block mt-3 px-8 py-4 bg-[var(--primary)] text-white rounded-lg"
              >
                View My Work
              </Link>
            </div>
          </SlideInRight>

        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-16 bg-[var(--off-white)]">
        <div className="container mx-auto px-4">

          <AnimatedSection className="text-center mb-14">
            <Trophy size={48} style={{ color: 'var(--primary)' }} className="mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl mb-3">Achievements</h2>
            <p className="text-gray-600">Milestones that define our excellence</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((a, idx) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white shadow-lg p-6 rounded-xl text-center"
                >
                  <div
                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: a.color }}
                  >
                    <Icon size={36} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{a.title}</h3>
                  <p className="text-gray-600 text-sm">{a.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          <AnimatedSection className="text-center mb-14">
            <Palette size={48} style={{ color: 'var(--primary)' }} className="mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl mb-3">Professional Skills</h2>
            <p className="text-gray-600">Expertise across makeup styles</p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Icon size={26} style={{ color: 'var(--primary)' }} />
                      <span>{s.name}</span>
                    </div>
                    <span className="text-[var(--primary)]">{s.level}%</span>
                  </div>

                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      transition={{ duration: 1.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: 'var(--primary)' }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 bg-[var(--off-white)]">
        <div className="container mx-auto px-4">

          <AnimatedSection className="text-center mb-14">
            <TrendingUp size={48} style={{ color: 'var(--primary)' }} className="mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl mb-3">Our Journey</h2>
            <p className="text-gray-600">Milestones through the years</p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {timeline.map((t, idx) => {
              const Icon = t.icon;
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: 'var(--primary)' }}
                    >
                      <Icon size={30} className="text-white" />
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-xl flex-1">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-xl font-semibold">{t.title}</h3>
                        <span className="text-[var(--primary)]">{t.year}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{t.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          <AnimatedSection className="text-center mb-14">
            <Heart size={48} style={{ color: 'var(--primary)' }} className="mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl mb-3">Our Values</h2>
            <p className="text-gray-600">Principles that guide us</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white shadow-lg p-6 rounded-xl text-center"
                >
                  <div
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: v.color }}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{v.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-[var(--off-white)]">
        <div className="container mx-auto px-4">

          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl">Why Choose Us</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {whyChoose.map((w, idx) => {
              const Icon = w.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-6 shadow-lg rounded-xl text-center"
                >
                  <Icon size={32} style={{ color: 'var(--primary)' }} className="mx-auto mb-3" />
                  <h4 className="font-semibold text-sm">{w.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{w.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 text-white bg-black relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute w-96 h-96 rounded-full top-0 right-0 opacity-10"
          style={{ backgroundColor: 'var(--primary)' }}
        />

        <div className="container mx-auto text-center relative z-10 px-4">
          <AnimatedSection>
            <Sparkles size={48} style={{ color: 'var(--primary)' }} className="mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl mb-3">Ready To Look Stunning?</h2>

            <p className="text-gray-300 max-w-xl mx-auto mb-8">
              Book your appointment now and let us create the perfect look for your special day.
            </p>

            <div className="flex justify-center gap-4">
              <Link
                to="/book-now"
                className="px-8 py-4 bg-[var(--primary)] rounded-lg text-white"
              >
                Book Appointment
              </Link>

              <Link
                to="/packages"
                className="px-8 py-4 bg-white text-black rounded-lg"
              >
                View Packages
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
