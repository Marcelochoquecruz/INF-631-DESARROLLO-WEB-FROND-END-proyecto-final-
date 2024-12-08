import { Routes, Route } from 'react-router-dom';

// Importa tus páginas
import Principal from '../pages/Principal';
import Proyectos from '../pages/Proyectos';
import Matematicas from '../pages/Matematicas';
import DesarrolloMovil from '../pages/DesarrolloMovil';
import Certificaciones from '../pages/Certificaciones';
import Contacto from '../pages/Contacto';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/matematicas" element={<Matematicas />} />
      <Route path="/desarrollo-movil" element={<DesarrolloMovil />} />
      <Route path="/certificaciones" element={<Certificaciones />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};

export default AppRoutes;