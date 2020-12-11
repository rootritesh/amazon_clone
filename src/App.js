import './App.css';
import Header from './Header/Header';
import Nav1 from './Nav1/Nav1';
import Cour from './coursel/coursel';
import { Card } from '@material-ui/core';
import Element from './card/element';
import Element1 from './card/element1';
import Deal from './todaysdeal/deal';
import Footer from './footer/fotter';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav1></Nav1>
      <Cour></Cour>
      <Element></Element>
      <Deal></Deal>
      <Element1></Element1>
      <Footer></Footer>
    </div>
  );
}

export default App;
