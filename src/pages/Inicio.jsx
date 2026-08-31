// ========================================
// BEAUTY STYLE - PÁGINA DE INICIO
// ========================================

// Importación de Link para navegar entre páginas
// sin recargar toda la aplicación.
import { Link } from "react-router-dom";


// ========================================
// COMPONENTE INICIO
// ========================================

function Inicio() {
  return (
    <div className="beauty-home">


      {/* ========================================
          BARRA DE NAVEGACIÓN PRINCIPAL
      ======================================== */}

      <header className="navbar">

        {/* Nombre y logo del sistema */}
        <h1>
          Beauty Style
        </h1>


        {/* Enlaces principales de navegación */}
        <nav>

          {/* Página de inicio */}
          <Link to="/">
            Inicio
          </Link>


          {/* Página de servicios */}
          <Link to="/servicios">
            Servicios
          </Link>


          {/* Página donde se consultan las citas registradas */}
          <Link to="/mis-citas">
            Mis Citas
          </Link>


          {/* Página de contacto */}
          <Link to="/contacto">
            Contacto
          </Link>

        </nav>


        {/* ========================================
            BOTONES DE ACCESO
        ======================================== */}

        <div className="nav-actions">

          {/* Acceso al inicio de sesión */}
          <Link to="/login">
            <button className="btn-login">
              Ingresar
            </button>
          </Link>


          {/* Acceso al registro de usuarios */}
          <Link to="/registro">
            <button className="btn-register">
              Registrarse
            </button>
          </Link>

        </div>

      </header>


      {/* ========================================
          SECCIÓN PRINCIPAL / HERO
      ======================================== */}

      <section className="hero">


        {/* Texto principal de bienvenida */}
        <div className="hero-text">

          {/* Título principal */}
          <h2>
            <span>Tu belleza</span>
            <br />
            nuestra pasión
          </h2>


          {/* Descripción del sistema */}
          <p>
            Agenda tus citas de belleza de manera rápida,
            sencilla y personalizada.
          </p>


          {/* ========================================
              BOTÓN PARA AGENDAR CITA
          ======================================== */}

          <Link to="/citas">
            <button className="btn-primary">
              Agendar cita
            </button>
          </Link>


          {/* ========================================
              BOTÓN PARA VER SERVICIOS
          ======================================== */}

          <Link to="/servicios">
            <button className="btn-secondary">
              Ver servicios
            </button>
          </Link>

        </div>


        {/* ========================================
            IMAGEN PRINCIPAL
        ======================================== */}

        <div className="hero-image">

          {/* Imagen ubicada dentro de la carpeta public */}
          <img
            src="/salon.jpeg"
            alt="Salón de belleza Beauty Style"
          />

        </div>

      </section>


      {/* ========================================
          VENTAJAS DEL SERVICIO
      ======================================== */}

      <section className="advantages">


        {/* ========================================
            VENTAJA 1
        ======================================== */}

        <div>

          <h3>
            ✨ Profesionales
          </h3>

          <p>
            Estilistas preparados para ti.
          </p>

        </div>


        {/* ========================================
            VENTAJA 2
        ======================================== */}

        <div>

          <h3>
            💗 Calidad
          </h3>

          <p>
            Servicios con atención personalizada.
          </p>

        </div>


        {/* ========================================
            VENTAJA 3
        ======================================== */}

        <div>

          <h3>
            📅 Fácil reserva
          </h3>

          <p>
            Agenda tu cita en pocos pasos.
          </p>

        </div>


      </section>

    </div>
  );
}


// ========================================
// EXPORTACIÓN DEL COMPONENTE
// ========================================

// Permite utilizar este componente desde App.jsx.
export default Inicio;

