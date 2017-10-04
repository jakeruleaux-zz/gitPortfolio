import constants from './../constants';

const { defaultState, types } = constants;

const getRepoReducer = (state = defaultState, action) => {
  let repo;
  let newState;
  let newRepo;

  switch (action.type) {
    case types.REQUEST_REPO:
      newState = {
        isFetching: true,
      }
      return newState;

    case types.RECIEVE_REPO:
        newRepo = Object.assign({}, state, action.repo, {
          isFetching: false,
      });
      return newRepo;
    default:
      return state;
  }
};

export default getRepoReducer;
