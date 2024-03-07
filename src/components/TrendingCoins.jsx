import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  const fetchTrendingCoins = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      if (response.data) {
        setTrendingCoins(response.data.coins.slice(0, 3));
      }
    } catch (error) {
      console.log("Error fetching trending coins:", error);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    const fetchCoinsData = async () => {
      try {
        const coinsData = [];
        for (const coin of trendingCoins) {
          const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${coin.item.id}`
          );
          coinsData.push(response.data);
        }
        setCoinsData(coinsData);
      } catch (error) {
        console.log("Error fetching coins data:", error);
      }
    };

    if (trendingCoins.length > 0) {
      fetchCoinsData();
    }
  }, [trendingCoins]);

  return (
    <div className="row mb-5">
      <div className="col-md-12">
        <div
          className="col-md-12 p-3 mt-3 d-flex flex-column justify-content-start"
          style={{
            backgroundColor: "white",
            width: "19rem",
            height: "10rem",
            borderRadius: "1rem",
          }}
        >
          <h5 className="fw-bold">Trending Coins (24h)</h5>
          {coinsData.map((coin) => (
            <div key={coin.id} className="d-flex justify-content-between mb-2">
              <div className="d-flex gap-2">
                <img
                  src={coin.image.small}
                  alt="logo"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                />
                <h6>
                  {coin.name}({coin.symbol.toUpperCase()})
                </h6>
              </div>
              <div
                style={{
                  backgroundColor: "#dbffed",
                  borderRadius: "0.3rem",
                  padding: "0.1rem",
                }}
                className=""
              >
                <span className="d-flex justify-content-center align-items-center">
                  {coin?.market_data.price_change_percentage_24h > 0 ? (
                    <IoMdArrowDropup size={25} color="green" />
                  ) : (
                    <IoMdArrowDropdown size={25} color="red" />
                  )}{" "}
                  {coin.market_data.price_change_percentage_24h.toFixed(2)} %
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;
