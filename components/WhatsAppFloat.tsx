'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppFloat({
  phoneNumber = '7624096652',
  message = 'Hello, I need assistance'
}: WhatsAppFloatProps) {

  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = phoneNumber
    ? `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    : '#';

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="fixed bottom-20 right-5 sm:right-6 z-50 flex items-center gap-3"
    >

      {/* Chat bubble */}
      <div className="flex items-center bg-white shadow-lg border px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium text-gray-700">
        Chat with us
      </div>

      {/* Pointer animation */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute right-3 bottom-20 text-3xl pointer-events-none"
      >
        👇
      </motion.div>

      {/* WhatsApp button */}
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >

        {/* Pulse animation */}
        <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-70"></span>

        {/* WhatsApp Icon */}
        <svg
          className="relative w-7 h-7 sm:w-8 sm:h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2C6.58 2 2.16 6.42 2.16 11.88c0 1.92.5 3.73 1.47 5.33L2 22l4.92-1.29c1.55.85 3.3 1.29 5.12 1.29h.01c5.46 0 9.88-4.42 9.88-9.88S17.5 2 12.04 2zm5.76 14.33c-.24.67-1.4 1.24-1.93 1.32-.5.08-1.14.11-1.84-.11-.43-.13-.98-.32-1.69-.63-2.97-1.28-4.91-4.44-5.06-4.65-.15-.21-1.2-1.6-1.2-3.05s.76-2.16 1.03-2.46c.27-.29.59-.37.79-.37.2 0 .4 0 .57.01.18.01.42-.07.65.48.24.58.82 2 .89 2.15.07.16.12.34.02.55-.1.21-.15.34-.3.52-.15.18-.31.4-.44.54-.15.15-.31.31-.13.61.18.3.81 1.34 1.74 2.17 1.2 1.07 2.21 1.4 2.52 1.56.31.15.49.13.67-.08.18-.21.79-.93 1-1.25.21-.31.42-.26.71-.16.29.1 1.82.86 2.13 1.02.31.15.52.23.6.36.08.13.08.76-.16 1.43z"/>
        </svg>

      </Link>
    </motion.div>
  );
}