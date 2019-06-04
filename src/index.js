import {getUsers} from './api/user-api';

//populate table of users via API call.
getUsers().then(results => {
  let usersBody = "";

  results.forEach(element => {
    usersBody +=`<tr>
    <td><a href="#" data-id="${element.id}" class="deleteUser">delete</a></td>
    <td>${element.id}</td>
    <td>${element.firstName}</td>
    <td>${element.lastName}</td>
    <td>${element.email}</td>
    </tr>
    `
  });
  global.document.getElementById('users').innerHTML = usersBody;
});
