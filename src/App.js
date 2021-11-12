import logo from "./logo.svg";
import "./App.css";
import MenuKontak from "./Page/MenuKontak";
import MenuProduct from "./Page/MenuProduct";
import MenuTentangkami from "./Page/MenuTentangkami";
import MenuUtama from "./Page/MenuUtama";
import React, { Component } from "react";

const Header = () => {
  return (
    <div>
      <h4>Ini halaman Untuk Header</h4>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h4>Ini halaman Untuk Footer</h4>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <di>
        <Header />
        <MenuKontak/>
        <MenuProduct/>
        <MenuTentangkami/>
        <MenuUtama/>
        <Footer />
      </di>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
