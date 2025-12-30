'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "CyberTrace's AML solutions helped us achieve regulatory compliance across all 50 states. Their blockchain forensics recovered $2.3M in stolen funds for our clients.",
    highlight: 'Recovered $2.3M in stolen funds',
    author: 'Sarah Mitchell',
    role: 'Compliance Director',
    company: 'Digital Assets Exchange',
    location: '🇺🇸 New York, USA',
  },
  {
    quote: "Working with CyberTrace transformed our cryptocurrency investigations. We've successfully traced and recovered assets in over 200 fraud cases this year.",
    highlight: '200+ successful fraud cases',
    author: 'James Thompson',
    role: 'Financial Crime Investigator',
    company: 'Metropolitan Police',
    location: '🇬🇧 London, UK',
  },
  {
    quote: "CyberTrace's threat intelligence platform prevented 15 major ransomware attacks on our infrastructure. Their real-time monitoring is exceptional.",
    highlight: 'Prevented 15 ransomware attacks',
    author: 'Dr. Klaus Weber',
    role: 'Head of Digital Security',
    company: 'Deutsche Fintech AG',
    location: '🇩🇪 Berlin, Germany',
  },
  {
    quote: "Since implementing CyberTrace, we've reduced crypto-related fraud by 89%. Their de-anonymization tools are industry-leading.",
    highlight: '89% reduction in fraud',
    author: 'Maria Rodriguez',
    role: 'Fraud Prevention Manager',
    company: 'Banco Internacional',
    location: '🇪🇸 Madrid, Spain',
  },
  {
    quote: "CyberTrace helped us maintain compliance with Japan's strict crypto regulations while processing $500M+ in daily transactions.",
    highlight: '$500M+ daily transactions secured',
    author: 'Hiroshi Tanaka',
    role: 'Risk Management Director',
    company: 'Tokyo Crypto Exchange',
    location: '🇯🇵 Tokyo, Japan',
  },
  {
    quote: "The blockchain analytics from CyberTrace identified suspicious patterns that saved our institution from a $50M money laundering scheme.",
    highlight: 'Prevented $50M laundering scheme',
    author: 'Emma Johnson',
    role: 'Cybersecurity Analyst',
    company: 'Financial Services Corp',
    location: '🇨🇦 Toronto, Canada',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Protecting Organizations</span>
            <br />
            <span className="text-gray-900">Across the Globe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From law enforcement agencies to financial institutions, organizations worldwide trust CyberTrace
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-start space-x-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-accent-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{testimonial.quote}</p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-700">{testimonial.company}</div>
                    <div className="text-xs text-primary-600">{testimonial.location}</div>
                  </div>
                </div>
                <div className="mt-3 px-3 py-2 bg-accent-50 border border-accent-200 rounded-lg">
                  <div className="text-sm font-semibold text-accent-700">✓ {testimonial.highlight}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

