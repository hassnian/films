import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route,Router,BrowserRouter,Link} from 'react-router-dom';
import Form from './components/Form';
import Film from './components/Film';
export class Index extends Component {

  render() {
    return (
      <div>
        
          <BrowserRouter>
          <nav className="navbar navbar-dark ">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/form" className="nav-link">Insert a film</Link>
              <Link to="/stats" className="nav-link">Stats</Link>
          </nav>
            <Route exact path="/films/:idfilm" component={Form}/>
              <Route exact path="/form" component={Form}/>
              <Route exact path="/" component={Film}/>
        </BrowserRouter>
  
      </div>
    )
  }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
