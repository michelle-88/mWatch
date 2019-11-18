import React from "react";
import "./style.css";
import {usernameTransfer} from "../Login";
import { detailsId } from "../../pages/WatchList";
const moment = require('moment');

function CommentDiv(props) {

    return (
        props.comments.map(comment => (
            <div>
            <p className="lead">{comment.body}</p>
            {comment.user === usernameTransfer ? (<button className="btn btn-sm btn-danger mt-n4 float-right px-3" onClick={() => props.deleteComment(comment._id, detailsId)}><i class="fas fa-times fa-lg"></i></button>) : (<span></span>)}
            <p>Posted by: <span className="user-text">{comment.user}</span> · {moment(comment.date).fromNow()} </p>
            <hr/>
            </div>
        )
    ))
}

export default CommentDiv;