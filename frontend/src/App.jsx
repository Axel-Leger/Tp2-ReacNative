import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [resultado, setResultado] = useState(null);

  const validarNombre = async () => {
    if (!nombre) return;

    try {
      const res = await fetch(`http://localhost:3001/validar/${nombre}`);
      const data = await res.json();
      setResultado(data.valido ? 'Nombre válido' : 'Nombre inválido');
    } catch (err) {
      setResultado('Error al conectar con el servidor');
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Validador de Nombre</h1>
      <input
        type="text"
        placeholder="Ingresa un nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={validarNombre}>
        Validar
      </button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default App;
