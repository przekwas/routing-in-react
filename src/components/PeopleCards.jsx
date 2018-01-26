import React from 'react';
import { Link } from 'react-router-dom';

class PeopleCards extends React.Component {
    render() {
        return (
            <div className="col-sm-6">
                <div className="card mb-5">
                    <img className="card-img-top" src={require("../characters.jpg")} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-header">{this.props.name}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Age: {this.props.age}</li>
                            <li className="list-group-item">Gender: {this.props.gender}</li>
                            <li className="list-group-item">Hair Color: {this.props.hair_color}</li>
                            <li className="list-group-item">Eye Color: {this.props.eye_color}</li>
                            </ul>
                            <Link className="d-block btn btn-primary mt-3" to={"/people/" + this.props.link}>Show Only This Person</Link>
                            <a href={"http://ghibliapi.herokuapp.com/people/" + this.props.link} target="_blank" className="d-block btn btn-secondary mt-3">Go to their JSON</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default PeopleCards;


