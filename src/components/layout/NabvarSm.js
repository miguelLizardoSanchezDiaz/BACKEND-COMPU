import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline, IoMenu } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoSearchCircle } from "react-icons/io5";

import { CategoryMenu } from "../components/CategoryMenu";
import { getCategorias } from "../../actions/home";
import { CartContext } from "../../contexts/CartContext";
import { CiHeart } from "react-icons/ci";

export const NabvarSm = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCategorias = async () => {
      try {
        const result = await getCategorias();
        setCategorias(result.slice(0, 6));
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    };

    loadCategorias();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen, closeMenu]);

  const handleCategoriaClick = (categoriaCode) => {
    navigate(`/catalogo-producto/${categoriaCode}`);
    if (typeof closeMenu === 'function') {
      closeMenu(categoriaCode);
    }
  };

  return (
    <>
      <div className="navbarsm flex-container align-items-center flex-center bg_201CE5 color_white justify-content font-family-Arial">
        <div>
          <Link to="/" className="text-decoration-none">
            <img
              src="/img_publics/logo-compured.png"
              alt="logo compured"
              width="75px"
              height="75px"
            />
          </Link>
        </div>
        <div className="width-search position-relative">
          {/* <div className="container-search"> */}
          <input
            type="text"
            className="input-search font-family-montserrat"
            placeholder="Busca tu producto favorito"
          />
          <IoSearchCircle
            className="icon-search-sm position-absolute"
            size={35}
            color="#00E5E5"
          />
          {/* </div> */}
        </div>
        <div className="width-icons flex-container justify-content">

          <div className="container-user-nav">
            <AiOutlineUser size={28} />
          </div>
          <div className="container-heart-nav position-relative">
            <GoHeart size={28} />
            <div className="flex-container flex-center font12v2 txt-semibold 
                  font-family-montserrat position-absolute item-count">
              0
            </div>
          </div>
          <div className="container-cart-nav flex-container">  
          <div className="position-relative">
            <Link to="carro-compras">
              <PiShoppingCartSimple size={28} color="#fff" className="icon-cart-nav" />
              <div
                className="flex-container flex-center font12v2 txt-semibold 
                  font-family-montserrat position-absolute item-count">
                {
                  (cartItems.length > 0) ? cartItems.length : '0'
                }
              </div>
            </Link>
          </div>
          <div className="text-cart-nav color-blanco font-family-montserrat">
            <div className="font10v2 font400">Total</div>
            <div className="font14 txt-semibold">S/0.00</div>
          </div>
          </div>
          
        </div>
      </div>

      <div className="menu-title font13 txt-300 justify-content flex-container font-family-montserrat">
        <div className="navbar-section-primary">
          <button
            id="navbar-section-categorias"
            className="font-family-montserrat"
            onClick={toggleMenu}
            ref={buttonRef}
          >
            <IoMenu size={20} color="#fff" className="pointer icon-menu" />
            <span className="navbar-link pointer">Categoría</span>
            <span className={`arrow ${menuOpen ? "open" : ""}`}></span>
          </button>
          <Link to="/" className="navbar-link navbar-link-inicio">
            Inicio
          </Link>
        </div>
        <div className="flex-container align-center navbar-section navbar-section-secondary">
          {categorias.map(c => (
            <Link
              to={`/catalogo-producto?categoria=${c.categoriaCodigo}&limit=10&page=1`}
              className="navbar-link"
              key={c.categoriaId}
              onClick={() => handleCategoriaClick(c.categoriaCode)}
            >
              {c.categoriaDescripcion}
            </Link>
          ))}
        </div>
      </div>

      <div className={`menu-container ${menuOpen ? 'fade-in' : 'fade-out'}`} ref={menuRef}>
        {menuOpen && <CategoryMenu closeMenu={closeMenu} />}
      </div>
    </>
  );
};