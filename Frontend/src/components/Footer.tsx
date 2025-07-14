export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-16 bg-gradient-to-b from-[#0f172a] to-[#020617] relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-md">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMgMkwzIDEzTDEyIDEzTDExIDIyTDIxIDExTDEyIDExTDEzIDJaIiBzdHJva2U9IiM2MEE1RkEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg=="
                alt="Bolt Logo"
                className="w-6 h-6 relative z-10"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Bolt
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
            <a
              href="#features"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              Features
            </a>
            <a
              href="#howitworks"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              How it works
            </a>
            <a
              href="#faq"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="text-white font-medium">Bolt</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
