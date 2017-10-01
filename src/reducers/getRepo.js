import constants from './..constants';

const { defaultState, types } = constants;

const getRepo = (state = defaultState, action) => {
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
  }
};

export default getRepo;
