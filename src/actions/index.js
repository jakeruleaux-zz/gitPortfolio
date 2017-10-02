import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";
import fetch from "isomorphic-fetch";
import apiKey from '../../.env';
console.log(apiKey);


export const requestRepo = (repoId) => ({
  type: types.REQUEST_REPO,
  repoId: repoId
});

export const displayRepo = (name, url, repoId) => ({
  type: types.DISPLAY_REPO,
  name,
  url,
  repoId
});


export function getRepo() {
  console.log("hi");
  const name =[];
  console.log(name);
  const url = [];
  return function (dispatch) {
    const repoId = v4();
    dispatch(requestRepo());
    return fetch("https://api.github.com/users/jakeruleaux")
    .then(response => response.json(),
    error => console.log("error", error)
  ).then(function(json) {
    console.log("done")
    for(var i = 0; i < json.length; i++) {
      console.log("name");
      name.push(json[i].name);
      url.push(json[i].html_url);
    }
    dispatch(displayRepo(name, url));
  });
};
}
