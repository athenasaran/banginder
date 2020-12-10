import React from 'react'
import Header from "../../components/Header/Header";
import "./Chat.css"
import ChatRow from '../../components/ChatRow/ChatRow'

function Chat() {
    return (
        <React.Fragment>
            <Header backButton="/perfis" />
            <div className="chat">
                <ChatRow
                    name="Athena"
                    message="Oii"
                    timestamp="40 secundos atras"
                    profilePic="https://avatars3.githubusercontent.com/u/23267293?s=460&u=cb2237120aba2f1292658bd815effe0f0cb304a3&v=4"
                />
                <ChatRow
                    name="Athena"
                    message="dfsdfsdfsdfsd"
                    timestamp="40 secundos atras"
                    profilePic="https://avatars3.githubusercontent.com/u/23267293?s=460&u=cb2237120aba2f1292658bd815effe0f0cb304a3&v=4"
                />
                <ChatRow
                    name="Athena"
                    message="Oisdfsdfsdfsi"
                    timestamp="40 secundos atras"
                    profilePic="https://avatars3.githubusercontent.com/u/23267293?s=460&u=cb2237120aba2f1292658bd815effe0f0cb304a3&v=4"
                />
                <ChatRow
                    name="Athena"
                    message="sfsdfsdfsdfsdfsd"
                    timestamp="40 secundos atras"
                    profilePic="https://avatars3.githubusercontent.com/u/23267293?s=460&u=cb2237120aba2f1292658bd815effe0f0cb304a3&v=4"
                />
            </div>
        </React.Fragment>

    )
}

export default Chat
