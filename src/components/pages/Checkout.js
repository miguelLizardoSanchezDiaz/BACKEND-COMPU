import React from "react";
import { FaCheck } from "react-icons/fa";
import { GoClock } from "react-icons/go";
{/* import { FaCheckSquare } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";*/}

export const Checkout = () => {
  const iziConfig = {
    config: {
      transactionId: '{TRANSACTION_ID}',
      action: 'pay',
      merchantCode: '{MERCHANT_CODE}',
      order: {
        orderNumber: '{ORDER_NUMBER}',
        currency: 'PEN',
        amount: '1.50',
        processType: 'AT',
        merchantBuyerId: '{MERCHANT_CODE}',
        dateTimeTransaction: '1670258741603000',
      },
      billing: {
        firstName: 'Juan',
        lastName: 'Wick Quispe',
        email: 'jwickq@izi.com',
        phoneNumber: '958745896',
        street: 'Av. Jorge Chávez 275',
        city: 'Lima',
        state: 'Lima',
        country: 'PE',
        postalCode: '15038',
        documentType: 'DNI',
        document: '21458796',
      }
    }
  }

  const handleClickComprar=()=>{
    /*try {

      const checkout = new Izipay({ config: iziConfig });
    
    } catch ({Errors, message, date}) {
    
        console.log({Errors, message, date});
    
    }*/
  }
  return (
    <div className="ml-20 mr-20 font-family-montserrat">
      <div className="extrabold-800 color-520FDA font20 font21-5 pad-18 txt-center pad-carrito-compras">
        {" "}
        CHECKOUT
      </div>

      <div className="timeline-checkout flex-container font13-5-semibold font15 flex-center align-center">
        <div className="timeline-item icon-check">
          <FaCheck size={9} />
        </div>
        <div className="timeline-line"></div>
        <div className="timeline-item-checkout">2</div>
        <div className="timeline-line"></div>
        <div className="timeline-item">3</div>
      </div>

      <div className="container-general">
        <div className="bloque1 flex-contents">
          <div className="flex-container width-85 flex-center txt-center font15 font16-5 txt-negrita">
            ¿En dónde recibirás tu pedido?
          </div>

          <div className="container-ubicacion">
            <label className="radio-label">
              <div className="radio-input">
                <input type="radio" name="producto" />
              </div>
              <div className="icon-text-container">
                <div className="box-icon">
                  <img
                    src="/img_publics/casa-icon.png"
                    alt="icono casa"
                  />
                </div>
                <div className="box-text">
                  <h3 className="font14 font15-5 txt-semibold color-blanco mr-auto">
                    Elige tu dirección
                  </h3>
                  <p className="font10 font11-5 color-blanco mr-auto">
                    Recibe tu pedido en donde estés
                  </p>
                </div>
              </div>
            </label>
            <label className="radio-label container-agregar-direccion">
              <div className="text-add-direccion flex-container container-100">
                <h3 className="text-add-direccion-em mr-auto">
                  + Agregar dirección
                </h3>
              </div>
            </label>
            <label className="radio-label">
              <div className="radio-input">
                <input type="radio" name="producto" />
              </div>

              <div className="icon-text-container">
                <div className="box-icon">
                  <img
                    src="/img_publics/tienda-icon.png"
                    alt="tienda icono"
                  />
                </div>
                <div className="box-titulo">
                  <h3 className="font14 font15-5 color-blanco mr-auto">
                    Recojo en tienda
                  </h3>
                </div>
              </div>
            </label>

            <div className="box-direccion">
              <div>
                <img src="/img_publics/tienda.png" alt="tienda" />
              </div>
              <div className="info-direccion">
                <div className="box-texto-direccion">
                  <h3 className="mr-auto font14  font15-5 txt-negrita">Tujillo</h3>
                  <p className="mr-auto font14  font15-5">
                    Jr. Ayacucho 463, Centro Turístico, Trujillo, Perú, 13001
                  </p>
                </div>
                <div className="box-horario-direccion">
                  <GoClock size={14} color="#00E5E5" />
                  <div className="font10 font11-5 txt-semibold color-00E5E5">
                    09:00 AM - 5:30 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* bloque horario de recojo
          <div className="container-horario-recojo">
            <div className="box-horario">
              <div className="img-persona-office">
                <img
                  src="/img_publics/persona-office.png"
                  alt="persona-office"
                />
              </div>

              <div className="box-texto">
                <div className="recojo-horario">
                  <img
                    src="/img_publics/horario-icon.png"
                    alt="horario icono"
                    className="horario-icon"
                  />
                  <h4 className="font16 font17-5 txt-semibold">Horario de recojo</h4>
                </div>

                <div className="check-horario">
                  <FaCheckSquare size={17} style={{ color: "#00E5E5" }} />
                  <div className="parrafos-horario txt-semibold">
                    <p className="font13 font14-5">
                      Tu pedido estará listo a partir desde el
                    </p>
                    <p className="font12-regalo font13-5 color-520FDA">
                      Miércoles, 06 de Marzo a las 10:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-informacion font12-regalo font13-5 txt-negrita500">
              <ul>
                <li>
                  <FaCircle size={14} style={{ color: "#00E5E5" }} />
                  <p>Te enviaremos un mensaje cuando tu pedido esté listo para recoger.</p>
                </li>
                <li>
                  <FaCircle size={14} style={{ color: "#00E5E5" }} />
                  <p>Una vez que tu pedido esté listo, tendrás un plazo máximo para de 48 horas.</p>
                </li>
                <li>
                  <FaCircle size={10} style={{ color: "#00E5E5" }} />
                  <p>Recuerda que debes llevar...</p>
                </li>
              </ul>
            </div>
          </div>
*/}
          <div className="container-pago">
            <div className="pago-form font9 font10-5 font400">
              <form action="#" method="POST">
                <div className="form-group pad-select">
                  <label className="color-75757E" htmlFor="pais">
                    País / Región:
                  </label>
                  <select id="pais" name="pais">
                    <option value="peru">Perú</option>
                  </select>
                </div>
                <div className="box-nombre-apellidos">
                  <div className="form-group ancho-form">
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Nombre"
                      required
                      className="font9 font10-5 color-D9D9D9"
                    />
                  </div>
                  <div className="form-group ancho-form">
                    <input
                      type="text"
                      id="apellidos"
                      name="apellidos"
                      placeholder="Apellidos"
                      required
                      className="font9 font10-5 color-D9D9D9"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    id="ruc"
                    name="ruc"
                    maxLength="11"
                    placeholder="RUC si necesita factura"
                    className="font9 font10-5 color-D9D9D9"
                  />
                  <span className="error-message">
                    El RUC debe tener máximo 11 dígitos
                  </span>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    id="dni"
                    name="dni"
                    maxLength="20"
                    placeholder="DNI o CE"
                    className="font9 font10-5 color-D9D9D9"
                  />
                  <span className="error-message">
                    El DNI o CE debe tener máximo 20 dígitos
                  </span>
                </div>
                <div className="form-group pad-select">
                  <label className="color-75757E" htmlFor="departamento">
                    Departamento:
                  </label>
                  <select id="departamento" name="departamento">
                    <option value="lima">Lima</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="distrito"
                    name="distrito"
                    placeholder="Distrito"
                    className="font9 font10-5 color-D9D9D9"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    pattern="[0-9]{9}"
                    required
                    placeholder="Teléfono"
                    className="font9 font10-5 color-D9D9D9"
                  />
                  <span className="error-message">
                    El teléfono debe tener exactamente 9 dígitos
                  </span>
                </div>
              </form>
            </div>
            <div className="txt-semibold font15 font16-5">Medio de pago</div>
            <div className="box-medio-de-pago">
              <label className="font15 font16-5 txt-semibold">
                <input
                  type="radio"
                  name="medioPago"
                  style={{ marginLeft: "20px" }}
                />
                Pago en línea
              </label>

              <div className="medios-de-pago">
                <div className="box-card">
                  <label>
                    <input type="radio" name="tarjeta" className="input-radio" />
                    <div>
                      <img
                        src="/img_publics/VISA.png"
                        alt="visa"
                        className="img-credit-card"
                      />
                    </div>
                  </label>
                </div>

                <div className="box-card">
                  <label>
                    <input type="radio" name="tarjeta" className="input-radio" />
                    <div>
                      <img
                        src="/img_publics/yape-plin.png"
                        alt="yape-o-plin"
                        className="img-credit-card"
                      />
                    </div>
                  </label>
                </div>

                <div className="box-card">
                  <label>
                    <input type="radio" name="tarjeta" className="input-radio" />
                    <div>
                      <img
                        src="/img_publics/Mastercard.png"
                        alt="mastercard"
                        className="img-credit-card"
                      />
                    </div>
                  </label>
                </div>

                <div className="box-card">
                  <label>
                    <input type="radio" name="tarjeta" className="input-radio" />
                    <div>
                      <img
                        src="/img_publics/American-Express.png"
                        alt="american-express"
                        className="img-credit-card"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>


          </div>
          <div className="container-comprobar">
            <div className="font15 font16-5 color-520FDA txt-semibold margin17">
              Comprobar los datos antes de finalizar su compra
            </div>
            <div className="contenedor-datos margin17 flex-container justificar">
              <div className="img-container-comprobar">
                <img src="/img_publics/caja.png" alt="caja" />
              </div>

              <div className="contenedor-textos">
                <div className="font15 font16-5 txt-negrita500">Despachado por:</div>
                <p className="font13 ">Lorem ipsum dolor sit amet</p>
              </div>
            </div>

            <div className="contenedor-datos margin17 flex-container justificar">
              <div className="img-container-comprobar">
                <img src="/img_publics/ubicacion.png" alt="ubicacion" />
              </div>
              <div className="contenedor-textos">
                <div className="font15 font16-5 txt-negrita500">Tipo de entrega:</div>
                <p className="font13 font14-5">
                  Lorem ipsum dolor sit amet consectetur. Aenean tellus facilisi
                  nunc adipiscing tristique risus. Fermentum id ut morbi in proin
                  pulvinar quam suspendisse.
                </p>
              </div>
            </div>

            <div className="contenedor-datos margin17 flex-container justificar">
              <div className="img-container-comprobar">
                {" "}
                <GoClock />{" "}
              </div>
              <div className="contenedor-textos">
                <div className="font15 font16-5 txt-negrita500">
                  Fecha y hora de entrega:
                </div>
                <p className="font13 font14-5">Lorem ipsum dolor sit amet</p>
              </div>
            </div>

            <div className="contenedor-datos margin17 flex-container justificar">
              <div className="img-container-comprobar">
                <img src="/img_publics/factura.png" alt="factura" />
              </div>
              <div className="contenedor-textos">
                <div className="font15 font16-5 txt-negrita500">Comprobante de pago:</div>
                <p className="font13 font14-5">Lorem ipsum</p>
              </div>
            </div>

            <div className="contenedor-datos margin17 flex-container justificar">
              <div className="img-container-comprobar">
                <img
                  src="/img_publics/tarjeta-de-credito.png"
                  alt="tarjeta-de-credito"
                />
              </div>

              <div className="contenedor-textos">
                <div className="font15 font16-5 txt-negrita500">Medio de pago:</div>
                <p className="font13 font14-5">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bloque2 flex-contents">

          <div className="container-resumen container-100">
            <div className="font15 font16-5 font16-5 txt-negrita">Resumen del pedido</div>
            <div className="box-producto flex-container flex-end">
              <div className="img-producto position-relative flex-container flex-center container-100 ">
                <img
                  src="/img_publics/impresora-multi-brother.png"
                  alt="impresora multi brother"
                />
                <div className="circulo position-absolute">1</div>
              </div>
              <div className="producto-texto flex-container txt-end">
                <p className="font13 font14-5 txt-semibold">
                  Impresora Multifuncional Brother DCP-T520W, Usb
                </p>
                <p className="txt-semibold font15 font16-5 color-520FDA">S/888</p>
              </div>
            </div>

            <div className="box-producto flex-container flex-end">
              <div className="img-producto position-relative flex-container flex-center container-100 ">
                <img
                  src="/img_publics/mouse-griffin.png"
                  alt="mouse griffin"
                />
                <div className="circulo position-absolute">1</div>
              </div>
              <div className="producto-texto flex-container txt-end">
                <p className="font13 font14-5 txt-semibold">
                  Mouse Redragon Griffin M607 RGB Negro
                </p>
                <p className="txt-semibold font15 font16-5 color-520FDA">S/888</p>
              </div>
            </div>
          </div>

          <div className="container-detalle-compra">
            <div className="detalle-compra flex-container ancho-unset">
              <div className="font12-semibold font13-5">
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
                  <div className="column1">Ahorrastes</div>
                  <div className="column2">S/144</div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-100 flex-container flex-center">
            <button
              id="btn-finalizar-compra"
              onClick={handleClickComprar}
              className="color-blanco txt-semibold font15 font16-5 font-family-montserrat">
              Finalizar compra
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};