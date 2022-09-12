import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div
        className="center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40vh",
          margin: "auto",
        }}
      >
        <form action="" align="center">
          <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              className="form-control me-2"
              type="text"
              placeholder="Name"
              aria-label="name"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              className="form-control me-2"
              type="email"
              placeholder="Name"
              aria-label="name"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Message
            </label>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
