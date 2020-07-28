import React from "react";
import "./Messages.css"

const Messages = (props) => {
    var styles = {
        width: props.width + "px",
        marginLeft: props.auto,
        backgroundColor: props.color,
        color: props.col
    }
    return (
        <>
            <div className="content" style={styles}>
                <p>{props.content}</p>
            </div>
        </>
    );
}

export default Messages;