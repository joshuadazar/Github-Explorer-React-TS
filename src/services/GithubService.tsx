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

// Users Array Datatale

const usersArray = new BehaviorSubject([]);

const getUsersState = () => usersArray.asObservable();

const setUsersState = (value: any[]) => usersArray.next(value);

export function UsersService() {
  return {
    getUsersState,
    setUsersState,
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
