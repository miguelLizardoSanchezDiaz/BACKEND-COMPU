import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { LiaMinusSolid } from "react-icons/lia";
import PropTypes from 'prop-types';

export const MenuItem = ({ label, icon, isOpen, onClick, links, closeMenu, categoriaCode, hasSubcategorias }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        if (hasSubcategorias) {
            onClick();
        } else {
            closeMenu(categoriaCode);
            navigate(`/catalogo-producto?categoria=${categoriaCode}&limit=10&page=1`); // Redirige a la página del catálogo de la categoría
        }
    };

    return (
        <li className="dropdown-list borderbottom-DEDEDE">
            <div
                className="dropdown-link pointer"
                onClick={handleClick}
                aria-expanded={isOpen}
                role="button"
            >
                <div className='dropdown-container'>
                    {icon}
                    <span>{label}</span>
                </div>
                {hasSubcategorias && (isOpen ? <LiaMinusSolid /> : <FaPlus />)}
            </div>
            {isOpen && hasSubcategorias && (
                <div className="dropdown-content">
                    <ul className="dropdown-sub">
                        {links.map((link) => (
                            <li className="dropdown-li" key={link.to}>
                                <Link
                                    to={link.to}
                                    className="dropdown-anchor"
                                    onClick={() => closeMenu(categoriaCode)}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="dropdown-li">
                            <Link
                                to={`/catalogo-producto?categoria=${categoriaCode}&limit=10&page=1`}
                                className="dropdown-all"
                                onClick={() => closeMenu(categoriaCode)}>
                                Ver todo
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </li>
    );
};

MenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.element,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
        to: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    closeMenu: PropTypes.func.isRequired,
    categoriaCode: PropTypes.string.isRequired,
    hasSubcategorias: PropTypes.bool.isRequired,
};