import { Link } from 'react-router-dom';
import { Check, Star, Crown, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';

export default function Packages() {
  const packages = [
    {
      id: 1,
      name: 'Essential',
      icon: Star,
      price: '₹10,000',
      popular: false,
      description: 'Perfect for pre-wedding events and parties',
      features: [
        'Party Makeup',
        'Basic Hairstyling',
        'Standard Products',
        'Duration: 1.5-2 hours',
        'Touch-up guidance',
        'Basic jewelry placement',
      ],
      ideal: 'Mehendi, Sangeet, Birthday parties, Small events',
    },
    {
      id: 2,
      name: 'Premium',
      icon: Crown,
      price: '₹15,000',
      popular: true,
      description: 'Most popular choice for engagements and important events',
      features: [
        'HD or Airbrush Makeup',
        'Professional Hairstyling',
        'Premium Products',
        'Duration: 2.5-3 hours',
        'One trial session',
        'Touch-up kit included',
        'Saree/outfit draping',
        'Jewelry placement & styling',
      ],
      ideal: 'Engagements, Receptions, Important functions',
    },
    {
      id: 3,
      name: 'Bridal',
      icon: Sparkles,
      price: '₹25,000',
      popular: false,
      description: 'Complete bridal package for your dream wedding',
      features: [
        'Bridal HD/Airbrush Makeup',
        'Elaborate Bridal Hairstyling',
        'Luxury Premium Products',
        'Duration: 3-4 hours',
        'Two trial sessions',
        'Touch-up kit & artist on-site',
        'Complete saree draping',
        'Full jewelry styling',
        'False lashes & accessories',
        'Pre-bridal consultation',
        'On-location service available',
      ],
      ideal: 'Wedding day, Traditional ceremonies, Destination weddings',
    },
  ];

  const addOns = [
    { name: 'Additional Trial Session', price: '₹2,000' },
    { name: 'Mother/Sister Makeup', price: '₹5,000' },
    { name: 'Bridesmaid Makeup (each)', price: '₹5,000' },
    { name: 'Groom Makeup', price: '₹3,000' },
    { name: 'Extra Hour On-Site', price: '₹1,000' },
    { name: 'Travel (outside Tirunelveli)', price: 'Variable' },
  ];

  const faqs = [
    {
      question: 'Do you provide trial sessions?',
      answer: 'Yes! Premium and Bridal packages include trial sessions. Additional trials can be booked separately.',
    },
    {
      question: 'What products do you use?',
      answer: 'We use premium international brands like MAC, Huda Beauty, NARS, Urban Decay, and more.',
    },
    {
      question: 'Do you travel for bookings?',
      answer: 'Yes, we provide on-location services in Tirunelveli and nearby areas. Travel charges may apply.',
    },
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking 2-3 months in advance for weddings, and 2-4 weeks for other events.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made 7+ days before the event receive a full refund. Within 7 days, 50% refund.',
    },
    {
      question: 'Can I customize a package?',
      answer: 'Absolutely! We can create a customized package based on your needs and budget.',
    },
  ];

  const whatsappNumber = '9177082 86888';

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />

        <ImageWithFallback
          src="https://images.unsplash.com/photo-1625139108082-48bb424c2333?auto=format&w=1080"
          alt="Packages"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative text-center text-white z-20 px-4">
          <h1 className="mb-4 text-white">Our Packages</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Flexible pricing packages designed to suit every occasion and budget
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="mb-4">Choose Your Perfect Package</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              All packages include professional service, quality products, and personalized attention
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

            {packages.map((pkg) => {
              const Icon = pkg.icon;

              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-2xl p-8 transition duration-300 hover:scale-105 ${
                    pkg.popular ? 'shadow-2xl' : 'shadow-lg'
                  }`}
                  style={{
                    backgroundColor: pkg.popular ? 'var(--primary)' : 'var(--white)',
                    border: pkg.popular ? 'none' : '2px solid var(--off-white)',
                  }}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: pkg.popular ? 'var(--white)' : 'var(--primary)',
                      }}
                    >
                      <Icon
                        size={32}
                        style={{ color: pkg.popular ? 'var(--primary)' : 'var(--white)' }}
                      />
                    </div>

                    <h3
                      style={{
                        color: pkg.popular ? 'var(--white)' : 'var(--black)',
                      }}
                      className="text-2xl mb-2"
                    >
                      {pkg.name}
                    </h3>

                    <p
                      style={{
                        color: pkg.popular ? 'var(--white)' : 'var(--light-gray)',
                      }}
                      className="mb-6"
                    >
                      {pkg.description}
                    </p>

                    <div className="mb-6">
                      <span
                        className="text-4xl"
                        style={{ color: pkg.popular ? 'var(--white)' : 'var(--black)' }}
                      >
                        {pkg.price}
                      </span>
                      <span
                        className="ml-2"
                        style={{ color: pkg.popular ? 'var(--white)' : 'var(--light-gray)' }}
                      >
                        onwards
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check
                          size={20}
                          style={{
                            color: pkg.popular ? 'var(--white)' : 'var(--primary)',
                          }}
                        />
                        <span
                          style={{
                            color: pkg.popular ? 'var(--white)' : 'var(--gray)',
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For */}
                  <div
                    className="p-4 rounded-lg mb-6"
                    style={{
                      backgroundColor: pkg.popular
                        ? 'rgba(255,255,255,0.1)'
                        : 'var(--off-white)',
                    }}
                  >
                    <p className="text-sm mb-1 text-gray-400">Ideal for:</p>
                    <p
                      className="text-sm"
                      style={{
                        color: pkg.popular ? 'var(--white)' : 'var(--gray)',
                      }}
                    >
                      {pkg.ideal}
                    </p>
                  </div>

                  {/* Button */}
                  <Link
                    to="/book-now"
                    className="block w-full px-6 py-4 rounded-lg text-center transition hover:scale-105"
                    style={{
                      backgroundColor: pkg.popular ? 'var(--black)' : 'var(--primary)',
                      color: 'var(--white)',
                    }}
                  >
                    Book This Package
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-[var(--off-white)]">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your package with these optional add-ons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addOns.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow flex justify-between">
                <span>{item.name}</span>
                <span className="text-[var(--primary)]">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our packages and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-[var(--off-white)] rounded-lg shadow">
                <h3 className="mb-3 text-black">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white bg-black">
        <div className="container mx-auto px-4 text-center">

          <h2 className="mb-6 text-white">Ready to Book Your Package?</h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Have questions or need a custom package? We're here to help!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/book-now"
              className="px-8 py-4 bg-[var(--primary)] text-white rounded-lg hover:scale-105 transition"
            >
              Book Now
            </Link>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              className="px-8 py-4 bg-white text-black rounded-lg hover:scale-105 transition"
            >
              WhatsApp Us
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}
