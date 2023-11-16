

export const Usuarios = () => {
  return (
    <>
      <section className='w-100 h-100 d-flex flex-column align-items-center'>
        <h2 className='text-center mt-5 fw-bold'>Usuarios</h2>
        <div id='lista-usuarios'>
          <table className="table border table-hover">
            <thead>
              <tr>
                <th scope="col">Nombre Usuario</th>
                <th scope="col">Rol</th>
                <th scope="col">Estado</th>
                <th className='text-center' scope="col">Cambiar Estado</th>
                <th className='text-center' scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pablo Chacon</td>
                <td>GODSYSTEM</td>
                <td>Activo</td>
                <td className='text-center'><button className='btn btn-primary disabled w-75' type="button">Desactivar</button></td>
                <td className='text-center'><button className='btn btn-primary disabled w-75' type="button">Eliminar</button></td>
              </tr>
              <tr>
                <td>Brad Hernandez</td>
                <td>ADMIN</td>
                <td>Activo</td>
                <td className='text-center'><button className='btn btn-primary w-75' type="button">Desactivar</button></td>
                <td className='text-center'><button className='btn btn-primary w-75' type="button">Eliminar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button className='btn btn-success' type="button" data-bs-toggle="modal" data-bs-target="#usuariosModal">Registrar Usuario</button>
        </div>
      </section>

      <div className="modal fade" id="usuariosModal" tabIndex="-1" aria-labelledby="usuariosModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="usuariosModalLabel">Registro de Usuario</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group mb-3">
                  <label className='mb-1 mx-2' htmlFor="nombreUsuario">Nombre de Usuario</label>
                  <input type="text" className="form-control" id="nombreUsuario" placeholder="Ingrese su nombre de usuario" required />
                </div>
                <div className="form-group mb-3">
                  <label className='mb-1 mx-2' htmlFor="contrasenia">Contraseña</label>
                  <input type="password" className="form-control" id="contrasenia" placeholder="Ingrese su contraseña" required />
                </div>
                <div className="form-group mb-3">
                  <label className='mb-1 mx-2' htmlFor="confirmarContrasenia">Confirmar Contraseña</label>
                  <input type="password" className="form-control" id="confirmarContrasenia" placeholder="Confirme su contraseña" required />
                </div>
                <div className="form-group mb-3">
                  <label className='mb-1 mx-2' htmlFor="rol">Rol</label>
                  <select className="form-control" id="rol" required>
                    <option value="" disabled selected>Seleccione un rol</option>
                    <option value="admin">GOODSYSTEM</option>
                    <option value="admin">ADMIN</option>
                    <option value="editor">EDITOR</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Registrar Usuario</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
