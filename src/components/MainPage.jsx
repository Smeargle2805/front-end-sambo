import React from 'react'
import './css/mainpage.css'
import logo from '../assets/LOGO.png'
import img1 from '../assets/atletas/presi1.jpeg'
import img2 from '../assets/atletas/brad.jpeg'
import img3 from '../assets/atletas/molina.jpeg'
export const MainPage = () => {
  return (
    <>
    <nav>
        <div>
            <img src={logo} alt="" />
        </div>
    </nav>
    <section>
        <div id='info'>
            <div>
            <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
            </div>
            <div></div>
        </div>

        <div id='banner'>
            <div>
            <div id="miCarrusel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='grid-banner'>
                            <div className='div-img-banner'>
                                <img src={img1} alt="Imagen 1"/>
                            </div>
                            <div className='info-atleta'>
                            <h4 className='tex'>El presi</h4>
                                <p>Segundo lugar panamericano de sambo en la categoria de +98 kg</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='grid-banner'>
                            <div className='div-img-banner'>
                                <img src={img2} alt="Imagen 2"/>
                            </div>
                            <div className='info-atleta'>
                                <h4 className='tex'>Brad Flores</h4>
                                <p>Segundo lugar panamericano de sambo en la categoria de +98 kg</p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div className='grid-banner'>
                            <div className='div-img-banner'>
                                <img src={img3}  alt="Imagen 3"/>
                            </div>
                            <div className='info-atleta'>
                                <h4 className='tex'>Francisco Molina</h4>
                                <p>segundo lugar panamericano de sambo en la categoria de +98 kg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div>

            </div>
        </div>
    </section>

    </>
  )
}
