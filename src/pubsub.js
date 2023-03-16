import PubNub from 'pubnub';
// import { PubnubConfig } from './pubnub.config.json'

//new version of pubnub requires a unique user id generated here to avoid random id's being created on each message: https://www.uuidgenerator.net/
//hid the secretKey in a .env file
const pubnub = new PubNub({
    publishKey: "pub-c-42fbbd04-286d-4118-ab8d-3b127618ef31",
    subscribeKey: "sub-c-681fb273-fd72-46ab-990d-1006f19a0386",
    secretKey: "REACT_APP_SECRET_KEY",
    uuid: "b759cb9a-8088-4c3b-890f-8484d0a2e887"
})
//three methods allows us to work with pubsub, 1. subscribe to channels, 2. addlistener listen to messages on channels, 3. publish - allows to send to channels

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

pubnub.subscribe({ channels: [MESSAGE_CHANNEL]});

pubnub.addListener({
    message: (messageObject) => {
        console.log('messageObject', messageObject)
    }
})

setTimeout(() => {
    pubnub.publish({
        message: 'foo', 
        channel: MESSAGE_CHANNEL
    });
}, 1000)

