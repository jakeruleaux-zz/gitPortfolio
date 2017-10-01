import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepo } from './../actions';

const RepoDisplay = ({ dispatch, name }) => {
  return (
  <div>
    {name}
    <button onClick={() => {dispatch(getRepo())}}></button>
  </div>
);
}



const mapPropsToState = state => {
  const repo = state;
  return {
    repo: repo.name
  }
}


export default connect(mapPropsToState)(RepoDisplay);
