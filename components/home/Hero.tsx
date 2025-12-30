'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/50 to-secondary-50/50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZWE1ZTkiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-primary-50 rounded-full border border-primary-200 shadow-sm"
          >
            <Zap className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-700">AI-Powered Blockchain Intelligence</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">CyberRecovery:</span>
            <br />
            <span className="text-gray-900">Securing Your Crypto Future</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
            World-class blockchain intelligence to combat fraud and protect your assets.
            <span className="block mt-2 text-lg text-gray-600">
              Powered by advanced AI analytics and cutting-edge forensics.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg font-semibold text-white hover:from-primary-500 hover:to-secondary-500 transition-all cyber-glow flex items-center space-x-2"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact?type=scam"
                  className="px-8 py-4 bg-white border border-primary-500 rounded-lg font-semibold text-primary-600 hover:bg-primary-50 transition-all flex items-center space-x-2 shadow-sm"
            >
              <Shield className="w-5 h-5" />
              <span>Report a Scam</span>
            </Link>
          </div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: '500+', label: 'Global Clients' },
              { value: '$2.8B+', label: 'Assets Recovered' },
              { value: '50+', label: 'Countries Served' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

