import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
            Last updated: January 1, 2026
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              By accessing or using JobPortal, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with any of these
              terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              2. Use of the Platform
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              JobPortal provides a platform connecting job seekers and employers. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Provide accurate and truthful information in your profile and job postings</li>
              <li>Not impersonate any person or entity</li>
              <li>Not use the platform for any unlawful purpose</li>
              <li>Not transmit spam, malware, or other harmful content</li>
              <li>Respect the privacy and rights of other users</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              3. Accounts
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials
              and for all activities that occur under your account. Notify us immediately of any
              unauthorized use of your account.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              4. Job Postings and Applications
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Employers are solely responsible for the accuracy and legality of their job postings.
              JobPortal does not guarantee employment or the accuracy of any job listing. We
              reserve the right to remove any posting that violates these terms or applicable law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The JobPortal platform, including its design, text, graphics, and software, is owned
              by JobPortal and protected by applicable intellectual property laws. You may not
              reproduce, distribute, or create derivative works without our express written consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              JobPortal shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising from your use of the platform or inability to access it.
              Our total liability in connection with these terms shall not exceed the amount you
              paid to us in the past twelve months.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              7. Termination
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We reserve the right to suspend or terminate your account at our sole discretion,
              without notice, for conduct that we determine violates these Terms of Service or
              is harmful to other users, us, or third parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              8. Changes to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. We will provide notice of
              significant changes by updating the date at the top of this page. Your continued use
              of the platform after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              9. Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              If you have questions about these Terms of Service, please{" "}
              <Link
                to="/contact"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline"
              >
                contact us
              </Link>
              .
            </p>
          </section>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
            <Link to="/cookie-policy" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Cookie Policy
            </Link>
            <Link to="/contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
