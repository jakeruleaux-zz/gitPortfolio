import constants from './../constants';

const { defaultState, types } = constants;

const getRepoReducer = (state = defaultState, action) => {
  let repo;
  let newRepo;
  let newState;

  switch (action.type) {
    case types.REQUEST_REPO:
      newRepo = {
        isFetching: true,
        repoId: action.repoId
      };
      newState = Object.assign({}, state, {
        [action.repoId]: newRepo
      });
      return newState;
      console.log(newState);
    case types.DISPLAY_REPO:
        repo = state[action.repoId];
        newRepo = {
          isFetching: false,
          name: action.name,

          repoId: action.repoId,
};


console.log(newRepo);
      return newRepo;
    default:
      return state;
  }
};

export default getRepoReducer;
