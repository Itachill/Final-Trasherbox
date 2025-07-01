import { useState } from "react";
import "./CotizacionEspecialForm.css";

function CotizacionEspecialForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    tipoCarton: "",
    cantidad: "",
    largo: "",
    ancho: "",
    alto: "",
    descripcion: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cotización enviada:", formData);
    alert("Cotización enviada correctamente. Nos pondremos en contacto contigo.");
  };

  return (
    <form className="cotizacion-form" onSubmit={handleSubmit}>
      <h2>Solicita tu cotización especial</h2>

      <div className="form-group">
        <label htmlFor="nombre">Tu nombre</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="correo">Correo electrónico</label>
        <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="tipoCarton">Tipo de cartón</label>
        <select name="tipoCarton" value={formData.tipoCarton} onChange={handleChange} required>
          <option value="">Seleccionar</option>
          <option value="corrugado">Corrugado</option>
          <option value="cartón duro">Cartón duro</option>
          <option value="cartón blando">Cartón blando</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="cantidad">Cantidad</label>
        <input type="number" name="cantidad" value={formData.cantidad} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="largo">Largo (cm)</label>
        <input type="number" name="largo" value={formData.largo} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="ancho">Ancho (cm)</label>
        <input type="number" name="ancho" value={formData.ancho} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="alto">Alto (cm)</label>
        <input type="number" name="alto" value={formData.alto} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="descripcion">Descripción adicional</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          placeholder="¿Qué uso tendrá la caja? ¿Qué necesitas destacar?"
        />
      </div>

      <button type="submit">Enviar cotización</button>
    </form>
  );
}

export default CotizacionEspecialForm;
