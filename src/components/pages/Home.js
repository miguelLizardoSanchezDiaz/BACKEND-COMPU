import React from "react";
import { Nabvar } from "../layout/Nabvar";
import { Banner } from "../sections/Banner";
import { Footer } from "../layout/Footer";
import { Principal } from "./Principal";
import { DetalleProducto } from "./DetalleProducto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page404 } from "./Page404";
import { CustomerService } from "../sections/CustomerService";
import { Gracias } from "./Gracias";
import { AgradecemosCompra } from "./AgradecemosCompra";
import { NabvarSm } from "../layout/NabvarSm";
import { CarroCompras } from "./CarroCompras";
import { Checkout } from "./Checkout";
import { Contactanos } from "./Contactanos";
import { IniciarSesion } from "./IniciarSesion";
import { Registrarse } from "./Registrarse";
import { TerminosYCondiciones } from "./TerminosYCondiciones";
import { CatalogoProducto } from "./CatalogoProducto";
import { DesplazarseArriba } from "../components/DesplazarseArriba";

export const Home = () => {
  return (
    <>
      <BrowserRouter>
        <DesplazarseArriba />

        <Banner />
        <div className="navxshide animate__animated animate__bounceOut">
          <Nabvar className=" " />
        </div>
        <div className="navsmhide">
          <NabvarSm className="" />
        </div>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/detalle-producto" element={<DetalleProducto />} />
          <Route path="/detalle-producto/:sku" element={<DetalleProducto />} />
          <Route path="/gracias" element={<Gracias />} />
          <Route path="/agradecemos-compra" element={<AgradecemosCompra />} />
          <Route path="/carro-compras" element={<CarroCompras />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
          <Route path="/catalogo-producto" element={<CatalogoProducto />} />
          <Route path="/catalogo-producto/:categoriaCode" element={<CatalogoProducto />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <CustomerService />
        <Footer />
      </BrowserRouter>
    </>
  );
};
