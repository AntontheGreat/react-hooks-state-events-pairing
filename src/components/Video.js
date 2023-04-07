import React, { useState } from "react";

function Video({ video }) {
    const [upvotes, setUpvotes] = useState(video.upvotes);
    const [downvotes, setDownvotes] = useState(video.downvotes);

    function handleUpvotes() {
        let newCount = upvotes + 1
        setUpvotes(newCount)
    }

    function handleDownvotes() {
        let newCount = downvotes + 1
        setDownvotes(newCount)
    }

    return(
        <div className="Video">
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={video.title}
            />
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={handleUpvotes}>{upvotes}👍</button> <button onClick={handleDownvotes}>{downvotes}👎</button>
        </div>
    )
}

export default Video;

// functionHandleLike() {
    //like per click on button increment
// }