import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";

export const Coupon = () => {
  const [close, setClose] = useState(true)
  const handleCopy=(textoACopiar)=>{
    navigator.clipboard.writeText(textoACopiar)
      .then(() => {
        //alert('¡Texto copiado al portapapeles!');
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
        alert('No se pudo copiar al portapapeles. Por favor, inténtalo de nuevo.');
      });
  }
  return (
    <>
    {
      (close)?

        <div className='fondo-coupon color_white txt-center padding-coupon font14 font-family-Courier line-height elemento animate__animated animate__bounce'>
            Tu primera compra tiene descuento de <span className='font20'>15%</span> en toda la web, usa el código: <span className='border-doted border-radius padding-coupon-copy pointer btn-copy' onClick={()=>handleCopy('1compra')} >1compra <IoCopyOutline /></span>
            <div 
            className='top-equis pointer' 
            onClick={()=>setClose(!close)}>
              <IoMdClose size={20}/>
            </div>
        </div>
        :
        ''
    }
    </>
  )
}
