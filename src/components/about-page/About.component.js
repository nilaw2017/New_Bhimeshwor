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
    fetch(`${process.env.DB_URL}/main-intro-abouts`);
    fetch("http://localhost:1337/api/main-intro-abouts")
      .then((res) => {
        if (res.status >= 400) {
          console.log("Something Went Horribly Wrong :P");
        }
        return res.json();
      })
      .then((testContent) => {
        this.setState({
          test: [testContent.data],
        });
      });
  }
  render() {
    return (
      <div>
        <AboutIntro />
      </div>
    );
  }
}
