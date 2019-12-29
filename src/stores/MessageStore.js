import { observable } from 'mobx'

class MessageStore{
  @observable messages = []

  constructor(){
    this.channel = null
  }

  onMessage = (event, payload) => {
    switch(event){
      case 'shout':
        console.log("PAYLOAD", payload)
        this.messages.push(payload)
    }
  }

  leaveChannel = () => {
    this.channel.leave()
  }

  addMessage = (name, message)=>{
    console.log("ADDING@@@@@")
    this.channel.push("shout", {name, message})
  }
}

export default new MessageStore()
