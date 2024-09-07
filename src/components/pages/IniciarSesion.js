import React from "react";

export const IniciarSesion = () => {
  return (
    <div className="login-container flex-container txt-center align-center ml-20 mr-20 mr-20v2 ml-20v2 font-family-montserrat">
      <h2 className="login-titulo font16 color-520FDA extrabold-800">
        INICIO DE SESIÓN
      </h2>
      <form className="login-form flex-container">
        <div className="form-grupo mrg-bottom19">
          <label htmlFor="email" className="txt-start">
            Correo electrónico
          </label>
          <input type="email" id="email" className="form-input" />
        </div>
        <div className="form-grupo">
          <label htmlFor="password" className="txt-start">
            Contraseña
          </label>
          <input type="password" id="password" className="form-input" />
        </div>
        <div className="form-footer flex-container align-center">
          <a href="#" className="forgot-password color-520FDA font11 txt-semibold" >
            Olvide mi contraseña
          </a>
          <button type="submit" id="login-button">
            Iniciar sesión
          </button>
        </div>
        <div className="registro-link font9 color757575">
          ¿Nuevo cliente?{" "}
          <a href="#" className="color757575">
            Crear una cuenta
          </a>
        </div>
      </form>
    </div>
  );
};
