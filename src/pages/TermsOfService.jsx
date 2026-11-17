const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Last updated: November 2026</p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                By accessing and using JobPortal, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Use of the Platform</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                You may use JobPortal only for lawful purposes and in accordance with these Terms.
                You agree not to use our platform in any way that violates applicable laws or regulations,
                or to submit false or misleading information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Accounts</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials
                and for all activities that occur under your account. Notify us immediately of any
                unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us through our{" "}
                <a href="/contact" className="text-primary-600 hover:text-primary-700 underline">
                  contact page
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
