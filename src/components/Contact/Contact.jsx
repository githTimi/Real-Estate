import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart v-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">We are always ready to find you a good place to live to make 
            your life better
          </span>
            <div className="flexColStart contactModes">
                <div className="flexStart row">
                     <div className="flexColCenter mode">
                         <div className="flexStart">
                            <div className="flexCenter Icon">
                                <MdCall size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Call</span>
                                <span className="secondaryText">08122233344</span>
                            </div>
                         </div>
                         <div className="flexCenter button">
                            Call Now
                         </div>
                     </div>


                     <div className="flexColCenter mode">
                         <div className="flexStart">
                            <div className="flexCenter Icon">
                                <BsFillChatDotsFill size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Chat</span>
                                <span className="secondaryText">08122233344</span>
                            </div>
                         </div>
                         <div className="flexCenter button">
                            Chat Now
                         </div>
                     </div>
                </div>


                <div className="flexStart row">
                     <div className="flexColCenter mode">
                         <div className="flexStart">
                            <div className="flexCenter Icon">
                                <BsFillChatDotsFill size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Video Call</span>
                                <span className="secondaryText">08122233344</span>
                            </div>
                         </div>
                         <div className="flexCenter button">
                           Video Call Now
                         </div>
                     </div>


                     <div className="flexColCenter mode">
                         <div className="flexStart">
                            <div className="flexCenter Icon">
                                <HiChatBubbleBottomCenter size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Message</span>
                                <span className="secondaryText">08122233344</span>
                            </div>
                         </div>
                         <div className="flexCenter button">
                            Message Now
                         </div>
                     </div>
                </div>
            </div>

        </div>



        <div className="v-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="con" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
