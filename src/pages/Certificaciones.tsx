import React from 'react';
import { 
  FaCertificate, 
  FaCode, 
  FaGraduationCap, 
  FaUniversity 
} from 'react-icons/fa';

const Certificaciones = () => {
  const certificaciones = [
    {
      nombre: 'Cursos en FreeCodeCamp',
      descripcion: 'Certificaciones en desarrollo web y programación',
      icono: <FaCertificate className="text-5xl text-green-500" />
    }
  ];

  const formacionAcademica = [
    {
      nombre: 'Matemáticas',
      tipo: 'Egresado',
      icono: <FaGraduationCap className="text-5xl text-blue-500" />
    },
    {
      nombre: 'Ingeniería Informática',
      tipo: 'Estudiante',
      icono: <FaUniversity className="text-5xl text-purple-500" />
    }
  ];

  const experienciaAcademica = [
    {
      nombre: 'Auxiliar de Docencia en Matemáticas',
      cursos: [
        'Cálculo 1',
        'Álgebra 1',
        'Álgebra Lineal y Matricial'
      ],
      icono: <FaCode className="text-5xl text-orange-500" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Certificaciones y Formación</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Certificaciones</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certificaciones.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">{cert.icono}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                {cert.nombre}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {cert.descripcion}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Formación Académica</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {formacionAcademica.map((formacion, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">{formacion.icono}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                {formacion.nombre}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {formacion.tipo}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Experiencia Académica</h2>
        {experienciaAcademica.map((experiencia, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105"
          >
            <div className="flex justify-center mb-4">{experiencia.icono}</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400 text-center">
              {experiencia.nombre}
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-center">
              {experiencia.cursos.map((curso, cursoIndex) => (
                <li key={cursoIndex}>{curso}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Certificaciones;
