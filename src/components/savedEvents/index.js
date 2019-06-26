import React from "react";

function savedEvents(props) {
    return (
        <ul className="list-group saved-events">
            {props.results.map(result => (
                <li key={result} className="list-group-item">
                    <img alt="event" src={result} className="img-fluid" />
                    <h3 className="title">{result}</h3>
                    <p className="description">{result}</p>
                </li>
            ))}
        </ul>
    )
}

export default savedEvents;