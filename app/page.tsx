import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import StatsSection from '@/components/home/StatsSection';
import GlobalLeader from '@/components/home/GlobalLeader';
import Testimonials from '@/components/home/Testimonials';
import SuccessStories from '@/components/home/SuccessStories';
import ServicesOverview from '@/components/home/ServicesOverview';
import IndividualProtection from '@/components/home/IndividualProtection';
import BlogPreview from '@/components/home/BlogPreview';
import CTASection from '@/components/home/CTASection';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <StatsSection />
        <GlobalLeader />
        <Testimonials />
        <SuccessStories />
        <CTASection />
        <ServicesOverview />
        <IndividualProtection />
        <BlogPreview />
        {/* <CTASection /> */}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Enhance Your Crypto Security?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our experts are here to help you find the right solutions for your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              Contact Us for Solutions
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

