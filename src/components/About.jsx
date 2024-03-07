import React from "react";

const About = ({ coinname }) => {
  return (
    <div className="row m-1 mt-4">
      <div
        className="col-md-12 bg-white p-3"
        style={{ minHeight: "32rem", borderRadius: "0.6rem" }}
      >
        <h4 className="mb-3">About {coinname}</h4>
        <div className="d-flex flex-column">
          <div className="mt-1">
            <h5>What is {coinname}?</h5>
            <p>
              {coinname}'s price today is US${} ipsum dolor sit amet consectetur
              adipisicing elit. Iure dolor quisquam dolores debitis. Sit
              dolores, voluptatem consectetur placeat ducimus, officiis itaque
              dolorem hic vero optio corrupti corporis sed commodi facere eos
              maxime magnam porro pariatur tempora. Fuga eligendi culpa
              similique.
            </p>
            <hr />
            <h5>Lorem ipsum dolor sit amet.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              vitae impedit odio harum rem commodi molestiae qui, voluptatum
              excepturi, voluptate est dignissimos quas facere vero blanditiis
              laborum praesentium sint aperiam voluptatem necessitatibus
              dolorum? At, voluptas. Qui possimus adipisci ex modi?
            </p>

            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              repudiandae quisquam aliquam quos deleniti quasi dicta, voluptas
              nemo accusantium omnis tempora fugiat sapiente, iusto quae
              excepturi vero iste autem cupiditate perspiciatis eius cumque!
              Voluptatum ullam inventore eum est voluptatibus cupiditate, illum
              similique. Eaque, amet qui?
            </p>

            <p className="mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dolor
              minus cum quaerat dicta molestias eos esse, reprehenderit tempore
              dolorum illo quos, aperiam ut ullam unde eum sunt labore! Nisi
              doloremque vitae ut dolore cumque?
            </p>
          </div>
          <hr />
          <div className="">
            <h3>Already Holding {coinname}?</h3>
            <div className="row mt-3">
              <div className="col-md-6 mb-3" style={{ minWidth: "20rem" }}>
                <div
                  className=" d-flex justify-content-start align-items-center gap-3 "
                  style={{
                    height: "10rem",
                    borderRadius: "0.8rem",
                    backgroundColor: "#7ECA9C",
                  }}
                >
                  <div className="">
                    <img
                      src="https://observer.com/wp-content/uploads/sites/2/2021/03/pexels-alesia-kozik-6771899.jpg?quality=80"
                      alt=""
                      className="ms-3"
                      style={{
                        width: "8rem",
                        height: "8rem",
                        borderRadius: "0.8rem",
                      }}
                    />
                  </div>
                  <div
                    className="d-flex flex-column  align-items-start gap-3"
                    style={{ width: "10rem" }}
                  >
                    <h5 className="text-white">Calculate your Profits</h5>
                    <button
                      className="p-1 bg-white fw-bold d-flex align-items-center justify-content-center"
                      style={{
                        width: "8rem",
                        height: "2rem",
                        borderRadius: "0.6rem",
                      }}
                    >
                      Check Now &rarr;{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{ minWidth: "20rem" }}>
                <div
                  className="d-flex justify-content-start align-items-center gap-3 "
                  style={{
                    height: "10rem",
                    borderRadius: "0.8rem",
                    backgroundColor: "#FF7E67",
                  }}
                >
                  <div className="">
                    <img
                      src="https://th.bing.com/th/id/OIP.2UKXCMtBHGsk4-j1InxqTwHaE8?rs=1&pid=ImgDetMain"
                      alt=""
                      className="ms-3"
                      style={{
                        width: "8rem",
                        height: "8rem",
                        borderRadius: "0.8rem",
                      }}
                    />
                  </div>
                  <div
                    className="d-flex flex-column  align-items-start gap-3"
                    style={{ width: "11rem" }}
                  >
                    <h5 className="text-white">Calculate your tax liability</h5>
                    <button
                      className="p-1 bg-white fw-bold d-flex align-items-center justify-content-center"
                      style={{
                        width: "8rem",
                        height: "2rem",
                        borderRadius: "0.6rem",
                      }}
                    >
                      Check Now &rarr;{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              earum ipsum repudiandae nesciunt magni, mollitia corrupti tempora
              porro ea blanditiis fugit iure possimus quis natus accusamus,
              laudantium aperiam amet enim atque, dolore eveniet maiores?
              Voluptas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
