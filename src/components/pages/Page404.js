import React from 'react'
import { Link } from 'react-router-dom'
export const Page404 = () => {
  return (
    <>
        <div className="not-found">
        <div className="not-found-content">
            <div className="not-found-title">404</div>
            <div className="not-found-message">Lo sentimos, la página que estás buscando no se pudo encontrar.</div>
            <Link to="/" className="not-found-home-link">Volver al inicio</Link>
        </div>
        </div>
    </>
  )
}
