import React from 'react';
import { connect } from 'react-redux';

class RepoSearch extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <form>
          <input></input>
          <button>btn</button>
        </form>
      </div>
    );
  }
}

export default connect()(RepoSearch);
