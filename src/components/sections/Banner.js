import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getSliders } from '../../actions/home';

export const Banner = () => {
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
          sliders && sliders.map(s => (
            <img
              key={s.sliderId}
              src={s.sliderCabeceraXsUrl}
              alt="imagen slider xs"
              className="img-responsive img-movil"
            />
          ))
        }

      </Link>
    </>
  )
}