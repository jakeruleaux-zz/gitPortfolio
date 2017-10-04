import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";
import fetch from "isomorphic-fetch";

export const requestRepo = () => ({
  type: types.REQUEST_REPO,
});

export function getRepo(dispatch) {
  return function (dispatch) {
    let name;
    dispatch(requestRepo());
    return fetch("https://api.github.com/users/jakeruleaux")
    .then(response => response.json(),
    error => console.log("error", error)
    ).then(function(json) {
    if (json.id) {
      const name = json;
      console.log(name);
      dispatch(recieveRepo(name));
    } else {
      console.log("error");
    }
  });
};
}

export const recieveRepo = (name) => ({
  type: types.DISPLAY_REPO,
  name,
});
