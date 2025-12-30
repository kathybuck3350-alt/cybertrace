'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Shield, Search, Eye, Lock, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    category: 'Money Tracing',
    icon: Shield,
    color: 'from-primary-500 to-primary-600',
    services: [
      {
        title: 'Fund Location',
        description: 'We trace where your stolen money went using advanced tracking technology. We follow the trail through banks, crypto exchanges, and payment systems to locate your funds.',
        features: ['Transaction tracking', 'Account identification', 'Flow analysis', 'Asset location']
      },
      {
        title: 'Account Freezing',
        description: 'We work with authorities and banks to freeze accounts containing your stolen money, preventing further movement and securing your assets for recovery.',
        features: ['Bank coordination', 'Account freezing', 'Asset protection', 'Legal support']
      }
    ]
  },
  {
    category: 'Recovery Process',
    icon: Search,
    color: 'from-secondary-500 to-secondary-600',
    services: [
      {
        title: 'Evidence Collection',
        description: 'We gather all necessary evidence including transaction records, communications, and documentation to prove your ownership and build a strong recovery case.',
        features: ['Document collection', 'Transaction records', 'Communication logs', 'Ownership proof']
      },
      {
        title: 'Recovery Execution',
        description: 'Our team handles the entire recovery process including negotiations, legal proceedings, and coordination with banks and authorities to get your money back.',
        features: ['Recovery coordination', 'Legal proceedings', 'Bank negotiations', 'Asset return']
      }
    ]
  },
  {
    category: 'Authority Coordination',
    icon: Eye,
    color: 'from-accent-500 to-accent-600',
    services: [
      {
        title: 'Police Cooperation',
        description: 'We work directly with law enforcement agencies to report fraud, provide evidence, and coordinate efforts to recover your stolen money through official channels.',
        features: ['Police reports', 'Evidence submission', 'Case coordination', 'Investigation support']
      },
      {
        title: 'Legal Support',
        description: 'Our legal team supports your recovery case by preparing documentation, coordinating with lawyers, and navigating the legal process to get your money back.',
        features: ['Legal documentation', 'Lawyer coordination', 'Court support', 'Case preparation']
      }
    ]
  },
  {
    category: 'Scam Types',
    icon: Lock,
    color: 'from-primary-400 to-secondary-400',
    services: [
      {
        title: 'Crypto Scam Recovery',
        description: 'We recover money lost to cryptocurrency scams including fake exchanges, investment schemes, and wallet theft. We trace crypto transactions and work to recover your digital assets.',
        features: ['Crypto tracing', 'Exchange coordination', 'Wallet recovery', 'Asset recovery']
      },
      {
        title: 'Romance & Investment Fraud',
        description: 'We help recover money lost to romance scams, fake investment opportunities, and online fraud schemes. We track the money trail and coordinate with authorities.',
        features: ['Fraud investigation', 'Bank tracing', 'Payment recovery', 'Authority coordination']
      }
    ]
  },
  {
    category: 'Support Services',
    icon: AlertTriangle,
    color: 'from-secondary-500 to-accent-500',
    services: [
      {
        title: '24/7 Support',
        description: 'Our recovery team is available around the clock to help you start the recovery process immediately. Time is critical when recovering stolen money.',
        features: ['24/7 availability', 'Quick response', 'Emergency support', 'Case initiation']
      },
      {
        title: 'Free Consultation',
        description: 'Get a free consultation to discuss your case. We'll assess your situation and explain how we can help recover your lost money and assets.',
        features: ['Free assessment', 'Case evaluation', 'Recovery plan', 'Transparent pricing']
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
                <span className="gradient-text">Our Recovery Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                We help you recover your lost money and assets from scams, fraud, and theft.
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
              Ready to Get Your Money Back?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our recovery experts are ready to help you recover your lost money and assets. Contact us today to start your recovery case.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              Start Your Recovery
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
