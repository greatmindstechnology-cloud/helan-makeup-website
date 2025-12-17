import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Heart, 
  Sparkles,
  Award,
  Clock,
  Shield,
  ArrowRight,
  Send,
  Star,
  Users,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappNumber = '917708286888';

  const contactInfo = {
    phone: '+91 77082 86888',
    email: 'helan.makeup@gmail.com',
    location: 'Tirunelveli, Tamil Nadu',
  };

  const quickLinks = [
    { name: 'Home', path: '/', icon: Sparkles },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Award },
    { name: 'Portfolio', path: '/portfolio', icon: Star },
  ];

  const moreLinks = [
    { name: 'Packages', path: '/packages', icon: Shield },
    { name: 'Testimonials', path: '/testimonials', icon: MessageCircle },
    { name: 'Contact', path: '/contact', icon: Send },
    { name: 'Book Now', path: '/book-now', icon: Clock },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: Instagram,
      color: '#E4405F',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: Facebook,
      color: '#1877F2',
    },
  ];

  const features = [
    { icon: Award, text: 'Certified Professional' },
    { icon: Clock, text: 'On-Time Service' },
    { icon: Shield, text: '100% Satisfaction' },
    { icon: Sparkles, text: 'Premium Products' },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{ backgroundColor: 'var(--primary)' }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
          style={{ backgroundColor: 'var(--primary)' }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">

        {/* Top Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 pb-12 border-b border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 rounded-full"
                    style={{ backgroundColor: 'var(--primary)' }}
                  >
                    <Icon size={24} className="text-white" />
                  </motion.div>
                  <span className="text-sm text-gray-300">{feature.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={32} style={{ color: 'var(--primary)' }} />
              </motion.div>
              <h3 className="text-xl" style={{ color: 'var(--primary)' }}>
                Helan Makeup Artistry
              </h3>
            </motion.div>

            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Professional bridal makeup artist in Tirunelveli. Creating stunning looks with premium products and personalized care.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: social.color 
                    }}
                    className="p-3 rounded-full"
                    style={{ backgroundColor: 'var(--primary)' }}
                  >
                    <Icon size={20} className="text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-6 flex items-center space-x-2" style={{ color: 'var(--primary)' }}>
              <Sparkles size={20} />
              <span>Quick Links</span>
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="group flex items-center space-x-2 text-gray-300 hover:text-white"
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
                        <Icon size={16} style={{ color: 'var(--primary)' }} />
                      </motion.div>
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-6 flex items-center space-x-2" style={{ color: 'var(--primary)' }}>
              <Award size={20} />
              <span>Services</span>
            </h4>

            <ul className="space-y-3">
              {moreLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="group flex items-center space-x-2 text-gray-300 hover:text-white"
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
                        <Icon size={16} style={{ color: 'var(--primary)' }} />
                      </motion.div>
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-6 flex items-center space-x-2" style={{ color: 'var(--primary)' }}>
              <Phone size={20} />
              <span>Get in Touch</span>
            </h4>

            <ul className="space-y-4">

              <motion.li className="flex items-start space-x-3">
                <Phone size={18} style={{ color: 'var(--primary)' }} />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white">
                  {contactInfo.phone}
                </a>
              </motion.li>

              <motion.li className="flex items-start space-x-3">
                <Mail size={18} style={{ color: 'var(--primary)' }} />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white">
                  {contactInfo.email}
                </a>
              </motion.li>

              <motion.li className="flex items-start space-x-3">
                <MapPin size={18} style={{ color: 'var(--primary)' }} />
                <span className="text-gray-300">{contactInfo.location}</span>
              </motion.li>
            </ul>

            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="mt-6 inline-flex items-center space-x-2 px-6 py-3 rounded-lg"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle size={20} className="text-white" />
              <span className="text-white">WhatsApp Us</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} Helan Makeup Artistry. All rights reserved.
            </p>

            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} style={{ color: 'var(--primary)' }} />
              <span>in Tirunelveli</span>
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
