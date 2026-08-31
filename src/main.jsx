// ========================================
// BEAUTY STYLE - PUNTO DE ENTRADA
// ========================================

// Importación de herramientas necesarias de React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Importación de estilos generales de la aplicación
import "./index.css";

// Importación del componente principal
import App from "./App.jsx";


// ========================================
// RENDERIZADO DE LA APLICACIÓN
// ========================================

// Se obtiene el elemento raíz del archivo index.html
// y se monta la aplicación React dentro de él.
createRoot(document.getElementById("root")).render(

  // StrictMode ayuda a detectar posibles problemas
  // durante el desarrollo de la aplicación.
  <StrictMode>

    {/* Componente principal de Beauty Style */}
    <App />

  </StrictMode>

);