import socketio from 'socket.io-client'

const socket = socketio('http://192.168.2.3:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction) {
    socket.on('newDev', subscribeFunction);
}

/**
 * @param props :{latitude, longitude, techs}
 */
function connectSocket(props){
    let { latitude, longitude, techs } = props;

    socket.io.opts.query = {
        latitude, 
        longitude, 
        techs
    }

    socket.connect();

    /*socket.on('message', text => {
        console.log(text);
    })*/
}

function disconnectSocket(){
    if(socket.connected) socket.disconnected();
}

export {
    connectSocket,
    disconnectSocket,
    subscribeToNewDevs
};