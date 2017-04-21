import React from 'react';

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function formatDate(date) {
    return date.toLocleDateString();
}

const comment = {
    date: new Date(),
    text: "Example5: i hope you",
    author:{
        name: "hello kitty",
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
}



export default Comment;