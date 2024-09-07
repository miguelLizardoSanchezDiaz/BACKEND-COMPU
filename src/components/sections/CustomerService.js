import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTiktok } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";

export const CustomerService = () => {
  return (
    <div className="bg-customer-service pd-customer-service font-family-montserrat flex-customer-wrap">
      <div className="customer-icon txt-group1">
        <div className="font12-customer font700">Atención al cliente:</div>
        <div className="box">
          <BsWhatsapp size={32} color="00E5ES" className="icon-whtp-desktop" />
          <BsWhatsapp size={25} color="00E5ES" className="icon-whtp-mobile" />
          <div className="font12-telephone font400">+51 959 700 400</div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="customer-icon flex-item-wrap customer-right txt-group2">
        <div className="font10v4 font700 margin-txt-group">
          Aprovecha las ofertas especiales y {" "}
          <span className="highlight">síguenos:</span>
        </div>
        <div className="icons-social-media">
          <a href="#" className="icons-social-a">
            <FaFacebookF size={20} color="00E5ES" />
          </a>
          <a href="#" className="icons-social-a">
            <IoLogoInstagram size={20} color="00E5ES" />
          </a>
          <a href="#" className="icons-social-a">
            <IoLogoTiktok size={20} color="00E5ES" />
          </a>
          <a href="#" className="icons-social-a">
            <IoLogoYoutube size={20} color="00E5ES" />
          </a>
        </div>
      </div>
    </div>
  );
};
