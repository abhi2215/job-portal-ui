const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Last updated: November 2026</p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What Are Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website.
                They help us provide you with a better experience by remembering your preferences and
                keeping you logged in.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We use cookies to maintain your session when you log in, remember your preferences,
                and analyze how our platform is used so we can improve it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Managing Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                You can control and manage cookies through your browser settings. Please note that
                disabling certain cookies may affect the functionality of our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have any questions about our Cookie Policy, please contact us through our{" "}
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

export default CookiePolicy;
