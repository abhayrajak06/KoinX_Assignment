import React, { useState } from "react";

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="row">
      <div className="col-md-12" style={{ overflowX: "auto" }}>
        <ul
          className="d-flex mt-2 gap-3 fw-bold"
          style={{
            listStyle: "none",
            whiteSpace: "nowrap",
            overflowX: "auto",
            padding: "0",
          }}
        >
          <li
            className={`p-2 ${activeItem === 0 ? "text-primary" : ""}`}
            style={{
              borderBottom: activeItem === 0 ? "3px solid #0D6EFD" : "",
              cursor: "pointer",
            }}
            onClick={() => handleItemClick(0)}
          >
            Overview
          </li>
          <li
            className={`p-2 ${activeItem === 1 ? "text-primary" : ""}`}
            style={{
              borderBottom: activeItem === 1 ? "3px solid #0D6EFD" : "",
              cursor: "pointer",
            }}
            onClick={() => handleItemClick(1)}
          >
            Fundamentals
          </li>
          <li
            className={`p-2 ${activeItem === 2 ? "text-primary" : ""}`}
            style={{
              minWidth: "110px",
              cursor: "pointer",
              borderBottom: activeItem === 2 ? "3px solid #0D6EFD" : "",
            }}
            onClick={() => handleItemClick(2)}
          >
            News Insights
          </li>
          <li
            className={`p-2 ${activeItem === 3 ? "text-primary" : ""}`}
            style={{ cursor: "pointer" }}
            onClick={() => handleItemClick(3)}
          >
            Sentiments
          </li>
          <li
            className={`p-2 ${activeItem === 4 ? "text-primary" : ""}`}
            style={{ cursor: "pointer" }}
            onClick={() => handleItemClick(4)}
          >
            Team
          </li>
          <li
            className={`p-2 ${activeItem === 5 ? "text-primary" : ""}`}
            style={{ cursor: "pointer" }}
            onClick={() => handleItemClick(5)}
          >
            Technicals
          </li>
          <li
            className={`p-2 ${activeItem === 6 ? "text-primary" : ""}`}
            style={{ cursor: "pointer" }}
            onClick={() => handleItemClick(6)}
          >
            Tokenomics
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default MenuBar;
