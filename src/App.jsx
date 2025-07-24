import { useState } from 'react';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleSummarize = () => {
    const words = inputText.trim().split(' ');
    const short = words.slice(0, 20).join(' ') + (words.length > 20 ? '...' : '');
    setSummary(short);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition duration-300">
        <div className="max-w-6xl mx-auto px-4 py-10 font-serif">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold tracking-wide">📖 Text Summarizer</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
            >
              {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>

          {/* Book Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 shadow-2xl rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden bg-gradient-to-br from-yellow-50 to-white dark:from-gray-800 dark:to-gray-900">
            {/* Left Page */}
            <div className="p-6 border-r border-gray-300 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-2">📄 Paste Your Text</h2>
              <textarea
                rows="12"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600 resize-none"
                placeholder="Paste or type a long paragraph here..."
              />
            </div>

            {/* Right Page */}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">📝 Summary</h2>
              <div className="w-full h-full p-4 border border-dashed border-indigo-400 rounded-md bg-indigo-50 dark:bg-gray-700 dark:text-white dark:border-indigo-500 whitespace-pre-wrap">
                {summary || 'Your summary will appear here...'}
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleSummarize}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              🔍 Summarize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
