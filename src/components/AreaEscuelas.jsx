import { useState, useEffect } from 'react';

export const AreaEscuelas = () => {

  const [datos, setDatos] = useState([]);

  // Efecto que se ejecuta después de que el componente se monta
  useEffect(() => {
    // Función para realizar la solicitud GET
    const obtenerDatos = async () => {
      try {
        // Realizar la solicitud GET a tu API
        const respuesta = await fetch('http://localhost:3000/api/Genero');

        // Verificar si la solicitud fue exitosa (código 200)
        if (respuesta.ok) {
          // Convertir la respuesta a formato JSON
          const datosJson = await respuesta.json();

          // Actualizar el estado con los datos obtenidos
          setDatos(datosJson);
        } else {
          // Manejar el caso en que la solicitud no sea exitosa
          console.error('Error al obtener los datos');
        }
      } catch (error) {
        // Manejar errores de red u otros errores
        console.error('Error de red:', error);
      }
    };

    // Llamar a la función para obtener los datos
    obtenerDatos();
  }, []);// El segundo argumento [] significa que este efecto se ejecutará



  return (
    <>
      <section className='w-100 h-100 d-flex flex-column align-items-center'>
        <h2 className='text-center mt-5 fw-bold'>Escuelas En El Sistema</h2>
        <div id='lista-escuelas'>
          <table className="table border table-hover">
            <thead>
              <tr>
                <th scope="col">generoid</th>
                <th scope="col">genero_atleta</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((fila, index) => (
                <tr key={index}>
                  <td>{fila.generoadadid}</td>
                  <td>{fila.genero_atleta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}



