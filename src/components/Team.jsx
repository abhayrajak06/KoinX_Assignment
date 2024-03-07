import React from "react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      img: "https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg",
    },
    {
      id: 2,
      name: "Elina Williams",
      img: "https://bswh-p-001.sitecorecontenthub.cloud/api/public/content/jennifer-walston?v=d0522474",
    },
    {
      id: 3,
      name: "John Smith",
      img: "https://th.bing.com/th/id/OIP.2SPOBCwb8XrcDcV_FWXVVgAAAA?rs=1&pid=ImgDetMain",
    },
  ];
  return (
    <div className="row m-1 mt-3">
      <div
        className="col-md-12 bg-white p-3"
        style={{ minHeight: "32rem", borderRadius: "0.6rem" }}
      >
        <h4 className="fw-bold">Team</h4>
        <p className="mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          facere saepe enim beatae ut possimus? Ut numquam vitae dolorum
          pariatur.
        </p>
        {teamMembers.map((tm) => (
          <div
            key={tm.id}
            className=" d-flex p-4   mb-3 justify-content-around flex-wrap"
            style={{
              backgroundColor: "#AED2FF",
              borderRadius: "1rem",
              minHeight: "14rem",
            }}
          >
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: "10rem" }}
            >
              <img
                src={tm.img}
                style={{
                  width: "8rem",
                  height: "8rem",
                  borderRadius: "0.8rem",
                }}
                alt=""
              />
              <h6 className="fw-bold mt-2">{tm.name}</h6>
              <p className="" style={{ marginTop: "-8px" }}>
                Designation here
              </p>
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ maxWidth: "35rem" }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi pariatur provident repellendus deserunt fugiat optio,
                blanditiis asperiores est dicta numquam? Ullam unde quos
                voluptate, officia ex quae, magnam id dolore aspernatur nisi
                temporibus suscipit labore, deserunt illum at mollitia iste
                voluptatem repudiandae adipisci doloribus! A!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
