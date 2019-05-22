import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import OrderList from './OrderList';

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      {/*<div>
        <h1 className="inline-block">Lunch time</h1>
        <button className="py-2 px-4 font-bold text-green-500 border border-solid border-green-500 rounded-full">Create new order</button>
      </div>*/}
      <OrderList />
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
