import { useState } from "react"
import SocketHeader from "./SocketHeader"
import SocketSendBody from "./SocketSendBody"
import SocketReceiveBody from "./SocketReceiveBody"
import ButtonOptions from "./ButtonOptions"

function SocketLayout(props) {
    const { className } = props

    const [isSendingMessage, setIsSendingMessage] = useState(false)
    const [isReceivingMessage, setIsReceivingMessage] = useState(false)

    return <>
        <div className={className}>
            <SocketHeader />
            <div className="h-4/5 justify-self-center text-center w-full">
                { isSendingMessage ? <SocketSendBody className="h-full flex gap-4 justify-center items-center" /> : "" }
                { isReceivingMessage ? <SocketReceiveBody className="h-full flex gap-4 justify-center items-center" /> : ""}
                { !isReceivingMessage && !isSendingMessage ? <ButtonOptions setIsReceivingMessage={setIsReceivingMessage} setIsSendingMessage={setIsSendingMessage} /> : "" }
            </div>
        </div>
    </>
}

export default SocketLayout