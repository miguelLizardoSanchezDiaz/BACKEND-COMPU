import React from "react";

export const Gracias = () => {
  return (
    <div className="txt-center">
      <div className="container-img">
        <img
          src="/img_publics/check-list.png"
          alt="checklist"
          className="img-responsive-gracias img-check"
        />
      </div>

      <div className="container-img">
        <img
          src="/img_publics/gracias-mesa-de-trabajo.png"
          alt="persona gracias"
          className="img-responsive-gracias img-personas"
        />
      </div>

      <div className="font24 font700 font-family-montserrat">¡GRACIAS!</div>
      <div className="font-family-montserrat font20 extrabold-800 pad-acabamos color-520FDA">
        ACABAMOS RECIBIR TU RESPUESTA
      </div>
      <div className="ancho100">
        <div className="btn-atras">
          <a href="#" className="container-atras">
            <img
              src="/img_publics/arrow.png"
              alt="flecha boton"
              className="arrow"
            />
            <div className="font-family-montserrat color-blanco extrabold-800">
              ATRÁS
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};