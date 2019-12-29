import React, {useEffect} from 'react'
import { Socket } from 'phoenix'
import SocketContext from '../contexts/SocketContext'

const ChannelProvider = ({socketUrl, channelName, options, children}) => {
  const socket = new Socket(socketUrl, { params: options })
  useEffect(()=> { socket.connect() }, [channelName, options, socketUrl])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}

ChannelProvider.defaultProps = {
  options: {}
}

export default ChannelProvider 
