import React, { useState } from 'react';
import { useTheme } from '../components/useTheme';
import {
  Code,
  Smartphone,
  Database,
  Layers,
  Linkedin,
  Github,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiFlutter, 
  SiFirebase, 
  SiTypescript, 
  SiExpress, 
  SiDart
} from 'react-icons/si';
import foto from '../assets/foto.png';

const Contenidop: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const menuItems = [
    {
      titulo: 'Frontend',
      descripcion: 'Diseños modernos e interactivos',
      icon: Code,
      color: 'from-cyan-600 to-blue-500',
      tecnologias: [
        { 
          nombre: 'React', 
          icono: FaReact, 
          link: 'https://reactjs.org',
          color: 'bg-sky-500 text-white',
          textColor: 'text-sky-50'
        },
        { 
          nombre: 'TypeScript', 
          icono: SiTypescript, 
          link: 'https://www.typescriptlang.org/',
          color: 'bg-blue-600 text-white',
          textColor: 'text-blue-50'
        },
        { 
          nombre: 'Tailwind', 
          icono: SiTailwindcss, 
          link: 'https://tailwindcss.com/',
          color: 'bg-teal-500 text-white',
          textColor: 'text-teal-50'
        }
      ]
    },
    {
      titulo: 'Móvil',
      descripcion: 'Aplicaciones nativas multiplataforma',
      icon: Smartphone,
      color: 'from-emerald-600 to-green-500',
      tecnologias: [
        { 
          nombre: 'Flutter', 
          icono: SiFlutter, 
          link: 'https://flutter.dev/',
          color: 'bg-cyan-500 text-white',
          textColor: 'text-cyan-50'
        },
        { 
          nombre: 'Dart', 
          icono: SiDart, 
          link: 'https://dart.dev/',
          color: 'bg-blue-700 text-white',
          textColor: 'text-blue-50'
        },
        { 
          nombre: 'Firebase', 
          icono: SiFirebase, 
          link: 'https://firebase.google.com/',
          color: 'bg-orange-500 text-white',
          textColor: 'text-orange-50'
        }
      ]
    },
    {
      titulo: 'Backend',
      descripcion: 'Arquitecturas robustas y escalables',
      icon: Database,
      color: 'from-indigo-600 to-purple-500',
      tecnologias: [
        { 
          nombre: 'Node.js', 
          icono: FaNodeJs, 
          link: 'https://nodejs.org/',
          color: 'bg-green-600 text-white',
          textColor: 'text-green-50'
        },
        { 
          nombre: 'Python', 
          icono: FaPython, 
          link: 'https://www.python.org/',
          color: 'bg-yellow-500 text-white',
          textColor: 'text-yellow-50'
        },
        { 
          nombre: 'Express', 
          icono: SiExpress, 
          link: 'https://expressjs.com/',
          color: 'bg-gray-700 text-white',
          textColor: 'text-gray-50'
        }
      ]
    },
    {
      titulo: 'Análisis',
      descripcion: 'Soluciones matemáticas avanzadas',
      icon: Layers,
      color: 'from-amber-600 to-orange-500',
      tecnologias: [
        { 
          nombre: 'MATLAB', 
          icono: null, 
          link: 'https://www.mathworks.com/products/matlab.html',
          color: 'bg-red-600 text-white',
          textColor: 'text-red-50'
        },
        { 
          nombre: 'LaTeX', 
          icono: null, 
          link: 'https://www.latex-project.org/',
          color: 'bg-gray-500 text-white',
          textColor: 'text-gray-50'
        },
        { 
          nombre: 'Análisis de Datos', 
          icono: null, 
          link: '#',
          color: 'bg-purple-500 text-white',
          textColor: 'text-purple-50'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Perfil */}
          <div className="col-span-1 flex justify-center items-center">
            <div className="w-full max-w-xs">
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 transform transition-all hover:shadow-3xl">
                <div className="relative">
                  <img 
                    src={foto} 
                    alt="Marcelo Choque Cruz" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-black/70 backdrop-blur-sm p-4 text-center">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Marcelo Choque Cruz</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Ingeniero Informático</p>
                  </div>
                </div>
                <div className="flex justify-center space-x-6 p-5 bg-gray-100 dark:bg-gray-800">
                  {[
                    { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/marcelochoque" },
                    { icon: <Github className="w-6 h-6" />, href: "https://github.com/marcelochoque" },
                    { icon: <Facebook className="w-6 h-6" />, href: "https://facebook.com/marcelochoque" },
                    { icon: <Twitter className="w-6 h-6" />, href: "https://twitter.com/marcelochoque" },
                    { icon: <Instagram className="w-6 h-6" />, href: "https://instagram.com/marcelochoque" },
                    { icon: <Send className="w-6 h-6" />, href: "mailto:marcelo.choque@example.com" }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tarjetas de Tecnología */}
          <div className="col-span-2 grid md:grid-cols-2 gap-6">
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div 
                  key={index}
                  className={`
                    ${item.color} bg-gradient-to-br 
                    rounded-3xl p-6 shadow-xl 
                    text-white 
                    transition-all duration-300
                    hover:shadow-2xl
                  `}
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-8 h-8 mr-4 opacity-80" />
                    <h3 className="text-2xl font-semibold">{item.titulo}</h3>
                  </div>
                  
                  <p className="text-sm opacity-90 mb-4">{item.descripcion}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {item.tecnologias.map((tech, techIndex) => (
                      <a 
                        key={techIndex} 
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          ${tech.color}
                          px-4 py-2 
                          rounded-full 
                          text-sm 
                          font-semibold
                          flex items-center gap-3
                          transform transition-transform 
                          hover:scale-105
                          shadow-md
                        `}
                      >
                        {tech.icono && <tech.icono className="w-5 h-5" />}
                        <span className={tech.textColor}>{tech.nombre}</span>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contenidop;