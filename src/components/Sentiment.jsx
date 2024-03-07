import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosTrendingUp } from "react-icons/io";

const Sentiment = () => {
  return (
    <div className="row m-1 mt-4">
      <div
        className="col-md-12 bg-white p-3"
        style={{ minHeight: "32rem", borderRadius: "0.6rem" }}
      >
        <h4 className="fw-bold">Sentiment</h4>
        <h5>
          Key Events <AiFillInfoCircle color="gray" />
        </h5>
        <div className="row">
          <div className="col-md-12" style={{ overflowX: "auto" }}>
            <ul className="d-flex gap-3 list-unstyled">
              <li>
                <div
                  className="d-flex p-3 gap-3 align-items-start"
                  style={{
                    width: "30rem",
                    backgroundColor: "#AED2FF",
                    borderRadius: "1rem",
                  }}
                >
                  <div className="rounded-circle bg-primary p-2">
                    <IoNewspaperOutline color="white" size={24} />
                  </div>
                  <div className="">
                    <h5>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Asperiores, sequi?
                    </h5>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Deleniti soluta sed eius fuga harum, suscipit odit
                      quaerat, eveniet beatae obcaecati explicabo magnam,
                      dolores tenetur nam quas distinctio ipsum est
                      voluptatibus?
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="d-flex p-3 gap-3 align-items-start"
                  style={{
                    width: "30rem",
                    backgroundColor: "#AED2FF",
                    borderRadius: "1rem",
                  }}
                >
                  <div className="rounded-circle bg-success p-2">
                    <IoIosTrendingUp color="white" size={24} />
                  </div>
                  <div className="">
                    <h5>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Asperiores, sequi?
                    </h5>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Deleniti soluta sed eius fuga harum, suscipit odit
                      quaerat, eveniet beatae obcaecati explicabo magnam,
                      dolores tenetur nam quas distinctio ipsum est
                      voluptatibus?
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <h5 className="mt-3">
          Analyst Estimates <AiFillInfoCircle color="gray" />
        </h5>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Sentiment;
