import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export const CarroCompras = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  return (
    <div className="ml-20 mr-20 font-family-montserrat container-carro-commpras">

      <div className="extrabold-800 color-520FDA font20 pad-18 txt-center pad-carrito-compras">
        {" "}
        CARRO DE COMPRAS
      </div>

      <div className="flex-container font13-5-semibold flex-center align-center">
        <div className="timeline-item">1</div>
        <div className="timeline-line"></div>
        <div className="timeline-item">2</div>
        <div className="timeline-line"></div>
        <div className="timeline-item">3</div>
      </div>

      <div className="container-cards">
        {
        (cartItems.length == 0 )?
          <div>No hay articulos en el carrito de compras</div>
        
        :(
        cartItems.map((item) => (
          <div className="container-card-info flex-container">
            <div className="producto-compra flex-container txt-center">
              <img
                src={item.productoImgUrlPrincipal}
                alt="impresora multi brother"
                className="img-carro-compras"
              />
            </div>

            <div className="info">
              <div className="font-104 txt-semibold item-descripcion">
              {item.productoDescripcion}
              </div>
              <div className="color-A4A4A4 font7 txt-semibold">
              {item.productoSku}
              </div>
              <div className="precio-info flex-container justify-content">
                <div className="color-520FDA font15 txt-semibold">S/ {item.productoPrecio}</div>
                <div className="br4 color-520FDA btn-agregar flex-container txt-center txt-semibold">
                  <div className="pad-txt1 font11">1</div>
                  <div className="txt-semibold txt-agregar pointer">
                    {" "}
                    + Agregar
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))


        )}

       {
        (cartItems.length > 0 )?
        (
          <>
          <div className="cupon">
            <div className="container-cupon br6 color-F4F4F flex-container justify-content txt-center ">
              <div className="font10 font700 pad-codigo">CODIGOTOSH</div>
              <div className="btn-cupon br6 color-blanco flex-container align-center">
                <div className="txt-negrita500 font10-5">Aplicar</div>
              </div>
            </div>
          </div>

        <div className="detalle-compra flex-container container-100">
          <div className="font12-semibold">
            <div className="fila1">
              <div className="column1">Subtotal</div>
              <div className="column2">S/1200</div>
            </div>

              <div className="fila2 border-top border-bottom">
                <div className="column1">Cupón</div>
                <div className="column2 color-520FDA">- S/50</div>
              </div>

              <div className="fila3 border-bottom">
                <div className="column1">Costo total</div>
                <div className="column2">S/1050</div>
              </div>

              <div className="fila4">
                <div className="column1">Ahorraste</div>
                <div className="column2">S/144</div>
              </div>
            </div>
          </div>

          <div className="container-100 flex-container flex-center">
              <Link
                to="/checkout"
                id="btn-finalizar-compra"
                className="color-blanco txt-semibold font15 font16-5 font-family-montserrat enlace-noStyle">
                Siguiente
              </Link>
          </div>
        </>
        ):''
        
       }
      </div>
    </div>
  );
};