import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { href: '/services#aml', label: 'AML Compliance' },
    { href: '/services#forensics', label: 'Blockchain Forensics' },
    { href: '/services#threat', label: 'Threat Intelligence' },
    { href: '/services#deanon', label: 'De-Anonymization Tools' },
  ];

  const resourcesLinks = [
    { href: '/resources', label: 'Blog' },
    { href: '/resources', label: 'Security Guides' },
    { href: '/how-we-help', label: 'Scam Recovery' },
    { href: '/contact?type=fraud', label: 'Report Fraud' },
  ];

  const reportScamLinks = [
    { href: 'https://www.ic3.gov', label: 'IC3.gov (US)', external: true },
    { href: 'https://www.actionfraud.police.uk', label: 'ActionFraud (UK)', external: true },
    { href: '/contact?type=scam', label: 'Contact CyberTrace' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold gradient-text">CyberTrace</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Securing the crypto economy through world-class blockchain intelligence and AML compliance solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Report Scam */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Report Scam</h3>
            <ul className="space-y-2">
              {reportScamLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-600 text-sm">
            © {currentYear} CyberTrace. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

