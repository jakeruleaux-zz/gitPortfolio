import React from 'react';
import { connect } from 'react-redux';
import { getRepo } from './../actions';

class RepoSearch extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  handleSubmitSearch(event) {
    event.preventDefault();
    this.props.dispatch(getRepo());
  }

  render() {
    return(
      <div>
          <button onClick={this.handleSubmitSearch}>btn</button>
      </div>
    );
  }
}

export default connect()(RepoSearch);
