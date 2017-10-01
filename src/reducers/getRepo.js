import constants from './..constants';

const { defaultState, types } = constants;

const getRepoReducer = (state = defaultState, action) => {
  let repo;
  let newRepo;
  let newState;
  switch (action.types) {
    case types.REQUEST_REPO:
      newRepo = {
        isFetching: true,
        repoId: action.repoId
      };
      newState = Object.assign({}, state, {
        [action.repoId]: newRepo
      });
      return newState;
    case types.DISPLAY_REPO:
        newRepo = {
          name: action.name,
          url: action.url,
          repoId: action.repoId
    };
    newState = Object.assign({}, state, {
        [action.repoId]: newRepo
    });
      return newState;      
    default:
      return state;
  }
};

export default getRepoReducer;
