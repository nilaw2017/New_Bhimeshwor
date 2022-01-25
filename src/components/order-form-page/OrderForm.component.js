import React, { Component } from "react";
import "./order.form.component.css";
import { OrderIntro } from "../main-intro/MainIntro.component";
const mail = "https://formsubmit.co/6f1519f809f3020058e5efb3f2dd4e62";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }
  changes = (e) => {
    const { value } = e.target;
    this.setState({
      email: value,
    });
    console.log(this.state.email);
  };

  render() {
    return (
      <section>
        <OrderIntro />
        <form action={mail} method="POST" className="container">
          <article className="d-flex justify-content-center text-bold mt-5">
            <span className="menu-header text-bg-pri text-xl acme">
              ORDER FORM
            </span>
          </article>
          <section className="d-block border d-xl-flex pb-5">
            <div className="col-xl-6 mt-5">
              <h2>GET IN TOUCH</h2>
              <div className="d-flex mt-5">
                <i className="fa fa-child mr-3"></i>
                <h6>Bayalbass, Ishworpur 7, Sarlahi</h6>
              </div>
              <div className="d-flex mt-5">
                <i className="fa fa-envelope mr-3"></i>
                <h6>samek_shrestha@yahoo.com</h6>
              </div>
              <div className="d-flex mt-5">
                <i className="fa fa-phone mr-3"></i>
                <h6>9865543323 / 9841516055</h6>
              </div>
            </div>
            <div className="col-xl-6 mt-5">
              <h2>CONTACT FORM</h2>
              <div className="inputs">
                <div>
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="http://localhost:3000/"
                  />
                  <input
                    type="hidden"
                    name="_subject"
                    value={this.state.email}
                  ></input>
                  <input type="hidden" name="_template" value="table"></input>
                  <div className="mt-4">
                    <input
                      name="name"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      onChange={this.changes}
                      name="email"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="E-mail Address"
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <textarea
                      // onChange={}
                      name="message"
                      id="message"
                      name="message"
                      placeholder="Message here..."
                      required
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <button
                      // onSubmit={this.afterSubmit}
                      className="btn contact-btn"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
        <hr></hr>
      </section>
    );
  }
}

export default Contact;
