import React from 'react';
import { Link } from 'react-router-dom';

class FilmCards extends React.Component {
    render() {
        return (
            <div className="col-sm-6">
                <div className="card mb-5">
                    <img className="card-img-top" src={require("../characters2.jpg")} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.release_date} | RT Score: {this.props.rt_score}</h6>
                        <p className="card-text">{this.props.description}</p>
                        <p className="text-muted">Director: {this.props.director} | Producer: {this.props.producer}</p>
                        <Link className="d-block btn btn-primary mt-2" to={"/films/" + this.props.link}>Show Only This Film</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilmCards;