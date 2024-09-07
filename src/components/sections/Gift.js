import React from 'react'
import { GoGift } from "react-icons/go";

export const Gift = () => {
  return (
    <div className='bg-8566FF txt-center font-family-montserrat pd-gift br10 mg-gift'>
        <GoGift size={70} className='color-fff'/>
        <div className='color-fff font-27 mgb12 txt-negrita'>Aquí tienes un <b>regalo:</b></div>    
        <div className='color-celeste txt-negrita font-27 mgb12'>Envío gratis</div>
        <div className='color-fff mgb12 font12-regalo'>Solo escribe tu correo y te enviaremos el código. ¡Gracias!</div>
        <div className='mgb12'>
            <input type='text' placeholder='Ingresa tu correo electrónico' className='input-frm font-family-montserrat'></input>
        </div>
    </div>
  )
}
