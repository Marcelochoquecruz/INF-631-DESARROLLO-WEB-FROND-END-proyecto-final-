import React from 'react';

const Matematicas = () => {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Experiencia en Matemáticas</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Áreas de Docencia</h2>
        <div className="grid md:grid-cols-3 gap-6">
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
      </section>

      <section>
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
      </section>
    </div>
  );
};

export default Matematicas;
