import React, { Fragment } from 'react';
import Action from './genres/Action';
import Romance from './genres/Romance';
import Comedy from './genres/Comedy';
import Animation from './genres/Animation';
import Documentary from './genres/Documentary';
import Family from './genres/Family';
import Drama from './genres/Drama';
import History from './genres/History';
import War from './genres/War';
import Western from './genres/Western';
import Thriller from './genres/Thriller';
import Fantasy from './genres/Fantasy';
import Trending from '../trending/Trending';

const Home = () => {
  return (
    <Fragment>
      <Fantasy />
      <Animation />
      <Trending />
      <History />
      <War />
      <Action />
      <Western />
      <Family />
      <Drama />
      <Thriller />
      <Comedy />
      <Romance />
      <Documentary />
    </Fragment>
  );
};

export default Home;
