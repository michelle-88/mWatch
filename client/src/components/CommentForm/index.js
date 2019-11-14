import React from "react";

function CommentForm(props){
    return(
        <form>
            <textarea
                value={props.comment}
                onChange={props.handleInputChange}
                placeholder="Leave a comment"
            >
            </textarea>
            <button type="submit" onClick={props.addComment}>
                Add Comment
            </button>
        </form>
    )
}

export default CommentForm;