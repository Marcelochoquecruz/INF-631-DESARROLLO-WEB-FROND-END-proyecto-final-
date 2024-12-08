import { useState, useContext } from 'react';
import { 
  Code, 
  Smartphone, 
  Database, 
  PenTool, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { ThemeContext } from './ThemeContext';

const menuItems = [
  {
    titulo: 'Desarrollo Frontend',
    descripcion: 'Interfaces atractivas y funcionales',
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500',
    tecnologias: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    titulo: 'Desarrollo Móvil',
    descripcion: 'Aplicaciones Flutter de alto impacto',
    icon: Smartphone,
    gradient: 'from-green-500 to-emerald-500',
    tecnologias: ['Flutter', 'Dart', 'Firebase']
  },
  {
    titulo: 'Soluciones Backend',
    descripcion: 'Arquitecturas escalables y eficientes',
    icon: Database,
    gradient: 'from-purple-500 to-indigo-500',
    tecnologias: ['Node.js', 'Python', 'Express.js']
  },
  {
    titulo: 'Matemáticas & Tecnología',
    descripcion: 'Integrando análisis avanzado con desarrollo',
    icon: Layers,
    gradient: 'from-orange-500 to-amber-500',
    tecnologias: ['MATLAB', 'Modelado Matemático', 'Análisis de Datos']
  }
];

const Menu = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const themeContext = useContext(ThemeContext);

  const iconColor = (index: number) => hoveredIndex === index
    ? 'text-current'
    : themeContext?.theme === 'dark' ? 'text-white' : 'text-slate-700';

  return (
    <div className='bg-white dark:bg-gray-900 transition-colors duration-300'>
      <section className='container mx-auto px-4 py-12'>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div 
                key={index}
                className={`
                  bg-gradient-to-br ${item.gradient} 
                  rounded-xl p-6 shadow-lg transform transition-all 
                  duration-300 hover:scale-105 hover:shadow-xl
                  text-white
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center mb-4">
                  <Icon 
                    className={`w-10 h-10 mr-4 ${iconColor(index)}`} 
                  />
                  <h3 className="text-xl font-bold">{item.titulo}</h3>
                </div>
                <p className="text-sm mb-4 opacity-80">{item.descripcion}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tecnologias.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="
                        bg-white/20 
                        px-2 py-1 
                        rounded-full 
                        text-xs 
                        font-medium
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Menu;
