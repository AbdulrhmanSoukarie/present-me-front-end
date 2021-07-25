import "./App.css";
import Categories from "./components/categories/Categories";
import Title from "./components/titles/Title";
import Navbar from "./components/navbar/Navbar";
import Sliders from "./components/slider/Sliders";
import eventImg from "./components/singleEvent/event-img.png";
import hostImg from "./components/singleEvent/host-image.png";
import SingleEvent from "./components/singleEvent/SingleEvent";
import { UniqueFeatures } from "./components/UniqueFeatures/UniqueFeatures";
import { useHistory } from "react-router";
import CreateSubEvent from "./components/CreateSubEvent /CreateSubEvent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import aos from "aos";
import "aos/dist/aos.css";
import { Slideshow } from "./components/TopEvent/TopEvent";
import "./App.css";

import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import { LoginPage } from "./components/LoginPage/LoginPage";
import AllCategories from "./components/allMainCategories/AllCategories";
import Adminpanel from "./components/Adminpanel/Dashboard";
import { AllEventsSubCategory } from "./components/allEventsSubCategory/allEventsSubCategory";
import SubEvent from "./components/SubEvent/SubEvent";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            <Adminpanel></Adminpanel>
          </Route>
          <Route exact path="/discover">
            <Navbar />
            <AllCategories></AllCategories>
            <Footer />
          </Route>
          <Route exact path="/admin">
            <LoginPage />
          </Route>
          <Route exact path="/allevent">
            <Navbar />
            <AllEventsSubCategory />
            <Footer />
          </Route>

          <Route exact path="/">
            <Navbar />
            <Sliders></Sliders>
            <Title abed="My Category"></Title>
            <Categories></Categories>
            <Title abed="What Make Us Uniqe"></Title>
            <UniqueFeatures />
            <Title abed="Top Event"></Title>
            <Slideshow></Slideshow>
            <Title abed="Testimonials"></Title>
            <Testimonials />
            <Footer />
          </Route>
          <Route exact path="/single">
            <Navbar></Navbar>
            <SingleEvent
              title="Algebra"
              eventimg={eventImg}
              description="Prepare for algebra"
              date="7/7/2021"
              hostimg={hostImg}
              hostname="Omar Chouman"
            />
            <Footer></Footer>
          </Route>
          <Route exact path="/CreateSubEvent">
            <CreateSubEvent />
          </Route>
          <Route exact path="/subevent">
            <Navbar />
            <SubEvent />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
