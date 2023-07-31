import "./Section.css";

import icon1 from "../../assests/icon1.svg";
import icon2 from "../../assests/icon2.svg";
import icon3 from "../../assests/icon3.svg";
import icon4 from "../../assests/icon4.svg";
import icon5 from "../../assests/icon5.svg";

import {AiOutlineHeart} from "react-icons/ai"

function Section() {
  return (
    <section className="section">
      <div className="container">
        <div className="top">
          <div className="icon-list">
            <div className="icon-div">
              <div className="img-div">
                <img src={icon1} alt="" className="icon-1" />
              </div>
              <p className="text">
                Free Secure <br />
                Parking
              </p>
            </div>

            <div className="icon-div">
              <div className="img-div">
                <img src={icon2} alt="" className="icon-2" />
              </div>
              <p className="text">
                Super <br />
                Fast Wi-Fi
              </p>
            </div>

            <div className="icon-div">
              <div className="img-div">
                <img src={icon3} alt="" />
              </div>
              <p className="text">
                Early <br />
                Check-In
              </p>
            </div>

            <div className="icon-div">
              <div className="img-div">
                <img src={icon4} alt="" />
              </div>
              <p className="text">
                Late <br />
                Check-Out
              </p>
            </div>

            <div className="icon-div">
              <div className="img-div">
                <img src={icon5} alt="" />
              </div>
              <p className="text">
                Best Rate <br />
                Guaranteed
              </p>
            </div>
          </div>

          <div className="btn-div">
            
                <a href="#" className="btn">
                    <AiOutlineHeart className="icon"/>
                    BOOK WITH US
                </a>
            
            <div className="box">
              <p>
                Receive these <span>exclusive</span> benefits when you book
                direct with us
              </p>
            </div>

          </div>
        </div>

        <div className="bottom">
            <div className="content">
                <div className="heading">
                    <h2 className="heading-text">
                    EXCLUSIVE LUXURY BEACHFRONT APARTMENTS & PENTHOUSES
                    </h2>
                </div>

                <div className="aside">
                    <p>
                    One of Noosa’s signature beachfront properties – our interior design takes inspiration from its coastal Noosa surrounds – cabana style retreats, sun lounges, BBQs and spas invite you to immerse yourself in Noosa’s unique tropical blend of sea, forest and sky. With direct beach access from the resort, it’s just a few steps to the patrolled main beach and the feeling of sand between your toes.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
