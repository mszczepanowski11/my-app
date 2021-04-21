import React,{FC} from 'react';
import {TopNav} from './components/TopNav/TopNav';
import {LeftMenu} from './components/LeftMenu/LeftMenu'


const AppWrapper : FC = () => {
  return (
    <div>
      <TopNav/>
        <LeftMenu/>
    </div>
  );
};

export default AppWrapper;
