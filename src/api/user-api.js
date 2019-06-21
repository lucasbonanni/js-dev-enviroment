import 'whatwg-fetch';
import getBaseUrl from './baseUrl';
// import { get } from 'https';

export function getUsers(){
  return get('users');
}

function get(url){
  return fetch(getBaseUrl() + url).then(onSuccess,onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error);
}
