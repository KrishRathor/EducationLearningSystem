import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSocket } from '../context/SocketProvider';

const LobbyLiveVideo = () => {

    const [email, setEmail] = useState('');
    const [room, setRoom] = useState('');

    const socket = useSocket();
    const navigate = useNavigate();

    const handleSubmitForm = useCallback((e) => {

        e.preventDefault();
        socket.emit('room:join', {email, room})

    }, [email, room, socket])

    const handleJoinRoom = useCallback((data) => {
        const { email, room } = data;
        navigate(`/room/${room}`)
    }, [navigate])

    useEffect(() => {

        socket.on('room:join', handleJoinRoom);

        return () => {
            socket.off('room:join', handleJoinRoom  );
        }

    }, [socket, handleJoinRoom])

    return (
        <div>
            <h1>Lobby</h1>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor='email'>Email Address</label>
                <input onChange={(e)=>{setEmail(e.target.value)}} type="email" id='email' />
                <br />
                <label htmlFor='room'>Room</label>
                <input onChange={(e)=>{setRoom(e.target.value)}}  type="text" id='room' />
                <br />
                <button type="submit">Join</button>
            </form>
        </div>
    )
}

export default LobbyLiveVideo
