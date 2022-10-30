const notesContainer = document.querySelector(".notes-container")
const createNewNoteBtn = document.querySelector(".create-new-note")

createNewNoteBtn.onclick = () => {
  // criar a nota no container de notas
  const newNote = document.createElement("div")
  newNote.classList.add("new-note")
  notesContainer.append(newNote)

  // mostrar uma janela
  const newWindow = document.createElement("div")
  newWindow.classList.add("note-window")

  const body = document.body
  body.append(newWindow)
  // body.classList.add("window-active")

  // um área para colocar o título
  const title = document.createElement("input")
  title.classList.add("title-note")
  title.placeholder = "Title"
  title.style.color = "#000"

  // um área para colocar o texto
  const textArea = document.createElement("textarea")
  textArea.classList.add("text-area")
  textArea.placeholder = "Create a note..."

  // botão para enviar
  const sendBtn = document.createElement("button")
  sendBtn.classList.add("send-button")
  sendBtn.textContent = "Send"

  // botão para cancelar
  const cancelBtn = document.createElement("button")
  cancelBtn.classList.add("cancel-button")
  cancelBtn.textContent = "Cancel"

  // colocar o título, texto, botão de enviar e de cancelar, dentro da janela
  newWindow.append(title, textArea, sendBtn, cancelBtn)

  // quando o botão de enviar for clicado, ele mandara desaparecer a janela para escrever a nota, e adicionará o texto e o titulo na nota que fica no container de notas
  sendBtn.onclick = () => {
    // Se nada estiver escrito no título e na área de texto, a anotação vai ser removida do container
    if (title.value.length == 0 && textArea.value.length == 0) {
      title.parentNode.removeChild(title)
      textArea.parentNode.removeChild(textArea)
      sendBtn.parentNode.removeChild(sendBtn)
      cancelBtn.parentNode.removeChild(cancelBtn)
      newWindow.parentNode.removeChild(newWindow)
      newNote.parentNode.removeChild(newNote)
    } else {
      newWindow.style.display = "none"
      newNote.innerHTML = `
      <h4>${title.value}</h4>
      <p>${textArea.value}</p>`
    }
  }

  cancelBtn.onclick = () => {
    title.parentNode.removeChild(title)
    textArea.parentNode.removeChild(textArea)
    sendBtn.parentNode.removeChild(sendBtn)
    cancelBtn.parentNode.removeChild(cancelBtn)
    newWindow.parentNode.removeChild(newWindow)
    newNote.parentNode.removeChild(newNote)
  }
}
