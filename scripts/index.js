const messageNode = document.getElementById('message')

const render = (message = "", node = messageNode) => {
    messageNode.textContent = message
}

render('Hello')