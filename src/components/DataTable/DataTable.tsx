import * as React from 'react';
import { useEffect, useState } from 'react';
import './DataTable.scss';
import { getUserData } from '../../services/GithubService';
import Igithub from '../../models/Igithub';

export default function DataTable() {
  const [dataTable, setDataTable] = useState(undefined);

  useEffect(() => {
    /*
    const subscription = getUserData('joshuadazar').subscribe((res) => {
      if (res !== undefined) {
        const result: Igithub = res.response;
        console.log(result);
        dataTable !== undefined && setDataTable(result);
      }
    });
    return () => {
      subscription.unsubscribe();
    };
    */
  }, []);
  return (
    <table className="github__table">
      <thead>
        <tr>
          <th>Repository Name</th>
          <th>Owner</th>
          <th>Description</th>
          <th>Forks</th>
          <th>🌟</th>
          <th>Git URL</th>
        </tr>
      </thead>
      <tbody>
        <div></div>
        <tr>
          <td>Repository</td>
          <td>Owner</td>
          <td className="description">Description repo</td>
          <td>Forks</td>
          <td>Stars</td>
          <td>
            <a
              target="_blank"
              href="{{repo.html_url}}"
              rel="noreferrer noopener"
            >
              Link
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
