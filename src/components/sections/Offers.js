import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";
import { getOfertas } from '../../actions/home';
import { getSliders } from '../../actions/home';

export const Offers = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sliders, setSliders] = useState([])

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Número de elementos visibles por slide
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2.5,
          initialSlide: 2.5,
        },
      },
      {
        breakpoint: 393,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await getOfertas();
        setProductos(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    const loadSliders = async () => {
      try {
        const result = await getSliders();
        setSliders(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadSliders();
  }, [])

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='pd-offers'>
      <div className='txt-center padding-categories-titles padding-categories-titles2 '>
        {/* <div className='txt-semibold font-family-montserrat font20'>Conoce las ofertas del día</div> */}
      </div>
      <div className='container-conteo'>
        {/* <div className='txt-center font-family-montserrat
       btn-conteo font12-semibold'>
          <div className='txt-termina'>Termina en</div>
          <div className='squares'>
            <div className='square'>00</div>
            <div className='square'>00</div>
            <div className='square'>00</div>
          </div>
          <div className='txt-time'>
            <div className='time'>Hrs</div>
            <div className='time'>Min</div>
            <div className='time'>Seg</div>
          </div>
        </div> */}

        <Link to="/catalogo-producto">
          {
            sliders
              .filter(s => s.sliderId === 3)
              .map(s => (
                <img
                  key={s.sliderId}
                  src={s.sliderBodyXsUrl}
                  alt="imagen slider xs de contador"
                  className="img-responsive img-slider"
                />
              ))
          }

          {
            sliders
              .filter(s => s.sliderId === 3)
              .map(sl => (
                <img
                  key={sl.sliderId}
                  src={sl.sliderBodyLgUrl}
                  alt="imagen slider lg de contador"
                  className="img-slide-desktop img-responsive"
                />
              ))
          }
        </Link>
      </div>



      <Slider {...settings} className='padding-products'>
        {
          productos.map(c => {
            const descuentoPorcentaje = Math.floor(parseFloat(c.productoDescuentoPorcentaje));

            return (
              <div key={c.productoId}>
                <div className=''>
                  <div className='font-family-montserrat txt-300 font14 btn-ahorro pbuttonoffers width-offers'>
                    Ahorras {descuentoPorcentaje}%
                  </div>
                  <Link to={`/detalle-producto/${c.productoSku}`}>
                    <img src={c.productoImgUrlPrincipal} alt={c.productoNombre} className='img-responsive ' />
                  </Link>
                  <div className='padding-categories-item'>

                    <div className='font-description font-family-montserrat font400'>
                      {c.productoNombre}
                    </div>
                    <div className='flex-container font-family-montserrat font400 pd-precios baseline-items'>
                      <div className='font20 font400'>
                        {c.productoPrecio !== null ? `S/${c.productoPrecio}` : 'Precio no disponible'}
                      </div>
                      {c.productoPrecioAnterior && (
                        <div className='tachado flex-center font13'>
                          {`S/${c.productoPrecioAnterior}`}
                        </div>
                      )}
                    </div>
                    {/* <div className='font-family-montserrat btn-cart pointer margin-top-30'>Añadir al carrito</div> */}
                  </div>
                </div>
              </div>
            );
          })
        }

      </Slider>
    </div>
  )
}
