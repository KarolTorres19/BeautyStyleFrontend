// ========================================
// BEAUTY STYLE - COMPONENTE PRINCIPAL
// ========================================

// Importación de herramientas de React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importación de estilos generales
import "./App.css";

// Importación de las páginas del sistema
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Citas from "./pages/Citas";
import Contacto from "./pages/Contacto";
import MisCitas from "./pages/MisCitas";


// ========================================
// COMPONENTE PRINCIPAL DE LA APLICACIÓN
// ========================================

function App() {
  return (
    <BrowserRouter>

      {/* ========================================
          RUTAS PRINCIPALES DEL SISTEMA
      ======================================== */}

      <Routes>

        {/* Página principal de Beauty Style */}
        <Route
          path="/"
          element={<Inicio />}
        />


        {/* Página donde se muestran los servicios */}
        <Route
          path="/servicios"
          element={<Servicios />}
        />


        {/* Página de inicio de sesión */}
        <Route
          path="/login"
          element={<Login />}
        />


        {/* Página para registrar nuevos usuarios */}
        <Route
          path="/registro"
          element={<Registro />}
        />


        {/* Página para agendar una cita */}
        <Route
          path="/mis-citas"
          element={<MisCitas />}
        />

        <Route
          path="/mis-citas"
          element={<MisCitas />}
        />

        {/* Página de contacto */}
        <Route
          path="/contacto"
          element={<Contacto />}
        />

      </Routes>

    </BrowserRouter>
  );
}


// ========================================
// EXPORTACIÓN DEL COMPONENTE
// ========================================

export default App;

