interface Props {
    productName: string;
    nombre: string;
  }
  
  export default function SimulatedCall({ productName, nombre }: Props) {
    return (
      <div className="mt-6 max-w-md bg-blue-100 border border-blue-400 text-blue-800 p-4 rounded-lg">
        <p className="font-semibold mb-2">📞 Llamada IA simulada:</p>
        <p>
          “Hola {nombre}, hemos registrado tu pedido de <strong>{productName}</strong>. 
          ¿Deseas confirmar? Di ‘sí’ para continuar.”
        </p>
      </div>
    );
  }