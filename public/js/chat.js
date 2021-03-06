const socket = io()

socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const message = e.target.elements.message.value
    socket.emit('inputMessage', message, (error) => {
        if(error) {
            return console.log(error)
        }
    })
})

document.querySelector('#send-location').addEventListener('click', () => {
    if(!navigator.geolocation) {
        return alert('Update your browser!')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const location = {
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        }
        
        socket.emit('location', location, (acknowledgement) => {
            console.log(acknowledgement)
        })
    })
})