export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div>
         <h2 className="text-3xl font-extrabold tracking-tight">
  <span className="text-red-500">News</span>
  <span className="text-black">Hub</span>
</h2>

          <p className="text-gray-600 text-sm mt-3 leading-relaxed max-w-md">
            Stay updated with real-time news from around the world.
            Fast, clean and minimal reading experience built for everyone.
          </p>
        </div>

        <div className="md:text-right">
          <h3 className="text-lg font-semibold text-black mb-4">
            Get in Touch
          </h3>

          <p className="text-gray-600 text-sm">
            Email: support@newshub.com
          </p>

          <p className="text-gray-600 text-sm mt-2">
            Phone: +91 00000 00000
          </p>
        </div>

      </div>

      <div className="border-t py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} NewsHub. All rights reserved.
      </div>
    </footer>
  );
}