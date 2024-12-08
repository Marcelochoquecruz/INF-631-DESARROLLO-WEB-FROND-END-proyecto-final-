import React from 'react';
import { 
  FaAndroid, 
  FaCode, 
  FaDatabase, 
  FaFlask, 
  FaTools 
} from 'react-icons/fa';

const DesarrolloMovil = () => {
  const tecnologias = [
    {
      nombre: 'Flutter',
      descripcion: 'Framework de desarrollo multiplataforma para aplicaciones móviles.',
      icono: <FaAndroid className="text-5xl text-green-500" />
    },
    {
      nombre: 'Dart',
      descripcion: 'Lenguaje de programación optimizado para desarrollo de aplicaciones móviles.',
      icono: <FaCode className="text-5xl text-blue-500" />
    },
    {
      nombre: 'Firebase',
      descripcion: 'Plataforma de backend como servicio para aplicaciones móviles.',
      icono: <FaDatabase className="text-5xl text-yellow-500" />
    },
    {
      nombre: 'Testing',
      descripcion: 'Pruebas de integración y unitarias para garantizar calidad del software.',
      icono: <FaFlask className="text-5xl text-purple-500" />
    },
    {
      nombre: 'Herramientas de Estado',
      descripcion: 'Provider, GetX, Bloc para gestión de estado en aplicaciones Flutter.',
      icono: <FaTools className="text-5xl text-gray-500" />
    }
  ];

  const proyectosMoviles = [
    {
      nombre: 'Aplicación de Servicios a Domicilio',
      descripcion: 'App multiplataforma para solicitar servicios con geolocalización.',
      tecnologias: ['Flutter', 'Firebase']
    },
    {
      nombre: 'Juego Tic Tac Toe',
      descripcion: 'Implementación del clásico juego para dispositivos móviles.',
      tecnologias: ['Flutter', 'Android']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Desarrollo Móvil</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tecnologías</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tecnologias.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">{tech.icono}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                {tech.nombre}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {tech.descripcion}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Proyectos Móviles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {proyectosMoviles.map((proyecto, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                {proyecto.nombre}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {proyecto.descripcion}
              </p>
              <div className="flex space-x-2">
                {proyecto.tecnologias.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DesarrolloMovil;
