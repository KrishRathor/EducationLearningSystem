import React, { useCallback, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useSocket } from '../context/SocketProvider';

const LiveVideo = () => {

    const socket = useSocket();

    const [remoteSocketId, setRemoteSocketId] = useState(null);
    const [myStream, setMyStream] = useState()

    const handleUserJoined = useCallback(({email, id}) => {
        console.log(`Email ${email} joined room`);
        setRemoteSocketId(id);
    }, [])

    const handleCallUser = useCallback( async () => {

        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });

        setMyStream(stream);

    }, [])

    useEffect(() => {

        socket.on('user:joined', handleUserJoined);

        return () => {
            socket.off('user:joined', handleUserJoined);
        }

    }, [socket, handleUserJoined])

    return (
        <div>
            <h1>Live video stream</h1>
            <h4>{remoteSocketId ? 'Connected' : 'No one in room'}
            </h4>
            {
                remoteSocketId && <button onClick={handleCallUser}>Call</button>
            }

            {
                myStream && <ReactPlayer
                    playing
                    muted
                    height='100px'
                    width='100px'
                    url={myStream}
                />
            }

        </div>
    )
}

export default LiveVideo;
