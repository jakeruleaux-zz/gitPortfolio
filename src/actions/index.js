import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";
import fetch from "isomorphic-fetch";



export const requestRepo = (repoId) => ({
  type: types.REQUEST_REPO,
  repoId: repoId,
});



export function getRepo(dispatch) {


  return function (dispatch) {
    let name;
    const repoId = v4();

    return fetch("https://api.github.com/users/jakeruleaux")
    .then(response => response.json(),
    error => console.log("error", error)
    ).then(function(json) {
    if (json.id) {
      const name = json;
      console.log(name);
      dispatch(displayRepo(name));
      dispatch(requestRepo(repoId));
    } else {
      console.log("error");
    }
  });
};
}

export const displayRepo = (name, repoId) => ({
  type: types.DISPLAY_REPO,
  repoId,
  name,
});
