import React from 'react';
import { Link } from 'react-router-dom';

class SingleFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objects: []
        }
    }
    componentDidMount() {
        let url = "http://ghibliapi.herokuapp.com/films/" + this.props.match.params.id;
        fetch(url)
        .then(response => response.json())
        .then(object => this.setState({objects: object}))
    }

    render() {
        return (
            <div className="col-sm-12">
                <div className="card mb-5">
                    <img className="card-img-top" src={require("../characters2.jpg")} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.objects.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{this.state.objects.release_date} | RT Score: {this.state.objects.rt_score}</h6>
                        <p className="card-text">{this.state.objects.description}</p>
                        <p className="text-muted">Director: {this.state.objects.director} | Producer: {this.state.objects.producer}</p>
                        <Link className="btn btn-primary mt-1 d-block" to="/films">Go Back to View Films</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleFilm;