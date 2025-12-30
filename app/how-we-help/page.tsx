import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Phone, FileText, Shield, AlertCircle, CheckCircle2, Users } from 'lucide-react';
import connectDB from '@/lib/mongodb';
import ScamType from '@/models/ScamType';
import { getIcon } from '@/lib/iconMap';

async function getScamTypes() {
  try {
    await connectDB();
    const scamTypes = await ScamType.find({}).sort({ createdAt: 1 }).lean();
    
    // If no scam types exist, return empty array (admin needs to initialize)
    if (!scamTypes || scamTypes.length === 0) {
      return [];
    }
    
    return scamTypes;
  } catch (error) {
    console.error('Error fetching scam types:', error);
    return [];
  }
}

export default async function HowWeHelpPage() {
  const scamTypes = await getScamTypes();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
                <span className="text-sm font-semibold">Fund Recovery Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Recover Your Stolen Funds
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                CyberTrace specializes in helping individuals recover funds lost to cryptocurrency scams, romance fraud, investment schemes, and other financial crimes. Our advanced blockchain forensics have recovered over $2.8 billion for victims worldwide.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact?type=recovery"
                  className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
                >
                  Start Recovery Process
                </Link>
                <Link
                  href="/contact?type=consultation"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg font-semibold text-white hover:bg-white/20 transition-all"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                Need Immediate Help?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Emergency Hotline */}
                <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm text-center">
                  <div className="inline-flex p-4 rounded-full bg-red-100 mb-4">
                    <Phone className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Hotline</h3>
                  <p className="text-gray-600 mb-6">24/7 immediate response for recent scam victims</p>
                  <a
                    href="tel:1-800-RECOVER"
                    className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all"
                  >
                    Call Now: 1-800-RECOVER
                  </a>
                </div>

                {/* Online Report */}
                <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm text-center">
                  <div className="inline-flex p-4 rounded-full bg-secondary-100 mb-4">
                    <FileText className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Online Report</h3>
                  <p className="text-gray-600 mb-6">Submit your case details through our secure portal</p>
                  <Link
                    href="/contact?type=emergency"
                    className="inline-block px-6 py-3 bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-700 transition-all"
                  >
                    File Emergency Report
                  </Link>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-yellow-900 font-semibold mb-2">
                      Important: Also report to authorities -{' '}
                      <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-700">
                        IC3.gov (US)
                      </a>
                      {' '}or{' '}
                      <a href="https://www.actionfraud.police.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-700">
                        ActionFraud (UK)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Scams Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                Types of Scams We Help Recover From
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                We specialize in recovering funds from a wide range of financial scams and fraud schemes
              </p>
              {scamTypes.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">Scam types information is being loaded...</p>
                </div>
              ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {scamTypes.map((scam: any) => {
                  const Icon = getIcon(scam.icon);
                  return (
                    <div key={scam._id.toString()} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${scam.color} mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{scam.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{scam.description}</p>
                      <div className="space-y-2 mb-4">
                        <div className="text-xs font-semibold text-gray-500 uppercase">Recovery Methods</div>
                        <ul className="space-y-1">
                          {scam.recoveryMethods.map((method: string, idx: number) => (
                            <li key={idx} className="text-xs text-gray-600 flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                              {method}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-500">Avg. Recovery</span>
                          <span className="text-sm font-bold text-gray-900">{scam.avgRecovery}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">Success Rate</span>
                          <span className="text-sm font-bold text-primary-600">{scam.successRate}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              )}
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                How CyberTrace Helps You Recover
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[
                  {
                    icon: Shield,
                    title: 'Blockchain Forensics',
                    description: 'Our expert investigators trace stolen funds across the blockchain using advanced analytics and proprietary tools.',
                  },
                  {
                    icon: FileText,
                    title: 'Evidence Collection',
                    description: 'We gather comprehensive evidence including transaction records, wallet addresses, and communication logs for law enforcement.',
                  },
                  {
                    icon: CheckCircle2,
                    title: 'Legal Support',
                    description: 'We work with law enforcement agencies and legal teams to support your recovery case with professional documentation.',
                  },
                  {
                    icon: Users,
                    title: 'Recovery Coordination',
                    description: 'Our team coordinates with exchanges, authorities, and financial institutions to facilitate fund recovery.',
                  },
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600 mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Proven Track Record
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div>
                  <div className="text-5xl font-bold mb-2">73%</div>
                  <div className="text-xl text-white/90">Success Rate</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">$2.8B+</div>
                  <div className="text-xl text-white/90">Recovered Worldwide</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">10K+</div>
                  <div className="text-xl text-white/90">Cases Resolved</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Don't Let Scammers Win
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Every day you wait reduces your chances of recovery. Our expert team is ready to start investigating your case immediately. With a 73% success rate and over $2.8 billion recovered, we're your best chance at getting your funds back.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link
                  href="/contact?type=recovery"
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-500 hover:to-secondary-500 transition-all shadow-lg"
                >
                  Start Your Recovery Today
                </Link>
                <Link
                  href="/contact?type=consultation"
                  className="px-8 py-4 bg-white border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                >
                  Get Free Consultation
                </Link>
              </div>
              <p className="text-gray-600">
                No upfront fees • Success-based pricing • 100% confidential
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
