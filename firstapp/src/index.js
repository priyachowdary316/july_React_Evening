 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import Header from './component/Header';
 import Footer from './component/Footer';

 const App = () => {
   return (
    <div>
      <Header/>
      <h1>Hiiii From React</h1>
      <h2>Developer Funnel</h2>
      <Footer/>
    </div>

    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>)


// var React = require('react');
// var ReactDDM = require('react-dom');



// function App(){
//   return(
//        <h1>Hiii From React</h1>
//    )
// }

// ReactDOM.render(<App/>, document.getElementById('root'))