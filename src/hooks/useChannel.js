import React, { useContext, useReducer, useEffect } from 'react'
import SocketContext from '../contexts/SocketContext'

const useChannel = (channelTopic, handler, initialState) => {
  const socket = useContext(SocketContext)
  useEffect(() => {
    handler.channel = socket.channel(channelTopic, { client: 'browser' })

    handler.channel.onMessage = (event, payload) => {
      handler.onMessage(event, payload)
      return payload
    }

    handler.channel.join()
      .receive("ok", ({messages})=> console.log("JOINED", messages))
      .receive("error", ({reason})=> console.error("ERROR", reason))

    return ()=>{
      handler.leaveChannel()
    }
  }, [channelTopic])
}

export default useChannel
