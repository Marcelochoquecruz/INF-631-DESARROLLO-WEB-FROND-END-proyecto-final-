import React, { useState } from 'react';
import { 
  Code, 
  Smartphone, 
  Landmark, 
  Book, 
  AppWindow, 
  Globe 
} from 'lucide-react';
import { 
  SiLaravel, 
  SiFlutter, 
  SiAndroid, 
  SiReact 
} from 'react-icons/si';

const Proyectos = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const proyectos = [
    {
      nombre: 'Página web de Componentes PC',
      tecnologia: 'Laravel',
      descripcion: 'Plataforma web para venta de componentes de computadoras.',
      icon: Code,
      techIcon: SiLaravel,
      color: 'from-red-500 to-red-400'
    },
    {
      nombre: 'App Servicios a Domicilio',
      tecnologia: 'Flutter',
      descripcion: 'Aplicación móvil para solicitar servicios de manera sencilla.',
      icon: Smartphone,
      techIcon: SiFlutter,
      color: 'from-cyan-500 to-blue-400'
    },
    {
      nombre: 'Juego Tic Tac Toe',
      tecnologia: 'Android y Flutter',
      descripcion: 'Implementación del clásico juego para dispositivos móviles.',
      icon: AppWindow,
      techIcon: SiAndroid,
      color: 'from-green-500 to-emerald-400'
    },
    {
      nombre: 'Paseo Virtual Museo Egipcio',
      tecnologia: '3D Max',
      descripcion: 'Recorrido virtual por un museo egipcio utilizando modelado 3D.',
      icon: Landmark,
      techIcon: null,
      color: 'from-orange-500 to-amber-400'
    },
    {
      nombre: 'Software Educativo Primaria',
      tecnologia: 'Adobe Director',
      descripcion: 'Herramienta educativa interactiva para estudiantes.',
      icon: Book,
      techIcon: null,
      color: 'from-purple-500 to-indigo-400'
    },
    {
      nombre: 'Widgets para Android',
      tecnologia: 'Android',
      descripcion: 'Desarrollo de widgets útiles como reloj parlante y radios en línea.',
      icon: Smartphone,
      techIcon: SiAndroid,
      color: 'from-lime-500 to-green-400'
    },
    {
      nombre: 'Landing Page Escuela',
      tecnologia: 'React',
      descripcion: 'Página web institucional para escuela primaria.',
      icon: Globe,
      techIcon: SiReact,
      color: 'from-sky-500 to-blue-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Proyectos Destacados
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => {
            const Icon = proyecto.icon;
            const TechIcon = proyecto.techIcon;

            return (
              <div 
                key={index} 
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`
                  ${proyecto.color} bg-gradient-to-br
                  rounded-3xl p-6 shadow-xl 
                  text-white 
                  transform transition-all duration-300
                  ${hoveredProject === index ? 'scale-105 rotate-1' : 'hover:scale-105'}
                `}
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-8 h-8 mr-4 opacity-80" />
                  <h2 className="text-xl font-semibold">{proyecto.nombre}</h2>
                </div>
                
                <div className="flex items-center mb-3">
                  {TechIcon && <TechIcon className="w-5 h-5 mr-2" />}
                  <p className="text-sm font-medium opacity-90">
                    {proyecto.tecnologia}
                  </p>
                </div>
                
                <p className="text-sm opacity-80 mb-4">
                  {proyecto.descripcion}
                </p>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full">
                    Ver Detalles
                  </span>
                  <span className="text-xs opacity-70">
                    Proyecto {index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;