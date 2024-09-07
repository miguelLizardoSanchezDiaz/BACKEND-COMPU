import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { MdCompareArrows } from "react-icons/md";
import { StockStatus } from './StockStatus';
import PropTypes from 'prop-types';
import { CartContext } from '../../contexts/CartContext';
import Swal from 'sweetalert2';

export const ProductCard = ({ producto }) => {
  const { addToCart } = useContext(CartContext);
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

    const productoCantidad = { ...producto, cantidad: 1  }
    console.log('agregar', productoCantidad)
    addToCart(productoCantidad)
  }
  return (
    <li className="producto-card position-relative">
      <div className="font-family-montserrat btn-ahorro position-absolute box-offer txt-center">
        Ahorra {producto.productoDescuentoPorcentaje}%
      </div>
      <div className="producto-inner">
        <div className="icon-compare position-absolute"><MdCompareArrows size={25} /></div>

        <Link to={`/detalle-producto/${producto.productoSku}`}>
          <img
            className="grid-imagen"
            src={producto.productoImgUrlPrincipal || 'default-image-url.jpg'}
            alt={producto.productoNombre}
          />
        </Link>

        <div className="list-producto-imagen position-relative">
          <div className="font-family-montserrat btn-ahorro position-absolute list-box-offer txt-center">
            Ahorra {producto.productoDescuentoPorcentaje}%
          </div>
          <div className="list-icon-compare position-absolute"><MdCompareArrows size={25} /></div>

          <Link to={`/detalle-producto/${producto.productoSku}`}>
            <img
              className="list-imagen"
              src={producto.productoImgUrlPrincipal || 'default-image-url.jpg'}
              alt={producto.productoNombre}
            />
          </Link>

        </div>

        <div className="footer-space"></div>
        <div className="producto-info">
          <Link to={`/detalle-producto/${producto.productoSku}`}>
            <h3>{producto.productoNombre}</h3>
          </Link>
          <StockStatus stock={producto.productoStockActual} />
          <ul className="producto-especificaciones">
            {producto.productoEspecificaciones && producto.productoEspecificaciones.length > 0 ? (
              producto.productoEspecificaciones.slice(0, 5).map((spec, index) => (
                <li key={index}>{spec}</li>
              ))
            ) : (
              <li>No hay especificaciones disponibles</li>
            )}
          </ul>
          <div className="list-producto-price flex-container">
            <p className="producto-new-price">{producto.productoPrecio}</p>
            <p className="producto-old-price">{producto.productoPrecioAnterior}</p>
          </div>
        </div>
      </div>
      <div className="producto-price">
        <p className="producto-new-price">S/{producto.productoPrecio}</p>
        <p className="producto-old-price">S/{producto.productoPrecioAnterior}</p>
      </div>
      <div className="btn-add-to-cart">
        <button
          id="add-to-cart"
          className="transicion-btn"
          onClick={()=> addCarrito(producto)}>
          Añadir al carrito
        </button>
      </div>
    </li>
  );
};

ProductCard.propTypes = {
  producto: PropTypes.shape({
    productoDescuentoPorcentaje: PropTypes.number.isRequired,
    productoImgUrlPrincipal: PropTypes.string,
    productoNombre: PropTypes.string.isRequired,
    productoStockActual: PropTypes.number.isRequired,
    productoEspecificaciones: PropTypes.arrayOf(PropTypes.string),
    productoPrecio: PropTypes.number.isRequired,
    productoPrecioAnterior: PropTypes.number.isRequired,
    productoSku: PropTypes.string.isRequired
  }).isRequired
};