import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext';

const Head = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <header className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          
          {/* Botón de tema */}
          <button
            onClick={themeContext?.toggleTheme}
            className="p-1 rounded-full
                     bg-white/80 dark:bg-gray-800/80
                     hover:bg-white dark:hover:bg-gray-700
                     transform transition-all duration-300
                     hover:scale-110 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-blue-300
                     shadow-md backdrop-blur-sm"
            aria-label="Cambiar tema"
          >
            {themeContext?.theme === 'dark' ? (
              <FaSun className="w-4 h-4 text-yellow-400 animate-spin-slow" />
            ) : (
              <FaMoon className="w-4 h-4 text-gray-600 animate-pulse" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Head;