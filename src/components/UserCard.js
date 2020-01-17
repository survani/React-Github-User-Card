import React from "react";

const UserCard = props => {
    return (
        <div>
            <h2>Hello</h2>
            <img src={props.img} alt={props.name}></img>
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
        </div>
    )
}

export default UserCard;