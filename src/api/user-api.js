import 'whatwg-fetch';
import getBaseUrl from './baseUrl';
// import { get } from 'https';

const baseUrl = getBaseUrl();

export function deleteUser(id){
  return del(`user${id}`);
}

export function getUsers(){
  return get('users');
}

function get(url){
  return fetch(baseUrl + url).then(onSuccess,onError);
}

function del(url){
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess,onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error);
}
