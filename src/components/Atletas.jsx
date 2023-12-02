import { useState, useEffect } from 'react';
import './css/atletas.css';
import axios from 'axios';

export const Atletas = () => {
  const [categorias, setCategorias] = useState([]);
  const [grados, setGrados] = useState([]);
  const [maestros, setMaestros] = useState([]);
  const [escuelas, setEscuelas] = useState([]);
  const [genero, setGenero] = useState("");
  const [categoria, setCategoria] = useState("");
  const [grado, setGrado] = useState("");
  const [maestro, setMaestro] = useState("");
  const [escuela, setEscuela] = useState("");

  const obtenerCategorias = async () => {
    try {
      const url = "http://localhost:3000/api/categoria";
      const response = await axios.get(url);
      setCategorias(response.data);
    } catch (error) {
      console.error("Error al obtener las categorías", error);
    }
  };

  const obtenerGrados = async () => {
    try {
      const url = "http://localhost:3000/api/grado";
      const response = await axios.get(url);
      setGrados(response.data);
    } catch (error) {
      console.error("Error al obtener los grados", error);
    }
  };

  const obtenerMaestros = async () => {
    try {
      const url = "http://localhost:3000/api/maestros";
      const response = await axios.get(url);
      setMaestros(response.data);
    } catch (error) {
      console.error("Error al obtener los maestros", error);
    }
  };

  const obtenerEscuelas = async () => {
    try {
      const url = "http://localhost:3000/api/escuela";
      const response = await axios.get(url);
      setEscuelas(response.data);
    } catch (error) {
      console.error("Error al obtener las escuelas", error);
    }
  };

  const registrarAtleta = async () => {
    const url = "http://localhost:3000/api/atleta";
    event.preventDefault()
    const formData = {
      nombre: document.forms["atletaForm"]["nombre"].value,
      apellidos: document.forms["atletaForm"]["apellidos"].value,
      fecha_nacimiento: document.forms["atletaForm"]["fechaNacimiento"].value,
      grado_id: parseInt(document.forms["atletaForm"]["gradoid"].value),
      categoria_id: parseInt(document.forms["atletaForm"]["categoriaid"].value),
      dni: document.forms["atletaForm"]["dni"].value,
      escuela_id:parseInt( document.forms["atletaForm"]["escuelaid"].value),
      maestro_id: parseInt(document.forms["atletaForm"]["maestroid"].value)
    };
    console.log(formData);

    try {
      const response = await axios.post(url, formData);
      console.log(response);
    } catch (error) {
      console.error("Error al registrar el atleta", error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
    obtenerGrados();
    obtenerMaestros();
    obtenerEscuelas();
  }, []);

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
    setCategoria("");
  };

  return (
    <>
      <section className='w-100 h-100 d-flex flex-column align-items-center'>
        <h2 className='text-center mt-5 fw-bold'>Atletas</h2>
        <div id='lista-atletas'>
          <table className="table border table-hover">
            <thead>
              <tr>
                <th scope="col">Nombre Atleta</th>
                <th scope="col">Fecha de Nacimiento</th>
                <th scope="col">Grado</th>
                <th scope="col">Categoria</th>
                <th scope="col">Maestro</th>
                <th scope="col">Escuela</th>
                <th className='text-center' scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {/* Agrega las filas de la tabla con los datos de los atletas */}
            </tbody>
          </table>
        </div>
        <div>
          <button className='btn btn-success' type="button" data-bs-toggle="modal" data-bs-target="#atletasModal">Registrar Atleta</button>
        </div>
      </section>

      <div className="modal modal-static fade" id="atletasModal" tabIndex="-1" aria-labelledby="atletasModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="atletasModalLabel">Registro de Usuario</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form name="atletaForm">
                <label className='mx-2 fw-bold mb-1'>Nombre</label>
                <input type="text" name='nombre' className='form-control mb-2' required />
                <label className='mx-2 fw-bold mb-1'>Apellido</label>
                <input type="text" name='apellidos' className='form-control mb-2' required />
                <label className='mx-2 fw-bold mb-1'>Fecha Nacimiento</label>
                <input type="date" name='fechaNacimiento' className='form-control mb-2' required />
                <label className='mx-2 fw-bold mb-1'>Escriba su DNI</label>
                <input type="text" name='dni' className='form-control mb-2' required />
                <label className='mx-2 fw-bold mb-1'>Seleccione el género</label>
                <select className='form-control mb-2' value={genero} onChange={handleGeneroChange}>
                  <option value="" disabled>Seleccionar género</option>
                  <option value="1">Masculino</option>
                  <option value="2">Femenino</option>
                </select>
                <select className='form-control mb-2' name='categoriaid' value={categoria} onChange={(event) => setCategoria(event.target.value)}>
                  <option value="" disabled>Seleccionar categoría de peso</option>
                  {genero &&
                    categorias
                      .filter((cat) => cat.generoid === parseInt(genero, 10))
                      .map((opcion) => (
                        <option key={opcion.categoriaid} value={opcion.categoriaid}>
                          {opcion.nombre_categoria}
                        </option>
                      ))}
                </select>
                <label className='mx-2 fw-bold mb-1'>Grado de cinta</label>
                <select className='form-control mb-2' name='gradoid' value={grado} onChange={(event) => setGrado(event.target.value)}>
                  <option value="" disabled>Seleccionar un grado</option>
                  {grados.map((grado) => (
                    <option key={grado.gradoid} value={grado.gradoid}>
                      {grado.grado_cinturon}
                    </option>
                  ))}
                </select>
                <label className='mx-2 fw-bold mb-1'>Maestro</label>
                <select className='form-control mb-2' name='maestroid' value={maestro} onChange={(event) => setMaestro(event.target.value)}>
                  <option value="0" disabled>Seleccionar un maestro</option>
                  {maestros.map((maestro) => (
                    <option key={maestro.maestroid} value={maestro.maestroid}>
                      {maestro.nombremaestro}
                    </option>
                  ))}
                </select>
                <label className='mx-2 fw-bold mb-1'>Escuela</label>
                <select className='form-control mb-2' name='escuelaid' value={escuela} onChange={(event) => setEscuela(event.target.value)}>
                  <option value="0" disabled>Seleccionar una escuela</option>
                  {escuelas.map((escuela) => (
                    <option key={escuela.escuelaid} value={escuela.escuelaid}>
                      {escuela.nombreescuela}
                    </option>
                  ))}
                </select>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={registrarAtleta} className="btn btn-primary">Registrar Atleta</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
