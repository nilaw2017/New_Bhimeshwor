import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./nav-bar/NavBar.component";
import About from "./about-page/About.component";
import Gallery from "./gallery-page/Gallery.component";
import OrderForm from "./order-form-page/OrderForm.component";
import Home from "./home-page/Home.component";
import Footer from "./footer";

export default function AppRouter() {
  return (
    <header>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" component={Home} element={<Home />}></Route>
          <Route path="/about" component={About} element={<About />}></Route>
          <Route path="/gallery" component={Gallery} element={<Gallery />} />
          <Route
            path="/order-form"
            component={OrderForm}
            element={<OrderForm />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </header>
  );
}
