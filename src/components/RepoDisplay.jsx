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

RepoDisplay.propTypes = {
  repoInfo: PropTypes.object,
  name: PropTypes.string
};

const mapPropsToState = state => {
  const repoInfo = state;
  return {
    repoInfo: repoInfo.name
  }
}


export default connect(mapPropsToState)(RepoDisplay);
