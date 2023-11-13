import React, { useState } from 'react'

export const Atletas = () => {
    const opcionesPorGenero = {
        Masculino: ["58kg", "64kg", "71kg", "79kg", "88kg", "98kg", "+98kg"],
        Femenino: ["50kg", "54kg", "59kg", "65kg", "72kg", "80kg", "+80kg"]
      };
    
      const [genero, setGenero] = useState("");
      const [categoria, setCategoria] = useState("");
    
      const handleGeneroChange = (event) => {
        setGenero(event.target.value);
      };
    return (
    <>
        <section className='w-100 h-100 d-flex flex-column align-items-center'>
            <h2 className='text-center mt-5 fw-bold'>Atletas</h2>
            <div id='lista-usuarios'>
                <table class="table border table-hover">
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
                        <tr>
                            <td>Pablo Chacon</td>
                            <td>07-JUN-2001</td>
                            <td>Cinta Negra</td>
                            <td>88 KG</td>
                            <td>NONE</td>
                            <td>Shirai Ryu</td>
                            <td className='text-center'><button className='btn btn-primary w-75' type="button">Eliminar</button></td>
                        </tr>
                        <tr>
                            <td>Brad Flores</td>
                            <td>18-JUl-2001</td>
                            <td>Cinta Negra</td>
                            <td>+98 KG</td>
                            <td>NONE</td>
                            <td>Shirai Ryu</td>
                            <td className='text-center'><button className='btn btn-primary w-75' type="button">Eliminar</button></td>
                        </tr>     
                    </tbody>
                </table>
            </div>
            <div>
                <button className='btn btn-success' type="button"  data-bs-toggle="modal" data-bs-target="#atletasModal">Registrar Atleta</button>
            </div>
        </section>

        <div class="modal modal-static fade" id="atletasModal" tabindex="-1" aria-labelledby="atletasModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="atletasModalLabel">Registro de Usuario</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form >
                  <label className='mx-2 fw-bold mb-1'>Nombre</label>
                  <input type="text" className='form-control mb-2' required/>
                  <label className='mx-2 fw-bold mb-1'>Apellido</label>
                  <input type="text" className='form-control mb-2' required/>
                  <label className='mx-2 fw-bold mb-1'>Fecha Nacimiento</label>
                  <input type="date" className='form-control mb-2'required/>
                  <label className='mx-2 fw-bold mb-1'>Seleccione el genero</label>
                  <select className='form-control mb-2' value={genero} onChange={handleGeneroChange}>
                    <option value="" disabled>Seleccionar género</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
                  <select className='form-control mb-2' value={categoria} onChange={(event) => setCategoria(event.target.value)}>
                    <option value="" disabled>Seleccionar categoría de peso</option>
                    {genero && opcionesPorGenero[genero].map((opcion, index) => (
                      <option key={index} value={opcion}>
                        {opcion}
                      </option>
                    ))}
                  </select>
                  <label className='mx-2 fw-bold mb-1'>Grado de cinta</label>
                  <input type="text" className='form-control mb-2'required/>
                  <label className='mx-2 fw-bold mb-1'>Maestro</label>
                  <select className='form-control mb-2'>
                    <option value="" disabled>Seleccionar un maestro</option>
                  </select>
                  <label className='mx-2 fw-bold mb-1'>Escuela</label>
                  <select className='form-control mb-2'>
                    <option value="" disabled>Seleccionar una escuela</option>
                  </select>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Registrar Atleta</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
