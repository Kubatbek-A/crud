import React from 'react';

function Card(props) {
  return (
    <li>
      <div>{props.firstName} {props.lastName}</div>
      <div>{props.phoneNumber}</div>
      <button onClick={props.openModal}>edit</button>
      <button className="btn-delete" onClick={props.onDelete}>delete</button>
    </li>
  );
}

export default Card;