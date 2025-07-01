// Carrito.jsx
import React, { useState, useEffect } from "react";
import "./Carrito.css";

function Carrito() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(stored);
  }, []);

  const actualizarCarrito = (nuevoCarrito) => {
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const aumentar = (id) => {
    const nuevo = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    actualizarCarrito(nuevo);
  };

  const disminuir = (id) => {
    const nuevo = carrito.map((item) => {
      if (item.id === id && item.cantidad > 1) {
        return { ...item, cantidad: item.cantidad - 1 };
      }
      return item;
    });
    actualizarCarrito(nuevo);
  };

  const eliminar = (id) => {
    const nuevo = carrito.filter((item) => item.id !== id);
    actualizarCarrito(nuevo);
  };

  const vaciarCarrito = () => {
    actualizarCarrito([]);
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div className="carrito-container">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="carrito-lista">
            {carrito.map((item) => (
              <li key={item.id} className="carrito-item">
                <img src={item.imagen} alt={item.nombre} className="carrito-img" />
                <div className="carrito-info">
                  <h4>{item.nombre}</h4>
                  <p>${item.precio.toLocaleString()} x {item.cantidad}</p>
                  <div className="cantidad-control">
                    <button onClick={() => disminuir(item.id)}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => aumentar(item.id)}>+</button>
                    <button className="eliminar" onClick={() => eliminar(item.id)}>❌</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="carrito-total">
            <h3>Total: ${total.toLocaleString()}</h3>
            <button onClick={vaciarCarrito} className="vaciar">Vaciar Carrito</button>
            <button className="comprar">Comprar Ahora</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
