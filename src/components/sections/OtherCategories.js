import React, { useState, useEffect, useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getProductsCategoria } from '../../actions/home';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import Swal from 'sweetalert2';

export const OtherCategories = () => {
  const { addToCart } = useContext(CartContext);

  const [productos, setProductos] = useState({
    oneSeccion: [],
    twoSeccion: [],
    threeSeccion: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categoria = {
    oneSeccion: { code: '109' },
    twoSeccion: { code: '111' },
    threeSeccion: { code: '108' }
  }

  // const [categoriaNombre, setCategoriaNombre] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { productos: oneSeccionProducts } = await getProductsCategoria(categoria.oneSeccion.code, 10, 1);
        const { productos: twoSeccionProducts } = await getProductsCategoria(categoria.twoSeccion.code, 10, 1);
        const { productos: threeSeccionProducts } = await getProductsCategoria(categoria.threeSeccion.code, 10, 1);

        setProductos({
          oneSeccion: oneSeccionProducts || [],
          twoSeccion: twoSeccionProducts || [],
          threeSeccion: threeSeccionProducts || [],
        });

      } catch (error) {
        setError('Error al cargar los productos.');
        console.error('Error al cargar los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoria.oneSeccion.code, categoria.twoSeccion.code, categoria.threeSeccion.code]);

  if (loading) return null;
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

  const renderSection = (title, categoryProductos) => {
    // Asegurar que `categoryProductos` sea array antes de usar `map`
    const productosArray = Array.isArray(categoryProductos) ? categoryProductos : [];
    return (
      <div className='pd-categories ml-10 mr-10'>
        <div className='txt-center mb-20'>
          <div className='txt-semibold font-family-montserrat font20 bg-8566FF br5 color_white pdbtn'>
            {title}
          </div>
        </div>
        <Slider {...settings}>
          {productosArray.map((c, index) => (
            <div key={c.id || index}>
              <div className='brd-product'>
                <div className='flex-container flex-column align-center'>
                  <Link to={`/detalle-producto/${c.productoSku}`}
                  >
                    <img src={c.productoImgUrlPrincipal}
                      alt={c.productoNombre}
                      className='img-responsive img-responsive-v2' />
                  </Link>
                  <div className='font-marca mr-right-auto font-family-yrsa txt-lighter'>
                    {c.marcaDescripcion}
                  </div>
                  <div className='font-description mr-right-auto font-family-montserrat font400'>
                    {c.productoNombre}
                  </div>
                </div>

                <div className='flex-container font-family-montserrat font400 pd-precios baseline-items'>
                  <div className='font20 font400 '>
                    {c.productoPrecio !== null
                      ? `S/. ${(c.productoPrecio).toFixed(2)}`
                      : 'Precio no disponible'}
                  </div>
                  {c.productoPrecioAnterior && (
                    <div className='tachado flex-center font13'>
                      {`S/. ${(c.productoPrecioAnterior).toFixed(2)}`}                    </div>
                  )}
                </div>
                <div className='font-family-montserrat btn-cart pointer font14'
                  onClick={() => addCarrito(c)}>
                  Añadir al carrito
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <>
      {renderSection('Periféricos', productos.oneSeccion)}
      {renderSection('Gaming', productos.twoSeccion)}
      {renderSection('Componentes para PC', productos.threeSeccion)}
    </>
  );
}