// pages/Principal.tsx
import Menu from '../components/menu';
import Footer from '../components/footer';
import Contenidop from './contenidop';

const Principal = () => {
  return (
    <div>
      {/* Otro contenido específico de la página principal */}
      <Menu />
      <Contenidop/>
      <Footer/>
    </div>
  );
};

export default Principal;