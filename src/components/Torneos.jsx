import React, { useState } from 'react';
import './css/atletas.css'

export const Torneos = () => {
    const [torneos, setTorneos] = useState([
        {
            nombre: "Torneo 1",
            lugar: "Tegucigalpa",
            fecha: "2023-01-15"
        },
        {
            nombre: "Torneo 2",
            lugar: "San Pedro Sula",
            fecha: "2023-03-20"
        }
    ]);

    const [nuevoTorneo, setNuevoTorneo] = useState({
        nombre: '',
        lugar: '',
        fecha: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoTorneo({ ...nuevoTorneo, [name]: value });
    };

    const handleRegistrarTorneo = () => {
        setTorneos([...torneos, nuevoTorneo]);
        setNuevoTorneo({
            nombre: '',
            lugar: '',
            fecha: ''
        });
    };

    const eliminarTorneo = (index) => {
        const updatedTorneos = torneos.filter((_, i) => i !== index);
        setTorneos(updatedTorneos);
    };

    return (
        <>
            <section className='w-100 h-100 d-flex flex-column align-items-center'>
                <h2 className='text-center mt-5 fw-bold'>Torneos</h2>
                <div id='lista-torneos'>
                    <table className="table border table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nombre de Torneo</th>
                                <th scope="col">Lugar</th>
                                <th scope="col">Fecha</th>
                                <th className='text-center' scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {torneos.map((torneo, index) => (
                                <tr key={index}>
                                    <td>{torneo.nombre}</td>
                                    <td>{torneo.lugar}</td>
                                    <td>{torneo.fecha}</td>
                                    <td className='text-center'>
                                        <button className='btn btn-danger' onClick={() => eliminarTorneo(index)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <button className='btn btn-success' type="button" data-bs-toggle="modal" data-bs-target="#torneoModal">
                        Registrar Torneo
                    </button>
                </div>
            </section>

            <div className="modal modal-static fade" id="torneoModal" tabIndex="-1" aria-labelledby="torneoModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="torneoModalLabel">Registro de Torneo</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label className='mx-2 fw-bold mb-1'>Nombre del Torneo</label>
                                <input
                                    type="text"
                                    className='form-control mb-2'
                                    name="nombre"
                                    value={nuevoTorneo.nombre}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label className='mx-2 fw-bold mb-1'>Lugar del Torneo</label>
                                <input
                                    type="text"
                                    className='form-control mb-2'
                                    name="lugar"
                                    value={nuevoTorneo.lugar}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label className='mx-2 fw-bold mb-1'>Fecha del Torneo</label>
                                <input
                                    type="date"
                                    className='form-control mb-2'
                                    name="fecha"
                                    value={nuevoTorneo.fecha}
                                    onChange={handleInputChange}
                                    required
                                />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleRegistrarTorneo}>
                                Registrar Torneo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


