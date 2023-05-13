import React, { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Card(props) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 768);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isDesktop) {
    return (
      <div className="service-card mx-3">
        <div className="row">
          <div className="col-md-6">
            <h2 className="service-h2">{props.h2}</h2>
            <h3 className="service-h3">{props.h3}</h3>
            <a href="./" className="service-p">
              <p>
                {props.p} <ArrowForwardIcon />
              </p>
            </a>
          </div>
          <div className="col-md-6">
            <img src={props.src} alt="" className="service-img" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="service-card">
        <h2 className="service-h2">{props.h2}</h2>
        <img src={props.src} alt="" className="service-img" />
        <h3 className="service-h3">{props.h3}</h3>
        <a href="./" className="service-p">
          <p>
            {props.p} <ArrowForwardIcon />
          </p>
        </a>
      </div>
    );
  }
}

export default Card;
