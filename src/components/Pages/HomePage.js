import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BASE_URL } from "../api";

import Shows from "./HomePageComponents/Shows";
import Show from "./HomePageComponents/Show";

const HomePage = () => {
  const [shows, setShows] = useState([]);
  const [show, setshow] = useState([]);
  let a = 1;
  let onclick = () => {
    a += 1;
    console.log(a);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${BASE_URL}/shows`);
      setShows(res.data);
    };
    fetchData();
  }, []);

  return (
    <Router>
      {a}
      <div className="container" onClick={() => onclick()}>
        <Shows shows={shows} />
      </div>
    </Router>
  );
};

export default HomePage;
