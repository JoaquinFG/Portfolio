import React from 'react';
import './carousel.scss';
import LogoNode from "../../img/logos/node.png";
import LogoPhp from "../../img/logos/php.png";
import LogoBootstrap from "../../img/logos/bootstrap.png";
import LogoGit from "../../img/logos/git.png";
import LogoHtmlCssJS from "../../img/logos/htmlcssjs.png";
import LogoMySQL from "../../img/logos/mysql.png";
import LogoReact from "../../img/logos/react.png";

export default function carousel() {
    return (
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src={LogoNode} alt="" />
          </div>
          <div class="slide">
            <img src={LogoPhp} alt="" />
          </div>
          <div class="slide">
            <img src={LogoReact} alt="" />
          </div>
          <div class="slide">
            <img src={LogoHtmlCssJS} alt="" />
          </div>
          <div class="slide">
            <img src={LogoBootstrap} alt="" />
          </div>
          <div class="slide">
            <img src={LogoGit} alt="" />
          </div>
          <div class="slide">
            <img src={LogoMySQL} alt="" />
          </div>
          <div class="slide">
            <img src={LogoNode} alt="" />
          </div>
          <div class="slide">
            <img src={LogoPhp} alt="" />
          </div>
          <div class="slide">
            <img src={LogoReact} alt="" />
          </div>
          <div class="slide">
            <img src={LogoHtmlCssJS} alt="" />
          </div>
          <div class="slide">
            <img src={LogoBootstrap} alt="" />
          </div>
          <div class="slide">
            <img src={LogoGit} alt="" />
          </div>
          <div class="slide">
            <img src={LogoMySQL} alt="" />
          </div>
        </div>
      </div>
    );
}
