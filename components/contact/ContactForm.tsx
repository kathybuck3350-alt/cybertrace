'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ExternalLink, Shield } from 'lucide-react';
import Link from 'next/link';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: type === 'scam' ? 'Scam Report' : type === 'demo' ? 'Schedule Demo' : '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (type === 'scam') {
      setFormData((prev) => ({ ...prev, subject: 'Scam Report' }));
    } else if (type === 'demo') {
      setFormData((prev) => ({ ...prev, subject: 'Schedule Demo' }));
    }
  }, [type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ fullName: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help secure your crypto future.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg font-semibold text-white hover:from-primary-500 hover:to-secondary-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed cyber-glow"
                >
                  {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Submit Inquiry'}
                </button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-accent-500/10 border border-accent-500/30 rounded-lg text-accent-400 text-sm"
                  >
                    Thank you! We'll get back to you soon.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Scam Reporting */}
              <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="w-5 h-5 text-accent-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Report a Scam</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  If you believe you are a victim of a cryptocurrency scam, please report it to the relevant authorities:
                </p>
                <div className="space-y-3">
                  <a
                    href="https://www.ic3.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-accent-700 hover:text-accent-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Report to IC3.gov (USA)</span>
                  </a>
                  <a
                    href="https://www.actionfraud.police.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-accent-700 hover:text-accent-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Report to ActionFraud (UK)</span>
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Note: CyberRecovery provides intelligence tools but does not directly handle individual scam recovery cases. Reporting to authorities is a crucial first step.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}

