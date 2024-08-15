import { useEffect, useState } from "react"
import { io } from "socket.io-client"
const socket = io("http://localhost:5050")

function SocketReceiveBody(props) {

    const { className } = props

    const [latestMessage, setLatestMessage] = useState("")

    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log(data)
            setLatestMessage(data.message)
        })
    }, [socket])

    return <div className={className}>
            <div className="w-1/3 h-2/3 border border-2 border-black">
                <h1 className="h-1/5 border-b-2 border-b-black my-auto text-3xl">RECEIVE A MESSAGE</h1>
                <div className="h-4/5 flex flex-col items-center justify-center text-wrap">
                    <h1 className="text-2xl">{latestMessage}</h1>
                </div>
            </div>
        </div>
}

export default SocketReceiveBody