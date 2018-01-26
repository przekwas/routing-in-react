import React from 'react';
import { Link } from 'react-router-dom';

class SinglePerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objects: []
        }
    }
    componentDidMount() {
        let url = "http://ghibliapi.herokuapp.com/people/" + this.props.match.params.id;
        fetch(url)
            .then(response => response.json())
            .then(object => this.setState({ objects: object }))
    }

    render() {
        return (
            <div className="col-sm-12">
                <div className="card mb-5">
                    <img className="card-img-top" src={require("../characters.jpg")} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-header">{this.state.objects.name}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Age: {this.state.objects.age}</li>
                            <li className="list-group-item">Gender: {this.state.objects.gender}</li>
                            <li className="list-group-item">Hair Color: {this.state.objects.hair_color}</li>
                            <li className="list-group-item">Eye Color: {this.state.objects.eye_color}</li>
                        </ul>
                        <Link className="btn btn-primary mt-3 d-block" to="/people">Back to View People</Link>
                        <a href={this.state.objects.url} target="_blank" className="btn btn-secondary mt-3 d-block">Go to their JSON</a>
                </div>

            </div>
            </div >
        )
    }
}

export default SinglePerson;