import constants from './../constants';

const { defaultState, types } = constants;

const getRepoReducer = (state = defaultState, action) => {
  let repo;
  let newRepo;
  let newState;
  let repoId;
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
    case types.DISPLAY_REPO:
        newRepo = Oject.assign({}, {
          name: action.name,
          url: action.url,
          repoId: action.repoId
    });


      return newState;
    default:
      return state;
  }
};

export default getRepoReducer;
