import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-gray-800 text-white  mt-16 pt-4">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-4 justify-between items-start">
        <Link
          href="/"
          className="text-3xl font-bold text-white-600 hover:text-indigo-400 transition-colors sm:pt-4"
        >
          Bshunya
        </Link>
        <nav className="flex flex-col items-start sm:flex-row lg:mt-0 sm:space-x-10 sm:pt-5">
          <Link
            href="/about/about-us"
            className="text-lg hover:text-blue-600 transition-colors mb-2"
          >
            About Us
          </Link>
          <Link
            href="/about/contact-us"
            className="text-lg hover:text-blue-600 transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        <div className="col-span-1 lg:col-span-4 text-xs mt-2 lg:mt-4">
          <p>© 2023 Bshunya. All rights reserved.</p>
          <p>
            The services, content, and products on our website are for
            informational purposes only. Bshunya does not provide medical
            advice, diagnosis, or treatment.
          </p>
          <Link
            href="/about/disclaimer"
            className="underline hover:text-gray-300 transition-colors"
          >
            See additional information
          </Link>
        </div>
      </div>
    </footer>
  );
}
