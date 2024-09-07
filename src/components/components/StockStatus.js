import React from 'react';
import { FaCircle } from "react-icons/fa";
import PropTypes from 'prop-types';

export const StockStatus = ({ stock, claseAdicional }) => {
  const { status, statusClass } = GetStockStatus(stock);

  return (
    <div className="span-estado">
      <FaCircle size={7} className={`status-icon ${statusClass}`} />
      <span className={`producto-status ${statusClass} ${claseAdicional}`}>
        {status}
      </span>
    </div>
  );
};

StockStatus.propTypes = {
  stock: PropTypes.number,
  claseAdicional: PropTypes.string, 
};

StockStatus.defaultProps = {
  claseAdicional: '', // Valor por defecto si no se pasa clase adicional
};

export const GetStockStatus = (stock) => {
  if (stock === 1) {
    return { status: 'última unidad disponible', statusClass: 'red-status' };
  } else if (stock === 2 || stock === 3) {
    return { status: `últimas ${stock} unidades disponibles`, statusClass: 'red-status' };
  } else if (stock >= 4 && stock < 5) {
    return { status: 'Queda poco stock', statusClass: 'orange-status' };
  } else if (stock >= 5) {
    return { status: 'Stock disponible', statusClass: 'green-status' };
  } else {
    return { status: 'Sin stock', statusClass: 'gray-status' };
  }
};