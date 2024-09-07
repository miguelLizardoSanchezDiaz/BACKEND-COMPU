import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getSliders } from '../../actions/home';


export const Slider = () => {
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
          {
            sliders
            .filter(s=> s.sliderId === 1) 
            .map(s=>(
              <img
                key={s.sliderId}
                src={s.sliderXsUrl}
                alt="imagen slider xs de un pc gamer"
                className="img-responsive img-slider"
              />
            ))
          }
        
          {
            sliders 
            .filter(s=> s.sliderId === 1)
            .map(sl=>(
              <img
                key={sl.sliderId}
                src={sl.sliderLgUrl}
                alt="imagen slider lg de una pc gamer"
                className="img-slide-desktop img-responsive"
              />
            ))
          }
        
      </Link>

    </>
  );
}
