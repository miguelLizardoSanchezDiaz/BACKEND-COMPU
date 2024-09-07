import React from "react";
import { FaCheck } from "react-icons/fa";

export const AgradecemosCompra = () => {
  return (
    <div className="txt-center">
      <div className="flex-container timeline font13-5-semibold font15 flex-center align-center">
        <div className="timeline-item-check icon-check">
          <FaCheck size={9} />
        </div>
        <div className="timeline-line"></div>
        <div className="timeline-item-check icon-check">
          <FaCheck size={9} />
        </div>
        <div className="timeline-line"></div>
        <div className="timeline-item-check icon-check">
          <FaCheck size={9} />
        </div>
      </div>
      <div className="container-img">
        <img
          src="/img_publics/persona-compra.png"
          alt="persona compra"
          className="img-responsive-gracias img-personas"
        />
      </div>
      <div className="font24 font700 font-family-montserrat">
        ¡ AGRADECEMOS{" "}
      </div>
      <div className="font-family-montserrat font20 extrabold-800 pad-acabamos color-520FDA">
        POR TU COMPRA !
      </div>
      <div className="ancho100">
        <div className="btn-atras">
          <a href="#" className="container-atras">
            <img
              src="/img_publics/arrow.png"
              alt="flecha boton"
              className="flecha"
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