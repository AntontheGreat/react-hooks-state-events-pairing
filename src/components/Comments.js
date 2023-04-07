import React, { useState } from "react";

function Comments({ comments }) {
    const [showComments, setShowComments] = useState(true);
    const [upvotes, setUpvotes] = useState(0);
    const [downvotes, setDownvotes] = useState(0);

    function handleComments() {
        setShowComments(!showComments);
    }

    function handleUpvotes() {
        let newCount = upvotes + 1;
        setUpvotes(newCount);
    }

    const commentElements = comments.map((comment) => {
        return(
            <div key={comment.id}>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
                <button onClick={handleUpvotes}>{upvotes}👍</button> <button>👎</button>
            </div>
        )
    });

    return (
        <div className="Comments">
            <button onClick={handleComments}>{showComments ? "Hide" : "Show"} Comments</button>
            <h2>{comments.length} Comments</h2>
            {showComments ? [commentElements] : null}
        </div>
    );
}

export default Comments;