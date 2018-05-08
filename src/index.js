// /**
//  * index.js
//  */
// import React from 'react';
// import { render } from 'react-dom';

// const MainApp = () => (
//   <h1>Hello React!</h1>
// );
// // render the app
// render(<MainApp />, document.getElementById('app'));
import React from 'react';
import { render} from 'react-dom';
import {Abc} from './module';
import Clock from './clock';
import Comment from './comment';
if (module.hot) {
  module.hot.accept();
}

function App() {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  };
  return (
    <div>
      <Abc name="Sara" />
      <Abc name="Cahal" />
      <Abc name="Edite" />
      <Clock />
      <Comment author={comment.author}/>
    </div>
  );
}

render(<App />, document.getElementById('app'));
