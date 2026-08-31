// ========================================
// BEAUTY STYLE - PÁGINA MIS CITAS
// ========================================

// Importación de Link para navegar entre las páginas
// de la aplicación sin recargar el navegador.
import { Link } from "react-router-dom";


// ========================================
// COMPONENTE MIS CITAS
// ========================================

// Página donde el cliente puede consultar
// las citas que tiene registradas.
function MisCitas() {

  return (

    <div className="citas-page">


      {/* ========================================
          BARRA SUPERIOR
      ======================================== */}

      <header className="navbar navbar-interna">

        {/* Logo de Beauty Style.
            Permite regresar al inicio. */}
        <Link to="/" className="logo-link">
          Beauty Style
        </Link>


        {/* Menú principal */}
        <nav>

          <Link to="/">
            Inicio
          </Link>

          <Link to="/servicios">
            Servicios
          </Link>

          <Link to="/mis-citas">
            Mis citas
          </Link>

          <Link to="/contacto">
            Contacto
          </Link>

        </nav>


        {/* Botones de acceso y registro */}
        <div className="nav-actions">

          <Link to="/login">
            <button className="btn-login">
              Ingresar
            </button>
          </Link>


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

      <main className="mis-citas-content">


        {/* Tarjeta principal de Mis Citas */}
        <div className="mis-citas-card">


          {/* Encabezado */}
          <div className="citas-header">

            <h1>
              Mis <span>Citas</span>
            </h1>

            <p>
              Consulta el estado de tus reservas en Beauty Style.
            </p>

          </div>


          {/* ========================================
              CITA CONFIRMADA
          ======================================== */}

          <div className="cita-item">

            <h2>
              💇 Corte de cabello
            </h2>

            <p>
              📅 Fecha: 30/08/2026
            </p>

            <p>
              ⏰ Hora: 10:00 AM
            </p>

            <p>
              ✨ Estilista: Laura Martínez
            </p>

            <button className="btn-register">
              ✓ Confirmada
            </button>

          </div>


          {/* ========================================
              CITA PENDIENTE
          ======================================== */}

          <div className="cita-item">

            <h2>
              💅 Manicure
            </h2>

            <p>
              📅 Fecha: 05/09/2026
            </p>

            <p>
              ⏰ Hora: 2:00 PM
            </p>

            <p>
              ✨ Estilista: Sofía Rodríguez
            </p>

            <button className="btn-login">
              🟡 Pendiente
            </button>

          </div>


          {/* ========================================
              BOTÓN PARA AGENDAR OTRA CITA
          ======================================== */}

          <div className="mis-citas-accion">

            <Link to="/citas">

              <button className="btn-primary">
                Agendar nueva cita
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

// Permite utilizar MisCitas desde App.jsx.
export default MisCitas;

