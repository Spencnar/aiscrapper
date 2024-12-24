'use client'

import ModelViewer from '@/components/ModelViewer';

export default function Home() {



  return (
    <div className="min-h-screen h-full p-8 flex items-center justify-center bg-gray-900 text-cyan-400">
      <div className="hidden lg:block">
        <ModelViewer />
      </div>

     

      <main className="w-full max-w-2xl bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Web Scraper Assistant
        </h1>
        
        <form className="space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="url" className="font-medium text-cyan-300">
              Website URL
            </label>
            <input
              type="url"
              id="url"
              placeholder="https://example.com"
              className="p-2 bg-gray-800/50 border border-cyan-500/30 rounded-md w-full text-cyan-100 placeholder:text-cyan-700 focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="prompt" className="font-medium text-cyan-300">
              What would you like to extract?
            </label>
            <textarea
              id="prompt"
              placeholder="E.g., Find all product prices and their names"
              className="p-2 bg-gray-800/50 border border-cyan-500/30 rounded-md w-full h-32 text-cyan-100 placeholder:text-cyan-700 focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-md hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            Start Scraping
          </button>
        </form>
      </main>

      <div className="hidden lg:block">
        <ModelViewer />
      </div>
      
    </div>
  );
}
