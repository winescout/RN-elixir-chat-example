import React, {useState} from 'react'
import{ 
  Button,
  View, 
  Text 
} from 'react-native'
import useChannel from './src/hooks/useChannel'
import{ observer } from 'mobx-react'
import MessageStore from './src/stores/MessageStore'

const Messages = observer((props)=>{
  const messages = useChannel('room:lobby', (state, {event, payload})=>{
    switch(event){
      case 'shout':
        MessageStore.addMessage(payload)
        
    }
    return state
  }, [])

  const { store } = props


  return(
    <View>
      <Text>Messages</Text>
      <Button
        title="Shout"
      />
      <View>
        {store.messages.map((obj)=>{
          return(
            <View>
              <Text>{obj.name}: {obj.message}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
  
})

export default Messages
