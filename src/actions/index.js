import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

export function getRepo (name) {
  console.log("https://api.github.com/users/${name}");
  return fetch("https://api.github.com/users/${name}")
  .then(response => response.json());
  const username = json.response.body.username;

}
