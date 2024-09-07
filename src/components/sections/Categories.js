import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { getCategorias } from "../../actions/home";

export const Categories = () => {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Número de elementos visibles por slide
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
          initialSlide: 2.5,
        },
      },
      {
        breakpoint: 393,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
          initialSlide: 2.5,
        },
      },
    ],
  };

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const result = await getCategorias();
        const filteredCategories = result.filter(c =>
          c.categoriaSoloNavBar === 0 &&
          (c.categoriaPadreId === null || c.categoriaPadreId === undefined)
        );
        setCategories(filteredCategories);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-categories pd-categories">
      <div className="flex-container justify-content padding-categories-titles baseline-items">
        <div className="txt-semibold font-family-montserrat font16 font16v color-blanco">
          Nuestras categorias
        </div>
        <Link to="/catalogo-producto"
          className="font-family-montserrat font12v2-0 txt-negrita">
          Ver Todo
        </Link>
      </div>
      <Slider className="box-categories padding-products" {...settings}>

        {categories.map((c) => (
          <div key={c.categoriaId}>
            <div className="bg-fff border-radius-9 margen-item ">
              <Link
                to={`/catalogo-producto?categoria=${c.categoriaCodigo}&limit=10&page=1`}
                className="text-decoration-none">
                <img
                  src={c.categoriaImgUrl}
                  alt={`Imagen de la categoría ${c.categoriaDescripcion}`}
                  className="img-responsive border-radius-9"
                />
              </Link>
              <div className="padding-categories-item">
                <div className="txt-semibold font-family-montserrat font14">
                  {c.categoriaDescripcion}
                </div>
                <div className="font-family-montserrat font10 txt-72FD91">
                  {c.categoriaOfertaDescripcion}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};