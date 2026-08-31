// ========================================
// BEAUTY STYLE - PÁGINA DE SERVICIOS
// ========================================

// Importación de Link para navegar entre las diferentes páginas
// de la aplicación sin recargar el navegador.
import { Link } from "react-router-dom";


// ========================================
// COMPONENTE SERVICIOS
// ========================================

function Servicios() {
  return (
    <div className="servicios-page">


      {/* ========================================
          BARRA DE NAVEGACIÓN
      ======================================== */}

      <header className="navbar navbar-interna">

        {/* Logo de Beauty Style.
            Al hacer clic regresa a la página de inicio. */}
        <Link to="/" className="logo-link">
          Beauty Style
        </Link>


        {/* Menú principal de navegación */}
        <nav>

          {/* Página de inicio */}
          <Link to="/">
            Inicio
          </Link>

          {/* Página de servicios */}
          <Link to="/servicios">
            Servicios
          </Link>

          {/* Página donde el usuario puede consultar sus citas */}
          <Link to="/mis-citas">
            Mis citas
          </Link>

          {/* Página de contacto */}
          <Link to="/contacto">
            Contacto
          </Link>

        </nav>


        {/* Botones para iniciar sesión o crear una cuenta */}
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
          CONTENIDO PRINCIPAL
      ======================================== */}

      <main className="page servicios-content">


        {/* Título principal de la página */}
        <h1>
          Nuestros <span>Servicios</span>
        </h1>


        {/* Descripción general */}
        <p className="descripcion">
          Encuentra tratamientos de belleza diseñados para resaltar
          tu estilo y brindarte una experiencia personalizada.
        </p>


        {/* ========================================
            TARJETAS DE SERVICIOS
        ======================================== */}

        <div className="servicios-container">


          {/* ========================================
              SERVICIO 1 - CORTE DE CABELLO
          ======================================== */}

          <div className="card-servicio">

            <h2>
              💇 Corte de cabello
            </h2>

            <p>
              Estilos modernos y personalizados
              adaptados a tu personalidad.
            </p>

            {/* Permite agendar una nueva cita para este servicio */}
            <Link to="/citas">
              <button>
                Agendar cita
              </button>
            </Link>

          </div>


          {/* ========================================
              SERVICIO 2 - COLORACIÓN
          ======================================== */}

          <div className="card-servicio">

            <h2>
              🎨 Coloración
            </h2>

            <p>
              Cambios de look, tintes y retoques
              para renovar tu imagen.
            </p>

            <Link to="/citas">
              <button>
                Agendar cita
              </button>
            </Link>

          </div>


          {/* ========================================
              SERVICIO 3 - TRATAMIENTOS CAPILARES
          ======================================== */}

          <div className="card-servicio">

            <h2>
              💆 Tratamientos capilares
            </h2>

            <p>
              Hidratación y reparación para mantener
              un cabello saludable.
            </p>

            <Link to="/citas">
              <button>
                Agendar cita
              </button>
            </Link>

          </div>


          {/* ========================================
              SERVICIO 4 - MANICURE
          ======================================== */}

          <div className="card-servicio">

            <h2>
              💅 Manicure
            </h2>

            <p>
              Diseño, cuidado y decoración
              profesional de uñas.
            </p>

            <Link to="/citas">
              <button>
                Agendar cita
              </button>
            </Link>

          </div>


          {/* ========================================
              SERVICIO 5 - PEDICURE
          ======================================== */}

          <div className="card-servicio">

            <h2>
              🦶 Pedicure
            </h2>

            <p>
              Cuidado y embellecimiento
              para tus pies.
            </p>

            <Link to="/citas">
              <button>
                Agendar cita
              </button>
            </Link>

          </div>


          {/* ========================================
              SERVICIO 6 - MAQUILLAJE PROFESIONAL
          ======================================== */}

          <div className="card-servicio">

            <h2>
              💄 Maquillaje profesional
            </h2>

            <p>
              Maquillaje para eventos,
              celebraciones y ocasiones especiales.
            </p>

            <Link to="/citas">
              <button>
                Agendar cita
              </button>
            </Link>

          </div>


          {/* ========================================
              SERVICIO 7 - PEINADOS
          ======================================== */}

          <div className="card-servicio">

            <h2>
              ✨ Peinados
            </h2>

            <p>
              Peinados elegantes para bodas,
              eventos y momentos especiales.
            </p>

            <Link to="/citas">
              <button>
                Agendar cita
              </button>
            </Link>

          </div>


          {/* ========================================
              SERVICIO 8 - LIMPIEZA FACIAL
          ======================================== */}

          <div className="card-servicio">

            <h2>
              🌸 Limpieza facial
            </h2>

            <p>
              Tratamientos para cuidar
              y mejorar la apariencia de tu piel.
            </p>

            <Link to="/citas">
              <button>
                Agendar cita
              </button>
            </Link>

          </div>


        </div>

      </main>

    </div>
  );
}


// ========================================
// EXPORTACIÓN DEL COMPONENTE
// ========================================

// Permite utilizar Servicios dentro de App.jsx
// y registrarlo como una ruta de React Router.
export default Servicios;

