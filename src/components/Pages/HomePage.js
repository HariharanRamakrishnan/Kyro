import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css"
import axios from "axios";
import { BASE_URL } from "../api";

import Shows from "./HomePageComponents/Shows";
import TodayStreaming from "./HomePageComponents/TodayStreaming";

const HomePage = () => {
  const [shows, setShows] = useState([]);
  const [today, setToday] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${BASE_URL}/shows`);
      setShows(res.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${BASE_URL}/schedule`);
      setToday(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h4> Top picks for you</h4>
        <Shows shows={shows} />
        <h4> Today Streaming</h4>
        <TodayStreaming shows={today} />
      </div>
    </div>
  );
};

export default HomePage;
