import React from 'react';
import { Link } from 'react-router-dom';

export const BreadCrumb = ({ productoNombre, categoriaDescripcion, categoriaCodigo }) => {
  return (
    <div className="font-family-montserrat font-bradcrumb mt-20">
      <Link to="/" className="text-decoration-none">
        Inicio
      </Link>

      {categoriaDescripcion && categoriaCodigo && (
        <>
          {" > "}
          <Link
            to={`/catalogo-producto?categoria=${categoriaCodigo}&limit=10&page=1`}
            className="text-decoration-none">
            {categoriaDescripcion}
          </Link>
        </>
      )}

      {" > "}
      {productoNombre}
    </div>
  );
};