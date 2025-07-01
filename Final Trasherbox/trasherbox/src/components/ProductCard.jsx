import "./ProductCard.css";

function ProductCard({ id, title, description, price, image }) {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = { id, title, price, image, quantity: 1 };

    const existingProduct = cart.find((item) => item.id === id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Producto agregado al carrito");
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

