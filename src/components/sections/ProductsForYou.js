import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProductsForYou = () => {
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
          infinite: false,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  const products = [
    {
      id: 1,
      imgUrl: "/img_publics/para-estudiar.png",
    },
    {
      id: 2,
      imgUrl: "/img_publics/para-trabajar.png",
    },
    {
      id: 3,
      imgUrl: "/img_publics/comunidad-gamer.png",
    },
  ];

  return (
    <div className="pd-for-you">
      <div className="txt-center padding-categories-titles">
        <div className="txt-semibold font-family-montserrat font18">
          Los productos ideales para ti
        </div>
      </div>

      <div className="margin-lr flex-container-wrap">
        {products.map((c) => (
          <div key={c.id}>
            <img
              src={c.imgUrl}
              alt="Productos ideales para ti"
              className="img-responsive mgb177 br9 pointer"
            />
          </div>
        ))}

        {/* Agrega más elementos div para más slides */}
      </div>
    </div>
  );
};