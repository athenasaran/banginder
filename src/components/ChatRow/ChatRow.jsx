import React from 'react'
import "./ChatRow.css"
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function ChatRow({ name, message, profilePic, timestamp }) {
    return (
        <Link to={`/chat/${name}`}>
            <div className="chatRow">
                <Avatar className="avatar" alt={name} src={profilePic} />
                <div className="detalhes">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="timestamp">{timestamp}</p>
            </div>
        </Link>
    )
}

export default ChatRow

