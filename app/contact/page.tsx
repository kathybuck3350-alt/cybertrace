import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

