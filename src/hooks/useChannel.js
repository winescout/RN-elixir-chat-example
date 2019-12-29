import React, { useContext, useReducer, useEffect } from 'react'
import SocketContext from '../contexts/SocketContext'

const useChannel = (channelTopic, reducer, initialState) => {
  const socket = useContext(SocketContext)
  const [ state, dispatch ] = useReducer(reducer, initialState)
  useEffect(() => {
    const channel = socket.channel(channelTopic, { client: 'browser' })

    channel.onMessage = (event, payload) => {
      dispatch({ event, payload })
      return payload
    }

    channel.join()
      .receive("ok", ({messages})=> console.log("JOINED", messages))
      .receive("error", ({reason})=> console.error("ERROR", reason))

    return ()=>{
      channel.leave()
    }
  }, [channelTopic])


  return state
}

export default useChannel
