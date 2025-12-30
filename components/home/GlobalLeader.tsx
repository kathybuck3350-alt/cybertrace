'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const certifications = [
  'SOC 2 Type II Certified',
  'ISO 27001 Compliant',
  'GDPR Compliant',
];

const countries = [
  { flag: '🇺🇸', name: 'United States', clients: '200+' },
  { flag: '🇬🇧', name: 'United Kingdom', clients: '85+' },
  { flag: '🇩🇪', name: 'Germany', clients: '65+' },
  { flag: '🇪🇸', name: 'Spain', clients: '45+' },
  { flag: '🇯🇵', name: 'Japan', clients: '40+' },
  { flag: '🇨🇦', name: 'Canada', clients: '35+' },
  { flag: '🇫🇷', name: 'France', clients: '30+' },
  { flag: '🇦🇺', name: 'Australia', clients: '25+' },
];

export default function GlobalLeader() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Trusted Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Silicon Valley startups to European banks, CyberTrace protects the global crypto economy
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700">Enterprise Security & Compliance</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg px-6 py-3 border border-gray-200 shadow-sm flex items-center space-x-2"
              >
                <CheckCircle2 className="w-5 h-5 text-accent-600" />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-2">{country.flag}</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">{country.name}</div>
              <div className="text-xs text-primary-600">{country.clients} clients</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

