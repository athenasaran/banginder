
import React, { useState } from 'react'
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar';
import Header from "../../components/Header/Header";



function ChatScreen() {

    const [input, setInput] = useState('')

    const [messages, setMessages] = useState([{
        name: "Athena",
        image: '...',
        message: 'oii'
    },
    {
        message: 'oii'
    }

    ])


    const handleSubmit = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');
    }

    return (
        <React.Fragment>

        <Header backButton="/chat" />
        <div className="chatScreen">
            <p className="match">YOU MATCHED WITH JPSY ON 04/12/2020</p>
            {messages.map(message =>
                message.name ? (
                    <div className="chatMessage">
                        <Avatar className="avatar"
                            alt={message.name}
                            src={message.image} />
                        <p className="message">{message.message}</p>
                    </div>
                ) : (
                        <div className="chatMessage">
                            <p className="messageUser">{message.message}</p>
                        </div>
                    ))
            }

            <form className="enviarMensagens">
                <input value={input} onChange={e => setInput(e.target.value)} className="texto" type="text" placeholder="Digite sua mensagem" />
                <button onClick={handleSubmit} type="submit" className="button">ENVIAR</button>
            </form>

        </div >
        </React.Fragment>

    )
}

export default ChatScreen
