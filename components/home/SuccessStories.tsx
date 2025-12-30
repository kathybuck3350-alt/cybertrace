'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Globe, Zap } from 'lucide-react';

const liveMetrics = [
  { icon: TrendingUp, value: '1,247', change: '+12%', label: 'Active Investigations', color: 'text-primary-400' },
  { icon: Shield, value: '8,934', change: '+5%', label: 'Threats Blocked Today', color: 'text-accent-400' },
  { icon: Zap, value: '$156M', change: '+18%', label: 'Assets Secured', color: 'text-secondary-400' },
  { icon: Globe, value: '52', change: '+2%', label: 'Countries Protected', color: 'text-primary-300' },
];

const stories = [
  {
    title: 'Major Bank Fraud Prevention',
    location: 'New York, USA 🇺🇸',
    description: 'Prevented a sophisticated money laundering operation targeting cryptocurrency exchanges',
    metric: '$45M',
    metricLabel: 'Saved $45M in potential losses',
    verified: true,
  },
  {
    title: 'Law Enforcement Success',
    location: 'London, UK 🇬🇧',
    description: 'Assisted Metropolitan Police in solving over 200 cryptocurrency fraud cases',
    metric: '200+',
    metricLabel: '200+ cases solved',
    verified: true,
  },
  {
    title: 'Exchange Compliance',
    location: 'Berlin, Germany 🇩🇪',
    description: 'Reduced fraud incidents by 89% for major European cryptocurrency exchange',
    metric: '89%',
    metricLabel: '89% fraud reduction',
    verified: true,
  },
  {
    title: 'Global Investigation',
    location: 'Multiple Countries 🌍',
    description: 'Traced and recovered stolen assets across 15 countries in coordinated effort',
    metric: '$2.8B',
    metricLabel: '$2.8B assets recovered',
    verified: true,
  },
];

export default function SuccessStories() {
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
            <span className="gradient-text">Real Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Success stories from around the world
          </p>
        </motion.div>

        {/* Live Protection Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
              <span className="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></span>
              <span>Live Protection Dashboard</span>
              <span className="text-sm text-gray-500 font-normal">Real-time</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {liveMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-6 h-6 ${metric.color}`} />
                      <span className="text-sm text-accent-600 font-semibold">{metric.change}</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-sm text-primary-600">{story.location}</p>
                </div>
                {story.verified && (
                  <div className="px-3 py-1 bg-accent-100 border border-accent-200 rounded-full">
                    <span className="text-xs font-semibold text-accent-700">Verified</span>
                  </div>
                )}
              </div>
              <p className="text-gray-700 mb-6">{story.description}</p>
              <div className="pt-4 border-t border-gray-200">
                <div className="text-3xl font-bold gradient-text mb-1">{story.metric}</div>
                <div className="text-sm text-gray-600">✓ {story.metricLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

