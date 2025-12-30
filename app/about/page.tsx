import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">About CyberRecovery</span>
                </h1>
                <p className="text-xl text-gray-600 mb-12">
                  We help people recover their lost money and assets from scams, fraud, and theft.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    CyberRecovery is dedicated to helping people recover their lost money and assets. We specialize in tracing stolen funds, working with authorities, and getting your money back where it belongs. Every dollar matters, and we fight to recover every penny.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our mission is to restore hope to victims of scams and fraud by using advanced tracking technology and expert knowledge to locate and recover stolen money and assets.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our History</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Founded with a simple yet powerful mission: to help people get their money back. CyberRecovery started when we saw too many people losing their hard-earned money to scams and fraud, with nowhere to turn for help. We built our recovery services to change that.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Over the years, we've helped thousands of people recover their lost money and assets. We've recovered millions in stolen funds by working closely with authorities, banks, and using advanced tracing technology to track down where the money went.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Experts</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our team comprises leading experts in blockchain technology, cybersecurity, AML compliance, and financial regulation. With decades of combined experience, we bring unparalleled expertise to every challenge.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">
                        BT
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Money Tracing</h3>
                      <p className="text-gray-600 text-sm">Experts in tracking stolen funds across blockchain networks and traditional banking systems to locate your money.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">
                        CS
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Recovery Coordination</h3>
                      <p className="text-gray-600 text-sm">Specialized in working with police, banks, and legal teams to freeze accounts and recover your assets.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">
                        AC
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Case Building</h3>
                      <p className="text-gray-600 text-sm">Experts in collecting evidence, documenting transactions, and building strong cases to recover your money.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
