import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepo } from './../actions';

const RepoDisplay = ({ repoInfo }) => {
  const { username } = repoInfo;
  return (
  <div>{username}</div>
);
}

RepoDisplay.propTypes = {
  repoInfo: PropTypes.object,
  username: PropTypes.string
};

export default connect()(RepoDisplay);
