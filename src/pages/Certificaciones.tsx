import React from 'react';
import { 
  Award, 
  BookOpen, 
  Globe, 
  Target, 
  Zap, 
  TrophyIcon 
} from 'lucide-react';

const AcademicAchievements: React.FC = () => {
  const certificaciones = [
    {
      nombre: 'Desarrollo Web Full Stack',
      institucion: 'FreeCodeCamp',
      fecha: '2022',
      descripcion: 'Certificación avanzada en desarrollo web frontend y backend',
      icono: <Award className="w-16 h-16 text-emerald-500" />
    },
    {
      nombre: 'Inteligencia Artificial Aplicada',
      institucion: 'Google Developer',
      fecha: '2023',
      descripcion: 'Curso especializado en machine learning y algoritmos de IA',
      icono: <Zap className="w-16 h-16 text-purple-500" />
    }
  ];

  const formacionAcademica = [
    {
      nombre: 'Ingeniería Informática',
      institucion: 'Universidad Autónoma Tomás Frías',
      estado: 'Estudiante Avanzado',
      periodos: ['2020 - Presente', 'Promedio Académico: 4.7/5.0'],
      icono: <BookOpen className="w-16 h-16 text-blue-500" />
    },
    {
      nombre: 'Matemáticas Aplicadas',
      institucion: 'Instituto Técnico Especializado',
      estado: 'Diplomado Complementario',
      periodos: ['2019 - 2021', 'Especialización en Análisis Numérico'],
      icono: <Target className="w-16 h-16 text-indigo-500" />
    }
  ];

  const logrosAcademicos = [
    {
      nombre: 'Olimpiadas Matemáticas Nacionales',
      descripcion: '3er Lugar en Categoría de Cálculo Avanzado',
      año: 2022,
      icono: <TrophyIcon className="w-16 h-16 text-yellow-500" />
    },
    {
      nombre: 'Presentaciones en Congresos Científicos',
      descripcion: 'Ponencias en 5 departamentos sobre Innovación Tecnológica',
      año: '2021 - 2023',
      icono: <Globe className="w-16 h-16 text-teal-500" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 to-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <section className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <div className="flex items-center mb-8">
            <Award className="w-12 h-12 text-emerald-500 mr-4" />
            <h2 className="text-3xl font-bold text-emerald-300">
              Certificaciones Profesionales
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certificaciones.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white/10 p-6 rounded-xl 
                           border border-emerald-500/20 
                           hover:border-emerald-500/50 
                           transition-all group"
              >
                <div className="flex items-center mb-4">
                  {cert.icono}
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-emerald-300">
                      {cert.nombre}
                    </h3>
                    <p className="text-white/60">{cert.institucion}</p>
                  </div>
                </div>
                <p className="text-white/80 mb-4">{cert.descripcion}</p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-400 font-semibold">
                    {cert.fecha}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 
                                   transition-all text-emerald-300">
                    Verificar Certificación
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <div className="flex items-center mb-8">
            <BookOpen className="w-12 h-12 text-blue-500 mr-4" />
            <h2 className="text-3xl font-bold text-blue-300">
              Formación Académica
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {formacionAcademica.map((formacion, index) => (
              <div 
                key={index} 
                className="bg-white/10 p-6 rounded-xl 
                           border border-blue-500/20 
                           hover:border-blue-500/50 
                           transition-all"
              >
                <div className="flex items-center mb-4">
                  {formacion.icono}
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-blue-300">
                      {formacion.nombre}
                    </h3>
                    <p className="text-white/60">{formacion.institucion}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-white/80">{formacion.estado}</p>
                  {formacion.periodos.map((periodo, periodoIndex) => (
                    <p key={periodoIndex} className="text-white/60">
                      {periodo}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <div className="flex items-center mb-8">
            <TrophyIcon className="w-12 h-12 text-yellow-500 mr-4" />
            <h2 className="text-3xl font-bold text-yellow-300">
              Logros Académicos Destacados
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {logrosAcademicos.map((logro, index) => (
              <div 
                key={index} 
                className="bg-white/10 p-6 rounded-xl 
                           border border-yellow-500/20 
                           hover:border-yellow-500/50 
                           transition-all group"
              >
                <div className="flex items-center mb-4">
                  {logro.icono}
                  <h3 className="ml-4 text-xl font-bold text-yellow-300">
                    {logro.nombre}
                  </h3>
                </div>
                <p className="text-white/80 mb-4">{logro.descripcion}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-400 font-semibold">
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