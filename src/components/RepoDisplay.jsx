import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepo } from './../actions';

const RepoDisplay = ({ dispatch, repo }) => {
    console.log(repo);
  return (
  <div>

    {repo.name}
    
    <p>bob</p>
    <button onClick={() => {dispatch(getRepo())}}></button>
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
