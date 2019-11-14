import React from "react";

function CommentDiv(props) {

    return (
        props.comments.map(comment => (
            <div>
            <p>{comment.body}</p>
            <p>Posted by: {comment.user} on {comment.date} </p>
            </div>
        )
    ))
}

export default CommentDiv;