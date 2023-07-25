import { BehaviorSubject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import Igithub from '../models/Igithub';

// search User

const userState = new BehaviorSubject(undefined);

const getUserState = () => userState.asObservable();

const setUserState = (value: Igithub) => userState.next(value);

export function UserService() {
  return {
    getUserState,
    setUserState,
  };
}

// Users Repositories Array Datatable

const usersRepoArray = new BehaviorSubject([]);

const getUsersRepoState = () => usersRepoArray.asObservable();

const setUsersRepoState = (value: any[]) => usersRepoArray.next(value);

export function UserReposService() {
  return {
    getUsersRepoState,
    setUsersRepoState,
  };
}

//API request

export const getUserData = (username) => {
  const url = `https://api.github.com/users/${username}`;

  return ajax({
    url,
    method: 'GET',
  });
};

export const getUserRepo = (repo) => {
  const url = `https://api.github.com/users/${repo}/repos`;

  return ajax({
    url,
    method: 'GET',
  });
};
