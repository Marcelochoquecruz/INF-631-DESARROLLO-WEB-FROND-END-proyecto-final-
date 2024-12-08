import { BrowserRouter as Router } from 'react-router-dom';
import HeaderNavigation from './components/head/HeaderNavigation';
import './App.css';
import { ThemeProvider } from './components/ThemeContext';
import AppRoutes from './routes'; // Importa las rutas
import fondoImage from './assets/fondo.jpg';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${fondoImage})`,
         
        }}>
        {/* Overlay para mejorar la legibilidad del contenido */}
        <div  />
        
        <Router>
          <div className="min-h-screen">
            <HeaderNavigation />
            {/* Aquí van las rutas que cambiarán el contenido según la navegación */}
             <main>
              {/* Las rutas definidas en AppRoutes se manejarán aquí */}
              <AppRoutes />
            </main>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
