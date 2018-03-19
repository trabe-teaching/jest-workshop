import React, { Fragment } from "react";
import ForceUser from "./force-user";

const ForceUsers = ({ users, ...handlers }) => (
  <Fragment>{users.map(user => <ForceUser key={user.id} user={user} {...handlers} />)}</Fragment>
);

export default ForceUsers;
