import {Component} from 'react'
import {HomeIntro} from "./../main-intro/MainIntro.component";
import './home.component.css'

export default class Home extends Component {
  render() {
      console.log("process",process.env)
        return (
          <section>
            
              <HomeIntro />
            <div className="container">
          <article className="d-flex justify-content-center text-bold mt-5">
            <span className="menu-header text-pri text-xl acme">
              FARM PRODUCTS
            </span>
          </article>
          <hr />
          <section>
            {/* FIRST FARM PRODUCT */}
            <div className="d-xl-flex wrap pt-5 pb-5">
              <aside className="col-xl-6 overflow-hidden">
                <img
                  className="img-cover shadow product-img"
                  src={process.env.PUBLIC_URL + "/assets/images/eggs-closeup.jpg"}
                  alt="IMAGES"
                />
              </aside>
              <aside className="col-xl-6">
                <h2 className="text-pri text-lg text-bold poppins">
                  Quality Eggs
                </h2>
                <p className="text-sec">
                  We provide home farmed eggs from local chickens to your place.
                  These eggs are individually selected to provide our clients
                  with best possible eggs to you home. Come grab your healthy
                  diet for the Breakfast to the Snacks.
                </p>
              </aside>
            </div>

            {/* SECOND FARM PRODUCT */}
            <div className="d-xl-flex pt-5 pb-5">
              <aside className="col-xl-6 overflow-hidden">
                <img
                  className="img-cover shadow product-img"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/FarmProductChicks.jpg"
                  }
                  alt="IMAGES"
                />
              </aside>
              <aside className="col-xl-6 order-1">
                <h2 className="text-pri text-lg text-bold poppins">
                  Local Breeds
                </h2>
                <p className="text-sec">
                  We have Local Breeds of chickens, raised in open space rather
                  than conjusted farms, with traditional methods of lifecycle.
                  To get maximum output for Health Benefits.
                </p>
              </aside>
            </div>
          </section>
        </div>
          </section>
        )
    }
}