import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepo } from './../actions';

const RepoDisplay = ({ dispatch, repoInfo }) => {

  const { name } = repoInfo;
  return (
  <div>
    {name}
    <button onClick={() => {dispatch(getRepo())}}></button>
  </div>
);
}

const mapPropsToState = state => {
  const repoInfo = state;
  return {
    repoInfo: repoInfo.name
  }
}
RepoDisplay.propTypes = {
  repoInfo: PropTypes.object,
  username: PropTypes.string
};

export default connect(mapPropsToState)(RepoDisplay);
