import React from "react";
import "./style.css"
const moment = require('moment');

function CommentDiv(props) {

    return (
        props.comments.map(comment => (
            <div>
            <p className="lead">{comment.body}</p>
            <p>Posted by: <span className="user-text">{comment.user}</span> · {moment(comment.date).fromNow()} </p>
            <hr/>
            </div>
        )
    ))
}

export default CommentDiv;