import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-6 lg:mb-0">
          <Link href="/" className="text-3xl font-bold text-indigo-600 mb-4">
            Bshunya
          </Link>
          <nav className="flex flex-col items-center lg:items-start lg:mt-4">
            <Link
              href="/about/about-us"
              className="text-lg hover:text-gray-300 transition-colors mb-2"
            >
              About Us
            </Link>
            <Link
              href="/about/contact-us"
              className="text-lg hover:text-gray-300 transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center lg:items-end text-sm text-center lg:text-right max-w-md">
          <p className="mb-4">© 2023 Bshunya. All rights reserved.</p>
          <p className="mb-4">
            The services, content, and products on our website are for
            informational purposes only. Bshunya does not provide medical
            advice, diagnosis, or treatment.
          </p>
          <Link
            href="/about/contact-us"
            className="underline hover:text-gray-300 transition-colors"
          >
            See additional information
          </Link>
        </div>
      </div>
    </footer>
  );
}
