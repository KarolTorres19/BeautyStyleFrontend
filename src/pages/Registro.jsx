import { Link } from "react-router-dom";

// Componente de la página de registro de Beauty Style
function Registro() {
  return (
    <div className="auth-page">

      {/* ========================================
          BARRA SUPERIOR
          ======================================== */}
      <header className="navbar navbar-interna">

        {/* Logo que permite regresar al inicio */}
        <Link to="/" className="logo-link">
          Beauty Style
        </Link>

        {/* Menú principal de navegación */}
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

        </nav>

        {/* Botones de inicio de sesión y registro */}
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
          FORMULARIO DE REGISTRO
          ======================================== */}
      <main className="auth-content">

        {/* Tarjeta principal del registro */}
        <div className="auth-card registro-card">

          {/* Encabezado del formulario */}
          <div className="auth-header">

            <h1>
              Crear <span>Cuenta</span>
            </h1>

            <p>
              Regístrate en Beauty Style
            </p>

          </div>


          {/* Formulario para crear una cuenta */}
          <form>

            {/* Campo de nombre completo */}
            <div className="form-group">

              <label>
                Nombre completo
              </label>

              <input
                type="text"
                placeholder="Nombre completo"
              />

            </div>


            {/* Campo de correo electrónico */}
            <div className="form-group">

              <label>
                Correo electrónico
              </label>

              <input
                type="email"
                placeholder="Correo electrónico"
              />

            </div>


            {/* Campo para crear el usuario */}
            <div className="form-group">

              <label>
                Usuario
              </label>

              <input
                type="text"
                placeholder="Crea un usuario"
              />

            </div>


            {/* Campo para crear la contraseña */}
            <div className="form-group">

              <label>
                Contraseña
              </label>

              <input
                type="password"
                placeholder="Crea una contraseña"
              />

            </div>


            {/* Botón para enviar el formulario */}
            <button
              type="submit"
              className="auth-button"
            >
              Registrarse
            </button>

          </form>


          {/* Enlace para usuarios que ya tienen una cuenta */}
          <p className="auth-footer">

            ¿Ya tienes una cuenta?

            <Link to="/login">
              Iniciar sesión
            </Link>

          </p>


          {/* Enlace para regresar al inicio */}
          <Link to="/" className="back-home">
            ← Volver al inicio
          </Link>

        </div>

      </main>

    </div>
  );
}

// Exportamos el componente para utilizarlo en las rutas
export default Registro;

