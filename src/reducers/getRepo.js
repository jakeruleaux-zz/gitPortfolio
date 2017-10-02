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
        name: action.name,
        repoId: action.repoId
      };
      newState = Object.assign({}, state, {
        [action.repoId]: newRepo
      });
      console.log(newState);
      return newState;
    case types.DISPLAY_REPO:
        repo = state[action.repoId];
        console.log(repo);
        newRepo = Object.assign({}, repo, {
          isFetching: false,
          name: action.name,
          repoId: action.repoId,
});
      newState = Object.assign({}, state, {
        [action.repoId]: newRepo
      });
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default getRepoReducer;
