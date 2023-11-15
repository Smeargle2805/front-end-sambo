import React, { useState } from 'react';
import './css/atletas.css';

export const Torneos = () => {
  const [torneos, setTorneos] = useState([
    {
      nombre: 'Torneo 1',
      lugar: 'Tegucigalpa',
      fecha: '2023-01-15',
      participantes: ['Participante 1', 'Participante 2'],
    },
    {
      nombre: 'Torneo 2',
      lugar: 'San Pedro Sula',
      fecha: '2023-03-20',
      participantes: ['Participante 3', 'Participante 4'],
    },
  ]);

  const [nuevoTorneo, setNuevoTorneo] = useState({
    nombre: '',
    lugar: '',
    fecha: '',
  });

  const [participantesModal, setParticipantesModal] = useState({
    show: false,
    torneoIndex: null,
  });

  const [agregarParticipantesModal, setAgregarParticipantesModal] = useState({
    show: false,
    torneoIndex: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoTorneo({ ...nuevoTorneo, [name]: value });
  };

  const handleRegistrarTorneo = () => {
    setTorneos([...torneos, { ...nuevoTorneo, participantes: [] }]);
    setNuevoTorneo({
      nombre: '',
      lugar: '',
      fecha: '',
    });

    document.getElementById('torneoModal').click();
  };

  const eliminarTorneo = (index) => {
    const updatedTorneos = [...torneos.slice(0, index), ...torneos.slice(index + 1)];
    setTorneos(updatedTorneos);
  };

  const mostrarParticipantes = (torneoIndex) => {
    setParticipantesModal({
      show: true,
      torneoIndex,
    });

    setAgregarParticipantesModal({ show: false, torneoIndex: null });
  };

  const cerrarParticipantesModal = () => {
    setParticipantesModal({ show: false, torneoIndex: null });
  };

  const mostrarAgregarParticipante = (torneoIndex) => {
    setAgregarParticipantesModal({
      show: true,
      torneoIndex,
    });

    setParticipantesModal({ show: false, torneoIndex: null });
  };

  const handleAgregarParticipante = (participante) => {
    const { torneoIndex } = agregarParticipantesModal;
    const updatedTorneos = [...torneos];
    updatedTorneos[torneoIndex].participantes.push(participante);
    setTorneos(updatedTorneos);
  };

  const handleBorrarParticipante = (participanteIndex) => {
    const { torneoIndex } = participantesModal;
    const updatedTorneos = [...torneos];
    updatedTorneos[torneoIndex].participantes.splice(participanteIndex, 1);
    setTorneos(updatedTorneos);
  };

  return (
    <>
      <section className='w-100 h-100 d-flex flex-column align-items-center'>
        <h2 className='text-center mt-5 fw-bold'>Torneos</h2>
        <div id='lista-torneos'>
          <table className='table border table-hover'>
            <thead>
              <tr>
                <th scope='col'>Nombre de Torneo</th>
                <th scope='col'>Lugar</th>
                <th scope='col'>Fecha</th>
                <th className='text-center' scope='col'>
                  Eliminar
                </th>
                <th className='text-center' scope='col'>
                  Participantes
                </th>
                <th className='text-center' scope='col'>
                  Añadir Participantes
                </th>
              </tr>
            </thead>
            <tbody>
              {torneos.map((torneo, index) => (
                <tr key={index}>
                  <td>{torneo.nombre}</td>
                  <td>{torneo.lugar}</td>
                  <td>{torneo.fecha}</td>
                  <td className='text-center'>
                    <button
                      className='btn btn-danger'
                      onClick={() => eliminarTorneo(index)}
                    >
                      Eliminar
                    </button>
                  </td>
                  <td className='text-center'>
                    <button
                      className='btn btn-primary'
                      onClick={() => mostrarParticipantes(index)}
                    >
                      Participantes
                    </button>
                  </td>
                  <td className='text-center'>
                    <button
                      className='btn btn-success'
                      onClick={() => mostrarAgregarParticipante(index)}
                    >
                      Añadir Participantes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button
            className='btn btn-success'
            type='button'
            data-bs-toggle='modal'
            data-bs-target='#torneoModal'
          >
            Registrar Torneo
          </button>
        </div>
      </section>

      {participantesModal.show && (
        <div className='modal fade show' style={{ display: 'block' }} tabIndex='-1'>
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h1 className='modal-title fs-5'>Participantes del Torneo</h1>
                <button
                  type='button'
                  className='btn-close'
                  onClick={cerrarParticipantesModal}
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body'>
                <ul>
                  {torneos[participantesModal.torneoIndex].participantes.map(
                    (participante, index) => (
                      <li key={index}>
                        {participante}
                        <button
                          className='btn btn-danger btn-sm ms-2'
                          onClick={() => handleBorrarParticipante(index)}
                        >
                          Borrar
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  onClick={cerrarParticipantesModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {agregarParticipantesModal.show && (
        <div className='modal fade show' style={{ display: 'block' }} tabIndex='-1'>
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h1 className='modal-title fs-5'>Añadir Participantes</h1>
                <button
                  type='button'
                  className='btn-close'
                  onClick={() => setAgregarParticipantesModal({ show: false, torneoIndex: null })}
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body'>
                <label className='mx-2 fw-bold mb-1'>Nuevo Participante</label>
                <input
                  type='text'
                  className='form-control mb-2'
                  onChange={(e) =>
                    setAgregarParticipantesModal({
                      ...agregarParticipantesModal,
                      participante: e.target.value,
                    })
                  }
                  value={agregarParticipantesModal.participante}
                  required
                />
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={() =>
                    handleAgregarParticipante(agregarParticipantesModal.participante)
                  }
                >
                  Añadir Participante
                </button>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  onClick={() => setAgregarParticipantesModal({ show: false, torneoIndex: null })}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='modal fade' id='torneoModal' tabIndex='-1'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5'>Registro de Torneo</h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form>
                <label className='mx-2 fw-bold mb-1'>Nombre del Torneo</label>
                <input
                  type='text'
                  className='form-control mb-2'
                  name='nombre'
                  value={nuevoTorneo.nombre}
                  onChange={handleInputChange}
                  required
                />
                <label className='mx-2 fw-bold mb-1'>Lugar del Torneo</label>
                <input
                  type='text'
                  className='form-control mb-2'
                  name='lugar'
                  value={nuevoTorneo.lugar}
                  onChange={handleInputChange}
                  required
                />
                <label className='mx-2 fw-bold mb-1'>Fecha del Torneo</label>
                <input
                  type='date'
                  className='form-control mb-2'
                  name='fecha'
                  value={nuevoTorneo.fecha}
                  onChange={handleInputChange}
                  required
                />
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Cerrar
              </button>
              <button
                type='button'
                className='btn btn-primary'
                onClick={handleRegistrarTorneo}
              >
                Registrar Torneo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


