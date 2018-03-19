import React, { Fragment } from "react";
import cn from "classnames";
import Avatar from "components/avatar";

const className = ({ status, type }) =>
  cn("box", "force-user", {
    "force-user--dark": type === "dark",
    "force-user--light": type === "light",
    "force-user--alive": status === "alive",
    "force-user--ghost": status === "ghost",
    "force-user--dead": status === "dead",
  });

const ForceUser = ({ user, onBanish, onBetray, onTurn, onSeek }) => {
  const { id, name, email, rank, master, canBanish, canTurn, canBetray, canSeek } = user;

  const handle = fn => e => {
    e.preventDefault();
    fn(id);
  };

  const handleBanish = handle(onBanish);
  const handleTurn = handle(onTurn);
  const handleBetray = handle(onBetray);
  const handleSeek = handle(onSeek);

  const renderConditionalAction = (cond, action, handler) =>
    cond && (
      <div className="control">
        <a href="#" className="button is-small" onClick={handler}>
          {action}
        </a>
      </div>
    );

  return (
    <div className={className(user)}>
      <article className="media">
        <div className="media-left">
          <Avatar email={email} />
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong>
              <span className="tag is-gray is-pulled-right">{master ? `${master.name}'s ${rank}` : rank}</span>
            </p>
            <div className="field is-grouped">
              {renderConditionalAction(canBanish, "Join the force", handleBanish)}
              {renderConditionalAction(canSeek, "Seek a master", handleSeek)}
              {renderConditionalAction(canTurn, "Turn", handleTurn)}
              {renderConditionalAction(canBetray, "Betray", handleBetray)}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ForceUser;
