import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import AllCharts from "./components/AllCharts";
import Chart from "./components/Chart";
import GetStartedBanner from "./components/GetStartedBanner";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Performance from "./components/Performance";
import Sentiment from "./components/Sentiment";
import Team from "./components/Team";
import Tokenomics from "./components/Tokenomics";
import TrendingCoins from "./components/TrendingCoins";
import axios from "axios";

function App() {
  const [coinData, setCoinData] = useState([]);
  useEffect(() => {
    const fetchCoinsData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/bitcoin`
        );
        setCoinData(response?.data);
      } catch (error) {
        console.log("Error fetching coins data:", error);
      }
    };

    fetchCoinsData();
  }, []);
  return (
    <>
      <Header />
      <div className="main">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#E0E0E0", minHeight: "100vh" }}
        >
          <div className="row d-flex flex-wrap justify-content-center">
            <div className="col-md-7">
              <Chart coinData={coinData} />
              <MenuBar />
              <Performance coinname={"Bitcoin"} />
              <Sentiment />
              <About coinname={"Bitcoin"} />
              <Tokenomics />
              <Team />
              <AllCharts />
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
              <GetStartedBanner />
              <TrendingCoins />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
