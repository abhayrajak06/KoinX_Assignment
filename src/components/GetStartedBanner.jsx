import React from "react";

const GetStartedBanner = () => {
  return (
    <div className="row mt-5">
      <div
        className="col-md-12 p-3  bg-primary d-flex flex-column justify-content-center"
        style={{ borderRadius: "1rem", height: "26rem", width: "19rem" }}
      >
        <h4 className="text-white text-center mb-3">
          Get Started with KoinX for FREE
        </h4>
        <p className="text-white text-center" style={{ fontSize: "0.8rem" }}>
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and awaare of tax reports.
        </p>
        <div className="d-flex justify-content-center mt-2">
          <img
            src="https://img.freepik.com/free-vector/add-tasks-concept-illustration_114360-4765.jpg?t=st=1709660337~exp=1709663937~hmac=fd309afdabfcd1b0c038231205c38a68c59db4905c78711f3e81e1a0fb9ade22&w=740"
            alt=""
            style={{ width: "7rem", height: "7rem", borderRadius: "1rem" }}
          />
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button
            className="p-2 bg-white fw-bold"
            style={{ width: "12rem", borderRadius: "0.6rem" }}
          >
            Get Started for FREE &rarr;{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedBanner;
