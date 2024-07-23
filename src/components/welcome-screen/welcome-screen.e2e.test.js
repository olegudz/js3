import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import WelcomeScreen from './welcome-screen.js';

Enzyme.configure({adapter: new Adapter()});

it(`App is correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<WelcomeScreen time={0} countErrors={0} onClick={clickHandler} />);

  const startButton = app.find(`button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
