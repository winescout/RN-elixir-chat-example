import React, {useState} from 'react'
import{ 
  Button,
  View, 
  Text 
} from 'react-native'
import useChannel from './src/hooks/useChannel'


const Messages = (props)=>{
  const messages = useChannel('room:lobby', (state, {event, payload})=>{
    const { name, message } = payload
    switch(event){
      case 'shout':
        state.push({name, message})
    }
    console.log("THE PAYLOAD", state)
    return state
  }, [])


  return(
    <View>
      <Text>Messages</Text>
      <Button
        title="Shout"
      />
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
