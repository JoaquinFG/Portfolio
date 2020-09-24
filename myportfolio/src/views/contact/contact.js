import React, { Component } from "react";
import Nav from "../../components/Nav/nav";
import "./contact.scss";

export default class contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="container anim-container">
          <h2>CONTACT ME</h2>
          <hr className="anim-hr2" />
          <div className="row contact">
            <div className="col-lg-6 col-sm-12">
              <div className="info anim-address">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                Address ➦ Santa Cruz de Tenerife, Spain
              </div>
              <div className="info anim-social">
                <i class="fa fa-share-alt" aria-hidden="true"></i>
                Social Profile ➦{" "}
                <a
                  href="https://github.com/JoaquinFG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com/Joakin_FG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joaquinferreirag/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="https://www.facebook.com/joaquin.fg.16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </div>
              <div className="info anim-email">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                Email me ➦ joaquinferreirag@gmail.com
              </div>
              <div className="info anim-call">
                <i class="fa fa-phone" aria-hidden="true"></i>
                Call me ➦ (+34) 686 592 376
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 form-contact">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form mt-4"
              >
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
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
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                  <div className="validate"></div>
                </div>
                {/* <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div> */}
                <div className="text-center">
                  <button className="btn" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
