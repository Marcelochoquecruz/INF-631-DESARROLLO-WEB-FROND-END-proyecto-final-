// Importaciones necesarias de React y bibliotecas externas
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Linkedin,
  Github,
  Send,
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react';

// Importaciones de assets
import foto from '../assets/foto.png';
import fractal from '../assets/fractal.gif';
import rubikCube from '../assets/rubik.gif';

// Componente para efectos de línea decorativa
const LineEffect = () => (
  <motion.div
    className="h-1 w-full p-1 bg-gradient-to-r from-[#4A00E0] via-[#8E2DE2] rounded-full"
    initial={{ width: '0%' }}
    animate={{ width: '100%' }}
    transition={{ duration: 0.9 }}
  />
);

// Componente de tarjeta interactiva para mostrar información
const InteractiveCard = () => {
  const fractalImage = fractal;
  const cube = rubikCube;

  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white-90 dark:bg-[#4A00E000 dark:#8E2DE2]/90 rounded-xl shadow-lg p-1 border-2 dark:border-gray-800 w-full max-w-5xl space-y-6 mx-auto">
      {/* ! Altura de las tarjetas: 
          * w-2/5 establece el ancho al 40% del contenedor
          <div className="w-full max-w-5xl space-y-6 mx-auto">
          * h-48 (altura) y w-48 (ancho) de la imagen definen el tamaño de las tarjetas */}
      <div className="flex items-center justify-center space-x-3">
        {[
          {
            index: 0,
            images: [fractalImage],
            alt: "Fractal",
            title: "Fractales",
            onClick: () => handleClick('https://www.wextensible.com/temas/fractal/iterativo.html'),
          },
          {
            index: 0,
            images: [cube],
            alt: "Rubik's Cube",
            title: "Cubo de Rubik",
            onClick: () => handleClick('https://magic-cube.vercel.app/'),
          }
        ].map(({ index, images, alt, title, onClick }, idx) => (
          <motion.div
            key={idx}
            onClick={onClick}
            className="w-2/5 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="">
              <h3 className="text-black  dark:text-white">
                {title}
              </h3>
            </div>
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt={alt}
                initial={{ opacity: 0, rotate: idx === 0 ? -10 : 10 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: idx === 0 ? 10 : -10 }}
                transition={{ duration: 0.5 }}
                className="w-48 h-48 object-cover rounded-lg shadow-md flex items-center justify-center"
              />
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <div className="text-center bg-white/20 dark:bg-black/50 h-full p-4">
        <h3 className="font-semibold text-[#4A00E0] dark:text-white">
          Desarrollador frontend y móvil con una sólida formación en matemáticas y experiencia en diversas tecnologías, especializado en crear interfaces atractivas y funcionales.
        </h3>
      </div>
    </div>
  );
};

// Componente principal de contenido de la página
const Contenido = () => (
  <div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-black min-h-screen py-10 px-4">
    <div className="w-full max-w-5xl space-y-6 mx-auto">
      <LineEffect />
      <div className="grid md:grid-cols-3 gap-8 mt-6">
        <div className="col-span-1 flex justify-center items-center">
          <div className="w-full max-w-xs">
            <div className="bg-gradient-to-r from-[#4A00E0]/90 via-[#8E2DE2]/90 dark:from-[#00C9FF]/90 dark:via-[#8E2DE2]/90 dark:to-[#4A00E0]/90 rounded-3xl shadow-2xl overflow-hidden border-2 border-[#4A00E0]/20 dark:border-[#00C9FF]/20 transform transition-all hover:shadow-3xl">
              <div className="text-center bg-white/20 dark:bg-black/50 p-4">
                <h1 className="text-2xl font-semibold text-[#4A00E0] dark:text-white">
                  Mi portafolio
                </h1>
              </div>
              <div className="relative pb-10">
                <img
                  src={foto}
                  alt="Marcelo Choque Cruz"
                  className="w-70px h-70px object-cover mx-auto rounded-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 dark:bg-black/70 p-4">
                  <h2 className="text-xl font-bold text-white text-center">
                    Marcelo Choque Cruz
                  </h2>
                  <p className="text-sm text-center text-white/80">
                    Ingeniero Informático
                  </p>
                </div>
              </div>
              <div className="flex justify-center space-x-6 p-5 bg-gradient-to-br from-[#4A00E0]/90 via-[#8E2DE2]/90 to-[#00C9FF]/90 dark:from-[#00C9FF]/90 dark:via-[#8E2DE2]/90 dark:to-[#4A00E0]/90">
                {[
                  { 
                    icon: <Linkedin className="w-6 h-6 text-white" />, 
                    href: "https://linkedin.com/in/marcelochoque" 
                  },
                  { 
                    icon: <Github className="w-6 h-6 text-white" />, 
                    href: "https://github.com/marcelochoque" 
                  },
                  { 
                    icon: <Facebook className="w-6 h-6 text-white" />, 
                    href: "https://facebook.com/marcelo_arcangel@hotmail.com" 
                  },
                  { 
                    icon: <Twitter className="w-6 h-6 text-white" />, 
                    href: "https://twitter.com/marcelochoque" 
                  },
                  { 
                    icon: <Instagram className="w-6 h-6 text-white" />, 
                    href: "https://instagram.com/" 
                  },
                  { 
                    icon: <Send className="w-6 h-6 text-white" />, 
                    href: "mailto:marcelo.choque@example.com" 
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <InteractiveCard />
        </div>
      </div>
    </div>
  </div>
);

export default Contenido;