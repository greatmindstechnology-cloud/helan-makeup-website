import { Link } from 'react-router-dom';
import { Star, Quote, Instagram } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      event: 'Bridal Makeup',
      rating: 5,
      date: 'October 2024',
      text: 'Helan made me look absolutely stunning on my wedding day! Her attention to detail and professionalism is unmatched. The makeup lasted all day and looked perfect in every photo. I received so many compliments!',
      service: 'Bridal Package',
    },
    {
      id: 2,
      name: 'Divya Krishnan',
      event: 'Engagement',
      rating: 5,
      date: 'September 2024',
      text: 'The makeup lasted all day and looked perfect in photos. Highly recommend Helan for any special occasion! She was so patient during the trial and made sure every detail was perfect.',
      service: 'Premium Package',
    },
    {
      id: 3,
      name: 'Meera Raj',
      event: 'Reception',
      rating: 5,
      date: 'August 2024',
      text: 'Very professional and talented. She understood exactly what I wanted and delivered beyond expectations. The hairstyling was also amazing and stayed in place the entire evening.',
      service: 'Bridal Package',
    },
    {
      id: 4,
      name: 'Anjali Menon',
      event: 'Wedding',
      rating: 5,
      date: 'November 2024',
      text: 'Helan is a true artist! She transformed me into the bride of my dreams. Her calm demeanor helped ease my wedding day nerves. I couldn\'t have asked for a better makeup artist.',
      service: 'Bridal Package',
    },
    {
      id: 5,
      name: 'Lakshmi Devi',
      event: 'Sangeet',
      rating: 5,
      date: 'October 2024',
      text: 'Beautiful work! The makeup was long-lasting and looked natural yet glamorous. Helan was punctual, professional, and a pleasure to work with. Thank you for making me look stunning!',
      service: 'Essential Package',
    },
    {
      id: 6,
      name: 'Kavya Balakrishnan',
      event: 'Engagement',
      rating: 5,
      date: 'September 2024',
      text: 'I was extremely happy with Helan\'s work. She listened to my preferences and created a look that was perfect for my engagement. The quality of products used was excellent.',
      service: 'Premium Package',
    },
    {
      id: 7,
      name: 'Sowmya Ramesh',
      event: 'Reception',
      rating: 5,
      date: 'August 2024',
      text: 'Helan did an amazing job on my reception makeup! She understood my vision perfectly and executed it flawlessly. The airbrush makeup looked incredible and lasted through the night.',
      service: 'Bridal Package',
    },
    {
      id: 8,
      name: 'Nithya Suresh',
      event: 'Birthday Party',
      rating: 5,
      date: 'July 2024',
      text: 'Fantastic experience! Helan created a gorgeous party look for my 25th birthday. The makeup was vibrant yet elegant. She\'s so talented and friendly. Highly recommended!',
      service: 'Essential Package',
    },
    {
      id: 9,
      name: 'Deepa Venkat',
      event: 'Wedding',
      rating: 5,
      date: 'June 2024',
      text: 'Best decision I made for my wedding! Helan\'s work is exceptional. She made me feel like a princess. The traditional bridal look she created was exactly what I dreamed of.',
      service: 'Bridal Package',
    },
    {
      id: 10,
      name: 'Radha Krishnan',
      event: 'Mehendi',
      rating: 5,
      date: 'May 2024',
      text: 'Helan did makeup for me and my bridesmaids. Everyone looked beautiful! She managed the timing perfectly and was so organized. Great team player!',
      service: 'Essential Package + Add-ons',
    },
    {
      id: 11,
      name: 'Shruti Iyer',
      event: 'Engagement',
      rating: 5,
      date: 'April 2024',
      text: 'I loved my engagement makeup! Helan has a great eye for what suits each person. She used high-quality products and the end result was flawless. Thank you so much!',
      service: 'Premium Package',
    },
    {
      id: 12,
      name: 'Vaishnavi Kumar',
      event: 'Reception',
      rating: 5,
      date: 'March 2024',
      text: 'Helan is incredibly skilled and professional. My reception makeup was gorgeous - glamorous but not over the top. She\'s punctual, friendly, and so talented. Highly recommend!',
      service: 'Bridal Package',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '5.0', label: 'Average Rating' },
    { number: '100%', label: 'Would Recommend' },
    { number: '1000+', label: 'Sessions Completed' },
  ];

  const whatsappNumber = '919876543210';

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />

        <ImageWithFallback
          src="https://images.unsplash.com/photo-1625139108082-48bb424c2333?auto=format&w=1080"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 text-center text-white px-4">
          <h1 className="mb-4 text-white">Client Testimonials</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Real experiences from our satisfied clients
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Read genuine reviews from brides and clients who trusted us with their special moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
                style={{ backgroundColor: 'var(--off-white)' }}
              >
                {/* Rating + Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-current" style={{ color: '#FFD700' }} />
                    ))}
                  </div>
                  <Quote size={32} style={{ color: 'var(--primary)', opacity: 0.3 }} />
                </div>

                {/* Message */}
                <p className="italic text-gray-700 mb-6">
                  "{t.text}"
                </p>

                {/* Footer */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-black">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.event} • {t.date}</p>

                  <span
                    className="inline-block mt-3 px-3 py-1 rounded-full text-sm"
                    style={{ backgroundColor: 'var(--primary)', color: 'var(--white)' }}
                  >
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-[var(--off-white)]">
        <div className="container mx-auto px-4 text-center max-w-4xl">

          <Instagram size={48} className="mx-auto mb-6" style={{ color: 'var(--primary)' }} />

          <h2 className="mb-6">Follow Us on Instagram</h2>
          <p className="text-xl mb-8 text-gray-700">
            See more of our work and transformations. Follow us for updates and beauty inspiration!
          </p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg inline-block hover:scale-105 transition"
            style={{ backgroundColor: 'var(--primary)', color: 'var(--white)' }}
          >
            Follow on Instagram
          </a>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white bg-black text-center">
        <h2 className="text-3xl md:text-4xl mb-6">Want to Be Our Next Happy Client?</h2>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Join hundreds of clients who trusted us with their special moments.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/book-now"
            className="px-8 py-4 rounded-lg bg-[var(--primary)] text-white hover:scale-105 transition"
          >
            Book Your Appointment
          </Link>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg bg-white text-black hover:scale-105 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}
