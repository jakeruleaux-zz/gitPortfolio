import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepo } from './../actions';
import RepoSearch from './RepoSearch';

const RepoDisplay = ({ dispatch, repo }) => {
    console.log(repo);
  return (
  <div>
    <RepoSearch />
    {repo.name}
  </div>
);
}

const mapPropsToState = state => {
  const repo = state;
  return {
    repo: state
  };
}


export default connect(mapPropsToState)(RepoDisplay);
