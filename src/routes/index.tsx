import { Routes, Route } from 'react-router-dom';

// Importa tus páginas
import Principal from '../pages/Principal';
import Proyectos from '../pages/Proyectos';
import Tecnologias from '../pages/Tecnologias';
import DesarrolloMovil from '../pages/DesarrolloMovil';
import Certificaciones from '../pages/Certificaciones';
import Contacto from '../pages/Contacto';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/tecnologias" element={<Tecnologias />} />
      <Route path="/desarrollo-movil" element={<DesarrolloMovil />} />
      <Route path="/certificaciones" element={<Certificaciones />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};

export default AppRoutes;