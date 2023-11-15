import React from 'react'

export const Escuelas = () => {
    return (
        <>
            <section className='w-100 h-100 d-flex flex-column align-items-center'>
                <h2 className='text-center mt-5 fw-bold '>Escuelas En El Sistema</h2>
                <div id='lista-escuelas'>
                    <table className="table border table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nombre De la escuela</th>
                                <th scope="col">MaestroID</th>
                                <th scope="col">Ubicacion</th>
                                <th scope="col">Fecha de creación</th>
                                <th scope="col">Fecha de actualización</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Configuración</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>MGAFK</td>
                                <td>Abdul-Jabbar</td>
                                <td>Col ejemplo</td>
                                <td>13 Marzo 2023</td>
                                <td>14 Marzo 2023</td>
                                <td><button type='button' className='btn btn-success'>Activo</button> </td>
                                <td><button className='btn btn-primary' type="button" data-bs-toggle="modal" data-bs-target="#escuelasModalEditar">Editar</button> </td>
                            </tr>
                            <tr>
                                <td>NKVD</td>
                                <td>Scottie Pippen</td>
                                <td>Col ejemplo</td>
                                <td>14 Marzo 2023</td>
                                <td>15 Marzo 2023</td>
                                <td><button type='button' className='btn btn-secondary'>Inactivo</button> </td>
                                <td><button type='button' className='btn btn-primary'>Editar</button> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button className='btn btn-success ' type="button" data-bs-toggle="modal" data-bs-target="#escuelasModalRegistrar">Registrar escuela</button>
                </div>
            </section>


            //Inicio modal Registrar
            <div class="modal fade" id="escuelasModalRegistrar" tabindex="-1" aria-labelledby="escuelasModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="escuelasModalLabel">Registro De Escuela</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className="form-group mb-3">
                                    <label className='mb-1 mx-2' htmlFor="nombreEscuela">Nombre de escuela</label>
                                    <input type="text" className="form-control" id="nombreEscuela" placeholder="Ingrese el nombre de la escuela" required />
                                </div>

                                <div className="dropdown form-group mb-3 ">
                                    <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Asigne el maestro
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Rodolfo</a></li>
                                        <li><a class="dropdown-item" href="#">Etcheverri</a></li>
                                        <li><a class="dropdown-item" href="#">Victalio</a></li>
                                    </ul>
                                </div>

                                <div className="form-group mb-3">
                                    <label className='mb-1 mx-2' htmlFor="UbicacionEscuela">Ubicación de escuela</label>
                                    <input type="text" className="form-control" id="UbicacionEscuela" placeholder="Ingrese la ubicación de la escuela" required />
                                </div>

                                <div className="form-group mb-3">
                                    <label className='mb-1 mx-2' htmlFor="fechaCreacion">Fecha De Ingreso A la Escuela</label>
                                    <input type="date" className="form-control" id="contrasenia" placeholder="fechaCreacion" required />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Registrar Escuela</button>
                        </div>
                    </div>
                </div>
            </div>

            //Inicio modal editar escuela
            <div class="modal fade" id="escuelasModalEditar" tabindex="-1" aria-labelledby="escuelasModal2Editar" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="escuelasModal2Editar">Editor de Escuela</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>

                                <div className="dropdown form-group mb-3 ">
                                    <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Asigne el maestro
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Rodolfo</a></li>
                                        <li><a class="dropdown-item" href="#">Etcheverri</a></li>
                                        <li><a class="dropdown-item" href="#">Victalio</a></li>
                                    </ul>
                                </div>

                                <div className="form-group mb-3">
                                    <label className='mb-1 mx-2' htmlFor="UbicacionEscuela">Ubicación de escuela</label>
                                    <input type="text" className="form-control" id="UbicacionEscuela" placeholder="actualice la ubicación de la escuela" required />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Guardar cambios</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}



