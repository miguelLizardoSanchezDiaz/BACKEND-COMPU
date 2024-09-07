import React, { useContext, useEffect, useState } from "react";
import Slider from 'react-slick';
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { TbTruckDelivery } from "react-icons/tb";
import { GoGift } from "react-icons/go";
import { MdOutlineSecurity } from "react-icons/md";
import { Offers } from "../sections/Offers";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProducto, getProductsCategoria } from '../../actions/home';
import { StockStatus } from "../components/StockStatus";
import { BreadCrumb } from "../components/BreadCrumb";
import { BenefitsSlide } from "../components/BenefitsSlide";
import { CartContext } from "../../contexts/CartContext";
import Swal from 'sweetalert2'

export const DetalleProducto = () => {
  const { sku } = useParams(); // SKU desde la URL
  const [activeTab, setActiveTab] = useState('Descripcion');
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recomendaciones, setRecomendaciones] = useState([]);
  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();

    const handleClickCarro = () => {
        navigate('/carro-compras');
    };

  const benefitsData = [
    {
      icon: <TbTruckDelivery size={50} />,
      title: 'ENVÍOS A TODO EL PERÚ',
      description: 'Hasta la puerta de tu casa',
    },
    {
      icon: <GoGift size={39} />,
      title: 'PROMOCIONES Y DESCUENTOS',
      description: 'Exclusivo para nuestros suscriptores',
    },
    {
      icon: <MdOutlineSecurity size={39} />,
      title: 'SEGURIDAD Y GARANTÍA',
      description: 'Todos nuestros productos son nuevos y con garantía',
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: false,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 393,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const result = await getProducto(sku);
        console.log('Producto cargado:', result);
        setProducto(result);

        if (result && result.categoria.categoriaCodigo) {
          const { productos } = await getProductsCategoria(result.categoria.categoriaCodigo, 10, 1);
          console.log('Recomendaciones cargadas:', productos);

          if (Array.isArray(productos)) {
            const productosAleatorios = productos.length > 0
              ? productos.sort(() => Math.random() - 0.5).slice(0, 2)
              : [];
            setRecomendaciones(productosAleatorios);
          } else {
            console.error('Error: productosRecomendados no es un array');
            setRecomendaciones([]);
          }
        }
      } catch (error) {
        console.error('Error al cargar el producto:', error);
        setError(error.message || 'Error al cargar el producto.');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [sku]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!producto) return <div>No se encontró el producto.</div>;
  const addCarrito=(producto)=>{
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

    const productoCantidad={...producto,cantidad}
    console.log('agregar',productoCantidad)
    addToCart(productoCantidad)
  }
  return (
    <div className="ml-10 mr-10 overflow-x">
      {/* Barra de navegación */}
      <div className="font-family-montserrat font16 mt-20 ">
        <BreadCrumb
          productoNombre={producto.productoNombre}
          categoriaDescripcion={producto.categoria.categoriaDescripcion}
          categoriaCodigo={producto.categoria.categoriaCodigo}
        />
        {/* <Link to="/" className="text-decoration-none">
          Inicio
        </Link> */}
      </div>

      {/* Detalles del producto */}
      <div className="flex-container-wrap bottom-container">
        <div className="container-40xs">
          <div className="container-zoom">
            <InnerImageZoom
              src={producto.productoImgUrlPrincipal}
              zoomSrc={producto.productoImgUrlPrincipal}
              className="img-responsive img-zoom"
            />
          </div>
        </div>
        <div className="container-60 font-family-montserrat">
          <h5 className="font400">
            <span className="mr-20">
              {producto.marca ? producto.marca.marcaDescripcion : 'Marca no disponible'}
            </span>
            {' | '}
            <span className="ml-20">SKU: {producto.productoSku}</span>
          </h5>
          <div className="font-family-montserrat font13 btn-ahorro pbuttonoffers width-offers-detail text-center">
            Ahorras {producto.productoDescuentoPorcentaje}%
          </div>
          <h1 className="font25">{producto.productoNombre}</h1>
          <p className="colorF9000 font25 txt-negrita500">
            S/. {producto.productoPrecio}
            <s className="colornegro font16v2">
              S/. {producto.productoPrecioAnterior}
            </s>
          </p>
          <p className="justificar">
            {producto.productoDescripcion}
          </p>

          <StockStatus stock={Number(producto.productoStockActual)} claseAdicional="product-status-detalle" />

          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <div className="hr"></div>
          <div>
            <label className="font-family-montserrat font15">
              Arma el kit perfecto con estos productos
            </label>
          </div>

          {/* Recomendaciones de productos */}
          <div className="container-100 flex-container-wrap margin-t-b-detalle-producto">
            {recomendaciones.map((recomendado, index) => (

              <div key={index} className="flex-container container-48 container-100 borderE2E2E2 mbxs-20 border-radius flex-column">
                <div className="flex-container container-100">
                  <div className="container-40 flex-container flex-center">
                    <img
                      src={recomendado.productoImgUrlPrincipal}
                      alt={recomendado.productoNombre}
                      className="img-responsive width-detalle pad-1rem"
                    />
                  </div>
                  <div className="container-60 container-100 align-center flex-container">
                    <div className="container-100">
                      <div>{recomendado.productoNombre}</div>
                      <div className="flex-container font-family-montserrat font400 pd-precios baseline-items">
                        <div className="font18v2 margin-right-10 colorF9000">
                          S/ {recomendado.productoPrecio}
                        </div>
                        <div className="flex-item tachado flex-center font13">
                          S/ {recomendado.productoPrecioAnterior}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pdbtn flex-container align-center gap-8">
                  <input type="checkbox" className="custom-checkbox" /> Seleccionar
                </div>
              </div>
            ))}
          </div>

          <div className="pad-bottom-24 font18v2">
            Cantidad
          </div>

          {/* Botones de cantidad y añadir al carrito */}
          <div div className="flex-container container-100" >
            <div className="width-20-product mbxs-20">
              <div className=" container-100">
                <input
                  type="button"
                  className="h-50px font400 pointer btn-counter font24 font-family-montserrat brd-btn-left "
                  value="-"
                  onClick={()=>(cantidad>1)? setCantidad(cantidad-1) : 1}
                />
                <input
                  type="button"
                  className="h-50px font400 pointer btn-counter font24 font-family-montserrat"
                  value={cantidad}
                />
                <input
                  type="button"
                  className="h-50px font400 pointer btn-counter font24 font-family-montserrat brd-btn-right"
                  onClick={()=>(cantidad<10)? setCantidad(cantidad+1):10}
                  value="+"
                />
              </div>
            </div>
            <div className="width-80-product">
              <div 
              className="h-50px font-family-montserrat btn-cart-product pointer container-100 font17" 
              onClick={()=>addCarrito(producto)}>
                Añadir al carrito
              </div>
            </div>
          </div>
          <div className="mgt15 margin-top-10">
            <div 
            onClick={handleClickCarro}
            className="h-50px font-family-montserrat btn-cart-product pointer container-100 font17 ">
              Comprar ahora
            </div>
          </div>

        </div>
      </div>

      {/* Tabs */}
      <div className="font-family-montserrat">
        <div className="tab">
          <button
            id="tablink-descripcion"
            className={`${activeTab === 'Descripcion' ? 'active' : ''}`}
            onClick={() => setActiveTab('Descripcion')}
          >
            Descripción
          </button>
          <button
            id="tablink-fichatecnica"
            className={`${activeTab === 'EspecificacionesTecnicas' ? 'active' : ''}`}
            onClick={() => setActiveTab('EspecificacionesTecnicas')}
          >
            Especificaciones Tecnicas
          </button>
        </div>
        <div className={`tabcontent ${activeTab === 'Descripcion' ? 'active' : ''}`}>
          <p style={{ marginBottom: '1em', fontSize: '1.2em', fontWeight: 500 }}>Características:</p>
          <ul>
            {producto.productoEspecificaciones && producto.productoEspecificaciones.length > 0 ? (
              producto.productoEspecificaciones.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))
            ) : (
              <li>No hay especificaciones disponibles</li>
            )}
          </ul>
        </div>

        <div className={`tabcontent ${activeTab === 'EspecificacionesTecnicas' ? 'active' : ''}`}>
          <div className="table">
            <div className="table_header">
              <div className="color-blanco txt-semibold">Especificaciones</div>
            </div>

            <div className="table_content table_content--two-column">
              <div>
                <div className="link">ID</div>
                <div className="link">1576</div>
              </div>

              <div>
                <div className="link">ID</div>
                <div className="link">1576</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Slider {...settings} className="slider-benefits">
        {benefitsData.map((benefit, index) => (
          <div key={index}>
            <BenefitsSlide benefit={benefit} />
          </div>
        ))}
      </Slider>

      {/* Sección de ofertas */}
      
      <div>
        <Offers />
      </div>
    </div>
  );
};