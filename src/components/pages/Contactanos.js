import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const Contactanos = () => {
  return (
    <div className="contactanos-page font-family-montserrat">
      <div className="contactanos-header">
        <img
          src="/img_publics/contacto-icon.svg"
          alt="Contacto Icon"
          className="contacto-icon"
        />
        <h2 className="contacto-titulo">CONTÁCTANOS</h2>
      </div>

      <div className="contacto-form-container">
        <h3 className="form-titulo">FORMULARIO DE CONTACTO</h3>
        <p className="form-descripcion">
          Hola, para poder ayudarte, te pedimos que completes correctamente
          todos los campos solicitados en el siguiente formulario. Uno de
          nuestros ejecutivos de atención al cliente te contactará en un plazo
          de 24 horas hábiles.
        </p>
        <p className="form-nota">
          Recuerda que siempre te puedes comunicar con nuestro canal de atención
          telefónica al +51 959 730 400 de lunes a viernes desde las 08:00 hasta
          las 17:30 hrs, excepto feriados/festivos.
        </p>

        <form className="contacto-form">
          <div className="form-grupo mrg-r-50">
            <label htmlFor="name">Nombre y Apellido*</label>
            <input type="text" id="name" name="name" className="form-input" />
          </div>

          <div className="form-grupo">
            <label htmlFor="document">DNI, PASAPORTE O RUC*</label>
            <input
              type="text"
              id="document"
              name="document"
              className="form-input"
            />
          </div>

          <div className="form-grupo mrg-r-50">
            <label htmlFor="phone">TELÉFONO*</label>
            <div className="phone-input-container">
              <PhoneInput
                country={"pe"} // Código de país para Perú
                onlyCountries={["pe"]} // Puedes agregar más países si es necesario
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                  className: "form-input form-input-contactanos",
                }}
              />
            </div>
          </div>

          <div className="form-grupo">
            <label htmlFor="email">E-mail*</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Ejemplo: correo@gmail.com"
            />
          </div>

          <div className="form-grupo">
            <label htmlFor="comments">COMENTARIOS*</label>
            <textarea
              id="comments"
              name="comments"
              className="form-input textarea-contactanos"
              rows="4"
            ></textarea>
          </div>
        </form>
        <div className="flex-container">
          <button type="submit" id="enviar-boton">
            ENVIAR
          </button>
        </div>
      </div>
    </div>
  );
};