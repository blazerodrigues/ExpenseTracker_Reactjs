import React from 'react';
import './Card.css';


function Card(props) {

    //we are appending the props.className to the card class
    const classes = 'card ' + props.className;

    return (
    <div className={classes}>
        {/*props.children is used for the code between opening and closing tags. ie, anything between <Card>ANYTHING</Card>*/}
        {props.children}
    </div>);
}

export default Card;