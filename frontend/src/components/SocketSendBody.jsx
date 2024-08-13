import { useEffect, useState } from "react"
import { io } from "socket.io-client"
const socket = io.connect("http://localhost:3002")

function SocketSendBody(props) {

    const { className } = props
    const sendMesage = () => {
        socket.emit("send_message", { message: sentMessage })
    }

    const [sentMessage, setSentMessage] = useState("")

    return <div className={className}>
            <div className="w-1/3 h-2/3 border border-2 border-black">
                <h1 className="h-1/5 border-b-2 border-b-black my-auto text-3xl">SEND A MESSAGE</h1>
                <div className="h-4/5 flex flex-col gap-4 items-center justify-center">
                    <textarea placeholder="Message..." rows={10} cols={40} className="p-1" value={sentMessage} onChange={(e) => {
                        setSentMessage(e.target.value)
                    }}></textarea>
                    <button onClick={sendMesage} className="rounded-lg p-2 px-5 bg-blue-200">Submit</button>
                </div>
            </div>
        </div>
}

export default SocketSendBody