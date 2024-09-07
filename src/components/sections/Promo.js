import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getSliders } from '../../actions/home';


export const Promo = () => {
  const [sliders, setSliders] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <>
      <Link to="/catalogo-producto">
        {/* <img
          src='/img_publics/banner-slide.png'
          alt="slider imagen"
          className='img-responsive '
        /> */}

        {
          sliders
            .filter(s => s.sliderId === 1)
            .map(s => (
              <img
                key={s.sliderId}
                src={s.sliderBodyXsUrl}
                alt="imagen slider xs"
                className="img-responsive img-slider"
              />
            ))
        }

        {
          sliders
            .filter(s => s.sliderId === 1)
            .map(sl => (
              <img
                key={sl.sliderId}
                src={sl.sliderBodyLgUrl}
                alt="imagen slider lg"
                className="img-slide-desktop img-responsive"
              />
            ))
        }

      </Link>
    </>
  )
}