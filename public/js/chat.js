let socket = io()

const chatForm = document.getElementById("chatForm")
const mensajeEnviar = document.getElementById("mensajeEnviar")
const nombreEstudiante = document.getElementById("nombreEst").value
const chatArea = document.getElementById("chatArea")

socket.on("mensaje", (mensaje) =>{
    chatArea.innerHTML = chatArea.innerHTML + mensaje + "<br>"
})


chatForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    let mensaje = `<b>${nombreEstudiante}: </b>${mensajeEnviar.value}`
    socket.emit("mensaje",mensaje)
    mensajeEnviar.value = ""
})


