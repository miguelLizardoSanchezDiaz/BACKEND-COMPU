import React, { useState, useEffect, useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";
// import { getMasVendidos, getProductsCategoria } from '../../actions/home';
import { getMasVendidos } from '../../actions/home';
import { CartContext } from '../../contexts/CartContext';
import Swal from 'sweetalert2';

export const MoreSale = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  // const [categoriaNombre, setCategoriaNombre] = useState('');

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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          initialSlide: 1.5,
        },
      },
      {
        breakpoint: 393,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1.3,
          initialSlide: 1.3,
        },
      },
    ],
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await getMasVendidos();
        setProductos(result);
        console.log("result", result);
        // if (result.length > 0) {
        //   const categoriaCode = '101';
        //   const categoriaResult = await getProductsCategoria(categoriaCode);
        //   setCategoriaNombre(categoriaResult.categoriaCode);
        // }

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  const addCarrito = (producto) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se agregó al carrito de compras",
      showConfirmButton: false,
      timer: 2500,
      customClass: {
        container: 'custom-body'
      }
    });

    const productoCantidad = { ...producto, cantidad: 1 }
    console.log('agregar', productoCantidad)
    addToCart(productoCantidad)
  }
  return (
    <div className='pd-categories'>
      <div className='flex-container justify-content padding-categories-titles baseline-items'>
        <div className='txt-semibold font-family-montserrat font20'>Lo más vendido</div>
        <Link to="/catalogo-producto"
          className='font-family-montserrat txt-negrita color-520FDA'>
          Ver Todo
        </Link>
      </div>
      <Slider {...settings} className='padding-products txt-semibold'>
        {
          productos.map((p) =>
            <div key={p.productoId}>
              <div className='brd-product'>
                <div className='flex-container flex-column align-center'>
                  <Link to={`/detalle-producto/${p.productoSku}`}
                  >
                    <img src={p.productoImgUrlPrincipal}
                      alt={p.productoNombre}
                      className='img-responsive img-responsive-v2' />
                  </Link>
                  <div className='font-marca mr-right-auto font-family-yrsa txt-lighter'>
                    {p.marcaDescripcion}
                  </div>
                  <div className='font-description mr-right-auto font-family-montserrat font400'>
                    {p.productoNombre}
                  </div>
                </div>
                <div className='flex-container font-family-montserrat font400 pd-precios baseline-items'>
                  <div className='font20 font400 '>
                    {p.productoPrecio !== null ? `S/. ${p.productoPrecio}` : 'Precio no disponible'}
                  </div>
                  {p.productoPrecioAnterior && (
                    <div className='tachado flex-center font13'>
                      {`S/. ${p.productoPrecioAnterior}`}
                    </div>
                  )}
                </div>
                <div
                  className='font-family-montserrat btn-cart pointer font14'
                  onClick={() => addCarrito(p)}>
                  Añadir al carrito
                </div>
              </div>
            </div>
          )
        }

      </Slider>
    </div>
  )
}