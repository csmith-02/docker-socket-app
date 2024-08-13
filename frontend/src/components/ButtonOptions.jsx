function ButtonOptions(props) {

    const { setIsReceivingMessage, setIsSendingMessage } = props

    return <div className="flex gap-4 justify-center">
        <input type="button" value="Send a Message" className="p-3 rounded-lg bg-blue-200" onClick={(e) => {
            setIsSendingMessage(true)
        }}/>
        <input type="button" value="Receive a Message" className="p-3 rounded-lg bg-blue-200" onClick={(e) => {
            setIsReceivingMessage(true)
        }}/>
    </div>
}

export default ButtonOptions