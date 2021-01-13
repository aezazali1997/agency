import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import "./app.css"
import { Banner } from './components/Banner/Banner';
 
/* primary colors of the web */
/* 
blakish 071108
greyish 364652
bluish light 7FBEEB
bluish capricon 56CBF9
*/
function App() {
  return (
    <div>
    <Navbar />
    <Banner />
    </div>
  );
}

export default App;
