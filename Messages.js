import React, {useState} from 'react'
import{ 
  Button,
  View, 
  Text 
} from 'react-native'
import{ observer } from 'mobx-react'
import useChannel from './src/hooks/useChannel'

const Messages = observer((props)=>{
  const { store } = props

  useChannel('room:lobby', store, [])

  const handlePress = ()=> {
    store.addMessage("Jane", "bbbbfaadfa")
  }

  return(
    <View style={{marginTop: 100}}>
      <Text>Messages</Text>
      <Button
        title="Shout"
        onPress={handlePress}
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
