import './css/maestros.css'

export const Maestros = () => {
  return (
    <>
      <section className='w-100 h-100 d-flex flex-column align-items-center'>
        <h2 className='text-center mt-5 fw-bold'>Maestros En El Sistema</h2>
        <div id='lista-maestros'>
          <table className="table border table-hover">
            <thead>
              <tr>
                <th scope="col">Nombre Del Maestro</th>
                <th scope="col">Fecha de Creación</th>
                <th scope="col">Fecha de Actualización</th>
                <th scope="col">Estado</th>
                <th scope="col">Configuración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>David Guzman</td>
                <td>21 Marzo 2023</td>
                <td>22 Marzo 2023</td>
                <td><button type='button' className='btn estadoButton'>Activo</button> </td>
                <td><button className='btn estadoButton' type="button" data-bs-toggle="modal" data-bs-target="#maestrosModalEditar">Editar</button> </td>
              </tr>
              <tr>
                <td>Brad Hernandez</td>
                <td>21 Marzo 2023</td>
                <td>23 Marzo 2023</td>
                <td><button type='button' className='btn btn-secondary'>Inactivo</button> </td>
                <td><button type='button' className='btn estadoButton'>Editar</button> </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button className='btn btn-success ' type="btn" data-bs-toggle="modal" data-bs-target="#maestrosModalRegistrar">Registrar Un Maestro</button>
        </div>
      </section>

      <div className="modal fade" id="maestrosModalRegistrar" tabIndex="-1" aria-labelledby="maestrosModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="maestrosModalLabel">Registro De Maestro</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group mb-3">
                  <label className='mb-1 mx-2' htmlhtmlFor="nombreMaestro">Nombre de Maestro</label>
                  <input type="text" className="form-control" id="nombreMaestro" placeholder="Ingrese el nombre del maestro" required />
                </div>
                <div className="form-group mb-3">
                  <label className='mb-1 mx-2' htmlhtmlFor="fechaCreacion">Fecha De Ingreso A la Escuela</label>
                  <input type="date" className="form-control" id="contrasenia" placeholder="fechaCreacion" required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn estadoButton2">Registrar Usuario</button>
            </div>
          </div>
        </div>
      </div>




      <div className="modal fade" id="maestrosModalEditar" tabIndex="-1" aria-labelledby="maestrosModal2Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="maestrosModal2Label">Editar Maestro</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group mb-3">
                  <label className='mb-1 mx-2' htmlhtmlFor="nombreMaestro">Nombre de Maestro</label>
                  <input type="text" className="form-control" id="nombreMaestro" placeholder="Luis" required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn estadoButton2">Registrar Usuario</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
