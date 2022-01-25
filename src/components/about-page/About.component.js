import { Component } from "react";
import { AboutIntro } from "./../main-intro/MainIntro.component";

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      test: [],
    };
  }
  componentDidMount() {
    fetch(`https://bhimeshwor.netlify.app/main-intro-abouts`)
      .then((res) => {
        if (res.status >= 400) {
          console.log("Something Went Horribly Wrong :P");
        }
        return res.json();
      })
      .then((Content) => {
        this.setState({
          test: [Content.data],
        });
      });
  }
  render() {
    return (
      <div>
        <AboutIntro />
        <div className="container mt-5">
          <article className="d-flex justify-content-center text-bold mt-5">
            <span className="menu-header text-bg-pri text-xl acme">
              ABOUT US
            </span>
          </article>
          <h3 className="text-pri">
            We invite you to come and see how our chickens are produced in
            Belbas.
          </h3>
          <hr></hr>
        </div>
      </div>
    );
  }
}
