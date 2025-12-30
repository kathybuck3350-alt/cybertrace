import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { BookOpen, Shield, FileText, AlertTriangle, ArrowRight, Calendar } from 'lucide-react';
import { format } from 'date-fns';

const blogPosts = [
  {
    category: 'Security',
    date: new Date('2024-12-15'),
    title: '5 Red Flags to Identify Cryptocurrency Scams Before It\'s Too Late',
    description: 'Protect yourself from crypto fraud by recognizing the warning signs. Learn about common scam patterns, phishing tactics, and how CyberRecovery helps victims recover stolen funds.',
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

const resources = [
  {
    icon: BookOpen,
    title: 'Blog',
    description: 'Stay informed with the latest trends, threats, and best practices in cryptocurrency security.',
    href: '/resources',
    color: 'from-primary-500 to-primary-600'
  },
  {
    icon: Shield,
    title: 'Security Guides',
    description: 'Comprehensive guides to help you secure your cryptocurrency investments and transactions.',
    href: '/resources',
    color: 'from-secondary-500 to-secondary-600'
  },
  {
    icon: FileText,
    title: 'Scam Recovery',
    description: 'Resources and information to help you recover from cryptocurrency scams and fraud.',
    href: '/how-we-help',
    color: 'from-accent-500 to-accent-600'
  },
  {
    icon: AlertTriangle,
    title: 'Report Fraud',
    description: 'Report cryptocurrency fraud and get assistance with your case.',
    href: '/contact?type=fraud',
    color: 'from-yellow-500 to-orange-500'
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Resources</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12">
                Educational content and guides to help you navigate the crypto space safely.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <Link
                    key={index}
                    href={resource.href}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${resource.color} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
              <p className="text-xl text-gray-600">
                Stay informed with the latest trends, threats, and best practices in cryptocurrency security and blockchain intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Link
                  key={index}
                  href={post.href}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        post.category === 'Security' ? 'bg-primary-100 text-primary-700' :
                        post.category === 'Compliance' ? 'bg-secondary-100 text-secondary-700' :
                        post.category === 'Forensics' ? 'bg-accent-100 text-accent-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
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
                      <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
