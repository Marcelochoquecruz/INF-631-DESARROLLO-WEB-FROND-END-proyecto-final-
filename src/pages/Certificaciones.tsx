import React from 'react';
import {
  Award,
  BookOpen,
  Globe,
  Target,
  Zap,
  Trophy
} from 'lucide-react';

const AcademicAchievements: React.FC = () => {
  const certificaciones = [
    {
      nombre: 'Desarrollo Web html',
      institucion: 'FreeCodeCamp',
      fecha: '2022',
      descripcion: 'Certificación avanzada en desarrollo web frontend y backend',
      icono: <Award className="w-12 h-12 text-green-600 dark:text-green-400" />
    },
    {
      nombre: 'Inteligencia Artificial Aplicada',
      institucion: 'Google Developer',
      fecha: '2023',
      descripcion: 'Curso especializado en machine learning y algoritmos de IA',
      icono: <Zap className="w-12 h-12 text-purple-600 dark:text-purple-400" />
    }
  ];

  const formacionAcademica = [
    {
      nombre: 'Ingeniería Informática',
      institucion: 'Universidad Autónoma Tomás Frías',
      estado: 'Estudiante Avanzado',
      periodos: ['2020 - Presente', 'Promedio Académico: 4.7/5.0'],
      icono: <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400" />
    },
    {
      nombre: 'Matemáticas Aplicadas',
      institucion: 'Instituto Técnico Especializado',
      estado: 'Estudiante Complementario',
      periodos: ['2019 - 2021', 'Especialización en Análisis Numérico'],
      icono: <Target className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
    }
  ];

  const logrosAcademicos = [
    {
      nombre: 'Olimpiadas Matemáticas Nacionales',
      descripcion: '3er Lugar en Categoría de Cálculo Avanzado',
      año: 2022,
      icono: <Trophy className="w-12 h-12 text-yellow-600 dark:text-yellow-400" />
    },
    {
      nombre: 'Presentaciones en Congresos Científicos',
      descripcion: 'Ponencias en 5 departamentos sobre Innovación Tecnológica',
      año: '2021 - 2023',
      icono: <Globe className="w-12 h-12 text-teal-600 dark:text-teal-400" />
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <section className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <Award className="w-10 h-10 text-green-600 dark:text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Certificaciones Profesionales
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certificaciones.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-green-600 dark:hover:border-green-400 transition-all group"
              >
                <div className="flex items-center mb-2">
                  {cert.icono}
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {cert.nombre}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{cert.institucion}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{cert.descripcion}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    {cert.fecha}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-all text-green-600 dark:text-green-400">
                    Verificar Certificación
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <BookOpen className="w-10 h-10 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Formación Académica
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {formacionAcademica.map((formacion, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
              >
                <div className="flex items-center mb-2">
                  {formacion.icono}
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {formacion.nombre}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{formacion.institucion}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-700 dark:text-gray-300">{formacion.estado}</p>
                  {formacion.periodos.map((periodo, periodoIndex) => (
                    <p key={periodoIndex} className="text-gray-600 dark:text-gray-400">
                      {periodo}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <Trophy className="w-10 h-10 text-yellow-600 dark:text-yellow-400 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Logros Académicos Destacados
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {logrosAcademicos.map((logro, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-yellow-600 dark:hover:border-yellow-400 transition-all group"
              >
                <div className="flex items-center mb-2">
                  {logro.icono}
                  <h3 className="ml-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {logro.nombre}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{logro.descripcion}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
                    {logro.año}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AcademicAchievements;
