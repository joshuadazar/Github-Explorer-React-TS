import * as React from 'react';
import { useEffect, useState } from 'react';
import './CardUser.scss';
import {
  UserService,
  UserReposService,
  getUserRepo,
} from '../../services/GithubService';
import { GithubRepos } from '../../models/Igithub';

export default function CardUSer() {
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    const subscription = UserService()
      .getUserState()
      .subscribe((user) => {
        setUserData(user);
      });
    return () => {
      subscription.unsubscribe();
    };
  }, [userData]);

  const findUserRepo = () => {
    console.log('click');
    const suscription = getUserRepo(userData.login).subscribe((request) => {
      if (request.status === 200) {
        const repos: GithubRepos[] = request.response;
        console.log(repos,'from card');
        UserReposService().setUsersRepoState(repos);
      }
    });

    return () => {
      suscription.unsubscribe();
    };
  };
  return (
    <>
      <div className="card-user">
        <div className="card-user__container">
          <div className="card-user__container-image">
            <img src={userData?.avatar_url} alt="" />
            <h2 className="card-user__container-title">{userData?.name}</h2>
          </div>
          <div className="card-user__container-description">
            <p className="bio">{userData?.bio}</p>
            <p className="url">Github URL: {userData?.url}</p>
            <p className="location">Country: {userData?.country}</p>
            <p className="repos">Repositories: {userData?.public_repos}</p>
            <button onClick={findUserRepo} className="btn">
              View repositories
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
