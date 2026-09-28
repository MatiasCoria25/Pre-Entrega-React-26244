import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetalleProduction = () => {
  const { id } = useParams();

  const [production, setProduction] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);

    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) throw new Error("No se encontró el archivo");
        return res.json();
      })
      .then((products) => {
        const productionEncontrado = products.find(
          (p) => p.id === Number(id)
        );

        if (!productionEncontrado) {
          throw new Error("Production no encontrado");
        }

        setProduction(productionEncontrado);
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) return <p>Cargando detalle del production...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="production-detalle">
      <h2>{production.title}</h2>
      {production.image}
      <p><strong>Categoría:</strong> {production.category}</p>
      <p><strong>Precio:</strong> AR${production.price}</p>
      <p><strong>Descripción:</strong> {production.description}</p>
    </div>
  );
};

export default DetalleProduction;