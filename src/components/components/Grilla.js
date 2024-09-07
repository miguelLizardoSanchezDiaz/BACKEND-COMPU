import React from 'react';
import { ProductCard } from './ProductCard';
import PropTypes from 'prop-types';

export const Grilla = ({ productos }) => (
  <ul className="grid-view">
    {productos.length > 0 ? (
      productos.map(producto => (
        <ProductCard key={producto.productoId} producto={producto} />
      ))
    ) : (
      <div>No hay productos disponibles</div>
    )}
  </ul>
);

Grilla.propTypes = {
  productos: PropTypes.arrayOf(PropTypes.object).isRequired
};