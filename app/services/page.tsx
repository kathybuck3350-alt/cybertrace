'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Shield, Search, Eye, Lock, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    category: 'AML Compliance',
    icon: Shield,
    color: 'from-primary-500 to-primary-600',
    services: [
      {
        title: 'Sentry',
        description: 'Real-time transaction monitoring and risk scoring for cryptocurrency transactions. Comprehensive AML compliance solution that helps businesses meet regulatory requirements.',
        features: ['Real-time monitoring', 'Risk scoring', 'Regulatory reporting', 'Automated alerts']
      },
      {
        title: 'Traveler',
        description: 'Travel rule compliance solution for cryptocurrency transactions. Ensures compliance with FATF recommendations and global regulatory requirements.',
        features: ['Travel rule compliance', 'Cross-border transactions', 'Regulatory reporting', 'Data protection']
      }
    ]
  },
  {
    category: 'Blockchain Forensics',
    icon: Search,
    color: 'from-secondary-500 to-secondary-600',
    services: [
      {
        title: 'Inspector',
        description: 'Advanced blockchain forensics tool for investigating cryptocurrency transactions. Trace funds, analyze transaction patterns, and identify suspicious activity.',
        features: ['Transaction analysis', 'Address clustering', 'Fund flow tracking', 'Visual analytics']
      },
      {
        title: 'Case Management',
        description: 'Comprehensive case management system for organizing and tracking investigations. Streamline workflows and collaborate with team members.',
        features: ['Case tracking', 'Team collaboration', 'Document management', 'Reporting tools']
      }
    ]
  },
  {
    category: 'Threat Intelligence',
    icon: Eye,
    color: 'from-accent-500 to-accent-600',
    services: [
      {
        title: 'Armada',
        description: 'Comprehensive threat intelligence platform providing real-time monitoring and analysis of cryptocurrency-related threats.',
        features: ['Threat monitoring', 'Risk assessment', 'Intelligence feeds', 'Alert system']
      },
      {
        title: 'Risk Scoring',
        description: 'Advanced risk scoring algorithm that evaluates the risk level of cryptocurrency addresses and transactions.',
        features: ['Automated risk scoring', 'Address analysis', 'Transaction risk', 'Customizable thresholds']
      }
    ]
  },
  {
    category: 'De-Anonymization',
    icon: Lock,
    color: 'from-primary-400 to-secondary-400',
    services: [
      {
        title: 'Attribution Engine',
        description: 'Cutting-edge technology to identify entities behind cryptocurrency addresses and transactions.',
        features: ['Entity identification', 'Address attribution', 'Pattern recognition', 'Data enrichment']
      },
      {
        title: 'Dark Web Intelligence',
        description: 'Monitor and analyze dark web activities related to cryptocurrency fraud and illegal transactions.',
        features: ['Dark web monitoring', 'Threat intelligence', 'Illicit activity detection', 'Reporting']
      }
    ]
  },
  {
    category: 'Ransomware Detection',
    icon: AlertTriangle,
    color: 'from-secondary-500 to-accent-500',
    services: [
      {
        title: 'Ransomware Payment Tracking',
        description: 'Specialized detection and tracking of ransomware-related cryptocurrency transactions and payments.',
        features: ['Ransomware tracking', 'Payment analysis', 'Victim identification', 'Recovery assistance']
      },
      {
        title: 'Proactive Defense',
        description: 'Prevent ransomware attacks before they occur with advanced threat detection and blocking capabilities.',
        features: ['Threat prevention', 'Behavioral analysis', 'Network monitoring', 'Automated blocking']
      }
    ]
  }
];

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Our Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                Comprehensive blockchain intelligence solutions for your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        {services.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{category.category}</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => {
                    const serviceId = `${categoryIndex}-${serviceIndex}`;
                    const isExpanded = expandedService === serviceId;
                    return (
                      <div
                        key={serviceIndex}
                        className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                          <button
                            onClick={() => setExpandedService(isExpanded ? null : serviceId)}
                            className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                          >
                            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                          </button>
                        </div>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-gray-600">
                                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Enhance Your Crypto Security?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our experts are here to help you find the right solutions for your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              Contact Us for Solutions
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
