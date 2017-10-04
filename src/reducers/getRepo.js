import constants from './../constants';

const { defaultState, types } = constants;

const getRepoReducer = (state = defaultState, action) => {
  let repo;
  let newRepo;
  let newState;

  switch (action.type) {
    case types.REQUEST_REPO:
      newState = {
        isFetching: true,
      }

      console.log(state);
      return newState;

    case types.RECIEVE_REPO:

        newState = Object.assign({}, state, action.repo, {
          isFetching: false,
      });
      console.log(newRepo);
      return newState;
    default:
      return state;
  }
};

export default getRepoReducer;
