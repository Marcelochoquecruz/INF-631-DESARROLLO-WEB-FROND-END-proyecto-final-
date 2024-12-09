// Importaciones necesarias de React y bibliotecas externas
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Linkedin,
  Github,
  Send,
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react';

import foto from '../assets/foto.png';
import fractal1 from '../assets/fractal1.jpg';
import fractal2 from '../assets/fractal2.jpg';
import fractal3 from '../assets/fractal3.jpg';

import rubikCube1 from '../assets/rubik1.jpg';
import rubikCube2 from '../assets/rubik2.jpg';
import rubikCube3 from '../assets/rubik3.jpg';

// Componente para efectos de línea decorativa
function LineEffect() {
  // Renderiza una línea decorativa para diseño
  return (
    <motion.div
      className="h-1 w-full bg-gradient-to-r from-[#4A00E0] via-[#8E2DE2] to-[#00C9FF] rounded-full"
      initial={{ width: '0%' }}
      animate={{ width: '100%' }}
      transition={{ duration: 0.8 }}
    />
  );
};

// Componente de tarjeta interactiva para mostrar información
function InteractiveCard() {
  // Estado y lógica para la tarjeta interactiva
  const [currentFractalIndex, setCurrentFractalIndex] = useState(0);
  const [currentCubeIndex, setCurrentCubeIndex] = useState(0);
  const fractals = [fractal1, fractal2, fractal3];
  const cubes = [rubikCube1, rubikCube2, rubikCube3];

  useEffect(() => {
    // Intervalo para cambiar la imagen de fractal cada 3 segundos
    const fractalInterval = setInterval(() => {
      setCurrentFractalIndex((prev) => (prev + 1) % fractals.length);
    }, 3000);

    // Intervalo para cambiar la imagen del cubo de Rubik cada 3.5 segundos
    const cubeInterval = setInterval(() => {
      setCurrentCubeIndex((prev) => (prev + 1) % cubes.length);
    }, 3500);

    return () => {
      clearInterval(fractalInterval);
      clearInterval(cubeInterval);
    };
  }, []);

  // Manejador de clic para abrir la página de fractales
  const handleFractalClick = () => {
    window.open('https://www.wextensible.com/temas/fractal/iterativo.html', '_blank');
  };

  // Manejador de clic para abrir la página del cubo de Rubik
  const handleCubeClick = () => {
    window.open('https://magic-cube.vercel.app/', '_blank');
  };

  return (
    // Diseño y estructura de la tarjeta
    <div className=" bg-gradient-to-r from-[#4A00E0]/90 via-[#8E2DE2]/90 to-[#00C9FF]/90  dark:bg-gray-900 rounded-xl shadow-lg p-2 border-2 border-gray-200 dark:border-gray-800 space-y-4">

      <div className="flex items-center justify-center space-x-3">
        <motion.div
          onClick={handleFractalClick}
          className="w-2/5 cursor-pointer"
          // El cursor-pointer hace que el puntero del mouse cambie a una mano cuando se coloca sobre la imagen, indicando que se puede hacer clic en ella.
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentFractalIndex}
              src={fractals[currentFractalIndex]}
              alt="Fractal"
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 10 }}
              transition={{ duration: 0.5 }}
              className="w-full h-30 object-cover rounded-lg shadow-md"
            />
          </AnimatePresence>
        </motion.div>

        <motion.div
          onClick={handleCubeClick}
          className="w-2/5 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Componente que renderiza la imagen del cubo de Rubik.
              El AnimatePresence permite que se renderice solo una imagen a la vez,
              y el key se utiliza para identificar cada imagen y que se renderice
              solo una vez. */}
          <AnimatePresence mode="wait">
            {/* Componente que renderiza la imagen del cubo de Rubik */}
            <motion.img
              key={currentCubeIndex}
              src={cubes[currentCubeIndex]}
              alt="Rubik's Cube"
              /* Animación al renderizar la imagen */
              initial={{ opacity: 0, rotate: 10 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -10 }}
              transition={{ duration: 0.5 }}
              className="w-full h-30" /* La clase "w-full h-30 object-cover rounded-lg shadow-md" es necesaria para que la imagen se muestre con un ancho y alto fijo, y para que se redondee y tenga una sombra */
            />
          </AnimatePresence>
        </motion.div>
      </div>

      <p className=" dark:text-gray-200 leading-relaxed text-sm mt-4 bg-black/50 p-4">
        Deesarrollador frontend y móvil con una sólida formación en matemáticas y experiencia en diversas tecnologías. Especializado en crear interfaces atractivas y funcionales que mejoran la experiencia del usuario.
      </p>
    </div>
  );
};

// Componente principal de contenido de la página
function Contenido() {
  // Estados y hooks para gestionar el componente
  return (
    // Diseño y estructura del contenido principal
    <div className="">
      <div className="w-full max-w-5xl space-y-6">
       
        <LineEffect />
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {/* Perfil */}
          <div className="col-span-1 flex justify-center items-center">
            <div className="w-full max-w-xs">
              <div className=" bg-gradient-to-r from-[#4A00E0]/90 via-[#8E2DE2]/90 to-[#00C9FF]/90  dark:bg-gray-900 rounded-3xl 
                shadow-2xl overflow-hidden border-2 
                border-[#4A00E0]/20 dark:border-[#00C9FF]/20 
                transform transition-all hover:shadow-3xl">
                <div className="text-center bg-black/50 p-4">
                  <h1 className="text-2xl font-semibold 
                    bg-white 
                    text-transparent bg-clip-text">
                    Mi portafolio
                  </h1>
                  <motion.div
                  
                    whileHover={{ width: '90%' }}
                    initial={{ width: '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="relative pb-10">
                  <img
                    src={foto}
                    alt="Marcelo Choque Cruz"
                    className="w-70px h-70px object-cover mx-auto rounded-full" //! centreado y cambio de tamño de imagen
                  />
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-black/70 p-4" //* fondo oscuro trasparente 
                  >
                    <h2 className="text-xl font-bold text-white text-center">Marcelo Choque Cruz</h2> 
                    <p className="text-sm text-center text-white/80">Ingeniero Informático</p>
                  </div>
                </div>
                <div className="flex justify-center space-x-6 p-5 
                  bg-gradient-to-br from-[#4A00E0]/90 via-[#8E2DE2]/90 to-[#00C9FF]/90 dark:bg-gradient-to-br from-[#00C9FF]/90 via-[#8E2DE2]/90 to-[#4A00E0]/90 " >
                  {[ 
                    { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/marcelochoque" },
                    { icon: <Github className="w-6 h-6" />, href: "https://github.com/marcelochoque" },
                    { icon: <Facebook className="w-6 h-6" />, href: "https://facebook.com/marcelo_arcangel@hotmail.com" },
                    { icon: <Twitter className="w-6 h-6" />, href: "https://twitter.com/marcelochoque" },
                    { icon: <Instagram className="w-6 h-6" />, href: "https://instagram.com/" },
                    { icon: <Send className="w-6 h-6" />, href: "mailto:marcelo.choque@example.com" }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contenido Principal */}
          <div className="col-span-2">
            <InteractiveCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contenido;
