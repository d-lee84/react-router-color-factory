import {useState} from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './App.css';

import Home from "./Home";
import ColorPicker from "./ColorPicker";
import Color from "./Color";

/** App Component
 * 
 *  State:
 *  - colors: Array of color objects
 *    [{name, colorCode}, ...]
 */

function App() {
  const [colors, setColors] = useState([]);
  

  function addColor(formData) {
    setColors(c => (
      [formData, ...c]
    ));
  }

  function getColor(name) {
    return colors.find(c => c.name === name);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <Home colors={colors} />
          </Route>
          <Route exact path="/colors/new">
            <ColorPicker onSubmit={addColor} />
          </Route>
          <Route exact path="/colors/:color">
            <Color getColor={getColor}/>
          </Route>
          <Route>
            <Redirect to="/colors" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
