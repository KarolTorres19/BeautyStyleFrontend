// ========================================
// BEAUTY STYLE - PÁGINA DE CONTACTO
// ========================================

// Importación de Link para la navegación
// entre las diferentes páginas del sistema.
import { Link } from "react-router-dom";


// ========================================
// COMPONENTE CONTACTO
// ========================================

function Contacto() {
  return (
    <div className="contacto-page">


      {/* ========================================
          BARRA SUPERIOR
      ======================================== */}

      <header className="navbar navbar-interna">

        {/* Logo del sistema */}
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

      <main className="contacto-content">


        {/* Encabezado de la página */}

        <div className="contacto-header">

          <h1>
            Contáctanos
          </h1>

          <p>
            Estamos aquí para ayudarte.
            Comunícate con Beauty Style y conoce
            más sobre nuestros servicios.
          </p>

        </div>


        {/* ========================================
            INFORMACIÓN DE CONTACTO
        ======================================== */}

        <div className="contacto-container">


          {/* Información del salón */}

          <div className="contacto-card">

            <h2>
              💗 Beauty Style
            </h2>

            <p>
              Tu belleza, nuestra pasión.
            </p>

            <div className="contacto-dato">
              <strong>📍 Ubicación</strong>
              <span>Centro de la ciudad</span>
            </div>

            <div className="contacto-dato">
              <strong>📞 Teléfono</strong>
              <span>300 123 4567</span>
            </div>

            <div className="contacto-dato">
              <strong>✉️ Correo</strong>
              <span>contacto@beautystyle.com</span>
            </div>

            <div className="contacto-dato">
              <strong>🕐 Horario</strong>
              <span>Lunes a sábado: 8:00 a.m. - 7:00 p.m.</span>
            </div>

          </div>


          {/* ========================================
              FORMULARIO DE CONTACTO
          ======================================== */}

          <div className="contacto-card">

            <h2>
              Envíanos un mensaje
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("¡Mensaje enviado correctamente!");
              }}
            >

              {/* Nombre */}

              <div className="form-group">

                <label>
                  Nombre completo
                </label>

                <input
                  type="text"
                  placeholder="Ingresa tu nombre"
                  required
                />

              </div>


              {/* Correo */}

              <div className="form-group">

                <label>
                  Correo electrónico
                </label>

                <input
                  type="email"
                  placeholder="Ingresa tu correo"
                  required
                />

              </div>


              {/* Mensaje */}

              <div className="form-group">

                <label>
                  Mensaje
                </label>

                <textarea
                  placeholder="Escribe tu mensaje"
                  rows="5"
                  required
                ></textarea>

              </div>


              {/* Botón */}

              <button
                type="submit"
                className="auth-button"
              >
                Enviar mensaje
              </button>

            </form>

          </div>


        </div>

      </main>

    </div>
  );
}


// ========================================
// EXPORTACIÓN DEL COMPONENTE
// ========================================

export default Contacto;