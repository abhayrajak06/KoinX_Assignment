import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ coinData }) => {
  const [chartArray, setChartArray] = useState([]);
  const [days, setDays] = useState("0.04166667");

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data: chartData } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=${days}`
        );
        setChartArray(chartData.prices);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoin();
  }, [days]);

  const prices = [];
  const date = [];

  for (let i = 0; i < chartArray.length; i++) {
    if (days === "24h")
      date.push(new Date(chartArray[i][0]).toLocaleTimeString());
    else date.push(new Date(chartArray[i][0]).toLocaleDateString());
    prices.push(chartArray[i][1]);
  }

  const data = {
    labels: date,
    datasets: [
      {
        label: `Price in USD`,
        data: prices,
      },
    ],
  };

  return (
    <div className="row mt-2 mb-2">
      <div className="col-md-12">
        <h6 className="mt-1 mb-3" style={{ color: "gray" }}>
          Cryptocurrencies{" "}
          <span className="me-1" style={{ letterSpacing: "-0.3rem" }}>
            &gt;&gt;
          </span>{" "}
          <span className="text-black">Bitcoin</span>
        </h6>
        <div
          className="bg-white p-3 mb-1"
          style={{ minHeight: "35rem", borderRadius: "0.6rem" }}
        >
          <div className="mb-5">
            <div className="d-flex gap-2">
              <img
                src={coinData?.image?.small}
                alt="logo"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
              <h6>
                {coinData?.name}({coinData?.symbol?.toUpperCase()}){" "}
                <span
                  className="p-1 text-white ms-4"
                  style={{ backgroundColor: "gray", borderRadius: "0.5rem" }}
                >
                  Rank #{coinData?.market_cap_rank}
                </span>
              </h6>
            </div>
            <div className="d-flex gap-3 justify-content-start mt-3">
              <div className="">
                <h3>${coinData?.market_data?.current_price?.usd}</h3>
              </div>
              <div className="d-flex gap-3">
                <div
                  style={{
                    backgroundColor: "#dbffed",
                    borderRadius: "0.3rem",
                    padding: "0.1rem",
                    width: "6rem",
                    height: "2rem",
                  }}
                  className=""
                >
                  <span className="d-flex justify-content-center align-items-center">
                    {coinData?.market_data?.price_change_percentage_24h > 0 ? (
                      <IoMdArrowDropup size={25} color="green" />
                    ) : (
                      <IoMdArrowDropdown size={25} color="red" />
                    )}{" "}
                    {coinData?.market_data?.price_change_percentage_24h.toFixed(
                      2
                    )}{" "}
                    %
                  </span>
                </div>
                (24H)
              </div>
            </div>
            <div className="mt-2">
              <h3>₹ {coinData?.market_data?.current_price?.inr}</h3>
            </div>
          </div>
          <hr />
          <div className="d-flex flex-wrap justify-content-between">
            <h6>Bitcoin Price Chart (USD)</h6>
            <div className="d-flex mb-5 gap-0 flex-wrap">
              <button
                className="btn"
                onClick={() => setDays("0.04166667")}
                style={{
                  color: days === "0.04166667" ? "blue" : "black",
                  borderRadius: "0.6rem",
                  border: "none",
                }}
              >
                <span
                  className="p-1"
                  style={{
                    backgroundColor:
                      days === "0.04166667" ? "skyblue" : "transparent",
                    borderRadius: "0.6rem",
                  }}
                >
                  1H
                </span>
              </button>
              <button
                className="btn"
                onClick={() => setDays("24")}
                style={{
                  color: days === "24" ? "blue" : "black",
                  borderRadius: "0.6rem",
                  border: "none",
                }}
              >
                <span
                  className="p-1"
                  style={{
                    backgroundColor: days === "24" ? "skyblue" : "transparent",
                    borderRadius: "0.6rem",
                  }}
                >
                  24H
                </span>
              </button>
              <button
                className="btn"
                onClick={() => setDays("7")}
                style={{
                  color: days === "7" ? "blue" : "black",
                  borderRadius: "0.6rem",
                  border: "none",
                }}
              >
                <span
                  className="p-1"
                  style={{
                    backgroundColor: days === "7" ? "skyblue" : "transparent",
                    borderRadius: "0.6rem",
                  }}
                >
                  7D
                </span>
              </button>
              <button
                className="btn"
                onClick={() => setDays("30")}
                style={{
                  color: days === "30" ? "blue" : "black",
                  borderRadius: "0.6rem",
                  border: "none",
                }}
              >
                <span
                  className="p-1"
                  style={{
                    backgroundColor: days === "30" ? "skyblue" : "transparent",
                    borderRadius: "0.6rem",
                  }}
                >
                  1M
                </span>
              </button>
              <button
                className="btn"
                onClick={() => setDays("90")}
                style={{
                  color: days === "90" ? "blue" : "black",
                  borderRadius: "0.6rem",
                  border: "none",
                }}
              >
                <span
                  className="p-1"
                  style={{
                    backgroundColor: days === "90" ? "skyblue" : "transparent",
                    borderRadius: "0.6rem",
                  }}
                >
                  3M
                </span>
              </button>
              <button
                className="btn"
                onClick={() => setDays("180")}
                style={{
                  color: days === "180" ? "blue" : "black",
                  borderRadius: "0.6rem",
                  border: "none",
                }}
              >
                <span
                  className="p-1"
                  style={{
                    backgroundColor: days === "180" ? "skyblue" : "transparent",
                    borderRadius: "0.6rem",
                  }}
                >
                  6M
                </span>
              </button>
              <button
                className="btn"
                onClick={() => setDays("365")}
                style={{
                  color: days === "365" ? "blue" : "black",
                  borderRadius: "0.6rem",
                  border: "none",
                }}
              >
                <span
                  className="p-1"
                  style={{
                    backgroundColor: days === "365" ? "skyblue" : "transparent",
                    borderRadius: "0.6rem",
                  }}
                >
                  1Y
                </span>
              </button>
              <button
                className="btn"
                onClick={() => setDays("max")}
                style={{
                  color: days === "max" ? "blue" : "black",
                  borderRadius: "0.6rem",
                  border: "none",
                }}
              >
                <span
                  className="p-1"
                  style={{
                    backgroundColor: days === "max" ? "skyblue" : "transparent",
                    borderRadius: "0.6rem",
                  }}
                >
                  All
                </span>
              </button>
            </div>
          </div>

          <Line
            options={{
              responsive: true,
            }}
            data={data}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
