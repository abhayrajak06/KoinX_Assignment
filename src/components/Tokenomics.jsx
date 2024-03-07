import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const Tokenomics = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const chartData = {
      datasets: [
        {
          data: [80, 20],
          backgroundColor: ["#2FA4FF", "#FFD124"],
        },
      ],
    };

    const chartOptions = {
      responsive: true,
    };

    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: chartData,
      options: chartOptions,
    });

    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="row m-1 mt-3">
      <div
        className="col-md-12 bg-white p-3 d-flex flex-column"
        style={{ minHeight: "28rem", borderRadius: "0.6rem" }}
      >
        <h4 className="fw-bold">Tokenomics</h4>
        <h5 className="mt-3">Initial Distribution</h5>
        <div
          className="d-flex flex-wrap mt-2 mb-5 align-items-center"
          style={{ height: "16rem" }}
        >
          <canvas ref={chartRef} />
          <div className="ms-3">
            <ul className="">
              <li className="first-list">Crowdsale Investors: 80%</li>
              <li className="second-list">Foundation: 20%</li>
            </ul>
          </div>
        </div>
        <p className="mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere culpa
          nam libero cupiditate. Earum quos sequi magni fuga cupiditate dolorum
          assumenda pariatur molestiae, necessitatibus ipsa totam! Delectus,
          cumque dolorum ratione ea ipsum autem, fugiat et distinctio odio quam
          laudantium, ullam eveniet qui at labore repellendus minima rem
          dignissimos saepe quaerat culpa eaque fuga quibusdam! Doloribus earum
          quidem at quas recusandae.
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;
