// pages/Principal.tsx
import Menu from '../components/menu';
import Footer from '../components/footer';
import Contenidop from './contenidop';
import Carrousel from '../components/slider';

const Principal = () => {
  return (
    <div>
      {/* Otro contenido específico de la página principal */}
      <Menu />
      <Carrousel />
      <Contenidop/>
      <Footer/>
    </div>
  );
};

export default Principal;