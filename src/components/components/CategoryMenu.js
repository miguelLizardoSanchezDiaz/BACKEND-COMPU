import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { MenuItem } from './MenuItem';
import { getCategorias } from '../../actions/home';
import { MapIcon } from './MapIcon';

const transformCategorias = (categorias) => {
  const categoriasFiltradas = categorias.filter(categoria => categoria.categoriaSoloNavBar === 0);

  return categoriasFiltradas.reduce((acc, categoria) => {
    if (categoria.categoriaPadreId === null) {
      acc.push({ ...categoria, subcategorias: [] });
    } else {
      const parentCategoria = acc.find(cat => cat.categoriaId === categoria.categoriaPadreId);
      if (parentCategoria) {
        parentCategoria.subcategorias.push(categoria);
      }
    }
    return acc;
  }, []);
};

export const CategoryMenu = ({ closeMenu }) => {
  const [categorias, setCategorias] = useState([]);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategorias = async () => {
      try {
        const result = await getCategorias();
        setCategorias(transformCategorias(result));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadCategorias();
  }, []);

  const toggleSubmenu = (submenu) => {
    setSubmenuOpen(prevState => ({
      ...prevState,
      [submenu]: !prevState[submenu],
    }));
  };

  if (loading) return null;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="menu-content font-family-montserrat font14">
      <IoMdClose size={20} onClick={() => closeMenu(null)} className="close-icon-mobile" />
      <ul className="dropdown font16" id="menu">
        {categorias.map(c => {
          const IconComponent = MapIcon[c.categoriaIcon];
          const isOpen = submenuOpen[c.categoriaDescripcion] || false;

          return (
            <MenuItem
              key={c.categoriaId}
              label={c.categoriaDescripcion}
              icon={IconComponent ? <IconComponent size={20} className="dropdown-icon" /> : null}
              isOpen={isOpen}
              onClick={() => toggleSubmenu(c.categoriaDescripcion)}
              links={c.subcategorias.map(sub => ({
                to: `/catalogo-producto?categoria=${sub.categoriaCodigo}&limit=10&page=1`,
                label: sub.categoriaDescripcion,
              }))}
              closeMenu={closeMenu}
              categoriaCode={c.categoriaCodigo}
              hasSubcategorias={c.subcategorias.length > 0}
            />
          );
        })}

        <li className="dropdown-list border-none">
          <Link to="/" className="dropdown-link" onClick={() => closeMenu(null)}>
            <span className="dropdown-span">Blog</span>
          </Link>
        </li>
        <li className="dropdown-list border-none">
          <Link to="/" className="dropdown-link" onClick={() => closeMenu(null)}>
            <span className="dropdown-span">Contáctanos</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};