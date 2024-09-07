import React, { useState } from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { CategoryMenu } from '../components/CategoryMenu';

export const Nabvar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className='flex-container bg_201CE5 color_white font-family-montserrat justify-content'>
        <div className='flex-item flex-start txt-start flex-container'>
          {menuOpen ? (
            <IoMdClose size={25} onClick={closeMenu} className="pointer open-icon-mobile" />
          ) : (
            <IoMenu size={30} onClick={toggleMenu} className="flex-item pointer open-icon-mobile" />
          )}
          <IoSearchOutline size={25} className='flex-item' />
        </div>
        <div className='flex-item txt-center font20'>
          <Link to="/" className="text-decoration-none">
            <img
              src="/img_publics/logo-compured.png"
              alt='Logo'
              width='62px'
              height='62px'
            />
          </Link>
        </div>
        <div className='flex-item flex-end flex-container'>
          <AiOutlineUser size={25} className='flex-item' />
          <LiaShoppingCartSolid size={25} className='flex-item' />
        </div>
      </div>

      <div className={`menu-container ${menuOpen ? 'fade-in' : 'fade-out'}`}>
        {menuOpen && <CategoryMenu closeMenu={closeMenu} />}
      </div>    </>
  );
};