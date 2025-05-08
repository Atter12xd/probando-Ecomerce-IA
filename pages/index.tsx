import { useState } from "react";
import SimulatedCall from "@/components/SimulatedCall";

const products = [
  {
    name: "Zapatilla IA Alpha",
    image: "/imagenes/zapatilla1.webp",
  },
  {
    name: "Zapatilla IA Beta",
    image: "/imagenes/zapatilla2.webp",
  },
];

export default function Home() {
  const [selected, setSelected] = useState<null | typeof products[0]>(null);
  const [showCall, setShowCall] = useState(false);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleOrder = async () => {
    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        producto: selected?.name,
        nombre,
        telefono,
      }),
    });
    setShowCall(true);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Catálogo IA - Shopify</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className={`border rounded-lg p-4 cursor-pointer shadow hover:shadow-lg transition ${
              selected?.name === product.name ? "border-green-500" : ""
            }`}
            onClick={() => {
              setSelected(product);
              setShowCall(false);
              setNombre('');
              setTelefono('');
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-center font-semibold">{product.name}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="mt-6 w-full max-w-md">
          <label className="block mb-1 text-sm font-medium">Tu nombre:</label>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Raúl"
          />

          <label className="block mb-1 text-sm font-medium">Número de celular:</label>
          <input
            type="tel"
            className="w-full p-2 border rounded mb-4"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Ej: +51 987654321"
          />

          {nombre && telefono && (
            <button
              onClick={handleOrder}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
            >
              Comprar {selected.name}
            </button>
          )}
        </div>
      )}

      {showCall && selected && (
        <SimulatedCall productName={selected.name} nombre={nombre} />
      )}
    </main>
  );
}