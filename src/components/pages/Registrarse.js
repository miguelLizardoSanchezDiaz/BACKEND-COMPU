import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { TfiEye } from "react-icons/tfi";

export const Registrarse = () => {
  return (
    <div className="login-container flex-container txt-center align-center ml-20 mr-20 font-family-montserrat">
      <h2 className="login-titulo font16 color-520FDA extrabold-800">
        REGISTRARSE
      </h2>

      <form className="contacto-form container-100 txt-start">
        <div className="form-grupo mrg-r-50">
          <label htmlFor="name">Nombre y Apellido</label>
          <input type="text" id="name" name="name" className="form-input" />
        </div>
        <div className="form-grupo mrg-bottom19">
          <label htmlFor="email" className="txt-start">
            Correo electrónico
          </label>
          <input type="email" id="email" className="form-input" />
        </div>
        <div className="form-grupo mrg-bottom19 mrg-r-50">
          <label htmlFor="email" className="txt-start">
            Confirmar correo electrónico
          </label>
          <input type="email" id="email" className="form-input" />
        </div>
        <div className="form-grupo position-relative">
          <label htmlFor="password" className="txt-start">
            Contraseña*
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            required
          />
          <span className="eyes-icon">
            <TfiEye size={29} style={{ color: "C1C1C1" }} />
          </span>
        </div>
        <div className="form-grupo position-relative mrg-r-50">
          <label htmlFor="password" className="txt-start" required>
            Confirmar Contraseña*
          </label>
          <input type="password" id="password" className="form-input" />
          <span className="eyes-icon">
            <TfiEye size={29} style={{ color: "C1C1C1" }} />
          </span>
          <div className="label-password">
            Su contraseña debe contener mínimo 7 dígitos, al menos una letra
            Mayúscula, número y símbolos, tales como @%!?&
          </div>
        </div>
        <div className="form-grupo">
          <label htmlFor="document-type">Tipo de Documento*</label>
          <select
            id="departamento"
            name="departamento"
            className="form-input color-454545 font07rem"
          >
            <option value="">Seleccione..</option>
            <option value="dni">Dni</option>
            <option value="pasaporte">Pasaporte</option>
          </select>
        </div>
        <div className="form-grupo mrg-r-50">
          <label htmlFor="document">N° de Documento*</label>
          <input
            type="text"
            id="document"
            name="document"
            className="form-input input-documento"
            placeholder="Ingresa tu N° de Documento"
          />
        </div>
        <div className="form-grupo">
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
      </form>

      <button type="submit" id="registrarse-button">
        Crear cuenta
      </button>
      <div className="registro-link font9 color757575">
        ¿Ya tienes una cuenta?{" "}
        <a href="#" className="color757575">
          Inicie sesión aquí
        </a>
      </div>
    </div>
  );
};
