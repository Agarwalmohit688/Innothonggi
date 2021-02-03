import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF,FaInstagram,FaYoutube } from "react-icons/fa";
import { FiPhoneCall} from "react-icons/fi";
import {AiOutlineMail } from "react-icons/ai";
import {GoLocation } from "react-icons/go";

function Contact() {
  return (
    <div className="container-fluid" id="contactdiv">
      <h1 class="text-center" id="contact-head">Need Help? Contact</h1>
      <div className="row">
        <div className="col-sm-6 text-center" id="box1">
          <img
            src="/images/4861083.jpg"
            alt="imgae"
            className="mx-auto img-fluid"
            id="img1"
          />
        </div>
        <div className="col-sm-6" id="box2">
          <div className="container-fluid" id="subbox2">
            <div className="row">
              <div className="col-sm-6">
                <p> <FiPhoneCall className="logos1"/>+91 9999 00 1234</p>
                </div>
              <div className="col-sm-6">
                <p><AiOutlineMail className="logos1"/> innothon@ggi.ac.in</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <p> <GoLocation className="logos1"/>Arcane Innovation Club, Computer Science, GGI</p>
              </div>
              <div className="col-sm-6">
                <p> <GoLocation className="logos1"/>G.T. Road, Khanna - Ludhiana, Punjab</p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-sm-12" id="col12">
                <FaFacebookF className="logos1"/><FaInstagram className="logos1"/><FaYoutube className="logos1"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
