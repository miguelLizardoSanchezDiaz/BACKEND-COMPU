import React from 'react';
// import { TbTruckDelivery } from "react-icons/tb";
// import { GoGift } from "react-icons/go";
// import { MdOutlineSecurity } from "react-icons/md";

export const BenefitsSlide = ({ benefit }) => (
    <div className='
  txt-center 
  padding-categories-titles 
  mb-15 flex-item-wrap
  font-family-montserrat
  background-f5f5f5'>
        {benefit.icon}
        <div className='font18 font700'>{benefit.title}</div>
        <div className='font14'>{benefit.description}</div>
    </div>
);