import React from 'react';
import { Github, Linkedin, Mail, PhoneCall } from 'lucide-react';

const ProfessionalFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-blue-900 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-4 text-white">Contacto</h3>
          <div className="flex items-center space-x-3">
            <Mail className="text-blue-400" />
            <span>chelisimo27@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <PhoneCall className="text-blue-400" />
            <span>+591 72413102</span>
          </div>
        </div>

        {/* Professional Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-4 text-white">Redes Profesionales</h3>
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/marcelochoquecruz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/marcelochoquecruz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://orcid.org/0009-0003-1447-2826" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              ORCID
            </a>
          </div>
        </div>

        {/* Interests */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-4 text-white">Intereses</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Matemáticas Aplicadas</li>
            <li>Desarrollo de Software Educativo</li>
            <li>Tecnologías para Mercados Emergentes</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-4 border-t border-gray-700 text-gray-400">
        <p>© 2024 Marcelo Choque Cruz. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;