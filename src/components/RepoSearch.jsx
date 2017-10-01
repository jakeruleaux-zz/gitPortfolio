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
    let { _name } = this.refs;
    if (!_name.value.trim()) {
      return;
    }
    this.props.dispatch(getRepoId(_name.value.trim()); _name.value = " ";
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmitSearch}>
          <input placeholder="name" ref="_name"></input>
          <button>btn</button>
        </form>
      </div>
    );
  }
}

export default connect()(RepoSearch);
