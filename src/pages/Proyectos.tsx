import React from 'react';

const Proyectos = () => {
  const proyectos = [
    {
      nombre: 'Página web para venta de componentes de computadoras',
      tecnologia: 'Laravel',
      descripcion: 'Desarrollo de una plataforma web para la venta de componentes de computadoras.'
    },
    {
      nombre: 'Aplicación móvil de servicios a domicilio',
      tecnologia: 'Flutter',
      descripcion: 'Aplicación móvil que permite solicitar servicios a domicilio de manera sencilla.'
    },
    {
      nombre: 'Juego móvil Tic Tac Toe',
      tecnologia: 'Android y Flutter',
      descripcion: 'Implementación del clásico juego Tic Tac Toe para dispositivos móviles.'
    },
    {
      nombre: 'Paseo virtual de un museo egipcio',
      tecnologia: '3D Max',
      descripcion: 'Recorrido virtual por un museo egipcio utilizando modelado 3D.'
    },
    {
      nombre: 'Software educativo para nivel primario',
      tecnologia: 'Adobe Director',
      descripcion: 'Herramienta educativa interactiva diseñada para estudiantes de primaria.'
    },
    {
      nombre: 'Widgets para Android',
      tecnologia: 'Android',
      descripcion: 'Desarrollo de widgets útiles como un reloj parlante y radios en línea.'
    },
    {
      nombre: 'Landing page para escuela primaria',
      tecnologia: 'React',
      descripcion: 'Página web institucional para una escuela primaria.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Proyectos Destacados</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectos.map((proyecto, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
              {proyecto.nombre}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <strong>Tecnología:</strong> {proyecto.tecnologia}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              {proyecto.descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
