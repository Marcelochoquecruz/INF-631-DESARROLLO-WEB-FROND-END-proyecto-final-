import React, { useState } from 'react';
import { 
  Code, 
  Smartphone, 
  Landmark, 
  Book, 
  AppWindow, 
  Globe,
  ExternalLink 
} from 'lucide-react';

const Proyectos = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const proyectos = [
    {
      nombre: 'Página web de Componentes PC',
      tecnologia: 'Laravel',
      descripcion: 'Plataforma web para venta de componentes de computadoras.',
      icon: Code,
      techIcon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M20.23 7.24 16.3 19.78a.62.62 0 0 1-1.18 0L8.77 2.22a.61.61 0 0 0-1.16 0L3.7 14.76a.62.62 0 0 0 .44.82L12 18.48a.61.61 0 0 0 .31 0l8.26-2.9a.62.62 0 0 0 .44-.82L20.62 7a.62.62 0 0 0-1.18 0z"/>
        </svg>
      ),
      color: 'from-black via-blue-900 to-gray-900',
      tags: ['E-commerce', 'Web Development']
    },
    {
      nombre: 'App Servicios a Domicilio',
      tecnologia: 'Flutter',
      descripcion: 'Aplicación móvil para solicitar servicios de manera sencilla.',
      icon: Smartphone,
      techIcon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M13.34 22H4.67A2.68 2.68 0 0 1 2 19.33V4.67A2.68 2.68 0 0 1 4.67 2h8.67v18zm6-4.67V6.67A2.68 2.68 0 0 0 16.67 4h-1.34v16h1.34a2.68 2.68 0 0 0 2.66-2.67z"/>
        </svg>
      ),
      color: 'from-black via-blue-900 to-gray-900',
      tags: ['Mobile App', 'On-Demand']
    },
    {
      nombre: 'Juego Tic Tac Toe',
      tecnologia: 'Android y Flutter',
      descripcion: 'Implementación del clásico juego para dispositivos móviles.',
      icon: AppWindow,
      techIcon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M20.39 10.74 13.26 3.61A2 2 0 0 0 11.85 3H4a2 2 0 0 0-2 2v7.85a2 2 0 0 0 .59 1.42l7.13 7.13a2 2 0 0 0 2.83 0l6.93-6.93a2 2 0 0 0 0-2.83zm-14.39-3.74a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
        </svg>
      ),
      color: 'from-black via-blue-900 to-gray-900',
      tags: ['Mobile Game', 'Cross-Platform']
    },
    {
      nombre: 'Paseo Virtual Museo Egipcio',
      tecnologia: '3D Max',
      descripcion: 'Recorrido virtual por un museo egipcio utilizando modelado 3D.',
      icon: Landmark,
      techIcon: null,
      color: 'from-black via-blue-900 to-gray-900',
      tags: ['Virtual Tour', '3D Modeling']
    },
    {
      nombre: 'Software Educativo Primaria',
      tecnologia: 'Adobe Director',
      descripcion: 'Herramienta educativa interactiva para estudiantes.',
      icon: Book,
      techIcon: null,
      color: 'from-black via-blue-900 to-gray-900',
      tags: ['Educational', 'Interactive']
    },
    {
      nombre: 'Widgets para Android',
      tecnologia: 'Android',
      descripcion: 'Desarrollo de widgets útiles como reloj parlante y radios en línea.',
      icon: Smartphone,
      techIcon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M20.39 10.74 13.26 3.61A2 2 0 0 0 11.85 3H4a2 2 0 0 0-2 2v7.85a2 2 0 0 0 .59 1.42l7.13 7.13a2 2 0 0 0 2.83 0l6.93-6.93a2 2 0 0 0 0-2.83zm-14.39-3.74a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
        </svg>
      ),
      color: 'from-black via-blue-900 to-gray-900',
      tags: ['Mobile Widgets', 'Utility']
    },
    {
      nombre: 'Landing Page Escuela',
      tecnologia: 'React',
      descripcion: 'Página web institucional para escuela primaria.',
      icon: Globe,
      techIcon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 0 1-8-8 8.26 8.26 0 0 1 .64-3.14L9 12v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2v-.59A7.91 7.91 0 0 1 12 4a8 8 0 0 1 8 8 8 8 0 0 1-8 8z"/>
        </svg>
      ),
      color: 'from-black via-blue-900 to-gray-900',
      tags: ['Web Development', 'Educational']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-black dark:to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Proyectos Destacados
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explorando soluciones innovadoras a través de diversas tecnologías y plataformas
          </p>
        </div>

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
                  rounded-3xl p-6 shadow-2xl 
                  text-white 
                  transform transition-all duration-500
                  relative overflow-hidden
                  ${hoveredProject === index 
                    ? 'scale-105 shadow-2xl' 
                    : 'hover:scale-105 hover:shadow-xl'}
                `}
              >
                {/* Subtle animated background effect */}
                <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <Icon className="w-10 h-10 mr-4 opacity-80" />
                    <h2 className="text-2xl font-bold">{proyecto.nombre}</h2>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {TechIcon && <TechIcon />}
                    <p className="text-sm font-medium opacity-90 ml-3">
                      {proyecto.tecnologia}
                    </p>
                  </div>
                  
                  <p className="text-sm opacity-80 mb-4 h-12">
                    {proyecto.descripcion}
                  </p>
                  
                  {/* Tags */}
                  {proyecto.tags && (
                    <div className="flex space-x-2 mb-4">
                      {proyecto.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="text-xs bg-white/20 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-4 flex justify-between items-center">
                    <button className="
                      group flex items-center text-xs font-medium 
                      bg-white/20 hover:bg-white/30 
                      px-3 py-2 rounded-full 
                      transition-all duration-300
                    ">
                      Ver Detalles
                      <ExternalLink 
                        className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </button>
                    <span className="text-xs opacity-70">
                      Proyecto {index + 1}
                    </span>
                  </div>
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