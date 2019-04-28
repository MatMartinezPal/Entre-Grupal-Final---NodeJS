let socket = io()

var path = window.location.pathname;
var page = path.split("/").pop();

if (page == "chat"){
    const chatForm = document.getElementById("chatForm")
    const mensajeEnviar = document.getElementById("mensajeEnviar")
    const nombreEstudiante = document.getElementById("nombreEst").value
    const chatArea = document.getElementById("chatArea")
    
    chatForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    let mensaje = `<b>${nombreEstudiante}: </b>${mensajeEnviar.value}`
    socket.emit("mensaje",mensaje)
    mensajeEnviar.value = ""
    })

    socket.on("mensaje", (mensaje) =>{
        chatArea.innerHTML = chatArea.innerHTML + mensaje + "<br>"
    })
}
else if (page == "administrarCursos" || page == "cerrarCurso"){
    let botones_cerrar = document.getElementsByClassName("boton_cerrar")
    for (elementoActual of botones_cerrar){
        elementoActual.addEventListener("click", (e) =>{
            socket.emit("cursoCerrado", `Curso: ${e.target.value} -- CERRADO`)
        })
    }
}

if (page != "index" && page != "verCursosInter" && page != "verMasInter" && page != "registro"){
    socket.on("cursoCerrado",(mensaje) =>{
        alert(mensaje)
    })
}












