import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'



import  { Home } from './containers/Home'
import NavBar from './components/NavBar';
import CharacterList from './containers/characters/CharacterList';
import CharacterForm from './containers/characters/CharacterForm';
import CharacterShow from './containers/characters/CharacterShow';
import {fetchCharacters} from './actions/characters'

class App extends Component {

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    return (
      <Router>
      <h1>StarWars</h1>
      <div className="App">
        <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/characters/new" component={CharacterForm} />
        <Route exact path="/characters/:id" component={CharacterShow} />
        <Route render={(props) => <div>There is no cow level</div>} />
      </Switch>
      </div>
      </Router>
    );

  }
}

export default connect(null, {fetchCharacters})(App);

