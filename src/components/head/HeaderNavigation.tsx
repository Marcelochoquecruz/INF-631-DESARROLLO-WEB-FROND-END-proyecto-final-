import { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaHome, FaUniversity, FaImages, FaUserGraduate, FaMoneyBillWave, FaEnvelope } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext';

const HeaderNavigation = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();
  const themeContext = useContext(ThemeContext);

  const menuItems = [
    { path: '/', label: 'Inicio', icon: FaHome },
    { path: '/proyectos', label: 'Proyectos', icon: FaImages },
    { path: '/matematicas', label: 'Matemáticas', icon: FaUniversity },
    { path: '/desarrollo-movil', label: 'Desarrollo Móvil', icon: FaUserGraduate },
    { path: '/certificaciones', label: 'Certificaciones', icon: FaMoneyBillWave },
    { path: '/contacto', label: 'Contacto', icon: FaEnvelope }
  ];

  const gradients = [
    'from-gray-700 to-gray-600',
    'from-blue-500 to-cyan-500', 
    'from-green-500 to-emerald-500',
    'from-violet-500 to-purple-500',
    'from-yellow-500 to-orange-500',
    'from-teal-500 to-cyan-500'
  ];

  return (
    <header className="sticky top-0 w-full bg-transparent backdrop-blur-lg shadow-lg z-30">
      {/* Efecto de luces de neón en el borde superior */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x" />

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

          {/* Menú de navegación */}
          <motion.nav className="flex-grow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.ul className="flex flex-wrap justify-center gap-2" layout>
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                const gradient = gradients[index % gradients.length];

                return (
                  <motion.li 
                    key={item.path} 
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)} 
                    className="relative"
                  >
                    <Link
                      to={item.path}
                      className={`
                        relative overflow-hidden
                        px-4 py-2 rounded-xl
                        flex items-center gap-2
                        transition-all duration-300
                        ${isActive ? 'text-white font-semibold scale-105' : 'text-blue-400 dark:text-slate-200'}
                        hover:scale-105
                      `}
                    >
                      {/* Fondo con gradiente */}
                      <div
                        className={`
                          absolute inset-0
                          bg-gradient-to-r ${gradient}
                          transition-opacity duration-300
                          ${isActive || hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                        `}
                      />

                      {/* Efecto de brillo */}
                      <div
                        className={`
                          absolute inset-0
                          bg-gradient-to-r from-white via-white/0 to-white/0
                          transition-all duration-1000
                          ${hoveredIndex === index ? 'opacity-20 translate-x-full' : 'opacity-0'}
                        `}
                      />

                      {/* Contenido */}
                      <div className="relative">
                        <Icon
                          className={`
                            w-5 h-5 transition-all duration-300
                            ${isActive || hoveredIndex === index ? 'text-white' : `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                          `}
                        />
                      </div>

                      <span className="relative font-medium whitespace-nowrap">{item.label}</span>

                      {/* Indicador activo */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className={`absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-full`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{
                              type: 'spring',
                              stiffness: 380,
                              damping: 30
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </Link>

                    {/* Efecto de resplandor estático al hover */}
                    <div
                      className={`
                        absolute inset-0 -z-10
                        bg-gradient-to-r ${gradient}
                        rounded-xl blur-xl
                        transition-opacity duration-300
                        opacity-0
                        ${hoveredIndex === index ? 'opacity-30' : ''}
                      `}
                    />
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.nav>
        </div>
      </div>

      {/* Efecto de sombra inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
    </header>
  );
};

export default HeaderNavigation;
