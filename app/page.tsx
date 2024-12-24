import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-gray-900 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <main className="w-full max-w-2xl backdrop-blur-lg bg-black/30 p-8 rounded-lg border border-purple-500/30 shadow-2xl shadow-purple-500/20">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500">
          Web Scraper Assistant
        </h1>
        
        <form className="space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="url" className="font-medium text-cyan-400">
              Website URL
            </label>
            <input
              type="url"
              id="url"
              placeholder="https://example.com"
              className="p-3 rounded-md w-full bg-gray-800/50 border border-cyan-500/30 text-cyan-100 placeholder:text-cyan-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="prompt" className="font-medium text-cyan-400">
              What would you like to extract?
            </label>
            <textarea
              id="prompt"
              placeholder="E.g., Find all product prices and their names"
              className="p-3 rounded-md w-full h-32 bg-gray-800/50 border border-cyan-500/30 text-cyan-100 placeholder:text-cyan-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-md font-bold text-lg
                     bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                     hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400
                     text-white shadow-lg shadow-purple-500/30
                     transition-all duration-300 transform hover:scale-[1.02]"
          >
            Start Scraping
          </button>
        </form>
      </main>
    </div>
  );
}
