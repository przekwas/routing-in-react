import React from 'react';
import Header from './Header';
import FilmCardsList from './FilmCardsList';
import PeopleCardsList from './PeopleCardsList';
import SingleFilm from './SingleFilm';
import SinglePerson from './SinglePerson';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container">

                <Router>
                <React.Fragment>
                    <div className="row justify-content-center">
                        <Link className="btn btn-primary btn-lg mb-4 mr-5" to="/">Go Home</Link>
                        <Link className="btn btn-primary btn-lg mb-4 mr-5" to="/films">View Films</Link>
                        <Link className="btn btn-primary btn-lg mb-4 mr-5" to="/people">View People</Link>
                    </div>
                    <Switch>
                        <Route exact path="/" />
                        <Route exact path="/films" component={FilmCardsList} />
                        <Route exact path="/people" component={PeopleCardsList} />
                        <Route exact path="/films/:id" component={SingleFilm} />
                        <Route exact path="/people/:id" component={SinglePerson} />
                    </Switch>
                </React.Fragment>
            </Router>
                </div>
            </React.Fragment>
        )
    }
}

export default App;