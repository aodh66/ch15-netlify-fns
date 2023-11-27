const messageNode = document.getElementById('message')

const render = (message = "", node = messageNode) => {
    messageNode.textContent = message
}

const getData = async () => {
    try {
        const response = await fetch('/.netlify/functions/hello-world')
        if(!response.ok) throw response
        const data = await response.json()
        render(data.message)
    } catch(err) {

    }
}

// render('Hello')
getData()
