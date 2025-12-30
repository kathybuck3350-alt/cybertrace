'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, FileText, Lock, BookOpen, ArrowRight } from 'lucide-react';

const protectionFeatures = [
  {
    icon: Shield,
    title: 'Scam Recovery Assistance',
    description: 'Our forensics experts help trace stolen funds and provide evidence for law enforcement and legal proceedings.',
  },
  {
    icon: Lock,
    title: 'Transaction Safety',
    description: 'Ensure your exchanges and wallets use compliant platforms with our AML screening technology.',
  },
  {
    icon: FileText,
    title: 'Privacy Protection',
    description: 'Advanced tools that protect legitimate privacy while combating illicit financial activities.',
  },
  {
    icon: BookOpen,
    title: 'Education & Awareness',
    description: 'Comprehensive resources to help you identify and avoid cryptocurrency scams and fraud.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Report to Authorities',
    description: 'File a complaint with IC3.gov (US) or ActionFraud.police.uk (UK)',
  },
  {
    number: '2',
    title: 'Contact Your Exchange',
    description: 'Immediately notify your cryptocurrency exchange or wallet provider',
  },
  {
    number: '3',
    title: 'Gather Evidence',
    description: 'Collect all transaction IDs, addresses, and communication records',
  },
  {
    number: '4',
    title: 'Seek Professional Help',
    description: 'Contact CyberTrace for advanced blockchain forensics assistance',
  },
];

export default function IndividualProtection() {
  return (
    <section className="py-20 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Individual Protection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a victim of crypto fraud or want to protect your investments, CyberTrace provides the tools and expertise to secure your digital assets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {protectionFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600 mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Steps After a Crypto Scam */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Steps After a Crypto Scam</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/contact?type=scam"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg font-semibold text-white hover:from-primary-500 hover:to-secondary-500 transition-all cyber-glow"
          >
            <Shield className="w-5 h-5" />
            <span>Report a Scam Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

