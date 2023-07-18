import * as React from 'react';
import './style.scss';
import Header from './components/header/Header';
import DataTable from './components/DataTable/DataTable';
import CardUser from './components/CardUser/CardUser';


export default function App() {
  return (
    <>
    <Header></Header>
    <CardUser></CardUser>
    <DataTable></DataTable>
    </>
  );
}
