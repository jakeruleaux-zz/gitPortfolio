import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";
import fetch from "isomorphic-fetch";
import apiKey from '../../.env';


export const requestRepo = (repoId) => ({
  type: types.REQUEST_REPO,
  repoId
});

export const displayRepo = (name, url, repoId) => ({
  type: types.DISPLAY_REPO,
  name,
  url,
  repoId
});


export function getRepo(dispatch) {
  return function (dispatch) {
    const repoId = v4();
    dispatch(requestRepo(repoId));
    return fetch("https://api.github.com/users/jakeruleaux")
    .then(response => response.json(),
    error => console.log("error", error)
  ).then(function(json) {
    console.log("done", )
    dispatch(displayRepo(name));
  });
};
}
