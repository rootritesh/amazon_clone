import './App.css';
import Header from './Header/Header';
import Nav1 from './Nav1/Nav1';
import Cour from './coursel/coursel';
import { Card } from '@material-ui/core';
import Element from './card/element';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav1></Nav1>
      <Cour></Cour>
      <Element></Element>
    </div>
  );
}

export default App;
