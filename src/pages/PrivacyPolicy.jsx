const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Last updated: November 2026</p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account,
                submit a job application, or contact us for support. This includes your name, email address,
                resume, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services,
                process job applications, communicate with you, and ensure the security of our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information Sharing</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We do not sell or rent your personal information to third parties. We may share your
                information with employers when you apply for a job, or with service providers who assist
                us in operating our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through our{" "}
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

export default PrivacyPolicy;
