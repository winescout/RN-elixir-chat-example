import { autorun, observable } from 'mobx'

class MessageStore{
  @observable messages = []

  constructor(){
    autorun(()=> console.log(this.messages))
  }

  addMessage(message){
    this.messages.push(message)
  }
}

export default new MessageStore()
