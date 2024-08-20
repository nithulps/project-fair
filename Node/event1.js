const events=require('events')
const {EventEmitter}=require('stream')


const eventEmitter = new events.EventEmitter()
eventEmitter.on("onDisplay",()=>{
    console.log("event happend")
})


eventEmitter.emit("onDisplay")