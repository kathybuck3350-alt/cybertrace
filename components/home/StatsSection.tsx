'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Globe, Zap } from 'lucide-react';

const stats = [
  {
    icon: Globe,
    value: '900+',
    label: 'Cryptocurrencies Tracked',
    description: 'Comprehensive coverage across all major blockchains',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: Shield,
    value: '500+',
    label: 'Global Clients',
    description: 'Trusted by organizations worldwide',
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    icon: TrendingUp,
    value: '$2.8B+',
    label: 'Assets Recovered',
    description: 'Successfully traced and recovered stolen funds',
    color: 'from-accent-500 to-accent-600',
  },
  {
    icon: Zap,
    value: '99.9%',
    label: 'Uptime Reliability',
    description: 'Enterprise-grade infrastructure',
    color: 'from-primary-400 to-secondary-400',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all group"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

