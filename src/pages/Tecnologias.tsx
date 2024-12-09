import React, { useState } from 'react';
import { 
  Code,
  Smartphone,
  Database,
  Layers
} from 'lucide-react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiFlutter, 
  SiFirebase, 
  SiTypescript, 
  SiExpress, 
  SiDart
} from 'react-icons/si';

const Tecnologias = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const areasMathematicas = [
    {
      nombre: 'Cálculo 1',
      descripcion: 'Auxiliar de docencia en fundamentos de cálculo diferencial e integral.',
      icono: '📈'
    },
    {
      nombre: 'Álgebra 1',
      descripcion: 'Apoyo en estructuras algebraicas, ecuaciones y sistemas lineales.',
      icono: '➗'
    },
    {
      nombre: 'Álgebra Lineal y Matricial',
      descripcion: 'Especialización en transformaciones lineales, matrices y espacios vectoriales.',
      icono: '🔢'
    }
  ];

  const participaciones = [
    'Olimpiadas Matemáticas',
    'Congresos de la Sociedad Científica de Matemáticas'
  ];

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
          nombre: 'Scientific WordPlace', 
          icono: null, 
          link: 'https://www.sciword.co.uk/',
          color: 'bg-purple-500 text-white',
          textColor: 'text-purple-50'
        },
        { 
          nombre: 'MATLAB', 
          icono: null, 
          link: 'https://www.mathworks.com/products/matlab.html',
          color: 'bg-orange-500 text-white',
          textColor: 'text-orange-50'
        },
        { 
          nombre: 'Maple', 
          icono: null, 
          link: 'https://www.maplesoft.com/',
          color: 'bg-green-500 text-white',
          textColor: 'text-green-50'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className={`
                bg-gradient-to-br ${item.color} 
                rounded-3xl shadow-2xl overflow-hidden 
                transform transition-all duration-300 
                hover:scale-105 hover:shadow-3xl
              `}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <item.icon className="w-10 h-10 text-white mr-4" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">{item.titulo}</h2>
                    <p className="text-white/80">{item.descripcion}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {item.tecnologias.map((tech, techIndex) => (
                    <a 
                      key={techIndex} 
                      href={tech.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`
                        ${tech.color} 
                        rounded-xl p-3 
                        flex flex-col items-center justify-center 
                        transform transition-all duration-300 
                        hover:scale-110 hover:shadow-lg
                      `}
                    >
                      {tech.icono ? (
                        <tech.icono className={`w-8 h-8 ${tech.textColor} mb-2`} />
                      ) : (
                        <div className={`w-8 h-8 ${tech.textColor} mb-2 flex items-center justify-center text-center`}>
                          ?
                        </div>
                      )}
                      <span className={`text-sm font-semibold ${tech.textColor} text-center`}>
                        {tech.nombre}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {areasMathematicas.map((area, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">{area.icono}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                {area.nombre}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {area.descripcion}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Participaciones Destacadas</h2>
          <ul className="list-disc list-inside bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            {participaciones.map((participacion, index) => (
              <li 
                key={index} 
                className="text-gray-600 dark:text-gray-300 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {participacion}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;
