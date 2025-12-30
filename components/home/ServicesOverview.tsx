'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Search, Eye, Lock, AlertTriangle, User, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'AML Compliance',
    description: 'Comprehensive anti-money laundering solutions including real-time monitoring, regulatory reporting, and risk assessment.',
    features: ['Real-time monitoring', 'Regulatory reporting', 'Risk assessment'],
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: Search,
    title: 'Blockchain Forensics',
    description: 'Advanced Inspector tools for investigating cryptocurrency transactions and tracing digital assets.',
    features: ['Transaction analysis', 'Address clustering', 'Fund flow tracking'],
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    icon: Eye,
    title: 'Threat Intelligence',
    description: 'Armada platform providing comprehensive threat detection and analysis for crypto security.',
    features: ['Threat monitoring', 'Risk scoring', 'Intelligence feeds'],
    color: 'from-accent-500 to-accent-600',
  },
  {
    icon: Lock,
    title: 'De-Anonymization',
    description: 'Cutting-edge tools to identify entities behind cryptocurrency addresses and transactions.',
    features: ['Entity identification', 'Address attribution', 'Privacy analysis'],
    color: 'from-primary-400 to-secondary-400',
  },
  {
    icon: AlertTriangle,
    title: 'Ransomware Detection',
    description: 'Specialized detection and tracking of ransomware-related cryptocurrency transactions.',
    features: ['Ransomware tracking', 'Payment analysis', 'Attribution support'],
    color: 'from-secondary-500 to-accent-500',
  },
  {
    icon: User,
    title: 'Individual Support',
    description: 'Dedicated services for individuals affected by crypto scams and fraud.',
    features: ['Scam recovery', 'Asset tracing', 'Legal support'],
    color: 'from-accent-400 to-primary-400',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Comprehensive</span>
            <br />
            <span className="text-gray-900">Blockchain Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our suite of advanced tools and services provides complete visibility into the cryptocurrency ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all group"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg font-semibold text-white hover:from-primary-500 hover:to-secondary-500 transition-all cyber-glow"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

