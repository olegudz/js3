import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.js';


it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      settings={{gameTime: 5, countErrors: 3}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
