import React from "react";
import "assets/death-star.png";

const Error = ({ visible }) =>
  visible ? (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <article className="message is-danger">
          <div className="message-header">
            <p>The death star has exploded</p>
          </div>
          <div className="message-body">
            <figure className="image">
              <img src="assets/death-star.png" alt="Image" />
            </figure>
          </div>
        </article>
      </div>
    </div>
  ) : null;

export default Error;
