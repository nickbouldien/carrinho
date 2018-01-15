// import React from 'react';
// import ReactDOM from 'react-dom';
// // import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
// import Home from '../routes/Home';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Home />, div);
// });


// test('render a label', () => {
//     const wrapper = shallow(
//         <Home />
//     );
//     expect(wrapper).toMatchSnapshot();
// });

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })
import Enzyme, { shallow, render, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Home from '../routes/Home';

import store from '../store';

it('Home: sanity check', () => {
  expect(true).toEqual(true);
});
  
it('renders welcome message', () => {
  const wrapper = shallow(<Home store={store} />).dive();
  const welcome = <h1 id="welcome">Welcome</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});


// test('Home snapshot', () => {
//   const component = renderer.create(<Home store={store} />, );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   manually trigger the callback
//   tree.props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

// describe('>>>H O M E --- Snapshot', () => {
//   it('+++capturing Snapshot of Home', () => {
//     const renderedValue = renderer.create(<Home store={store} />).toJSON();
//     expect(renderedValue).toMatchSnapshot();
//   });
// });

/* shallow/dive : // https://github.com/airbnb/enzyme/issues/1002 */



// https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f

// "jest": {
//     "setupFiles": ["./src/__tests__/jestsetup.js"],
//     "snapshotSerializers": ["enzyme-to-json/serializer"]
//   }

// import Enzyme, { shallow, render, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// // React 16 Enzyme adapter
// Enzyme.configure({ adapter: new Adapter() });
// // Make Enzyme functions available in all test files without importing
// global.shallow = shallow;
// global.render = render;
// global.mount = mount;