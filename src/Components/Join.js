import React from "react";
import {
  FaGrinAlt,
  FaGlobeAmericas,
  FaRegThumbsUp,
  FaLightbulb,
} from "react-icons/fa";

function Join() {
  return (
    <div className="join">
      <div className="box1">
        <h1 className="Join-head">Why Join Innothon?</h1>
        <div className="wrapper-box">
        <div className="contentbox">
          <FaGrinAlt className="box-logo" />
          <h1 className="content-head">Innovative Solutions</h1>
          <p className="content-para">
            Build innovative solutions for problems. Be a part of Nation
            Building Opportunity.
          </p>
        </div>
        <div className="contentbox">
          <FaGlobeAmericas className="box-logo"/>
          <h1 className="content-head">Recognition And Visibility</h1>
          <p className="content-para">
            Nationally Recognition and visibility for your company across all
            premier institutions in India
          </p>
        </div>
        <div className="contentbox">
          <FaRegThumbsUp className="box-logo" />
          <h1 className="content-head">Out-Of-The-Box Solutions</h1>
          <p className="content-para">
            Talented youngsters from all over the country offer out-of-the-box
            solutions to your problems
          </p>
        </div>
        <div className="contentbox">
          <FaLightbulb  className="box-logo"/>
          <h1 className="content-head">Innovation Movement</h1>
          <p className="content-para">
            Be part of World’s biggest Open Innovation Movement Opportunity to
            work with some of the best talents
          </p>
        </div>
        </div>
      </div>
     
      <div className="box2">
        <div className="imagebox">
            <img src={process.env.PUBLIC_URL + "/images/3081783.jpg"} alt="imagse"></img>
        </div>
        <div className="contentbox2">
          <h1>How to Participate? & Our Process Flow?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            atque, rerum excepturi fuga reprehenderit laudantium, dolorum autem
            iusto ipsum harum perspiciatis nobis sequi sint.
          </p>
          <div className="btnbox">
            <button>learn More</button>
            <button>Need Help ?</button>
            <button>Register now</button>
        </div>
        </div>
      </div>
      <div className="box3">
          <div className="contentbox3">
              <h1>How is Innothon-21, the Platform of your Dreams?</h1>
              <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            atque, rerum excepturi fuga reprehenderit laudantium, dolorum autem
            iusto ipsum harum perspiciatis nobis sequi sint.
          </p>
          <button>Read More </button>

          </div>
          <div className="imagebox2">
          <img src={process.env.PUBLIC_URL + "/images/4861019.jpg"} alt="imagsew"></img>
          
          </div>
      </div>
    </div>
  );
}

export default Join;
