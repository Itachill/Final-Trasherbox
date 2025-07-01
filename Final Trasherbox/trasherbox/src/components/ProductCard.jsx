import "./ProductCard.css";

function ProductCard({ id, title, description, price, image }) {
  const handleAddToCart = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const product = { id, nombre: title, precio: price, imagen: image, cantidad: 1 };

    const existingProduct = carrito.find((item) => item.id === id);

    if (existingProduct) {
      existingProduct.cantidad += 1;
    } else {
      carrito.push(product);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito 🛒");
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
