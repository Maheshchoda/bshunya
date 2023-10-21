import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-16">
      <div className="container mx-auto max-w-screen-lg  flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src="/path_to_your_image" alt="Brand" className="mb-3" />
          <p className="mb-3">Brand text here.</p>
          <div className="flex space-x-4">
            <Link href="/link1">Link1</Link>
            <Link href="/link2">Link2</Link>
            <Link href="/link3">Link3</Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/settings">Privacy Settings</Link>
          <Link href="/advertising">Advertising Policy</Link>
          <Link href="/integrity">Content Integrity</Link>
        </div>
      </div>
    </footer>
  );
}
