import React from "react";
import scc from "../../assets/img/logo_css.png";
import html from "../../assets/img/logo_html.png";
import logo from "../../assets/img/logo_brush.png";
import { Link } from "react-router-dom";
const Card = ({ src, url, title }) => {
  return (
    <div>
      <div className="box">
        <Link to="/html">
          <img src={html} alt="" />
        </Link>

        <h3>HTML5 Markup</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
      <div className="box">
        <Link to="/css">
          <img src={scc} alt="" />
        </Link>

        <h3>CSS3 Styling</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
      <div className="box">
        <Link to="/design">
          <img src={logo} alt="" />
        </Link>

        <h3>Graphic Design</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
    </div>
  );
};

export default Card;
