'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Don't Give Up On Your Money</span>
            <br />
            <span className="text-white">We Can Help You Get It Back</span>
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Thousands of people have successfully recovered their lost money and assets with our help. Let us fight to get your money back where it belongs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?type=recovery"
              className="group px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center space-x-2"
            >
              <span>Start Recovery Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact?type=consultation"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg font-semibold text-white hover:bg-white/20 transition-all flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Free Consultation</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

