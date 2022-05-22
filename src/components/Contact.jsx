import React from 'react';
import "./contact.scss";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h1>Kontakt</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com/channel/UCyCb3FwIbizxHKRD-cpBR1g"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>Danny Nothdurft</span>
          </h2>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=4917656612113&text=Hi"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+49 176 56612113</span>
          </h2>
        </a>

        <a
          href="https://instagram.com/d.nothdurft"
          className="contact instagram"
          target={"blank"}>
          <AiOutlineInstagram className="icon"
        />
          <h2>
            instagram <span>Danny Nothdurft</span>
          </h2>
        </a>

        <a href="mailto:danny.nothdurft@icloud.com" className="contact mail">
          <AiOutlineMail className="icon" />
          <h2>
            mail <span>danny.nothdurft@icloud.com</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;