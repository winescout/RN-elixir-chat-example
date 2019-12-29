import React, {useEffect} from 'react'
import { Socket } from 'phoenix'
import SocketContext from '../contexts/SocketContext'

const SocketProvider = ({socketUrl, options, children}) => {
  const socket = new Socket(socketUrl, { params: options })
  useEffect(()=> { socket.connect() }, [options, socketUrl])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}

SocketProvider.defaultProps = {
  options: {}
}

export default SocketProvider 
