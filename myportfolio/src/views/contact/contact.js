import React, { Component } from "react";
import Nav from "../../components/Nav/nav";
import "./contact.scss";
import emailjs from "emailjs-com";
import { CopyToClipboard } from "react-copy-to-clipboard";
import swal from "sweetalert";

export default class contact extends Component {
  state = {
    value: "joaquindev@joaquinferreira.com",
    copied: false,
  };

  render() {
    
    // Send Email Function
    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "gmail",
          "template_tdspxu9",
          e.target,
          "user_vRJbFCgUOWERhgJkQ8RBD"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    }
    //Alert sent message
    function sentFunction() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var subject = document.getElementById('subject').value;
      var message = document.getElementById("message").value;
      if(name && email && subject && message){
        swal("Bien!", "Mensaje enviado correctamente!", "success");
      }
    }
    return (
      <React.Fragment>
        <Nav />
        <div className="container anim-container">
          <h2>CONTACTO</h2>
          <hr className="anim-hr2" />
          <div className="row contact">
            <div className="col-lg-6 col-sm-12">
              <div className="info anim-address">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                Dirección ➦ Santa Cruz de Tenerife, España
              </div>
              <div className="info anim-social">
                <i class="fa fa-share-alt" aria-hidden="true"></i>
                Links personales ➦{" "}
                <a
                  href="https://github.com/JoaquinFG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com/Joakin_FG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joaquinferreirag/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="https://t.me/Joaquin_fg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-telegram" aria-hidden="true"></i>
                </a>
              </div>
              <div className="info anim-email">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                Email ➦ <span>joaquindev@joaquinferreira.com</span>
                <CopyToClipboard
                  text={this.state.value}
                  onCopy={() => this.setState({ copied: true })}
                >
                  <button
                    className="buttonCopy"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Copy email!"
                  >
                    <i class="fa fa-clone copyClass" aria-hidden="true"></i>
                  </button>
                </CopyToClipboard>
                {this.state.copied ? (
                  <span className="copied">Copiado!</span>
                ) : null}
              </div>
              <div className="info anim-call">
                <i class="fa fa-phone" aria-hidden="true"></i>
                Teléfono ➦ (+34) 686 592 376
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 form-contact">
              <form onSubmit={sendEmail} className="php-email-form mt-4">
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Nombre"
                      minLength="4"
                      data-msg="Por favor escribe al menos 4 letras."
                      required
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                      data-rule="email"
                      data-msg="Por favor escribe un email válido"
                      required
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Concepto"
                    minLength="4"
                    data-msg="Por favor escribe un concepto más largo"
                    required
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Por favor escribe algo aquí"
                    placeholder="Mensaje"
                    required
                  ></textarea>
                  <div className="validate"></div>
                </div>
                <div className="text-center">
                  <input
                    className="btn-submit"
                    type="submit"
                    value="Enviar Mensaje"
                    onClick={sentFunction}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
