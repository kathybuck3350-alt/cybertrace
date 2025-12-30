'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { format } from 'date-fns';

const blogPosts = [
  {
    category: 'Security',
    date: new Date('2024-12-15'),
    title: '5 Red Flags to Identify Cryptocurrency Scams Before It\'s Too Late',
    description: 'Protect yourself from crypto fraud by recognizing the warning signs. Learn about common scam patterns, phishing tactics, and how CyberTrace helps victims recover stolen funds.',
    readTime: '5 min read',
    href: '/resources',
  },
  {
    category: 'Forensics',
    date: new Date('2024-12-12'),
    title: 'How Blockchain Forensics Recovers Millions in Stolen Crypto Assets',
    description: 'Discover how advanced tracing technologies follow the digital trail of stolen cryptocurrency, leading to successful recoveries and criminal prosecution.',
    readTime: '8 min read',
    href: '/resources',
  },
  {
    category: 'Compliance',
    date: new Date('2024-12-10'),
    title: 'AML Regulations Every Crypto Business Must Know in 2024',
    description: 'Stay compliant with the latest anti-money laundering requirements. Essential guide for exchanges, wallets, and DeFi platforms operating in the cryptocurrency space.',
    readTime: '6 min read',
    href: '/resources',
  },
];

export default function BlogPreview() {
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
            <span className="gradient-text">Latest Insights</span>
            <br />
            <span className="text-gray-900">& Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest trends, threats, and best practices in cryptocurrency security and blockchain intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 border border-primary-200 rounded-full text-xs font-semibold text-primary-700">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>{format(post.date, 'MMM d, yyyy')}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                  <Link
                    href={post.href}
                    className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors text-sm font-semibold group/link"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

