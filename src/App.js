import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Header
import NavBar from './components/Header/NavBar';

//Pages
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import LoginPage from './components/Pages/LoginPage';
import Shows from "./components/Pages/HomePageComponents/Shows";
import NewComponent from "./components/Pages/NewComponent";
import ShowCard from "./components/Pages/HomePageComponents/ShowCard";
import Show from "./components/Pages/HomePageComponents/Show";

const App = () => {
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
          <Route path={"/shows/:id"} component={Show} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
