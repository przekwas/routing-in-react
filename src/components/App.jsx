import React from 'react';
import Header from './Header';
import FilmCardsList from './FilmCardsList';
import PeopleCardsList from './PeopleCardsList';
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
                    </Switch>
                </React.Fragment>
            </Router>
                </div>
            </React.Fragment>
        )
    }
}

export default App;