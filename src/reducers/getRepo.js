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
      console.log("name");
      console.log(newState);
      return newState;
    default:
      return state;
    case types.DISPLAY_REPO:
        repo = state[action.repoId];
        console.log(newState);
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
  }
};

export default getRepoReducer;
