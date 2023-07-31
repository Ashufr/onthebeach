import "./Carousal.css";
import { useState } from "react";

import slides from "../../assests/slide";
import "../../assests/slides/image1.jpg";

function Carousal() {
  const [index, setIndex] = useState(0);
  const [prevIndex, storeIndex] = useState(index);
  const [timer, setTimer] = useState("");

  function changeIndex(e) {
    storeIndex(index);

    if (index + e > 9) {
      setIndex(0);
    } else if (index + e < 0) {
      setIndex(9);
    } else {
      setIndex(index + e);
    }
    setTimer("wait");
    setTimeout(() => {
      setTimer("");
    }, [200]);
  }

  function handleIndicator(e) {
    if (index === e) {
      return;
    }
    storeIndex(index);
    setIndex(e);

    setTimeout(() => {
      setTimer("");
    }, [200]);
  }

  return (
    <div className="carousal">
      <div className="top-card">
        <div className="heading">
          <h3>Luxury Noosa Beachfront Accommodation</h3>
        </div>

        <div className="desc">
          <h2>APARTMENTS & PENTHOUSES</h2>
        </div>

        <div className="card-link">
          <a href="">All Rooms & Suites</a>
        </div>
      </div>
      <img src={slides[0].src} className="overlay" alt="" />
      
      <div className="container">
        <div className={`left ${timer}`} >
          <i></i>
        </div>
        <div className={`right ${timer}`} >
          <i></i>
        </div>
        <a className="left" onClick={() => changeIndex(-1)}>
          <i></i>
        </a>
        <a className="right" onClick={() => changeIndex(1)}>
          <i></i>
        </a>
        <div className={`img-container`}>
          {slides.map((item, key) => (
            
            <div
              key={key}
              className={`img-div ${
                prevIndex === key ? "second-top" : key === index && "top"
              }`}
              id="1"
            >
              <img src={item.src} alt="" />
              <div className="indicator-div">
                {slides.map((item, key) => (
                  <div
                    key={key}
                    onClick={() => handleIndicator(key)}
                    className={`indicator ${key === index && "active"}`}
                  >
                    <i></i>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      

      <div className="bottom-card">
        <div className="heading">
          <h3>
            THE HOTEL IS THE PERFECT VANTAGE POINT TO MAKE THE MOST OF NOOSA
          </h3>
        </div>

        <div className="desc">
          <p>
            All apartments are cleverly designed to take advantage of the
            essence of Noosa with stunning beach and ocean views. Relaxation is
            paramount with all apartments featuring a private balcony with spa
            bath and sun loungers as well as direc...
          </p>
        </div>

        <div className="card-link">
          <a href="">LEARN MORE</a>
        </div>
      </div>
    </div>
  );
}

export default Carousal;
