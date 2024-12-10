import React from 'react';
import Footer from '../components/footer';

const Contacto: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-black dark:to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Contacto
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Ponte en contacto con nosotros completando el formulario a continuación.
          </p>
        </div>

        <div className="bg-gradient-to-br from-black via-blue-900 to-gray-900 text-white p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Formulario enviado correctamente');
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium opacity-80 mb-2"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                placeholder="Escribe tu nombre completo"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium opacity-80 mb-2"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                placeholder="tuemail@ejemplo.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium opacity-80 mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 text-sm font-medium flex items-center justify-center"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
