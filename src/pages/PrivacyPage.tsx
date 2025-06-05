import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/common/SectionTitle';

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-black to-zinc-900 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link to="/" className="hover:text-gold-500">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gold-500">Privacy Policy</span>
            </div>

            <SectionTitle
              title="Privacy Policy"
              subtitle="Last updated: January 2025"
              centered
            />

            <div className="max-w-3xl mx-auto mt-12 space-y-8">
              <div>
                <h2 className="text-xl font-serif text-white mb-4">1. Information We Collect</h2>
                <p className="text-gray-400 leading-relaxed">
                  We collect information that you provide directly to us, including your name, email address, 
                  shipping address, payment information, and any other information you choose to provide. We 
                  also automatically collect certain information about your device when you use our website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Process your orders and provide customer service</li>
                  <li>Send you order confirmations and updates</li>
                  <li>Respond to your comments and questions</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-serif text-white mb-4">3. Information Sharing</h2>
                <p className="text-gray-400 leading-relaxed">
                  We do not sell or rent your personal information to third parties. We may share your 
                  information with service providers who assist us in operating our website, conducting 
                  our business, or servicing you. These third parties are bound by contractual obligations 
                  to keep personal information confidential.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-white mb-4">4. Data Security</h2>
                <p className="text-gray-400 leading-relaxed">
                  We implement appropriate security measures to protect your personal information. However, 
                  please be aware that no method of transmission over the Internet or electronic storage 
                  is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-white mb-4">5. Cookies</h2>
                <p className="text-gray-400 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and 
                  hold certain information. You can instruct your browser to refuse all cookies or to 
                  indicate when a cookie is being sent.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-white mb-4">6. Your Rights</h2>
                <p className="text-gray-400 leading-relaxed">
                  You have the right to access, correct, or delete your personal information. You may also 
                  object to or restrict certain processing of your information. To exercise these rights, 
                  please contact us using the information below.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-white mb-4">7. Changes to This Policy</h2>
                <p className="text-gray-400 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-white mb-4">8. Contact Us</h2>
                <p className="text-gray-400 leading-relaxed">
                  If you have any questions about this Privacy Policy, please{' '}
                  <Link to="/contact" className="text-gold-500 hover:underline">contact us</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;