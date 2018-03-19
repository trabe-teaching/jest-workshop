import React from "react";
import "assets/avatars";

const avatarUrl = email => `assets/${btoa(email)}.png`;

const Avatar = ({ email }) => (
  <figure className="image is-64x64">
    <img src={avatarUrl(email)} alt="Image" />
  </figure>
);

export default Avatar;
