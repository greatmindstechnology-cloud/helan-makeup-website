import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Sparkles } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection.jsx';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just local UX
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-72 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <AnimatedSection>
            <Sparkles
              size={38}
              style={{ color: 'var(--primary)' }}
              className="inline-block mb-3"
            />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
              Let&apos;s Talk About Your Big Day
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-200">
              Share your wedding dates, events, and requirements. We’ll discuss looks, timing, and
              packages that suit you best.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--off-white)' }}>
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          {/* Left: Contact info */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 h-full flex flex-col">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Contact Information</h2>
              <p
                className="text-xs md:text-sm mb-6"
                style={{ color: 'var(--light-gray)' }}
              >
                You can reach out on WhatsApp, call directly, or send a message using the form. We
                typically respond within a few hours.
              </p>

              <div className="space-y-4 mb-6">
                <motion.a
                  whileHover={{ x: 4 }}
                  href="tel:+917708 286 888"
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 cursor-pointer"
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--primary-light)' }}
                  >
                    <Phone
                      size={18}
                      style={{ color: 'var(--primary)' }}
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-700">Call / WhatsApp</div>
                    <div className="text-xs md:text-sm text-gray-600">+91 7708 286 888</div>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ x: 4 }}
                  href="mailto:joyhelan25@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 cursor-pointer"
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--primary-light)' }}
                  >
                    <Mail
                      size={18}
                      style={{ color: 'var(--primary)' }}
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-700">Email</div>
                    <div className="text-xs md:text-sm text-gray-600">joyhelan25@gmail.com</div>
                  </div>
                </motion.a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--primary-light)' }}
                  >
                    <MapPin
                      size={18}
                      style={{ color: 'var(--primary)' }}
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-700">Studio Location</div>
                    <div className="text-xs md:text-sm text-gray-600">
                      Tirunelveli, Tamil Nadu, India
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--primary-light)' }}
                  >
                    <Clock
                      size={18}
                      style={{ color: 'var(--primary)' }}
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-700">Preferred Timings</div>
                    <div className="text-xs md:text-sm text-gray-600">
                      10:00 AM – 9:00 PM (IST), Monday to Sunday
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>When you message, please share:</span>
                </div>
                <ul className="text-[11px] md:text-xs text-gray-500 list-disc list-inside space-y-1">
                  <li>Wedding dates and times</li>
                  <li>Events you need makeup for (muhurtham, reception, etc.)</li>
                  <li>Location and approximate getting-ready time</li>
                  <li>Number of people (bride, bridesmaid, family)</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
            >
              <h2 className="text-lg md:text-xl font-semibold mb-4">Send a Message</h2>
              <p
                className="text-xs md:text-sm mb-4"
                style={{ color: 'var(--light-gray)' }}
              >
                Fill in a few details and we will get back with availability, pricing, and next
                steps.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-3 py-2 text-xs md:text-sm outline-none focus:ring-1 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-3 py-2 text-xs md:text-sm outline-none focus:ring-1 focus:ring-[var(--primary)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-700">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 text-xs md:text-sm outline-none focus:ring-1 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-700">
                    Event Date (or tentative)
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={form.eventDate}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 text-xs md:text-sm outline-none focus:ring-1 focus:ring-[var(--primary)]"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium mb-1 text-gray-700">
                  Please share event details, location & timing
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-3 py-2 text-xs md:text-sm outline-none focus:ring-1 focus:ring-[var(--primary)] resize-none"
                  placeholder="Example: Bridal makeup for muhurtham and reception, dates, venue, number of people..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs md:text-sm font-medium"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--white)' }}
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-xs text-green-600"
                >
                  Thank you! Your message has been noted. You can also message directly on WhatsApp
                  for faster replies.
                </motion.div>
              )}
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
