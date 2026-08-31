// ========================================
// BEAUTY STYLE - PÁGINA DE AGENDAMIENTO
// ========================================

// Importación de useState para controlar
// los datos y el estado de la cita.
import { useState } from "react";

// Importación de Link para navegar entre páginas.
import { Link } from "react-router-dom";


// ========================================
// COMPONENTE CITAS
// ========================================

function Citas() {

  // Estado que controla si la cita ya fue registrada.
  const [citaConfirmada, setCitaConfirmada] = useState(false);

  // Estado que almacena la información ingresada
  // por el usuario en el formulario.
  const [datosCita, setDatosCita] = useState({
    nombre: "",
    fecha: "",
    hora: "",
    servicio: "",
    estilista: ""
  });


  // ========================================
  // MANEJO DEL FORMULARIO
  // ========================================

  const handleConfirmar = (e) => {

    // Evita que el formulario recargue la página.
    e.preventDefault();

    // Obtiene los datos enviados desde el formulario.
    const formulario = new FormData(e.target);

    // Guarda la información de la cita.
    setDatosCita({
      nombre: formulario.get("nombre"),
      fecha: formulario.get("fecha"),
      hora: formulario.get("hora"),
      servicio: formulario.get("servicio"),
      estilista: formulario.get("estilista")
    });

    // Cambia la pantalla al mensaje de confirmación.
    setCitaConfirmada(true);
  };


  // ========================================
  // FUNCIÓN PARA AGENDAR OTRA CITA
  // ========================================

  const nuevaCita = () => {

    // Oculta la pantalla de confirmación.
    setCitaConfirmada(false);

    // Limpia los datos anteriores.
    setDatosCita({
      nombre: "",
      fecha: "",
      hora: "",
      servicio: "",
      estilista: ""
    });
  };


  return (
    <div className="citas-page">


      {/* ========================================
          BARRA SUPERIOR
      ======================================== */}

      <header className="navbar navbar-interna">

        {/* Logo */}
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

          <Link to="/citas">
            Citas
          </Link>

          <Link to="/contacto">
            Contacto
          </Link>

        </nav>


        {/* Botones de acceso */}
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

      <main className="citas-content">


        {!citaConfirmada ? (

          /* ========================================
             FORMULARIO DE CITA
          ======================================== */

          <div className="citas-card">

            <div className="citas-header">

              <h1>
                Agendar <span>Cita</span>
              </h1>

              <p>
                Reserva tu servicio de belleza
                de manera rápida y sencilla.
              </p>

            </div>


            <form onSubmit={handleConfirmar}>


              {/* Nombre completo */}

              <div className="form-group">

                <label>
                  Nombre completo
                </label>

                <input
                  type="text"
                  name="nombre"
                  placeholder="Ingresa tu nombre"
                  required
                />

              </div>


              {/* Fecha */}

              <div className="form-group">

                <label>
                  Fecha
                </label>

                <input
                  type="date"
                  name="fecha"
                  required
                />

              </div>


              {/* Hora */}

              <div className="form-group">

                <label>
                  Hora
                </label>

                <input
                  type="time"
                  name="hora"
                  required
                />

              </div>


              {/* Servicio */}

              <div className="form-group">

                <label>
                  Servicio
                </label>

                <select
                  name="servicio"
                  defaultValue=""
                  required
                >

                  <option value="" disabled>
                    Selecciona un servicio
                  </option>

                  <option>
                    Corte de cabello
                  </option>

                  <option>
                    Coloración
                  </option>

                  <option>
                    Tratamientos capilares
                  </option>

                  <option>
                    Manicure
                  </option>

                  <option>
                    Pedicure
                  </option>

                  <option>
                    Maquillaje profesional
                  </option>

                  <option>
                    Peinados
                  </option>

                  <option>
                    Limpieza facial
                  </option>

                </select>

              </div>


              {/* Estilista */}

              <div className="form-group">

                <label>
                  Estilista
                </label>

                <select
                  name="estilista"
                  defaultValue=""
                  required
                >

                  <option value="" disabled>
                    Selecciona un estilista
                  </option>

                  <option>
                    Laura Martínez
                  </option>

                  <option>
                    Sofía Rodríguez
                  </option>

                  <option>
                    Valentina Gómez
                  </option>

                </select>

              </div>


              {/* Botón de confirmación */}

              <button
                type="submit"
                className="auth-button"
              >
                Confirmar cita
              </button>

            </form>


            <p className="auth-footer">
              Tu solicitud de cita será registrada
              y posteriormente confirmada.
            </p>


            <Link to="/" className="back-home">
              ← Volver al inicio
            </Link>

          </div>


        ) : (


          /* ========================================
             CONFIRMACIÓN DE LA CITA
          ======================================== */

          <div className="cita-confirmacion">

            {/* Icono de confirmación */}

            <div className="confirmacion-icono">
              ✓
            </div>


            {/* Mensaje principal */}

            <h1>
              ¡Cita <span>registrada!</span>
            </h1>

            <p>
              Tu solicitud de cita ha sido registrada
              correctamente.
            </p>


            {/* ========================================
                RESUMEN DE LA CITA
            ======================================== */}

            <div className="resumen-cita">

              <h2>
                Resumen de tu cita
              </h2>


              <div className="resumen-item">

                <strong>
                  👤 Cliente
                </strong>

                <span>
                  {datosCita.nombre}
                </span>

              </div>


              <div className="resumen-item">

                <strong>
                  📅 Fecha
                </strong>

                <span>
                  {datosCita.fecha}
                </span>

              </div>


              <div className="resumen-item">

                <strong>
                  🕐 Hora
                </strong>

                <span>
                  {datosCita.hora}
                </span>

              </div>


              <div className="resumen-item">

                <strong>
                  💇 Servicio
                </strong>

                <span>
                  {datosCita.servicio}
                </span>

              </div>


              <div className="resumen-item">

                <strong>
                  ✨ Estilista
                </strong>

                <span>
                  {datosCita.estilista}
                </span>

              </div>

            </div>


            <p className="confirmacion-detalle">
              Pronto recibirás la confirmación de tu reserva.
            </p>


            {/* ========================================
                BOTONES DE ACCIÓN
            ======================================== */}

            <div className="confirmacion-acciones">

              <Link to="/">
                <button className="btn-register">
                  Volver al inicio
                </button>
              </Link>


              <button
                className="btn-login"
                onClick={nuevaCita}
              >
                Agendar otra cita
              </button>

            </div>

          </div>

        )}

      </main>

    </div>
  );
}


// ========================================
// EXPORTACIÓN DEL COMPONENTE
// ========================================

export default Citas;

