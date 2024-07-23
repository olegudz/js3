import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.js';


it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<WelcomeScreen time={0} countErrors={0} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
