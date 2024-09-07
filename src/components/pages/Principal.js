import React from 'react'
import { Promo } from '../sections/Promo'
import { Categories } from '../sections/Categories'
import { MoreSale } from '../sections/MoreSale'
import { Gift } from '../sections/Gift'
import { Offers } from '../sections/Offers'
import { ProductsForYou } from '../sections/ProductsForYou'
import { OtherCategories } from '../sections/OtherCategories'
import { Benefits } from '../sections/Benefits'
import { Slider } from '../layout/Slider'
import { ProductsForYouSm } from '../sections/ProductsForYouSm'

export const Principal = () => {
  return (
    <>
      <Slider />
      <Promo />
      <Categories />
      <MoreSale />
      <Gift />
      <Offers />
      <div className='pforyouxshide'>
        <ProductsForYou className='' />
      </div>
      <div className='pforyousmhide'>
        <ProductsForYouSm className='' />
      </div>
      <OtherCategories />
      <Benefits />

    </>
  )
}
