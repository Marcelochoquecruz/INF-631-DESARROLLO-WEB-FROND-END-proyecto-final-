import React, { useState, useContext } from 'react';
import { 
  Code,
  Smartphone,
  Database,
  Layers,
  Star,
  GitBranch,
  MartiniIcon,
  Package
} from 'lucide-react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaDocker,
  FaFile
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiFlutter, 
  SiFirebase, 
  SiTypescript, 
  SiExpress, 
  SiDart,
  SiJavascript,
  SiIrobot,
  SiWolframlanguage,
  SiGenius,
  SiImagej,
  
 
  SiLatex,
  SiPostgresql,
  SiPostman,
  SiDjango,
  SiMongodb,
  SiNextdotjs,
 
  SiFigma
} from 'react-icons/si';
import { ThemeContext } from '../components/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

const Tecnologias = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const { theme } = useTheme();

  // Define the props interface
  interface SkillLevelStarsProps {
    level: number;
  }

  // Helper component for skill level stars
  const SkillLevelStars: React.FC<SkillLevelStarsProps> = ({ level }) => {
    return (
      <div className="flex justify-center mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            className={`w-4 h-4 mx-0.5 ${
              star <= level 
                ? 'text-yellow-500 fill-current' 
                : 'text-gray-300'
            }`} 
          />
        ))}
      </div>
    );
  };

  interface Technology {
    nombre: string;
    link: string;
    icono: React.ComponentType;
    color: string;
    textColor: string;
    nivelHabilidad: number;
  }

  interface Category {
    color: string;
    titulo: string;
    icon: React.ComponentType;
    tecnologias: Technology[];
  }

  const menuItems: Category[] = [
    {
      titulo: 'Frontend',
      icon: Code,
      color: 'bg-gradient-to-r from-gray-900 to-gray-700 text-white',
      tecnologias: [
        { 
          nombre: 'HTML5', 
          icono: FaHtml5, 
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          color: 'bg-orange-500 text-white',
          textColor: 'text-orange-50',
          nivelHabilidad: 5
        },
        { 
          nombre: 'CSS3', 
          icono: FaCss3, 
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          color: 'bg-blue-500 text-white',
          textColor: 'text-blue-50',
          nivelHabilidad: 5
        },
        { 
          nombre: 'JavaScript', 
          icono: SiJavascript, 
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          color: 'bg-yellow-500 text-white',
          textColor: 'text-yellow-50',
          nivelHabilidad: 4
        },
        { 
          nombre: 'TypeScript', 
          icono: SiTypescript, 
          link: 'https://www.typescriptlang.org/',
          color: 'bg-blue-600 text-white',
          textColor: 'text-blue-50',
          nivelHabilidad: 4
        },
        { 
          nombre: 'React', 
          icono: FaReact, 
          link: 'https://reactjs.org',
          color: 'bg-sky-500 text-white',
          textColor: 'text-sky-50',
          nivelHabilidad: 4
        },
        { 
          nombre: 'Next.js', 
          icono: SiNextdotjs, 
          link: 'https://nextjs.org/',
          color: 'bg-green-500 text-white',
          textColor: 'text-gray-50',
          nivelHabilidad: 3
        },
        { 
          nombre: 'Tailwind', 
          icono: SiTailwindcss, 
          link: 'https://tailwindcss.com/',
          color: 'bg-teal-500 text-white',
          textColor: 'text-teal-50',
          nivelHabilidad: 4
        },
        { 
          nombre: 'Bootstrap', 
          icono: FaBootstrap, 
          link: 'https://getbootstrap.com/',
          color: 'bg-purple-600 text-white',
          textColor: 'text-purple-50',
          nivelHabilidad: 3
        },
        { 
          nombre: 'Figma', 
          icono: SiFigma, 
          link: 'https://www.figma.com/',
          color: 'bg-pink-500 text-white',
          textColor: 'text-pink-50',
          nivelHabilidad: 4
        }
      ]
    },
    {
      titulo: 'Móvil',
      icon: Smartphone,
      color: 'bg-gradient-to-r from-gray-900 to-gray-700 text-white',
      tecnologias: [
        { 
          nombre: 'Flutter', 
          icono: SiFlutter, 
          link: 'https://flutter.dev/',
          color: 'bg-cyan-500 text-white',
          textColor: 'text-cyan-50 ',
          nivelHabilidad: 4
        },
        { 
          nombre: 'Dart', 
          icono: SiDart, 
          link: 'https://dart.dev/',
          color: 'bg-blue-700 text-white',
          textColor: 'text-blue-50',
          nivelHabilidad: 4
        },
        { 
          nombre: 'Firebase', 
          icono: SiFirebase, 
          link: 'https://firebase.google.com/',
          color: 'bg-orange-500 text-white',
          textColor: 'text-orange-50',
          nivelHabilidad: 4
        },
        { 
          nombre: 'Provider', 
          icono: Package, 
          link: 'https://pub.dev/packages/provider',
          color: 'bg-green-600 text-white',
          textColor: 'text-green-50',
          nivelHabilidad: 3
        },
        { 
          nombre: 'GetX', 
          icono: Package, 
          link: 'https://pub.dev/packages/get',
          color: 'bg-pink-600 text-white',
          textColor: 'text-pink-50',
          nivelHabilidad: 3
        },
        { 
          nombre: 'Bloc', 
          icono: Package, 
          link: 'https://bloclibrary.dev/',
          color: 'bg-indigo-600 text-white',
          textColor: 'text-indigo-50',
          nivelHabilidad: 3
        }
      ]
    },
    {
      titulo: 'Backend',
      icon: Database,
      color: 'bg-gradient-to-r from-gray-900 to-gray-700 text-white',
      tecnologias: [
        { 
          nombre: 'Node.js', 
          icono: FaNodeJs, 
          link: 'https://nodejs.org/',
          color: 'bg-green-600 text-white',
          textColor: 'text-green-50',
          nivelHabilidad: 4
        },
        { 
          nombre: 'Python', 
          icono: FaPython, 
          link: 'https://www.python.org/',
          color: 'bg-yellow-500 text-white',
          textColor: 'text-yellow-50',
          nivelHabilidad: 5
        },
        { 
          nombre: 'Express', 
          icono: SiExpress, 
          link: 'https://expressjs.com/',
          color: 'bg-purple-500 text-white',
          textColor: 'text-purple-50',
          nivelHabilidad: 4
        },
        { 
          nombre: 'Django', 
          icono: SiDjango, 
          link: 'https://www.djangoproject.com/',
          color: 'bg-green-700 text-white',
          textColor: 'text-green-50',
          nivelHabilidad: 3
        },
        { 
          nombre: 'MongoDB', 
          icono: SiMongodb, 
          link: 'https://www.mongodb.com/',
          color: 'bg-green-500 text-white',
          textColor: 'text-green-50',
          nivelHabilidad: 4
        },
        { 
          nombre: 'PostgreSQL', 
          icono: SiPostgresql, 
          link: 'https://www.postgresql.org/',
          color: 'bg-blue-600 text-white',
          textColor: 'text-blue-50',
          nivelHabilidad: 4
        }
      ]
    },
    {
      titulo: 'Herramientas',
      icon: GitBranch,
      color: 'bg-gradient-to-r from-gray-900 to-gray-700 text-white',
      tecnologias: [
        { 
          nombre: 'Git', 
          icono: FaGit, 
          link: 'https://git-scm.com/',
          color: 'bg-yellow-500 text-white',
          textColor: 'text-yellow-50',
          nivelHabilidad: 5
        },
        { 
          nombre: 'GitHub', 
          icono: FaGithub, 
          link: 'https://github.com/',
          color: 'bg-gray-800 text-white',
          textColor: 'text-gray-50',
          nivelHabilidad: 5
        },
        { 
          nombre: 'Docker', 
          icono: FaDocker, 
          link: 'https://www.docker.com/',
          color: 'bg-blue-500 text-white',
          textColor: 'text-blue-50',
          nivelHabilidad: 3
        },
        { 
          nombre: 'Postman', 
          icono: SiPostman, 
          link: 'https://www.postman.com/',
          color: 'bg-red-500 text-white',
          textColor: 'text-red-50',
          nivelHabilidad: 4
        }
      ]
    },
    {
      titulo: 'Matemáticas',
      icon: Layers,
      color: 'bg-gradient-to-r from-gray-900 to-gray-700 text-white',
      tecnologias: [
        { 
          nombre: 'LaTeX', 
          icono: SiLatex, 
          link: 'https://www.latex-project.org/',
          color: 'bg-green-600 text-white',
          textColor: 'text-green-50',
          nivelHabilidad: 4
        },
        { 
          nombre: 'MATLAB', 
          icono: MartiniIcon , 
          link: 'https://www.mathworks.com/products/matlab.html',
          color: 'bg-orange-500 text-white',
          textColor: 'text-orange-50',
          nivelHabilidad: 4
        },
        { 
          nombre: 'Maple', 
          icono: SiWolframlanguage, 
          link: 'https://www.maplesoft.com/',
          color: 'bg-purple-500 text-white',
          textColor: 'text-purple-50',
          nivelHabilidad: 3
        },
        { 
          nombre: 'GeoGebra', 
          icono: SiGenius, 
          link: 'https://www.geogebra.org/',
          color: 'bg-teal-500 text-white',
          textColor: 'text-teal-50',
          nivelHabilidad: 3
        },
        { 
          nombre: 'Scientific WorkPlace', 
          icono: FaFile,
          link: 'https://www.sciword.co.uk/',
          color: 'bg-blue-600 text-white',
          textColor: 'text-blue-50',
          nivelHabilidad: 3
        },
        { 
          nombre: 'Wolfram Alpha', 
          icono: SiWolframlanguage, 
          link: 'https://www.wolframalpha.com/',
          color: 'bg-red-500 text-white',
          textColor: 'text-red-50',
          nivelHabilidad: 3
        }
      ]
    },
    {
      titulo: 'Tecnologías de IA',
      icon: Code,
      color: 'bg-gradient-to-r from-gray-900 to-gray-700 text-white',
      tecnologias: [
        { 
          nombre: 'Leonardo AI', 
          icono: SiIrobot, 
          link: 'https://leonardo.ai/',
          color: 'bg-purple-500 text-white',
          textColor: 'text-purple-50',
          nivelHabilidad: 4
        },
        { 
          nombre: 'Photopea', 
          icono: SiImagej, 
          link: 'https://www.photopea.com/',
          color: 'bg-blue-600 text-white',
          textColor: 'text-deepblue-50',
          nivelHabilidad: 4
        },
        { 
          nombre: 'Canva', 
          icono: Package, 
          link: 'https://www.canva.com/es_es/',
          color: 'bg-green-500 text-white',
          textColor: 'text-green-50',
          nivelHabilidad: 3
        },
        { 
          nombre: 'AI Photo Modifiers', 
          icono: Package, 
          link: 'https://www.example.com/ai-photo-modifiers',
          color: 'bg-indigo-500 text-white',
          textColor: 'text-indigo-50',
          nivelHabilidad: 3
        }
      ]
    }
  ];


  const CategoryCard: React.FC<{ 
    category: Category, 
    isSelected: boolean,
    onSelect: () => void,
    className?: string;
  }> = ({ category, isSelected, onSelect, className }) => {
    return (
      <div 
        onClick={onSelect}
        className={`
          bg-gradient-to-br ${category.color} 
          rounded-3xl shadow-2xl overflow-hidden 
          transform transition-all duration-300 
          hover:scale-105 hover:shadow-3xl 
          ${isSelected ? 'border-2 border-yellow-500' : ''} 
          ${className}
        `}
      >
        <div className="p-6">
          <div className="flex items-center mb-4">
            <category.icon />
            <h2 className="text-white text-lg">{category.titulo}</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {category.tecnologias.map((tech, techIndex) => (
              <a 
                key={techIndex} 
                href={tech.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={` ${tech.color} rounded-xl p-3 flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg`}
              >
                {tech.icono ? (
                  <tech.icono />
                ) : (
                  <div className={`w-8 h-8 ${tech.textColor} mb-2 flex items-center justify-center text-center`}>
                    ?
                  </div>
                )}
                <span className={`text-sm font-semibold ${tech.textColor} text-center`}>
                  {tech.nombre}
                </span>
                <SkillLevelStars level={tech.nivelHabilidad} />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} flex items-center justify-center p-4 font-sans`}>
      <div className="w-full max-w-6xl">
        <h1 className={`text-lg font-bold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Tecnologías</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <CategoryCard 
              key={index}
              category={item}
              isSelected={selectedCard === index}
              onSelect={() => setSelectedCard(index)}
              className="cursor-pointer"
            />
          ))}
        </div>
        <div className="mt-8">
          
         
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;