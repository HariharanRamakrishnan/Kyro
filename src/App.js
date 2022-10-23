import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Header
import NavBar from "./components/Header/NavBar";

//Pages
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import LoginPage from "./components/Pages/LoginPage";
import Show from "./components/Pages/HomePageComponents/Show";
import { BASE_URL } from "./components/api";

const App = () => {

  const [show, setShow] = useState([]);
  const getShow = async (id) => {
    const res = await axios.get(`${BASE_URL}/shows/${id}`);
    setShow(res.data);
  };

  return (
    <Router>
      <div className="header">
        <NavBar />
      </div>
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route
            path="/shows/:id"
            render={(props) => (
              <Show {...props} getShow={getShow} show={show} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
