import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepoSearch from './RepoSearch';

const RepoDisplay = ({ dispatch, repo }) => {
  const {name, url, login} = repo;
  console.log(repo);
  return (
  <div>
    <RepoSearch />
    {url}
    {login}
    {name}
    bob
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
