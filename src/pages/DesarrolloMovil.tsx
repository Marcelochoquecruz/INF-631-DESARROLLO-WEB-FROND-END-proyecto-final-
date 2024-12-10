import React from 'react';
import { 
  Rocket, 
  Code, 
  Target, 
  Lightbulb, 
  Globe, 
  BookOpen 
} from 'lucide-react';
import perfilGif from '../assets/perfil.gif';

const ComprehensivePorfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black 
                    text-white p-4 md:p-8 overflow-hidden">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg 
                      rounded-3xl shadow-2xl p-8 space-y-12">
        {/* Header with Profile */}
        <header className="flex items-center space-x-8 
                           bg-white/5 p-8 rounded-3xl 
                           border border-white/10">
          <div className="w-64 h-64 rounded-full 
                          border-4 border-purple-500 
                          overflow-hidden shadow-2xl">
            <img 
              src={perfilGif} 
              alt="Marcelo Choque Cruz" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2 
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-purple-300 to-indigo-200">
              Marcelo Choque Cruz
            </h1>
            <p className="text-xl text-white/80 mb-4">
              Estudiante de Ingeniería Informática | Innovador Tech
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:chelisimo27@gmail.com" 
                className="px-4 py-2 bg-purple-600 
                           rounded-full hover:bg-purple-700 
                           transition-all"
              >
                Contacto
              </a>
              <a 
                href="https://linkedin.com/in/marcelochoquecruz" 
                target="_blank" 
                className="px-4 py-2 border border-white/20 
                           rounded-full hover:bg-white/10 
                           transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        {/* Mi Viaje Profesional */}
        <section className="bg-white/5 p-8 rounded-3xl 
                            border border-white/10">
          <div className="flex items-center mb-6">
            <Rocket className="w-10 h-10 text-purple-500 mr-4" />
            <h2 className="text-3xl font-bold text-purple-300">
              Mi Viaje Profesional
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-xl 
                            hover:bg-white/20 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                Inicios y Motivación
              </h3>
              <p className="text-white/80 leading-relaxed">
                Desde mis primeros días en la Universidad Autónoma Tomás Frías, 
                descubrí mi pasión por transformar ideas en soluciones tecnológicas. 
                Cada proyecto es una oportunidad para resolver problemas y crear 
                un impacto positivo en mi comunidad.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl 
                            hover:bg-white/20 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                Visión Académica
              </h3>
              <p className="text-white/80 leading-relaxed">
                Mi trayectoria académica no se limita al código. Busco constantemente 
                integrar conocimientos de matemáticas, contabilidad y tecnología 
                para crear soluciones innovadoras y multidisciplinarias.
              </p>
            </div>
          </div>
        </section>

        {/* Proyectos Destacados */}
        <section className="bg-white/5 p-8 rounded-3xl 
                            border border-white/10">
          <div className="flex items-center mb-6">
            <Code className="w-10 h-10 text-green-500 mr-4" />
            <h2 className="text-3xl font-bold text-green-300">
              Proyectos Destacados
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/10 p-6 rounded-xl 
                            hover:bg-white/20 transition-all">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-green-300">
                  Aplicación de Servicios Locales
                </h3>
                <span className="text-white/60">2023</span>
              </div>
              <p className="text-white/80 mb-4">
                Desarrollé una aplicación móvil en Flutter que conecta usuarios 
                con servicios locales en Potosí. El proyecto integra Firebase 
                para autenticación y gestión de datos, proporcionando una 
                solución tecnológica para el mercado local.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'Firebase', 'Mobile Development'].map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-green-900/50 text-green-300 
                               px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl 
                            hover:bg-white/20 transition-all">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-green-300">
                  Plataforma Educativa Interactiva
                </h3>
                <span className="text-white/60">2022</span>
              </div>
              <p className="text-white/80 mb-4">
                Creé un sistema de gestión educativa con bases de datos en 
                tiempo real, diseñado para mejorar el aprendizaje digital. 
                El proyecto incluye funcionalidades de colaboración y 
                seguimiento del progreso de los estudiantes.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Real-time Databases', 'Educational Tech'].map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-green-900/50 text-green-300 
                               px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades y Tecnologías */}
        <section className="bg-white/5 p-8 rounded-3xl 
                            border border-white/10">
          <div className="flex items-center mb-6">
            <Lightbulb className="w-10 h-10 text-yellow-500 mr-4" />
            <h2 className="text-3xl font-bold text-yellow-300">
              Habilidades y Tecnologías
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">
                Tecnologías
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  'Python', 'JavaScript', 'Flutter', 
                  'Java', 'C++', 'Node.js',
                  'Firebase', 'MySQL', 'Git'
                ].map((skill) => (
                  <div 
                    key={skill} 
                    className="bg-yellow-900/30 text-yellow-300 
                               p-3 rounded-lg text-center 
                               transform transition-all 
                               hover:scale-110"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">
                Habilidades Blandas
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Target, text: 'Resolución de Problemas' },
                  { icon: BookOpen, text: 'Aprendizaje Continuo' },
                  { icon: Globe, text: 'Colaboración Interdisciplinaria' }
                ].map(({ icon: Icon, text }) => (
                  <div 
                    key={text} 
                    className="flex items-center space-x-3 
                               bg-yellow-900/20 p-3 rounded-lg"
                  >
                    <Icon className="w-6 h-6 text-yellow-500" />
                    <span className="text-white/80">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComprehensivePorfolio;