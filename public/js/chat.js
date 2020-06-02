const socket = io()

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const message = e.target.elements.message.value
    socket.emit('inputMessage', message)
})

socket.on('outputMessage', (message) => {
    console.log(message)
})