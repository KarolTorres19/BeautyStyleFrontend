import { Link } from "react-router-dom";

// Componente de la página de inicio de sesión
function Login() {
  return (
    <div className="auth-page">

      {/* ========================================
          BARRA SUPERIOR
          ======================================== */}
      <header className="navbar navbar-interna">

        {/* Logo que lleva nuevamente al inicio */}
        <Link to="/" className="logo-link">
          Beauty Style
        </Link>

        {/* Menú de navegación */}
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/citas">Citas</Link>
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
          FORMULARIO DE INICIO DE SESIÓN
          ======================================== */}
      <main className="auth-content">

        {/* Tarjeta principal del formulario */}
        <div className="auth-card">

          {/* Encabezado del formulario */}
          <div className="auth-header">

            <h1>
              Iniciar <span>Sesión</span>
            </h1>

            <p>
              Ingresa a tu cuenta de Beauty Style
            </p>

          </div>


          {/* Formulario de acceso */}
          <form>

            {/* Campo de usuario */}
            <div className="form-group">

              <label>
                Usuario
              </label>

              <input
                type="text"
                placeholder="Ingresa tu usuario"
              />

            </div>


            {/* Campo de contraseña */}
            <div className="form-group">

              <label>
                Contraseña
              </label>

              <input
                type="password"
                placeholder="Ingresa tu contraseña"
              />

            </div>


            {/* Botón para enviar el formulario */}
            <button
              type="submit"
              className="auth-button"
            >
              Ingresar
            </button>

          </form>


          {/* Enlace para usuarios que aún no tienen cuenta */}
          <p className="auth-footer">

            ¿No tienes una cuenta?

            <Link to="/registro">
              Crear cuenta
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
export default Login;

