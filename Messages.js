import React, {useState} from 'react'
import{ View, Text } from 'react-native'
import useChannel from './src/hooks/useChannel'


const Messages = (props)=>{
  const messages = useChannel('room:lobby', (state, {event, payload})=>{
    const { name, message } = payload
    state.push({name, message})
    return state
  }, [])


  return(
    <View>
      <Text>Messages</Text>
      <View>
        {messages.map((obj)=>{
          return(
            <View>
              <Text>{obj.name}: {obj.message}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
  
}

export default Messages
