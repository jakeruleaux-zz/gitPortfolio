import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepo } from './../actions';

const RepoDisplay = ({ dispatch, name }) => {
  return (
  <div>
    {name}
    <p>bob</p>
    <button onClick={() => {dispatch(getRepo())}}></button>
  </div>
);
}

const mapPropsToState = state => {
  return {
    repo: state
  }
}


export default connect(mapPropsToState)(RepoDisplay);
