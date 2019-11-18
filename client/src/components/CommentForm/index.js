import React from "react";
import "./style.css";

function CommentForm(props){
    return(
        <div className="row mt-3">
            <div className="col mx-3">
            <div className="form-group shadow-textarea">
            <textarea
                value={props.comment}
                onChange={props.handleInputChange}
                placeholder="What are your thoughts on this show?"
                className="form-control z-depth-1"
                rows="4"
            >
            </textarea>
            <div className="d-flex flex-row-reverse">
            <button type="submit" className="btn btn-elegant mt-4" onClick={props.addComment}>
            <i class="far fa-comments mr-2 fa-lg"></i>
                Post Comment
            </button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default CommentForm;