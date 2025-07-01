import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/productos?busqueda=${search}`);
      setSearch("");
    }
  };

  return (
    <header className="navbar">
      <h1 className="logo" onClick={() => navigate("/")}>TrasherBox</h1>
      <nav className="nav">
        <button onClick={() => navigate("/panel")}>Inicio</button>
        <button onClick={() => navigate("/productos")}>Productos</button>
        <button onClick={() => navigate("/Carrito")}>Carrito</button>
        <button onClick={() => navigate("/cotizaciones")}>Cotizaciones</button>
      </nav>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="¿Qué estás buscando?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-icon">🔍</button>
      </form>

      {user ? (
        <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
      ) : (
        <button onClick={handleLoginRedirect} className="login-button">Iniciar sesión</button>
      )}
    </header>
  );
}

export default Navbar;
