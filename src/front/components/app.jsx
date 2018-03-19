import "bulma/css/bulma";
import "assets/styles";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as fromApplication from "reducers/application";
import { masterSeek, turn, betray, banish, reset } from "action/creators";
import Error from "components/error";
import Loader from "components/loader";
import ForceUsers from "components/force-users";

const App = ({ loading, error, lightSiders, darkSiders, onReset, ...handlers }) => (
  <Fragment>
    <Error visible={error} />

    <div className="is-pulled-right">
      <Loader visible={loading} />
    </div>

    <h1 className="title is-1 has-text-centered">Force users</h1>

    <div className="columns">
      <div className="column">
        <h2 className="title is-2 has-text-centered">Light side</h2>
        <ForceUsers users={lightSiders} {...handlers} />
      </div>

      <div className="column">
        <h2 className="title is-2 has-text-centered">Dark side</h2>
        <ForceUsers users={darkSiders} {...handlers} />
      </div>
    </div>

    <p className="has-text-centered">
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          onReset();
        }}
      >
        Restart!
      </a>
    </p>
  </Fragment>
);

export default connect(
  state => ({
    loading: fromApplication.isLoading(state),
    error: fromApplication.hasError(state),
    lightSiders: fromApplication.getLightSiders(state),
    darkSiders: fromApplication.getDarkSiders(state),
  }),
  dispatch => ({
    onBanish: id => dispatch(banish(id)),
    onTurn: id => dispatch(turn(id)),
    onBetray: id => dispatch(betray(id)),
    onSeek: id => dispatch(masterSeek(id)),
    onReset: () => dispatch(reset()),
  }),
)(App);
