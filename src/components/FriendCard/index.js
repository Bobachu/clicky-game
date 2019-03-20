import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card col-2">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.clickHandle(props.id)}/>
      </div>
    </div>
  );
}

export default FriendCard;
