import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Heart, 
  Star, 
  Palette, 
  Crown, 
  Camera, 
  Users, 
  Clock, 
  CheckCircle 
} from 'lucide-react';

import { ImageWithFallback } from '../components/ImageWithFallback';

export default function Services() {

  const services = [
    {
      id: 1,
      title: 'Bridal Makeup',
      icon: Crown,
      description: 'Complete bridal makeup package with hairstyling for your dream wedding',
      image: 'https://images.unsplash.com/photo-1625139108082-48bb424c2333?auto=format&w=1080',
      features: [
        'Premium bridal makeup using high-end products',
        'Professional hairstyling and draping',
        'Pre-bridal skin consultation',
        'Trial session included',
        'Touch-up kit provided',
        'Lasts 12-15 hours',
      ],
      duration: '3-4 hours',
      ideal: 'Wedding ceremonies',
    },

    {
      id: 2,
      title: 'Engagement Makeup',
      icon: Heart,
      description: 'Elegant and sophisticated makeup for your engagement ceremony',
      image: 'https://images.unsplash.com/photo-1551533326-126e566be22a?auto=format&w=1080',
      features: [
        'Natural yet glamorous look',
        'Camera-friendly makeup',
        'Hairstyling included',
        'Jewelry placement assistance',
        'Perfect for photography',
        'Long-lasting formula',
      ],
      duration: '2-3 hours',
      ideal: 'Engagement ceremonies',
    },

    {
      id: 3,
      title: 'Reception Makeup',
      icon: Star,
      description: 'Glamorous evening makeup for your wedding reception',
      image: 'https://images.unsplash.com/photo-1763281159769-095cd079d4ec?auto=format&w=1080',
      features: [
        'Dramatic evening makeup',
        'HD and airbrush options',
        'Statement hairstyle',
        'Shimmer and highlight',
        'Photo and video ready',
      ],
      duration: '3-4 hours',
      ideal: 'Wedding receptions',
    },

    {
      id: 4,
      title: 'Party Makeup',
      icon: Sparkles,
      description: 'Stunning party makeup for all your celebrations and events',
      image: 'https://images.unsplash.com/photo-1762074973099-78f2169c9177?auto=format&w=1080',
      features: [
        'Customized party looks',
        'Trendy makeup styles',
        'Quick hairstyling',
        'Shimmer and glam',
        'Waterproof products',
        'Long-lasting wear',
      ],
      duration: '1.5-2 hours',
      ideal: 'Parties & Events',
    },

    {
      id: 5,
      title: 'HD Makeup',
      icon: Camera,
      description: 'High-definition makeup perfect for photography and videography',
      image: 'https://images.unsplash.com/photo-1758613655900-61957c2aca5d?auto=format&w=1080',
      features: [
        'Flawless camera finish',
        'No flashback',
        'Seamless blending',
        'Professional photography ready',
        'Premium HD products',
        'Natural skin texture',
      ],
      duration: '2.5-3 hours',
      ideal: 'Photo shoots / Videos',
    },

    {
      id: 6,
      title: 'Airbrush Makeup',
      icon: Palette,
      description: 'Flawless airbrush makeup for a perfect, long-lasting finish',
      image: 'https://images.unsplash.com/photo-1612590838546-42efc879aa49?auto=format&w=1080',
      features: [
        'Lightweight and breathable',
        'Even coverage',
        'Sweat and water resistant',
        'Lasts 12-16 hours',
        'Ideal for all skin types',
      ],
      duration: '2-3 hours',
      ideal: 'Outdoor weddings / Summer events',
    },

    {
      id: 7,
      title: 'Traditional Bridal',
      icon: Crown,
      description: 'Authentic South Indian traditional bridal makeup and styling',
      image: 'https://images.unsplash.com/photo-1760461804986-b9eeaa24cf28?auto=format&w=1080',
      features: [
        'Traditional temple jewelry styling',
        'Classic South Indian makeup',
        'Saree draping expertise',
        'Flower decoration',
        'Cultural authenticity',
      ],
      duration: '4-5 hours',
      ideal: 'Traditional Tamil weddings',
    },

    {
      id: 8,
      title: 'Hairstyling',
      icon: Sparkles,
      description: 'Professional hairstyling for all occasions and events',
      image: 'https://images.unsplash.com/photo-1715739286630-0e51d5192b50?auto=format&w=1080',
      features: [
        'Bridal hairstyles',
        'Bun & updo styles',
        'Curls & waves',
        'Braiding',
      ],
      duration: '1-2 hours',
      ideal: 'Any event',
    },

    {
      id: 9,
      title: 'Pre-Wedding Events',
      icon: Users,
      description: 'Makeup for mehendi, sangeet, and other pre-wedding functions',
      image: 'https://images.unsplash.com/photo-1617035305886-59c560e07ce4?auto=format&w=1080',
      features: [
        'Theme-based looks',
        'Vibrant styling',
        'Quick makeup options',
        'Group packages available',
      ],
      duration: '1.5-2 hours',
      ideal: 'Mehendi / Sangeet / Haldi',
    },
  ];

  const whyChoose = [
    {
      icon: Sparkles,
      title: 'Premium Products',
      description: 'Only high-quality international makeup brands used',
    },
    {
      icon: Clock,
      title: 'Punctual Service',
      description: 'Always on time, every time',
    },
    {
      icon: Users,
      title: 'Personalized Approach',
      description: 'Each look customized to your style',
    },
    {
      icon: CheckCircle,
      title: 'Trial Sessions',
      description: 'Available for bridal packages',
    },
  ];

  const whatsappNumber = '919876543210';

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />

        <ImageWithFallback
          src="https://images.unsplash.com/photo-1553540751-988bd7918c7e?auto=format&w=1080"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Professional makeup and styling for every occasion
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">

          {services.map((service, index) => {
            const Icon = service.icon;
            const reverse = index % 2 !== 0;

            return (
              <div 
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* TEXT */}
                <div className={reverse ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--primary)' }}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <h2>{service.title}</h2>
                  </div>

                  <p className="mb-6 text-gray-600">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle size={20} style={{ color: 'var(--primary)' }} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-[var(--off-white)]">
                      <p className="text-sm text-gray-500">Duration</p>
                      <p>{service.duration}</p>
                    </div>

                    <div className="p-4 rounded-lg bg-[var(--off-white)]">
                      <p className="text-sm text-gray-500">Ideal For</p>
                      <p className="text-sm">{service.ideal}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      to="/book-now"
                      className="px-6 py-3 rounded-lg bg-[var(--primary)] text-white hover:scale-105 transition"
                    >
                      Book This Service
                    </Link>

                    <Link
                      to="/packages"
                      className="px-6 py-3 rounded-lg bg-[var(--off-white)] text-black hover:scale-105 transition"
                    >
                      View Packages
                    </Link>
                  </div>
                </div>

                {/* IMAGE */}
                <div className={reverse ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover hover:scale-110 transition duration-300"
                    />
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[var(--off-white)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Why Choose Us</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            What makes our services truly special
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white p-8 shadow-lg rounded-xl">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: 'var(--primary)' }}
                  >
                    <Icon size={28} className="text-white" />
                  </div>

                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center text-white bg-black">
        <h2 className="mb-6 text-3xl md:text-4xl">Ready to Book Your Service?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your requirements and book your appointment.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/book-now"
            className="px-8 py-4 rounded-lg bg-[var(--primary)] text-white hover:scale-105 transition"
          >
            Book Now
          </Link>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg bg-white text-black hover:scale-105 transition"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

    </div>
  );
}
