import React, { useState } from 'react';
import { 
  Rocket, 
  Code, 
  BookOpen, 
  Globe, 
  Lightbulb, 
  Target 
} from 'lucide-react';

const ProfessionalJourney: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const professionalSections = [
    {
      id: 'journey',
      icon: <Rocket className="w-8 h-8 text-purple-500" />,
      title: 'Mi Viaje Profesional',
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
            <h3 className="text-2xl font-bold mb-3 text-purple-300">El Camino de la Innovación</h3>
            <p className="text-white/80 leading-relaxed">
              Mi pasión por la tecnología comenzó en las aulas de la Universidad Autónoma Tomás Frías, donde descubrí el poder transformador de la informática. Cada línea de código, cada proyecto, es una oportunidad para resolver problemas y crear soluciones que impacten positivamente en mi comunidad.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 p-6 rounded-xl">
            <blockquote className="italic text-white/70 border-l-4 border-purple-500 pl-4">
              "La tecnología no se trata solo de código, se trata de construir puentes entre el conocimiento y la innovación social."
            </blockquote>
          </div>
        </div>
      )
    },
    {
      id: 'projects',
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'Proyectos Destacados',
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Aplicación de Servicios Locales',
              description: 'Una solución móvil que conecta usuarios con servicios locales en Potosí, utilizando Flutter y Firebase.',
              technologies: ['Flutter', 'Firebase', 'Mobile Development']
            },
            {
              title: 'Plataforma Educativa Interactiva',
              description: 'Sistema de gestión educativa con bases de datos en tiempo real, diseñado para mejorar el aprendizaje digital.',
              technologies: ['Node.js', 'Real-time Databases', 'Educational Tech']
            }
          ].map((project, index) => (
            <div 
              key={index} 
              className="bg-white/10 p-6 rounded-xl 
                         transform transition-all duration-300 
                         hover:scale-105 hover:bg-white/20 
                         border border-green-500/20"
            >
              <h4 className="text-xl font-bold mb-3 text-green-300">{project.title}</h4>
              <p className="text-white/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
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
          ))}
        </div>
      )
    },
    {
      id: 'skills',
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: 'Habilidades y Competencias',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-yellow-300">Tecnologías</h4>
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
              <h4 className="text-xl font-bold mb-4 text-yellow-300">Habilidades Blandas</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-yellow-500" />
                  <span>Resolución de Problemas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-yellow-500" />
                  <span>Aprendizaje Continuo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-yellow-500" />
                  <span>Colaboración Interdisciplinaria</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black 
                    text-white p-4 md:p-12 overflow-hidden">
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl 
                      rounded-3xl shadow-2xl overflow-hidden 
                      border border-white/10">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-800 to-indigo-900 
                           py-16 px-8 text-center relative">
          <div className="absolute top-6 right-6 flex space-x-4">
            <a 
              href="mailto:chelisimo27@gmail.com" 
              className="hover:text-purple-300 transition"
            >
              Contacto
            </a>
            <a 
              href="https://linkedin.com/in/marcelochoquecruz" 
              target="_blank" 
              className="hover:text-purple-300 transition"
            >
              LinkedIn
            </a>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-transparent 
                         bg-clip-text bg-gradient-to-r 
                         from-purple-300 to-indigo-200">
            Marcelo Choque Cruz
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Estudiante de Ingeniería Informática | Innovador Tech | Desarrollador de Soluciones Digitales
          </p>
        </header>

        {/* Interactive Sections */}
        <div className="p-8">
          <div className="flex justify-center space-x-4 mb-8">
            {professionalSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(
                  activeSection === section.id ? null : section.id
                )}
                className={`flex items-center space-x-3 px-6 py-3 
                            rounded-full transition-all duration-300 
                            ${activeSection === section.id 
                              ? 'bg-purple-600 text-white scale-105' 
                              : 'bg-white/10 hover:bg-white/20'}`}
              >
                {section.icon}
                <span className="font-semibold">{section.title}</span>
              </button>
            ))}
          </div>

          {/* Detailed Section Content */}
          {activeSection && (
            <div className="animate-fade-in-bottom p-8 
                            bg-white/5 rounded-3xl 
                            border border-white/10">
              {professionalSections.find(s => s.id === activeSection)?.content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalJourney;