import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppButton() {
  const whatsappNumber = '917708286888';
  const message = 'Hi! I would like to know more about your makeup services.';

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 p-4 rounded-full shadow-2xl z-40"
      style={{ backgroundColor: '#25D366' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: '#25D366' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
        <MessageCircle size={28} className="text-white relative z-10" />
      </motion.div>

    </motion.button>
  );
}
