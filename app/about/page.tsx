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
                  <span className="gradient-text">About CyberTrace</span>
                </h1>
                <p className="text-xl text-gray-600 mb-12">
                  Leading the future of blockchain intelligence and cryptocurrency security.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    CyberTrace is dedicated to securing the cryptocurrency ecosystem through world-class blockchain intelligence, advanced forensics, and comprehensive AML compliance solutions. We empower organizations and individuals to navigate the digital asset landscape safely and confidently.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our mission is to combat fraud, protect assets, and ensure the integrity of cryptocurrency transactions through cutting-edge technology and expert analysis.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our History</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Founded with a vision to revolutionize cryptocurrency security, CyberTrace has grown from a pioneering startup to a trusted global leader in blockchain intelligence. Our journey began with a simple yet powerful goal: to make cryptocurrency safer for everyone.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Over the years, we've built a comprehensive suite of tools and services that serve organizations across 50+ countries, helping them protect billions in digital assets and maintain regulatory compliance.
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Technology</h3>
                      <p className="text-gray-600 text-sm">Experts in blockchain protocols, transaction analysis, and digital asset forensics.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">
                        CS
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity</h3>
                      <p className="text-gray-600 text-sm">Specialized in threat detection, ransomware prevention, and security infrastructure.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">
                        AC
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">AML & Compliance</h3>
                      <p className="text-gray-600 text-sm">Regulatory experts ensuring compliance across global jurisdictions.</p>
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
