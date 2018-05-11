import React from 'react';
import DepartmentList from './DepartmentList';
import departments from '../../data.json';

const Layout = () => (
  <div>
    <h1>Departamentos</h1>
    {departments.departments
      .filter(department => `${department.name} `)
      .map(department => <DepartmentList {...department} />)}
  </div>
);

export default Layout;
