import * as React from 'react';
import { useState, useMemo } from 'react';
import './header.scss';
import { getUserData, UserService } from '../../services/GithubService';
import Igithub from '../../models/Igithub';

export default function Header() {
  const [searchInput, setSearchInput] = useState(undefined);

  const validateSearchInput = (value) => {
    const text = value.target.value;
    if (
      text !== '' &&
      text !== undefined &&
      text.length > 4 &&
      text !== searchInput
    ) {
      getUserData(text.trim().toLowerCase()).subscribe((res) => {
        if (res !== undefined) {
          const result: Igithub = res.response;
          console.log(result);
          setSearchInput(result);
          UserService().setUserState(result);
        }
      });
    }
  };

  return (
    <header className="header">
      <h1 className="header__title">
        Github Explorer <span>{searchInput?.name}</span>
      </h1>
      <div className="header__search-container">
        <input
          className="header__search-container-input-search"
          onChange={validateSearchInput}
          type="text"
        />
        <button className=" btn header__search-container-btn-search">
          Find user
        </button>
      </div>
    </header>
  );
}
