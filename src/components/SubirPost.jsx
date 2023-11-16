import React from 'react'
export const SubirPost = () => {
  return (
    <>
      <h2 className='text-center mt-5 fw-bold'>Registrar un Post</h2>
      <div className='d-flex flex-colum justify-content-center' >
        <form className='w-50'>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label fw-bold">Título</label>
            <input type="text" className="form-control" id="titulo" name="titulo" required />
          </div>

          <div className="mb-3">
            <label htmlFor="banner" className="form-label fw-bold">Banner</label>
            <input type="file" className="form-control h-100 w-100" id="banner" name="banner" accept="image/*" required />
          </div>

          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label fw-bold">Descripción</label>
            <textarea className="form-control" id="descripcion" name="descripcion" rows="5" required></textarea>
          </div>
        </form>
      </div>
      <div className='w-100 d-flex justify-content-center'>
        <button type='button' className='btn btn-success'>Registrar</button>
      </div>
    </>
  )
}
