import * as React from 'react';
import { useEffect, useState } from 'react';
import './DataTable.scss';
import { UserReposService } from '../../services/GithubService';
import { GithubRepos } from '../../models/Igithub';

export default function DataTable() {
  const [dataTable, setDataTable] = useState<GithubRepos[]>(undefined);

  useEffect(() => {
    const subscription = UserReposService()
      .getUsersRepoState()
      .subscribe((res) => {
        if (res !== undefined) {
          const result: GithubRepos[] = res;
          console.log(result, 'from tabla');
          dataTable !== undefined && setDataTable(result);
        }
      });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const getReposData = () => {
    dataTable.map((repo) => (
      <tr key={repo?.id}>
        <td>{repo.name}</td>
        <td>{repo.watchers_count}</td>
        <td>{repo.description}</td>
        <td>{repo.visibility}</td>
        <td>{repo.size}</td>
        <td>
          <a href={repo.html_url} rel="noopener"></a>Link
        </td>
      </tr>
    ));
  };
  return (
    <table className="github__table">
      <thead>
        <tr>
          <th>Repository Name</th>
          <th>Watchers count</th>
          <th>Description</th>
          <th>Visibility</th>
          <th>Size</th>
          <th>Git URL</th>
        </tr>
      </thead>
      <tbody>{dataTable!== undefined && getReposData()}</tbody>
    </table>
  );
}
