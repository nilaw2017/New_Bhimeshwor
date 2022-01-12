import { Component } from "react";
import "./main-intro.component.css";

class HomeIntro extends Component {
  constructor() {
    super();
    this.state = {
      mainHeader: [],
    };
  }
  componentDidMount() {
    fetch(
      `https://bhimeshor.herokuapp.com//api/main-intro-home?populate=BackgroundImage`
    )
      .then((res) => {
        if (res.status >= 400) {
          console.log("Something Went Wrong");
        }
        return res.json();
      })
      .then((content) => {
        this.setState({
          mainHeader: [content.data],
        });
      });
  }
  render() {
    console.log(this.state.mainHeader);
    return (
      <div>
        {this.state.mainHeader.map(({ id, attributes }) => (
          <div key={id}>
            <div className="position-relative main-header">
              <img
                className="header-img"
                src={`https://bhimeshor.herokuapp.com/${attributes.BackgroundImage.data.attributes.url}`}
              />
              <aside className="innerHead text-light">
                <h1 className="text-xl text-bold">{attributes.MainHead}</h1>
                <h3 className="text-lg">{attributes.MainBody}</h3>
              </aside>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
class AboutIntro extends Component {
  constructor() {
    super();
    this.state = {
      mainHeader: [],
    };
  }
  componentDidMount() {
    fetch(
      `https://bhimeshor.herokuapp.com//api/main-intro-about?populate=BackgroundImage`
    )
      .then((res) => {
        if (res.status >= 400) {
          console.log("Something Went Wrong");
        }
        return res.json();
      })
      .then((content) => {
        this.setState({
          mainHeader: [content.data],
        });
      });
  }
  render() {
    console.log(this.state.mainHeader);
    return (
      <div>
        {this.state.mainHeader.map(({ id, attributes }) => (
          <div key={id}>
            <div className="position-relative main-header">
              <img
                className="header-img"
                src={`https://bhimeshor.herokuapp.com/${attributes.BackgroundImage.data.attributes.url}`}
              />
              <aside className="innerHead text-light">
                <h1 className="text-xl text-bold">{attributes.MainHead}</h1>
                <h3 className="text-lg">{attributes.MainBody}</h3>
              </aside>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
class GalleryIntro extends Component {
  constructor() {
    super();
    this.state = {
      mainHeader: [],
    };
  }
  componentDidMount() {
    fetch(
      `https://bhimeshor.herokuapp.com//api/main-intro-gallery?populate=BackgroundImage`
    )
      .then((res) => {
        if (res.status >= 400) {
          console.log("Something Went Wrong");
        }
        return res.json();
      })
      .then((content) => {
        this.setState({
          mainHeader: [content.data],
        });
      });
  }
  render() {
    console.log(this.state.mainHeader);
    return (
      <div>
        {this.state.mainHeader.map(({ id, attributes }) => (
          <div key={id}>
            <div className="position-relative main-header">
              <img
                className="header-img"
                src={`https://bhimeshor.herokuapp.com/${attributes.BackgroundImage.data.attributes.url}`}
              />
              <aside className="innerHead text-light">
                <h1 className="text-xl text-bold">{attributes.MainHead}</h1>
                <h3 className="text-lg">{attributes.MainBody}</h3>
              </aside>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
class OrderIntro extends Component {
  constructor() {
    super();
    this.state = {
      mainHeader: [],
    };
  }
  componentDidMount() {
    fetch(
      `https://bhimeshor.herokuapp.com//api/main-intro-order?populate=BackgroundImage`
    )
      .then((res) => {
        if (res.status >= 400) {
          console.log("Something Went Wrong");
        }
        return res.json();
      })
      .then((content) => {
        this.setState({
          mainHeader: [content.data],
        });
      });
  }
  render() {
    console.log(this.state.mainHeader);
    return (
      <div>
        {this.state.mainHeader.map(({ id, attributes }) => (
          <div key={id}>
            <div className="position-relative main-header">
              <img
                className="header-img"
                src={`https://bhimeshor.herokuapp.com/${attributes.BackgroundImage.data.attributes.url}`}
              />
              <aside className="innerHead text-light">
                <h1 className="text-xl text-bold">{attributes.MainHead}</h1>
                <h3 className="text-lg">{attributes.MainBody}</h3>
              </aside>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export { HomeIntro, AboutIntro, GalleryIntro, OrderIntro };
